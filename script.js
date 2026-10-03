/**
 * MD AL AMIN (ALAMININOVIX) PORTFOLIO — CORE SCRIPT
 * Handles: Theme Toggle, Project Modals, Scope Calculator, Category Filters,
 * Live Dhaka Clock, Clipboard Actions, and Form Handling.
 */

// -----------------------------------------------------------------------------
// 1. PROJECT CASE STUDY DATABASE
// -----------------------------------------------------------------------------
const PROJECTS_DATA = {
  'datarion': {
    title: 'Futuristic Tech Brand Identity | AI & SaaS Logo Design',
    subtitle: 'Brand identity, machine learning symbolics, and visual operating system for Datarion AI Solutions.',
    category: 'Brand Identity',
    year: '2025',
    client: 'Datarion AI Solutions (Silicon Valley, CA)',
    deliverables: 'Brand Strategy, Generative Neural Mark, Dark Theme Tokens, Design System',
    industry: 'Machine Learning, Predictive Analytics & AI SaaS',
    duration: '4 Weeks',
    challenge: 'Datarion needed a bold, forward-looking visual identity that communicates high-speed machine learning intelligence and enterprise predictive analytics without falling into generic cliches.',
    palette: [
      { hex: '#FF4D26', label: 'Datarion Kinetic Orange' },
      { hex: '#180705', label: 'Deep Obsidian Burgundy' },
      { hex: '#2D100B', label: 'Dark Crimson Core' },
      { hex: '#FFFFFF', label: 'Pure Signal White' }
    ],
    outcome: 'Crafted a dynamic toroidal neural mark with fluid dimensional gradients, establishing an immediate high-trust brand presence across marketing and enterprise SaaS applications.',
    isBehance: true,
    behanceUrl: 'https://www.behance.net/gallery/236550753/Futuristic-Tech-Brand-Identity-AI-SaaS-Logo-Design',
    dribbbleUrl: 'https://www.behance.net/gallery/236550753/Futuristic-Tech-Brand-Identity-AI-SaaS-Logo-Design',
    imgUrl: 'images/datarion.jpg'
  },
  'xylen': {
    title: 'Xylen — AI SaaS Brand Identity & Visual Design System',
    subtitle: 'Comprehensive brand identity, 3D character architecture, and design system for Xylen.',
    category: 'Brand Identity',
    year: '2025',
    client: 'Xylen Solutions Inc. (San Francisco, CA)',
    deliverables: 'Visual Design System, 3D Mascot Character Architecture, Apple Watch & iOS App Icon System, Brand Bible',
    industry: 'Network Monitoring, Cloud AI & Smart Automation',
    duration: '4 Weeks',
    challenge: 'Unifying autonomous robotic AI capabilities with accessible consumer elegance across mobile apps, wearable interfaces, and enterprise cloud dashboards.',
    palette: [
      { hex: '#8B5CF6', label: 'Xylen Neon Violet' },
      { hex: '#C4B5FD', label: 'Soft Digital Lilac' },
      { hex: '#0D0B14', label: 'Deep Space Obsidian' },
      { hex: '#FFFFFF', label: 'Pure Tech White' }
    ],
    outcome: 'Built an iconic X-lettermark and comprehensive 3D visual language that earned 4.8★ app store recognition and rapid enterprise onboarding.',
    isBehance: true,
    behanceUrl: 'https://www.behance.net/gallery/241971859/AI-Tech-Branding-Futuristic-SaaS-Identity',
    dribbbleUrl: 'https://www.behance.net/gallery/241971859/AI-Tech-Branding-Futuristic-SaaS-Identity',
    imgUrl: 'images/xylen.jpg'
  },
  'flexentials': {
    title: 'Fintech Banking App - Logo & Brand Identity Design',
    subtitle: 'High-trust financial technology branding, iOS/Android mobile app icon system, and design tokens for Flexentials.',
    category: 'Brand Identity',
    year: '2025',
    client: 'Flexentials Financial Technologies (London / Dubai)',
    deliverables: 'Fintech Brandmark, Mobile Banking App UI Kit, Debit Card Mockups, Dynamic Security Badges',
    industry: 'Fintech, Digital Wealth Management & Mobile Banking',
    duration: '4 Weeks',
    challenge: 'Establishing banking-grade security and institutional trust while projecting effortless mobile fluidity for next-gen digital native investors.',
    palette: [
      { hex: '#1B7A82', label: 'Flexentials Deep Teal' },
      { hex: '#FF6B4A', label: 'Kinetic Coral Accent' },
      { hex: '#EBF5F3', label: 'Soft Mint Canvas' },
      { hex: '#0B1E21', label: 'Vault Dark' }
    ],
    outcome: 'Engineered an interlocking geometric F mark with financial horizon geometry, resulting in over 20,000 active app users and stellar trust ratings.',
    isBehance: true,
    behanceUrl: 'https://www.behance.net/gallery/252334861/Fintech-Banking-App-Logo-Brand-Identity-Design',
    dribbbleUrl: 'https://www.behance.net/gallery/252334861/Fintech-Banking-App-Logo-Brand-Identity-Design',
    imgUrl: 'images/flexentials.webp'
  },
  'valina-mart': {
    title: 'Modern E-commerce Brand Identity | Minimal Logo',
    subtitle: 'Smart shopping visual identity, minimalist V monogram, and modern retail marketplace architecture for Valina Mart Ltd.',
    category: 'Brand Identity',
    year: '2025',
    client: 'Valina Mart Ltd (Dhaka / Global Retail)',
    deliverables: 'Minimalist Monogram Logo, Mobile Shopping App Icon, Packaging Systems, Marketplace Identity',
    industry: 'Modern E-Commerce, Retail Platform & Packaging',
    duration: '3 Weeks',
    challenge: 'Creating a trusted, high-speed consumer brand identity that stands out in digital feeds and connects seamlessly from mobile storefronts to physical deliveries.',
    palette: [
      { hex: '#E11D2A', label: 'Valina Crimson Vermillion' },
      { hex: '#08080C', label: 'Obsidian Core' },
      { hex: '#FFFFFF', label: 'Clean Flow White' },
      { hex: '#F3F4F6', label: 'Light Silver' }
    ],
    outcome: 'Designed a sharp, modern V monogram with red brand dynamics, driving instant customer recognition and establishing an agile retail marketplace presence.',
    isBehance: true,
    behanceUrl: 'https://www.behance.net/gallery/237263685/Modern-E-commerce-Brand-Identity-Minimal-Logo',
    dribbbleUrl: 'https://www.behance.net/gallery/237263685/Modern-E-commerce-Brand-Identity-Minimal-Logo',
    imgUrl: 'images/valina-mart.jpg'
  },
  'avrise': {
    title: 'Avrise — Fintech Brand Identity & Logo Design',
    subtitle: 'Dynamic geometric A lettermark with concealed forward-growth arrow for global fintech platform.',
    category: 'Fintech & App Icon',
    year: '2025',
    client: 'Avrise Financial Systems (Singapore)',
    deliverables: 'Lettermark System, Mobile App Icon, Dark Mode Design Language',
    industry: 'Fintech & Global Payments',
    duration: '3 Weeks',
    challenge: 'Creating an iconic app icon that stands out in crowded App Store listings while delivering institutional authority for wealth management.',
    palette: [
      { hex: '#07090E', label: 'Deep Obsidian' },
      { hex: '#00E5FF', label: 'Kinetic Cyan' },
      { hex: '#6366F1', label: 'Trust Indigo' },
      { hex: '#FFFFFF', label: 'Clean White' }
    ],
    outcome: 'Engineered a razor-sharp geometric monogram with an optical forward arrow, driving 40% higher click-through in early user onboarding testing.',
    isBehance: false,
    dribbbleUrl: 'https://dribbble.com/shots/27671356-Avrise-Fintech-Brand-Identity-Logo-Design',
    imgUrl: 'images/avrise.webp'
  },
  'synccloud': {
    title: 'SyncCloud — Cloud Tech Brand Identity',
    subtitle: 'Continuous-loop harmonic geometric mark for multi-cloud synchronization architecture.',
    category: 'Cloud & DevOps',
    year: '2024',
    client: 'SyncCloud Infrastructure (Toronto, Canada)',
    deliverables: 'Brand System, Monogram, Documentation Graphics, Swag Kit',
    industry: 'Cloud Computing & DevOps',
    duration: '3 Weeks',
    challenge: 'Illustrating real-time synchronization across heterogeneous servers without using tired, generic literal cloud clip-art shapes.',
    palette: [
      { hex: '#0A0B10', label: 'Server Black' },
      { hex: '#3B82F6', label: 'Sync Blue' },
      { hex: '#8B5CF6', label: 'Pipeline Purple' },
      { hex: '#E0E7FF', label: 'Cloud Mist' }
    ],
    outcome: 'Crafted a continuous topological infinity-cloud monogram built with precision bezier mathematics that renders crisp on any terminal or billboard.',
    isBehance: false,
    dribbbleUrl: 'https://dribbble.com/shots/27560234-SyncCloud-Cloud-Tech-Brand-Identity',
    imgUrl: 'images/synccloud.webp'
  },
  'verdevo': {
    title: 'Verdevo — Brand Identity & Packaging',
    subtitle: 'Sustainable luxury packaging architecture, custom wordmark, and tactile unboxing experience.',
    category: 'Organic Food & Packaging',
    year: '2024',
    client: 'Verdevo Botanicals (Melbourne, Australia)',
    deliverables: 'Custom Wordmark, Sustainable Packaging Dielines, Emboss & Foil Guides',
    industry: 'Organic Food, Wellness & Sustainable Packaging',
    duration: '4 Weeks',
    challenge: 'Elevating organic food and eco-friendly consumer goods beyond earthy rustic cliches into a luxury modern boutique retail experience.',
    palette: [
      { hex: '#0E1510', label: 'Forest Dark' },
      { hex: '#22C55E', label: 'Botanical Green' },
      { hex: '#D4AF37', label: 'Champagne Gold' },
      { hex: '#F3F7F4', label: 'Natural Canvas' }
    ],
    outcome: 'Delivered production-ready food packaging dielines with custom foil stamp and deboss specifications, leading to immediate boutique retail shelf placement.',
    isBehance: false,
    dribbbleUrl: 'https://dribbble.com/shots/27590022-Verdevo-Brand-Identity-Packaging-CapCut-Playoff',
    imgUrl: 'images/verdevo.webp'
  },
  'fexora': {
    title: 'Fexora — Tech Brand Identity | Logo Design',
    subtitle: 'Kinetic visual identity and high-throughput vector mark for developer cloud infrastructure.',
    category: 'Cloud Infrastructure',
    year: '2025',
    client: 'Fexora Cloud Platform (Berlin, Germany)',
    deliverables: 'Dynamic Tech Mark, Vector Guidelines, Developer Tool Badges',
    industry: 'Developer Tools & Infrastructure',
    duration: '3 Weeks',
    challenge: 'Translating extreme computing speed, sub-millisecond latency, and global resilience into a minimal, iconic glyph.',
    palette: [
      { hex: '#090A10', label: 'Kernel Dark' },
      { hex: '#F43F5E', label: 'Laser Crimson' },
      { hex: '#FB923C', label: 'Throughput Orange' },
      { hex: '#F8FAFC', label: 'Data Light' }
    ],
    outcome: 'A sharp, kinetic vector mark that communicates speed and multi-cloud reliability across IDE extensions, web consoles, and swag.',
    isBehance: false,
    dribbbleUrl: 'https://dribbble.com/shots/27629170-Fexora-Tech-Brand-Identity-Logo-Design',
    imgUrl: 'images/fexora.webp'
  },
  'zyorex': {
    title: 'ZYOREX — Modern Brand Identity for E-commerce Startup',
    subtitle: 'High-impact visual identity and custom typographic mark for next-generation digital retail.',
    category: 'E-Commerce & Startup',
    year: '2024',
    client: 'ZYOREX Retail Global (Austin, TX)',
    deliverables: 'Brand Identity, Custom Typography, Social Kit, Storefront Guidelines',
    industry: 'E-Commerce & Digital Shopping',
    duration: '3 Weeks',
    challenge: 'Creating a bold, modern retail brand that grabs millennial and Gen-Z consumers in competitive social ad feeds.',
    palette: [
      { hex: '#07080D', label: 'Obsidian Core' },
      { hex: '#8B5CF6', label: 'Electric Violet' },
      { hex: '#38BDF8', label: 'Vivid Sky' },
      { hex: '#FFFFFF', label: 'Optic Pure' }
    ],
    outcome: 'Built an energetic brand system with punchy typography and dynamic digital storefront layouts that skyrocketed ad conversion rates.',
    isBehance: false,
    dribbbleUrl: 'https://dribbble.com/shots/27464281-ZYOREX-Modern-Brand-Identity-for-E-commerce-Startup',
    imgUrl: 'images/zyorex.webp'
  },
  'stratacode': {
    title: 'StrataCode — Software Logo & Brand Identity',
    subtitle: 'Precision-engineered architectural monogram for software development intelligence.',
    category: 'AI & Developer Software',
    year: '2024',
    client: 'StrataCode Labs (Seattle, WA)',
    deliverables: 'Architectural Logo Mark, Dark UI Palette, IDE Syntax Brand Tokens',
    industry: 'Enterprise Software & Code Intelligence',
    duration: '3 Weeks',
    challenge: 'Establishing visual credibility among senior software architects and dev teams who reject superficial design fluff.',
    palette: [
      { hex: '#0D1117', label: 'Terminal Dark' },
      { hex: '#58A6FF', label: 'Syntax Blue' },
      { hex: '#7EE787', label: 'Compile Green' },
      { hex: '#F0F6FC', label: 'Buffer White' }
    ],
    outcome: 'An interlocking structural lettermark embodying multi-tier software architecture, clean syntax compilation, and structural strength.',
    isBehance: false,
    dribbbleUrl: 'https://dribbble.com/shots/27545907-StrataCode-Software-Logo-Brand-Identity',
    imgUrl: 'images/stratacode.webp'
  },
  'fikra-ai': {
    title: 'FIKRA AI — Saudi AI Chatbot Tech Brand Identity',
    subtitle: 'Bilingual Arabic-English futuristic brand identity for Middle East enterprise conversational AI.',
    category: 'AI & SaaS Chatbot',
    year: '2025',
    client: 'FIKRA Artificial Intelligence (Riyadh, Saudi Arabia)',
    deliverables: 'Bilingual Wordmark, Neural Thinking Glyph, Arabic Typography Guidelines',
    industry: 'Conversational AI & Enterprise Chatbots',
    duration: '4 Weeks',
    challenge: 'Harmonizing cutting-edge generative AI symbolism with classical Arabic calligraphic elegance for enterprise GCC clients.',
    palette: [
      { hex: '#06080D', label: 'Desert Night' },
      { hex: '#00F5D4', label: 'Oasis Neon' },
      { hex: '#7B2CBF', label: 'Royal Amethyst' },
      { hex: '#FFFFFF', label: 'Pure Light' }
    ],
    outcome: 'Crafted a fluid conversational mark marrying Arabic letterform rhythm with neural wave mechanics, receiving widespread acclaim across regional tech summits.',
    isBehance: false,
    dribbbleUrl: 'https://dribbble.com/shots/27720256-FIKRA-AI-Saudi-AI-Chatbot-Tech-Brand-Identity',
    imgUrl: 'images/fikra-ai.webp'
  },
  'pixelcore': {
    title: 'PixelCore — SaaS Brand Architecture & Logo Design',
    subtitle: 'Unified design system and visual branding for enterprise software teams.',
    category: 'SaaS Brand Architecture',
    year: '2025',
    client: 'PixelCore Global (Sydney, Australia)',
    deliverables: 'Visual Identity, Design System Tokens, 50-page Brand Bible',
    industry: 'Developer Tools & Cloud',
    duration: '4 Weeks',
    challenge: 'Unifying fragmented developer tools under one cohesive, authoritative brand umbrella without losing user familiarity.',
    palette: [
      { hex: '#05060A', label: 'Carbon Black' },
      { hex: '#6366F1', label: 'Indigo Core' },
      { hex: '#06B6D4', label: 'Electric Cyan' },
      { hex: '#F3F4F6', label: 'Pure Canvas' }
    ],
    outcome: 'Unified brand architecture with design tokens that decreased front-end component inconsistency by 65% and unified their digital presence.',
    isBehance: false,
    dribbbleUrl: 'https://dribbble.com/shots/27732717-PixelCore-SaaS-Brand-Identity-Logo-Design',
    imgUrl: 'images/pixelcore.webp'
  }
};

