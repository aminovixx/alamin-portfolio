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
      clockEl.textContent = `Local Time: ${timeString} (UTC+6)`;
    } catch (e) {
      clockEl.textContent = 'Local Time (UTC+6)';
    }
  }

  update();
  setInterval(update, 15000);
}

// -----------------------------------------------------------------------------
// 4. PORTFOLIO FILTERING
// -----------------------------------------------------------------------------
// 4. PORTFOLIO CARDS DISPLAY
// -----------------------------------------------------------------------------
function initPortfolioFilters() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.style.display = 'flex';
    card.style.opacity = '1';
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

  // Expose openProject globally for dynamic cards
  window.openProjectModal = openProject;

  // Delegated click handler on project grid for both static and dynamic cards
  const projectGrid = document.getElementById('projectGrid');
  if (projectGrid) {
    projectGrid.addEventListener('click', (e) => {
      // Ignore if user clicked on Behance or Dribbble direct link
      if (e.target.closest('.dribbble-direct') || e.target.closest('.behance-direct')) return;

      const previewBtn = e.target.closest('.open-modal-btn');
      if (previewBtn) {
        e.stopPropagation();
        const targetId = previewBtn.dataset.target;
        if (targetId) openProject(targetId);
        return;
      }

      const card = e.target.closest('.project-card');
      if (card) {
        const targetId = card.dataset.id;
        if (targetId) openProject(targetId);
      }
    });
  }

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
// 6. SCOPE & PROPOSAL BUILDER (HIGH-TICKET CUSTOM PROPOSAL FLOW)
// -----------------------------------------------------------------------------
function initCalculator() {
  const serviceCards = document.querySelectorAll('.calc-check-card');
  const featuresListEl = document.getElementById('calcFeaturesList');
  const applyBtn = document.getElementById('calcApplyBtn');

  if (!serviceCards.length) return;

  function updateScope() {
    let selectedServices = [];

    // Tally selected services
    serviceCards.forEach(card => {
      const checkbox = card.querySelector('input[type="checkbox"]');
      const title = card.querySelector('.check-title') ? card.querySelector('.check-title').textContent.trim() : card.dataset.scope;

      if (checkbox && checkbox.checked) {
        card.classList.add('active');
        selectedServices.push(title);
      } else {
        card.classList.remove('active');
      }
    });

    // Update feature summary list
    if (featuresListEl) {
      if (selectedServices.length === 0) {
        featuresListEl.innerHTML = `<div class="summary-feature-item" style="color: var(--text-muted)">Please select at least 1 deliverable for your scope.</div>`;
      } else {
        featuresListEl.innerHTML = selectedServices.map(s => 
          `<div class="summary-feature-item">✓ ${s}</div>`
        ).join('') + `
          <div class="summary-feature-item">✓ 100% Vector Source Files & Master Handoff</div>
          <div class="summary-feature-item">✓ Full Commercial Copyright Transfer</div>
          <div class="summary-feature-item">✓ Milestone Roadmap & 24h Custom Proposal</div>
        `;
      }
    }

    return { selectedServices };
  }

  // Bind click events on cards
  serviceCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const checkbox = card.querySelector('input[type="checkbox"]');
      if (checkbox && e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      updateScope();
    });
  });

  // Apply scope to Contact Form
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const { selectedServices } = updateScope();
      const messageField = document.getElementById('projectMessage');
      const serviceSelect = document.getElementById('projectServices');

      if (selectedServices.length === 0) {
        showToast('Please select at least one deliverable to continue.');
        return;
      }

      // Automatically sync primary service dropdown if possible
      if (serviceSelect) {
        if (selectedServices.includes('Full Brand Identity & Guidelines')) {
          serviceSelect.value = 'Complete Brand Identity & Guidelines';
        } else if (selectedServices.includes('Core Logo Design & Iconic Marks')) {
          serviceSelect.value = 'Logo Design & Iconic Marks (Core Specialty)';
        } else if (selectedServices.includes('Web Design & Digital UI/UX')) {
          serviceSelect.value = 'Web Design & Digital UI/UX (Landing Pages / Webflow)';
        } else if (selectedServices.includes('Motion Graphics & Commercial Video Editing')) {
          serviceSelect.value = 'Motion Graphics & Commercial Video Editing';
        } else if (selectedServices.includes('Social Media Design & Growth Kits')) {
          serviceSelect.value = 'Social Media Design & Growth Kits';
        } else if (selectedServices.includes('UGC Video Ads & Performance Creatives')) {
          serviceSelect.value = 'UGC Video Ads & Performance Creatives';
        }
      }

      // Pre-fill message field with structured brief
      if (messageField) {
        const servicesList = selectedServices.map(s => `  • ${s}`).join('\n');
        messageField.value = `Hi Al Amin,\n\nI would like to request a tailored proposal and strategic roadmap for my brand with the following scope:\n\nSelected Deliverables:\n${servicesList}\n\nEstimated Launch Target: [e.g. In 2-3 weeks / Next month / Flexible]\n\nAbout My Project / Vision: `;
      }

      // Scroll smoothly to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        showToast('Scope configured! Share a few details below to receive your proposal.');
        setTimeout(() => {
          document.getElementById('userName')?.focus();
        }, 600);
      }
    });
  }

  // Run initial update
  updateScope();
}

