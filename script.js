/**
 * PARADISE SPA - Interactive JavaScript Logic
 * Handles Sticky Navigation, Mobile Menu, Gallery Lightbox & Filter,
 * Testimonial Slider, Animated Counters, Scroll Reveal, & WhatsApp Integration.
 */

document.addEventListener('DOMContentLoaded', () => {
  
  /* ==========================================
     1. Sticky Header & Active Nav Link Highlight
     ========================================== */
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();

  // ScrollSpy for Active Navigation Link
  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);

  /* ==========================================
     2. Mobile Navigation Drawer
     ========================================== */
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileDrawer.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ==========================================
     3. Smooth Scroll for Anchor Links
     ========================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ==========================================
     4. Gallery Filter System
     ========================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active filter button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /* ==========================================
     5. Lightbox Modal System
     ========================================== */
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;
  let visibleGalleryItems = [];

  function updateVisibleItems() {
    visibleGalleryItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
  }

  function openLightbox(index) {
    updateVisibleItems();
    if (visibleGalleryItems.length === 0) return;
    
    currentGalleryIndex = index;
    const currentItem = visibleGalleryItems[currentGalleryIndex];
    const imgSrc = currentItem.getAttribute('data-src');
    const caption = currentItem.getAttribute('data-caption');

    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = caption;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  function showNextLightboxImage() {
    updateVisibleItems();
    currentGalleryIndex = (currentGalleryIndex + 1) % visibleGalleryItems.length;
    openLightbox(currentGalleryIndex);
  }

  function showPrevLightboxImage() {
    updateVisibleItems();
    currentGalleryIndex = (currentGalleryIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
    openLightbox(currentGalleryIndex);
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      updateVisibleItems();
      const indexInVisible = visibleGalleryItems.indexOf(item);
      openLightbox(indexInVisible !== -1 ? indexInVisible : 0);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNextLightboxImage);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevLightboxImage);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextLightboxImage();
    if (e.key === 'ArrowLeft') showPrevLightboxImage();
  });

  /* ==========================================
     6. Customer Reviews Slider / Carousel
     ========================================== */
  const reviewsTrack = document.getElementById('reviewsTrack');
  const reviewCards = document.querySelectorAll('.review-card');
  const prevReviewBtn = document.getElementById('prevReview');
  const nextReviewBtn = document.getElementById('nextReview');
  const sliderDotsContainer = document.getElementById('sliderDots');

  let currentSlide = 0;
  let autoSlideInterval;

  if (reviewCards.length > 0 && sliderDotsContainer) {
    // Generate Pagination Dots
    reviewCards.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      sliderDotsContainer.appendChild(dot);
    });

    const dots = sliderDotsContainer.querySelectorAll('.dot');

    function goToSlide(index) {
      currentSlide = index;
      if (currentSlide >= reviewCards.length) currentSlide = 0;
      if (currentSlide < 0) currentSlide = reviewCards.length - 1;

      reviewsTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    if (nextReviewBtn) nextReviewBtn.addEventListener('click', nextSlide);
    if (prevReviewBtn) prevReviewBtn.addEventListener('click', prevSlide);

    // Auto Play Slider
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 6000);
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    startAutoSlide();

    const sliderWrap = document.querySelector('.reviews-slider-wrap');
    if (sliderWrap) {
      sliderWrap.addEventListener('mouseenter', stopAutoSlide);
      sliderWrap.addEventListener('mouseleave', startAutoSlide);
    }
  }

  /* ==========================================
     7. Stat Counters Animation
     ========================================== */
  const counters = document.querySelectorAll('.counter');
  let animatedCounters = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const increment = target / 60;

      let count = 0;
      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count).toLocaleString() + '+';
          setTimeout(updateCount, 25);
        } else {
          counter.innerText = target.toLocaleString() + '+';
        }
      };

      updateCount();
    });
  }

  /* ==========================================
     8. Scroll Reveal Observer
     ========================================== */
  const fadeUpElements = document.querySelectorAll('.fade-up');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Trigger counter animation when hero section is revealed
        if (entry.target.classList.contains('hero-content') && !animatedCounters) {
          runCounters();
          animatedCounters = true;
        }

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  fadeUpElements.forEach(el => revealObserver.observe(el));

  /* ==========================================
     9. Interactive Contact Form Submission
     ========================================== */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('serviceSelect').value;
      const preferredDate = document.getElementById('preferredDate').value;
      const message = document.getElementById('message').value.trim();

      // Format WhatsApp Pre-filled Message
      let waMessage = `Hello Paradise Spa,%0A%0A*New Booking Inquiry*%0A`;
      waMessage += `*Name:* ${encodeURIComponent(name)}%0A`;
      waMessage += `*Phone:* ${encodeURIComponent(phone)}%0A`;
      waMessage += `*Service:* ${encodeURIComponent(service)}%0A`;
      if (preferredDate) waMessage += `*Preferred Date/Time:* ${encodeURIComponent(preferredDate)}%0A`;
      if (message) waMessage += `*Notes:* ${encodeURIComponent(message)}%0A`;

      const targetWaUrl = `https://wa.me/916366377888?text=${waMessage}`;

      // Open WhatsApp with populated booking details
      window.open(targetWaUrl, '_blank');

      // Reset form
      contactForm.reset();
    });
  }

});