// -----------------------------------------------------------------------------
// 2. THEME SWITCHER (DARK / LIGHT)
// -----------------------------------------------------------------------------
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const safeStorage = (fn) => { try { return fn(); } catch (e) { return null; } };
  const savedTheme = safeStorage(() => localStorage.getItem('alamin_theme')) || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      safeStorage(() => localStorage.setItem('alamin_theme', nextTheme));
      showToast(`Switched to ${nextTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}`);
    });
  }
}

// -----------------------------------------------------------------------------
// 3. LIVE DHAKA CLOCK (GMT+6)
// -----------------------------------------------------------------------------
function initDhakaClock() {
  const clockEl = document.getElementById('liveClock');
  if (!clockEl) return;

  function update() {
    try {
      const now = new Date();
      // Format time in Dhaka (Asia/Dhaka)
      const options = {
        timeZone: 'Asia/Dhaka',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
      clockEl.textContent = `${timeString} BST (UTC+6)`;
    } catch (e) {
      clockEl.textContent = 'GMT+6 (Dhaka)';
    }
  }

  update();
  setInterval(update, 15000);
}

// -----------------------------------------------------------------------------
// 4. PORTFOLIO FILTERING
// -----------------------------------------------------------------------------
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterVal = btn.dataset.filter;

      projectCards.forEach(card => {
        const categories = (card.dataset.category || '').split(' ');
        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// -----------------------------------------------------------------------------
// 5. CASE STUDY DETAIL MODAL (NATIVE <dialog>)
// -----------------------------------------------------------------------------
function initCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const openBtns = document.querySelectorAll('.open-modal-btn');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  if (!modal) return;

  function openProject(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    // Populate modal contents
    document.getElementById('modalImg').src = data.imgUrl;
    document.getElementById('modalImg').alt = data.title;
    document.getElementById('modalCategory').textContent = data.category;
    document.getElementById('modalYear').textContent = data.year;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalSubtitle').textContent = data.subtitle;
    document.getElementById('modalClient').textContent = data.client;
    document.getElementById('modalDeliverables').textContent = data.deliverables;
    document.getElementById('modalIndustry').textContent = data.industry;
    document.getElementById('modalDuration').textContent = data.duration;
    document.getElementById('modalChallenge').textContent = data.challenge;
    document.getElementById('modalOutcome').textContent = data.outcome;
    const modalLink = document.getElementById('modalDribbbleLink');
    modalLink.href = data.isBehance ? data.behanceUrl : data.dribbbleUrl;
    const btnSpan = modalLink.querySelector('span');
    if (btnSpan) {
      btnSpan.textContent = data.isBehance ? 'View Full Case Study on Behance' : 'View Presentation on Dribbble';
    }

    // Render palette swatches
    const paletteContainer = document.getElementById('modalPalette');
    paletteContainer.innerHTML = '';
    data.palette.forEach(color => {
      const box = document.createElement('div');
      box.className = 'palette-swatch-box';
      box.title = `Click to copy ${color.hex}`;
      box.innerHTML = `
        <div class="swatch-color" style="background-color: ${color.hex}"></div>
        <span class="swatch-hex">${color.hex}</span>
      `;
      box.addEventListener('click', () => {
        copyTextToClipboard(color.hex, `Copied color token: ${color.hex} (${color.label})`);
      });
      paletteContainer.appendChild(box);
    });

    // Show modal dialog
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  // Open modal on click
  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.dataset.target;
      openProject(targetId);
    });
  });

  // Clicking anywhere on project card opens modal too
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // ignore if clicked direct external dribbble link
      if (e.target.closest('.dribbble-direct')) return;
      const targetId = card.dataset.id;
      if (targetId) openProject(targetId);
    });
  });

  // Close triggers
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    // Backdrop click
    const rect = modal.getBoundingClientRect();
    const isOutside = (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    );
    if (isOutside) {
      closeModal();
    }
  });

  modal.addEventListener('cancel', () => {
    document.body.style.overflow = '';
  });

  if (modalInquireBtn) {
    modalInquireBtn.addEventListener('click', () => {
      const activeTitle = document.getElementById('modalTitle').textContent;
      closeModal();
      const messageField = document.getElementById('projectMessage');
      if (messageField) {
        messageField.value = `Hi Al Amin, I'm interested in an identity similar to your project: "${activeTitle}". Here are details about our project: `;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => messageField.focus(), 600);
      }
    });
  }
}