// -----------------------------------------------------------------------------
// 6B. SERVICE CARD INQUIRY PRE-SELECTION
// -----------------------------------------------------------------------------
function initServiceInquiryButtons() {
  const serviceButtons = document.querySelectorAll('.btn-service-glow');
  const serviceSelect = document.getElementById('projectServices');
  const contactSection = document.getElementById('contact');
  const messageField = document.getElementById('projectMessage');

  serviceButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceTarget = btn.dataset.service;

      if (serviceSelect && serviceTarget) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
          const opt = serviceSelect.options[i];
          if (opt.value.toLowerCase().includes(serviceTarget.toLowerCase()) || 
              serviceTarget.toLowerCase().includes(opt.value.toLowerCase())) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        showToast(`Selected: ${serviceTarget || 'Custom Service Scope'}`);
        setTimeout(() => {
          if (messageField) {
            messageField.focus();
            if (!messageField.value.trim()) {
              messageField.placeholder = `Tell me about your vision for ${serviceTarget}...`;
            }
          }
        }, 600);
      }
    });
  });
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
      const data = {};
      formData.forEach((value, key) => {
        if (key !== 'bot-field' && key !== 'form-name' && key !== '_honey') {
          data[key] = value;
        }
      });
      data['_subject'] = `New Brand Inquiry from ${data.name || 'Client'} (${data.company || 'alamininovix.vercel.app'})`;
      data['_template'] = 'table';
      data['_captcha'] = 'false';

      const response = await fetch('https://formsubmit.co/ajax/infomdalaminofficial2@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const clientName = data.name ? ` ${data.name}` : '';
        statusDiv.className = 'form-status success';
        statusDiv.innerHTML = `✓ <strong>Thank you${clientName}!</strong> Your brand inquiry has been received. I will review your requirements and respond within 1 hour (Guaranteed). You can also reach out on <a href="https://wa.me/8801758261160" target="_blank" rel="noopener" style="color:var(--accent-hover);text-decoration:underline;">WhatsApp</a> for an instant reply.`;
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
// 12. DYNAMIC CONTENT & CMS LOADER (DECAP CMS / GIT GATEWAY SYNC)
// -----------------------------------------------------------------------------
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function updateProjectsFromData(projectsList) {
  if (!Array.isArray(projectsList) || projectsList.length === 0) return;

  const grid = document.getElementById('projectGrid');
  if (!grid) return;

  // 1. Update PROJECTS_DATA in memory so modals display current info
  projectsList.forEach(p => {
    if (!p.id) return;
    PROJECTS_DATA[p.id] = {
      title: p.title || '',
      subtitle: p.subtitle || '',
      category: p.category || 'Brand Identity',
      year: p.year || '2025',
      client: p.client || '',
      deliverables: p.deliverables || '',
      industry: p.industry || '',
      duration: p.duration || '3-4 Weeks',
      challenge: p.challenge || '',
      palette: Array.isArray(p.palette) ? p.palette : [],
      outcome: p.outcome || '',
      isBehance: !!p.isBehance,
      behanceUrl: p.behanceUrl || '',
      dribbbleUrl: p.dribbbleUrl || '',
      imgUrl: p.imgUrl || ''
    };
  });

  // 2. Render cards into project grid
  const cardsHtml = projectsList.map((p, index) => {
    const isEager = index < 2;
    const catFilter = p.categoryFilter || 'identity';
    const tag = p.tag || p.category || 'Brand Strategy';
    const year = p.year || '2025';
    const title = escapeHtml(p.title || '');
    const snippet = escapeHtml(p.snippet || p.subtitle || '');
    const imgUrl = escapeHtml(p.imgUrl || 'images/avatar.jpg');
    const isBehance = !!p.isBehance;
    const directUrl = isBehance ? (p.behanceUrl || '#') : (p.dribbbleUrl || '#');
    const directClass = isBehance ? 'behance-direct' : 'dribbble-direct';
    const directTitle = isBehance ? 'Open Full Case Study on Behance' : 'View Presentation on Dribbble';
    const directIcon = isBehance
      ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm-2.8 4.3c-2.4 0-4.2 1.6-4.2 4.2 0 2.8 1.9 4.3 4.4 4.3 1.9 0 3.3-.9 3.8-2.5h-2.1c-.2.5-.9.9-1.7.9-1.2 0-2.1-.8-2.2-2.1h6.1c.1-.4.1-.7.1-1 0-2.2-1.7-3.8-4.2-3.8zm-2 3.2c.2-1 .9-1.7 2-1.7s1.8.7 1.9 1.7h-3.9zm-10-6.5h-5.2v12h5.2c2.7 0 4.4-1.4 4.4-3.5 0-1.4-.8-2.4-2.1-2.8 1-.5 1.7-1.3 1.7-2.6 0-1.9-1.6-3.1-4-3.1zm-3 4.7v-2.7h2.9c1.1 0 1.8.5 1.8 1.4 0 .9-.7 1.3-1.8 1.3h-2.9zm0 5.3v-3.3h3.2c1.2 0 2 .5 2 1.6 0 1.2-.8 1.7-2 1.7h-3.2z"/></svg>`
      : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>`;

    return `
      <article class="project-card" data-category="${escapeHtml(catFilter)}" data-id="${escapeHtml(p.id)}">
        <div class="project-media">
          <img src="${imgUrl}" alt="${title}" width="800" height="600" ${isEager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async">
          <div class="project-overlay">
            <button class="btn-preview open-modal-btn" data-target="${escapeHtml(p.id)}">
              <span>View Case Breakdown</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
          </div>
        </div>
        <div class="project-info">
          <div class="project-meta-top">
            <span class="project-tag">${escapeHtml(tag)}</span>
            <span class="project-year">${escapeHtml(year)}</span>
          </div>
          <h3 class="project-title">${title}</h3>
          <p class="project-snippet">${snippet}</p>
          <div class="project-links">
            <button class="text-link open-modal-btn" data-target="${escapeHtml(p.id)}">Case Details →</button>
            <a href="${escapeHtml(directUrl)}" target="_blank" rel="noopener" class="${directClass}" title="${directTitle}">
              ${directIcon}
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.innerHTML = cardsHtml;

  // 3. Re-apply active category filter
  const activeFilterBtn = document.querySelector('.filter-btn.active');
  const currentFilter = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';
  const cards = grid.querySelectorAll('.project-card');
  cards.forEach(card => {
    const cats = (card.dataset.category || '').split(' ');
    if (currentFilter === 'all' || cats.includes(currentFilter)) {
      card.style.display = 'flex';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    } else {
      card.style.display = 'none';
    }
  });
}

function updateSiteSettingsFromData(site) {
  if (!site) return;

  // Availability status badge
  if (site.statusText) {
    const statusEl = document.querySelector('.status-text');
    if (statusEl) statusEl.textContent = site.statusText;
  }

  // Hero title line 1 & line 2
  if (site.heroTitle1 || site.heroTitle2) {
    const titleLines = document.querySelectorAll('.hero-title .title-line');
    if (titleLines[0] && site.heroTitle1) titleLines[0].textContent = site.heroTitle1;
    if (titleLines[1] && site.heroTitle2) titleLines[1].textContent = site.heroTitle2;
  }

  // Hero subtitle
  if (site.heroSubtitle) {
    const heroSub = document.querySelector('.hero-subtitle');
    if (heroSub) heroSub.textContent = site.heroSubtitle;
  }

  // Direct Inquiry channels
  if (site.email) {
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
      a.href = `mailto:${site.email}`;
    });
    const emailValues = document.querySelectorAll('.contact-item-value');
    emailValues.forEach(el => {
      if (el.textContent.includes('@')) {
        el.textContent = site.email;
      }
    });
  }

  if (site.telegram) {
    const cleanTele = site.telegram.replace('@', '');
    document.querySelectorAll('a[href*="t.me"]').forEach(a => {
      a.href = `https://t.me/${cleanTele}`;
    });
  }

  if (site.whatsapp) {
    const cleanWa = site.whatsapp.replace(/[^0-9]/g, '');
    document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
      try {
        const u = new URL(a.href, window.location.origin);
        const txt = u.searchParams.get('text');
        if (txt) {
          a.href = `https://wa.me/${cleanWa}?text=${encodeURIComponent(txt)}`;
        } else {
          a.href = `https://wa.me/${cleanWa}`;
        }
      } catch (err) {
        a.href = `https://wa.me/${cleanWa}`;
      }
    });
  }

  if (site.behanceUrl) {
    document.querySelectorAll('a[href*="behance.net/"]').forEach(a => {
      if (!a.classList.contains('behance-direct')) {
        a.href = site.behanceUrl;
      }
    });
  }

  if (site.dribbbleUrl) {
    document.querySelectorAll('a[href*="dribbble.com/"]').forEach(a => {
      if (!a.classList.contains('dribbble-direct')) {
        a.href = site.dribbbleUrl;
      }
    });
  }
}

async function loadDynamicContent() {
  try {
    const pRes = await fetch('data/projects.json?t=' + Date.now());
    if (pRes.ok) {
      const pData = await pRes.json();
      if (pData && Array.isArray(pData.projects) && pData.projects.length > 0) {
        updateProjectsFromData(pData.projects);
      }
    }
  } catch (e) {
    // Graceful fallback to static cache
  }

  try {
    const sRes = await fetch('data/site.json?t=' + Date.now());
    if (sRes.ok) {
      const sData = await sRes.json();
      if (sData) {
        updateSiteSettingsFromData(sData);
      }
    }
  } catch (e) {
    // Graceful fallback to static cache
  }
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
  initServiceInquiryButtons();
  initCopyButtons();
  initContactForm();
  initMobileNav();
  initQuickConnectModal();
  initBackToTop();
  loadDynamicContent();
});
