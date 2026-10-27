/**
 * AG PHOTOGRAPHY — CORE INTERACTIVE JAVASCRIPT
 * Cape Town, South Africa | Boutique Photography Studio
 * WhatsApp: 0612069726 (+27612069726)
 * Instagram: @iam_adeleyegold
 * Facebook: adeleyeGoldPhotography
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. DATA: Authentic Shoot Portfolio Items (14 Real Client Photographs)
  // ==========================================================================
  const portfolioData = [
    {
      id: 'maternity-sunset',
      category: 'maternity',
      title: 'Serene Sunset Ocean Maternity',
      location: 'Camps Bay & Atlantic Seaboard Coast',
      image: 'assets/images/maternity_beach_sunset.jpg',
      badge: 'Maternity',
      description: 'An ethereal coastal maternity portrait in flowing white silk on the pristine sands of Cape Town at golden sunset hour.'
    },
    {
      id: 'fashion-red',
      category: 'lifestyle',
      title: 'High-Fashion Crimson Editorial',
      location: 'AG Photography Cape Town Studio',
      image: 'assets/images/fashion_editorial_red.jpg',
      badge: 'Fashion Editorial',
      description: 'Striking high-fashion editorial session showcasing structured red tailoring, bold sunglasses, and sequined evening boots.'
    },
    {
      id: 'wedding-ocean',
      category: 'weddings',
      title: 'Oceanfront Glass Pavilion Couple',
      location: 'Atlantic Seaboard / Camps Bay Coastline',
      image: 'assets/images/wedding_couple_oceanview.jpg',
      badge: 'Luxury Wedding',
      description: 'A striking luxury wedding portrait overlooking the deep blue Atlantic ocean with the bride in fine bridal satin and the groom in a classic ivory tuxedo.'
    },
    {
      id: 'glamour-gold',
      category: 'lifestyle',
      title: 'Golden Elegance & Milestone Gala',
      location: 'Cape Town Studio & Private Estate',
      image: 'assets/images/glamour_gold_gown.jpg',
      badge: 'Glamour & Gala',
      description: 'Sophisticated milestone celebration portrait featuring an exquisite gold embellished evening gown and vintage studio ambient warmth.'
    },
    {
      id: 'luxury-evening',
      category: 'lifestyle',
      title: 'Radiant Backless Gown & Evening Glamour',
      location: 'Luxury Cape Town Penthouse Suite',
      image: 'assets/images/luxury_evening_portrait.jpg',
      badge: 'Evening Glamour',
      description: 'Intimate fine-art lifestyle portrait in an open-back crimson gown against polished marble and soft warm chandelier illumination.'
    },
    {
      id: 'graduation-honors',
      category: 'lifestyle',
      title: 'Academic Triumph & Graduation Milestone',
      location: 'Cape Peninsula University (CPUT)',
      image: 'assets/images/graduation_portrait.jpg',
      badge: 'Graduation',
      description: 'Inspiring graduation portrait celebrating academic achievement and dignity in classic graduation gown and honors sash.'
    },
    {
      id: 'maternity-chiffon',
      category: 'maternity',
      title: 'Maternal Grace in Golden Chiffon',
      location: 'Cape Town Botanical & Outdoor Garden',
      image: 'assets/images/maternity_shoot.jpg',
      badge: 'Maternity',
      description: 'An ethereal outdoor maternity portrait celebrating motherhood with flowing yellow chiffon and natural tree canopy lighting in Cape Town.'
    },
    {
      id: 'wedding-gazebo',
      category: 'weddings',
      title: 'Mountain-View Garden Gazebo Ceremony',
      location: 'Twelve Apostles & Table Mountain Foot',
      image: 'assets/images/wedding_gazebo_mountains.jpg',
      badge: 'Wedding Ceremony',
      description: 'A romantic outdoor wedding ceremony set under a pristine white gazebo against the majestic backdrop of Cape Town mountain ridges.'
    },
    {
      id: 'corporate-summit',
      category: 'corporate',
      title: 'Executive Energy & Leadership Summit',
      location: 'Cape Town International Convention Centre (CTICC)',
      image: 'assets/images/corporate_panel_summit.jpg',
      badge: 'Corporate & Summit',
      description: 'High-level conference and panel photography capturing distinguished executive leaders and keynote speakers with dynamic stage lighting.'
    },
    {
      id: 'baby-kids',
      category: 'baby',
      title: 'Little Sheriffs Joyful Studio Shoot',
      location: 'AG Photography Cape Town Studio',
      image: 'assets/images/baby_kids_shoot.jpg',
      badge: 'Baby & Kids',
      description: 'Joyful milestone studio session featuring playful brother and sister dressed in denim, cowboy hats, and cool sunglasses.'
    },
    {
      id: 'corporate-expo',
      category: 'corporate',
      title: 'VIP Dignitaries & International Expo',
      location: 'Mining Indaba & Cape Town Expo Hall',
      image: 'assets/images/corporate_vip_expo.jpg',
      badge: 'VIP & Commercial',
      description: 'Candid executive networking and high-profile diplomatic greetings between international industry leaders and delegates.'
    },
    {
      id: 'lifestyle-coastal',
      category: 'lifestyle',
      title: 'Coastal Links & Ocean View Session',
      location: 'Atlantic Beach Links / Table Bay Horizon',
      image: 'assets/images/lifestyle_coastal.jpg',
      badge: 'Lifestyle & Sports',
      description: 'Sophisticated golf and coastal outdoor lifestyle capture with the iconic Atlantic ocean waves and Cape Town hills in the background.'
    },
    {
      id: 'wedding-details',
      category: 'weddings',
      title: 'Fine-Art Bridal Jewelry & Crystal Heels',
      location: 'Luxury Cape Town Bridal Suite',
      image: 'assets/images/wedding_details.jpg',
      badge: 'Bridal Details',
      description: 'Intimate macro photography showcasing sparkling diamond drop earrings and satin bridal stilettos in soft golden ambient glow.'
    },
    {
      id: 'corporate-winelands',
      category: 'corporate',
      title: 'Gentlemen of Distinction at the Winelands',
      location: 'Franschhoek & Stellenbosch Wine Estate',
      image: 'assets/images/corporate_event.jpg',
      badge: 'Corporate & Events',
      description: 'Distinguished professionals enjoying fine South African hospitality and networking against the breathtaking Cape Winelands valley.'
    }
  ];

  // ==========================================================================
  // 2. CINEMATIC HOMEPAGE HERO SLIDESHOW
  // ==========================================================================
  const heroSection = document.getElementById('home');
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroIndicators = document.querySelectorAll('.hero-indicator');
  const heroPrevBtn = document.getElementById('heroPrevBtn');
  const heroNextBtn = document.getElementById('heroNextBtn');

  let currentSlide = 0;
  let slideTimer = null;
  const slideDuration = 5000; // 5 seconds
  const totalSlides = heroSlides.length;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function goToSlide(index) {
    if (totalSlides === 0) return;
    
    // Normalize index
    currentSlide = (index + totalSlides) % totalSlides;

    // Update slides
    heroSlides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.add('active');
        slide.setAttribute('aria-hidden', 'false');
      } else {
        slide.classList.remove('active');
        slide.setAttribute('aria-hidden', 'true');
      }
    });

    // Update indicators
    heroIndicators.forEach((ind, i) => {
      const isActive = i === currentSlide;
      ind.classList.toggle('active', isActive);
      ind.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startSlideshow() {
    if (prefersReducedMotion) return;
    stopSlideshow();
    slideTimer = setInterval(nextSlide, slideDuration);
  }

  function stopSlideshow() {
    if (slideTimer) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  }

  // Prev / Next Buttons
  if (heroPrevBtn) {
    heroPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevSlide();
      startSlideshow();
    });
  }

  if (heroNextBtn) {
    heroNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextSlide();
      startSlideshow();
    });
  }

  // Indicator Buttons
  heroIndicators.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(idx);
      startSlideshow();
    });
  });

  // Desktop Hover Pause & Resume
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopSlideshow);
    heroSection.addEventListener('mouseleave', () => {
      if (!prefersReducedMotion) startSlideshow();
    });

    // Keyboard navigation (Left / Right arrow)
    heroSection.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        startSlideshow();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        startSlideshow();
      }
    });

    // Mobile Touch Swipe Navigation
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    heroSection.addEventListener('touchstart', (e) => {
      // Don't trigger swipe if tapping buttons or links
      if (e.target.closest('button, a, input, select, textarea')) return;
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
      if (e.target.closest('button, a, input, select, textarea')) return;
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipeGesture();
    }, { passive: true });

    function handleSwipeGesture() {
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Ensure horizontal swipe is dominant and exceeds 45px threshold
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
        if (diffX < 0) {
          nextSlide(); // Swipe left -> next
        } else {
          prevSlide(); // Swipe right -> prev
        }
        startSlideshow();
      }
    }
  }

  // Pause when browser tab is inactive/hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopSlideshow();
    } else {
      if (!prefersReducedMotion) startSlideshow();
    }
  });

  // Start hero slideshow
  startSlideshow();

  // ==========================================================================
  // 3. PORTFOLIO GALLERY RENDERING & FILTERING
  // ==========================================================================
  const galleryGrid = document.getElementById('galleryGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderGallery(items) {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    items.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.setAttribute('data-category', item.category);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View ${item.title}`);

      card.innerHTML = `
        <div class="gallery-thumb-wrap">
          <img src="${item.image}" alt="${item.title} by AG Photography" loading="lazy">
          <span class="gallery-card-badge">${item.badge}</span>
          <div class="gallery-card-overlay">
            <h3 class="gallery-card-title">${item.title}</h3>
            <div class="gallery-card-meta">
              <span>${item.location}</span>
            </div>
            <div class="gallery-view-btn">
              View Shoot &amp; Details <span>→</span>
            </div>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(item));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(item);
        }
      });

      galleryGrid.appendChild(card);
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        renderGallery(portfolioData);
      } else {
        const filtered = portfolioData.filter(item => item.category === filter);
        renderGallery(filtered);
      }
    });
  });

  // Initial gallery render
  renderGallery(portfolioData);

  // ==========================================================================
  // 4. FULLSCREEN LIGHTBOX MODAL
  // ==========================================================================
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxMeta = document.getElementById('lightboxMeta');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxBookBtn = document.getElementById('lightboxBookBtn');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(item) {
    if (!lightboxModal) return;
    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxMeta.innerHTML = `<span class="badge-location">${item.location}</span> • <span>Category: ${item.badge}</span>`;
    lightboxDesc.textContent = item.description;

    lightboxBookBtn.onclick = () => {
      closeLightbox();
      // Preselect session type if matching
      const shootTypeSelect = document.getElementById('shootType');
      if (shootTypeSelect) {
        if (item.category === 'maternity') shootTypeSelect.value = 'Maternity Photography';
        else if (item.category === 'weddings') shootTypeSelect.value = 'Wedding Photography';
        else if (item.category === 'corporate') shootTypeSelect.value = 'Corporate Photography';
        else if (item.category === 'baby') shootTypeSelect.value = 'Newborn Photography';
        else if (item.category === 'lifestyle') shootTypeSelect.value = 'Portrait Photography';
      }
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // ==========================================================================
  // 5. PHOTOGRAPHY BOOKING TERMS & CONDITIONS MODAL
  // ==========================================================================
  const termsModal = document.getElementById('termsModal');
  const openTermsLink = document.getElementById('openTermsLink');
  const footerTermsLink = document.getElementById('footerTermsLink');
  const footerBottomTermsLink = document.getElementById('footerBottomTermsLink');
  const termsCloseBtn = document.getElementById('termsCloseBtn');
  const acceptTermsBtn = document.getElementById('acceptTermsBtn');
  const termsAcceptedInput = document.getElementById('termsAccepted');

  function openTermsModal(e) {
    if (e) e.preventDefault();
    if (!termsModal) return;
    termsModal.classList.add('active');
    termsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeTermsModal() {
    if (!termsModal) return;
    termsModal.classList.remove('active');
    termsModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openTermsLink) openTermsLink.addEventListener('click', openTermsModal);
  if (footerTermsLink) footerTermsLink.addEventListener('click', openTermsModal);
  if (footerBottomTermsLink) footerBottomTermsLink.addEventListener('click', openTermsModal);
  if (termsCloseBtn) termsCloseBtn.addEventListener('click', closeTermsModal);

  if (acceptTermsBtn) {
    acceptTermsBtn.addEventListener('click', () => {
      if (termsAcceptedInput) {
        termsAcceptedInput.checked = true;
        const errTerms = document.getElementById('errTerms');
        if (errTerms) errTerms.classList.remove('visible');
      }
      closeTermsModal();
    });
  }

  if (termsModal) {
    termsModal.addEventListener('click', (e) => {
      if (e.target === termsModal) closeTermsModal();
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeTermsModal();
    }
  });

  // ==========================================================================
  // 6. PROFESSIONAL BOOKING FORM & N8N WEBHOOK INTEGRATION
  // ==========================================================================
  const bookingForm = document.getElementById('photographyBookingForm');
  const bookingSubmitBtn = document.getElementById('bookingSubmitBtn');
  const bookingFeedback = document.getElementById('bookingFeedback');
  const bookingDateInput = document.getElementById('bookingDate');
  const alternativeDateInput = document.getElementById('alternativeDate');

  const N8N_TEST_WEBHOOK_URL = 'https://lembe.app.n8n.cloud/webhook-test/fd08d366-4661-400e-a7e0-f2b3948b6a8f';
  const N8N_PROD_WEBHOOK_URL = 'https://lembe.app.n8n.cloud/webhook/fd08d366-4661-400e-a7e0-f2b3948b6a8f';
  const N8N_WEBHOOK_URL = N8N_TEST_WEBHOOK_URL;

  // Prevent past dates in date pickers
  if (bookingDateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minIso = tomorrow.toISOString().split('T')[0];
    bookingDateInput.min = minIso;
    bookingDateInput.value = minIso;

    if (alternativeDateInput) {
      alternativeDateInput.min = minIso;
    }
  }

  // Email validation helper
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Reset errors & feedback
      document.querySelectorAll('.field-error').forEach(el => el.classList.remove('visible'));
      bookingFeedback.style.display = 'none';
      bookingFeedback.className = 'booking-feedback';

      // Read form values
      const fullName = (document.getElementById('clientFullName')?.value || '').trim();
      const email = (document.getElementById('clientEmail')?.value || '').trim();
      const phone = (document.getElementById('clientPhone')?.value || '').trim();
      const contactMethod = document.getElementById('contactMethod')?.value || 'WhatsApp / Phone';
      const shootType = document.getElementById('shootType')?.value || '';
      const pkg = document.getElementById('bookingPackage')?.value || 'The Signature Experience';
      const bookingDate = document.getElementById('bookingDate')?.value || '';
      const bookingTime = document.getElementById('bookingTime')?.value || '';
      const alternativeDate = (document.getElementById('alternativeDate')?.value || '').trim();
      const numberOfPeople = parseInt(document.getElementById('numberOfPeople')?.value || '1', 10);
      const location = (document.getElementById('bookingLocation')?.value || '').trim();
      const message = (document.getElementById('bookingMessage')?.value || '').trim();
      const termsAccepted = document.getElementById('termsAccepted')?.checked || false;

      // Validation
      let hasError = false;

      if (!fullName) {
        document.getElementById('errFullName')?.classList.add('visible');
        hasError = true;
      }

      if (!email || !isValidEmail(email)) {
        document.getElementById('errEmail')?.classList.add('visible');
        hasError = true;
      }

      if (!phone) {
        document.getElementById('errPhone')?.classList.add('visible');
        hasError = true;
      }

      if (!shootType) {
        document.getElementById('errShootType')?.classList.add('visible');
        hasError = true;
      }

      if (!bookingDate) {
        document.getElementById('errDate')?.classList.add('visible');
        hasError = true;
      } else {
        const selectedDate = new Date(bookingDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          document.getElementById('errDate')?.classList.add('visible');
          hasError = true;
        }
      }

      if (!bookingTime) {
        document.getElementById('errTime')?.classList.add('visible');
        hasError = true;
      }

      if (!termsAccepted) {
        document.getElementById('errTerms')?.classList.add('visible');
        hasError = true;
      }

      if (hasError) {
        // Scroll to first error
        const firstError = document.querySelector('.field-error.visible');
        if (firstError) {
          firstError.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Build payload matching exact n8n specification
      const bookingPayload = {
        fullName: fullName,
        email: email,
        phone: phone,
        contactMethod: contactMethod,
        shootType: shootType,
        bookingDate: bookingDate,
        bookingTime: bookingTime,
        alternativeDate: alternativeDate ? alternativeDate : null,
        location: location ? location : 'Cape Town Studio / Scenic Venue',
        numberOfPeople: isNaN(numberOfPeople) || numberOfPeople < 1 ? 1 : numberOfPeople,
        package: pkg,
        message: message ? message : '',
        depositPercentage: 50,
        termsAccepted: true,
        submittedAt: new Date().toISOString()
      };

      // Set Loading State
      bookingSubmitBtn.disabled = true;
      const btnText = bookingSubmitBtn.querySelector('.btn-text');
      const btnSpinner = bookingSubmitBtn.querySelector('.btn-spinner');
      if (btnText) btnText.style.display = 'none';
      if (btnSpinner) btnSpinner.style.display = 'inline-block';

      try {
        let response;
        try {
          response = await fetch(N8N_TEST_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingPayload)
          });
          // If test webhook was not active (404), fall back to production webhook
          if (response.status === 404) {
            console.log('n8n test webhook not listening (404), trying production webhook...');
            response = await fetch(N8N_PROD_WEBHOOK_URL, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(bookingPayload)
            });
          }
        } catch (networkErr) {
          // If network / CORS blocked on test, try production endpoint as fallback
          try {
            response = await fetch(N8N_PROD_WEBHOOK_URL, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(bookingPayload)
            });
          } catch (e2) {
            throw networkErr;
          }
        }

        let responsePayload = null;
        let webhookMessage = '';
        if (response) {
          try {
            responsePayload = await response.json();
            if (responsePayload) {
              webhookMessage = responsePayload.message || responsePayload.msg || responsePayload.text || responsePayload.response || '';
            }
          } catch (jsonErr) {
            try {
              const textVal = await response.text();
              if (textVal && textVal.trim().length > 0 && textVal.trim().length < 500) {
                webhookMessage = textVal.trim();
              }
            } catch (txtErr) {}
          }
        }

        if (response && response.ok) {
          // Success Response directly from Webhook
          bookingFeedback.className = 'booking-feedback success';
          bookingFeedback.innerHTML = `
            <strong>Booking Request Sent Successfully</strong>
            <p style="margin-top: 8px;">
              ${webhookMessage ? webhookMessage : 'Thank you for choosing us to capture your precious moments! Your booking request has been received. We will contact you to confirm availability and explain the next steps.'}
            </p>
          `;
          bookingFeedback.style.display = 'block';
          bookingFeedback.scrollIntoView({ behavior: 'smooth', block: 'center' });

          // Reset form on success
          bookingForm.reset();

          // Reset date to tomorrow
          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          if (bookingDateInput) bookingDateInput.value = tomorrow.toISOString().split('T')[0];

        } else {
          const status = response ? response.status : 'Unknown';
          const errMsg = webhookMessage ? ` (${webhookMessage})` : '';
          throw new Error(`Webhook returned status ${status}${errMsg}`);
        }

      } catch (err) {
        console.warn('Booking submission error:', err);

        // Friendly Error Response (Preserve client input)
        bookingFeedback.className = 'booking-feedback error';
        bookingFeedback.innerHTML = `
          <strong>Submission Notice</strong>
          <p style="margin-top: 8px;">
            ${err.message.includes('Webhook returned status') ? err.message : 'We could not submit your booking request at this time. Please try again or contact us directly.'}
          </p>
          <div style="margin-top: 14px; display: flex; gap: 10px; flex-wrap: wrap;">
            <a href="https://wa.me/27612069726?text=${encodeURIComponent('Hi AG Photography! I tried to submit a booking inquiry on your website for ' + shootType + ' on ' + bookingDate + '.')}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-direct" style="padding: 10px 18px; font-size: 0.88rem;">
              Chat on WhatsApp
            </a>
            <a href="tel:+27612069726" class="btn-phone-call" style="padding: 10px 18px; font-size: 0.88rem;">
              Call: 061 206 9726
            </a>
          </div>
        `;
        bookingFeedback.style.display = 'block';
        bookingFeedback.scrollIntoView({ behavior: 'smooth', block: 'center' });

      } finally {
        // Reset button state
        bookingSubmitBtn.disabled = false;
        if (btnText) btnText.style.display = 'inline-block';
        if (btnSpinner) btnSpinner.style.display = 'none';
      }
    });
  }

  // ==========================================================================
  // 7. FLOATING WHATSAPP CHAT WIDGET
  // ==========================================================================
  const floatingWaBtn = document.getElementById('floatingWaBtn');
  const waChatPopup = document.getElementById('waChatPopup');
  const waClosePopup = document.getElementById('waClosePopup');

  if (floatingWaBtn && waChatPopup) {
    floatingWaBtn.addEventListener('click', () => {
      waChatPopup.classList.toggle('active');
    });
  }

  if (waClosePopup && waChatPopup) {
    waClosePopup.addEventListener('click', (e) => {
      e.stopPropagation();
      waChatPopup.classList.remove('active');
    });
  }

  window.sendQuickWhatsApp = function(topic) {
    const msg = `Hi AG Photography! I would like to inquire about a ${topic} in Cape Town.`;
    const waUrl = `https://wa.me/27612069726?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  // ==========================================================================
  // 8. MOBILE NAVIGATION & SCROLL HEADER
  // ==========================================================================
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  });

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = '#0d0e11';
        navLinks.style.padding = '24px';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.8)';
      }
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      });
    });
  }
});