// -----------------------------------------------------------------------------
// 6. SCOPE & INVESTMENT CALCULATOR
// -----------------------------------------------------------------------------
function initCalculator() {
  const serviceCards = document.querySelectorAll('.calc-check-card');
  const paceCards = document.querySelectorAll('.pace-card');
  const totalAmountEl = document.getElementById('calcTotal');
  const timelineEl = document.getElementById('calcTimeline');
  const featuresListEl = document.getElementById('calcFeaturesList');
  const applyBtn = document.getElementById('calcApplyBtn');

  if (!totalAmountEl) return;

  function calculate() {
    let basePrice = 0;
    let selectedServices = [];

    // Tally selected services
    serviceCards.forEach(card => {
      const checkbox = card.querySelector('input[type="checkbox"]');
      const price = parseInt(card.dataset.price, 10);
      const title = card.querySelector('.check-title').textContent.trim();

      if (checkbox.checked) {
        card.classList.add('active');
        basePrice += price;
        selectedServices.push(title);
      } else {
        card.classList.remove('active');
      }
    });

    // Pace selection
    let multiplier = 1.0;
    let weeksText = '3 – 4 Weeks';

    paceCards.forEach(card => {
      const radio = card.querySelector('input[type="radio"]');
      if (radio.checked) {
        card.classList.add('active');
        multiplier = parseFloat(card.dataset.multiplier);
        weeksText = card.dataset.weeks + ' Weeks';
      } else {
        card.classList.remove('active');
      }
    });

    const finalTotal = Math.round(basePrice * multiplier);
    totalAmountEl.textContent = finalTotal.toLocaleString();
    timelineEl.textContent = weeksText;

    // Update feature summary list
    if (featuresListEl) {
      if (selectedServices.length === 0) {
        featuresListEl.innerHTML = `<div class="summary-feature-item" style="color: var(--text-muted)">Please select at least 1 service item.</div>`;
      } else {
        featuresListEl.innerHTML = selectedServices.map(s => 
          `<div class="summary-feature-item">✓ ${s}</div>`
        ).join('') + `
          <div class="summary-feature-item">✓ 100% Vector Master Source Files</div>
          <div class="summary-feature-item">✓ Full Commercial Rights & Ownership</div>
        `;
      }
    }

    return { finalTotal, selectedServices, weeksText };
  }

  // Bind change events
  serviceCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const checkbox = card.querySelector('input[type="checkbox"]');
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      calculate();
    });
  });

  paceCards.forEach(card => {
    card.addEventListener('click', () => {
      const radio = card.querySelector('input[type="radio"]');
      radio.checked = true;
      calculate();
    });
  });

  // Apply scope to Contact Form
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const { finalTotal, selectedServices, weeksText } = calculate();
      const budgetSelect = document.getElementById('projectBudget');
      const messageField = document.getElementById('projectMessage');

      // Adjust budget dropdown to match
      if (budgetSelect) {
        if (finalTotal <= 3500) {
          budgetSelect.value = '$2,500 - $5,000';
        } else if (finalTotal <= 6500) {
          budgetSelect.value = '$5,000 - $8,000';
        } else if (finalTotal <= 12000) {
          budgetSelect.value = '$8,000 - $15,000';
        } else {
          budgetSelect.value = '$15,000+';
        }
      }

      // Pre-fill message
      if (messageField) {
        const servicesList = selectedServices.join(', ');
        messageField.value = `Estimated Scope: ${servicesList}\nTimeline: ${weeksText}\nTarget Investment: ~$${finalTotal.toLocaleString()} USD\n\nAdditional Notes: `;
      }

      // Scroll smoothly to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        showToast('Scope locked! Please add your project contact details below.');
        setTimeout(() => {
          document.getElementById('userName')?.focus();
        }, 600);
      }
    });
  }

  // Run initial calculation
  calculate();
}

// -----------------------------------------------------------------------------
// 7. CLIPBOARD & TOAST NOTIFICATION
// -----------------------------------------------------------------------------
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function copyTextToClipboard(text, successMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage || `Copied to clipboard: ${text}`);
    }).catch(() => {
      fallbackCopy(text, successMessage);
    });
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
    showToast(successMessage || `Copied: ${text}`);
  } catch (err) {
    showToast(`Email: ${text}`);
  }
  document.body.removeChild(tempInput);
}

function initCopyButtons() {
  const emailContactBtn = document.getElementById('copyEmailContactBtn');
  const emailAboutBtn = document.getElementById('copyEmailAboutBtn');

  const email = 'infomdalaminofficial2@gmail.com';

  if (emailContactBtn) {
    emailContactBtn.addEventListener('click', () => {
      copyTextToClipboard(email, 'Copied email: infomdalaminofficial2@gmail.com');
    });
  }

  if (emailAboutBtn) {
    emailAboutBtn.addEventListener('click', () => {
      copyTextToClipboard(email, 'Copied email: infomdalaminofficial2@gmail.com');
    });
  }
}

// -----------------------------------------------------------------------------
// 8. CONTACT FORM SUBMISSION
// -----------------------------------------------------------------------------

function initContactForm() {
  const form = document.getElementById('projectInquiryForm');
  const statusDiv = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitInquiryBtn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Check honeypot field
    const botField = form.querySelector('input[name="bot-field"]');
    if (botField && botField.value) {
      console.warn('Bot submission blocked');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending Inquiry...</span>';
    }

    statusDiv.className = 'form-status';
    statusDiv.textContent = '';

    try {
      const formData = new FormData(form);
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        statusDiv.className = 'form-status success';
        statusDiv.innerHTML = '✓ <strong>Thank you!</strong> Your brand inquiry has been received. I will review your requirements and respond within 12–24 hours (Guaranteed).';
        form.reset();
      } else {
        throw new Error('Server returned status: ' + response.status);
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      // Honest, actionable error handling
      statusDiv.className = 'form-status error';
      statusDiv.innerHTML = '⚠️ <strong>Message could not be delivered.</strong> Please check your connection and try again, or reach out directly on <a href="https://wa.me/8801758261160" target="_blank" rel="noopener" style="color:var(--accent-hover);text-decoration:underline;">WhatsApp</a> or email <a href="mailto:infomdalaminofficial2@gmail.com" style="color:var(--accent-hover);text-decoration:underline;">infomdalaminofficial2@gmail.com</a>.';
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send Project Inquiry</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';
      }
    }
  });
}


// -----------------------------------------------------------------------------
// 9. MOBILE DRAWER NAVIGATION & SCROLL
// -----------------------------------------------------------------------------
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    drawer.classList.toggle('open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('open');
      drawer.classList.remove('open');
    });
  });
}

// -----------------------------------------------------------------------------
// 10. QUICK CONNECT & SOCIAL HUB POPUP MODAL
// -----------------------------------------------------------------------------
function initQuickConnectModal() {
  const modal = document.getElementById('quickConnectModal');
  const openBtn = document.getElementById('openQuickConnectBtn');
  const closeBtn = document.getElementById('connectModalCloseBtn');
  const toFormBtn = document.getElementById('connectModalToFormBtn');
  const copyEmailBtn = document.getElementById('popupEmailCopyBtn');

  if (!modal) return;

  function openModal() {
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  if (openBtn) {
    openBtn.addEventListener('click', openModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (toFormBtn) {
    toFormBtn.addEventListener('click', () => {
      closeModal();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => document.getElementById('userName')?.focus(), 500);
      }
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'infomdalaminofficial2@gmail.com';
      copyTextToClipboard(email, 'Copied email: infomdalaminofficial2@gmail.com');
    });
  }

  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isOutside = (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    );
    if (isOutside) {
      closeModal();
    }
  });

  modal.addEventListener('cancel', () => {
    document.body.style.overflow = '';
  });
}

// -----------------------------------------------------------------------------
// 11. BACK TO TOP BUTTON
// -----------------------------------------------------------------------------
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// -----------------------------------------------------------------------------
// INITIALIZE EVERYTHING ON DOM CONTENT LOADED
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDhakaClock();
  initPortfolioFilters();
  initCaseStudyModal();
  initCalculator();
  initCopyButtons();
  initContactForm();
  initMobileNav();
  initQuickConnectModal();
  initBackToTop();
});
