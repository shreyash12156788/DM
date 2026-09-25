/**
 * AI & Data Science Digital Hub - Main JavaScript
 * Features: Dark Mode Toggle, Mobile Navigation, Smooth Scroll, Active Section Observer, Interactive Search Modal, Form Feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Dark Mode / Light Mode)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('aids_hub_theme');

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggleBtn?.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeToggleBtn?.setAttribute('aria-label', 'Switch to Dark Mode');
    }
  };

  // Determine initial theme
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }

  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('aids_hub_theme', newTheme);
  });

  // 2. Mobile Menu Navigation
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  const toggleMobileMenu = (forceClose = false) => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    const shouldOpen = forceClose ? false : !isExpanded;

    mobileMenuBtn.classList.toggle('active', shouldOpen);
    navMenu.classList.toggle('active', shouldOpen);
    mobileMenuBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
  };

  mobileMenuBtn?.addEventListener('click', () => toggleMobileMenu());

  // Close mobile menu on clicking nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  // 3. Active Section Highlight using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // 4. Interactive Search Modal
  const searchBtn = document.getElementById('searchBtn');
  const searchModal = document.getElementById('searchModal');
  const searchBackdrop = document.getElementById('searchBackdrop');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  // Search Index Data compiled from page content
  const searchableData = [
    { title: 'Python', category: 'Technology', link: '#technology', desc: 'Primary language for data analysis and machine learning.' },
    { title: 'C++', category: 'Technology', link: '#technology', desc: 'High performance systems programming & vision kernels.' },
    { title: 'SQL', category: 'Technology', link: '#technology', desc: 'Relational database query language.' },
    { title: 'Statistics', category: 'Technology', link: '#technology', desc: 'Mathematical modeling and probability testing.' },
    { title: 'Data Structures', category: 'Technology', link: '#technology', desc: 'Trees, graphs, arrays, hash tables.' },
    { title: 'Machine Learning', category: 'Technology', link: '#technology', desc: 'Supervised, unsupervised & regression models.' },
    { title: 'Deep Learning', category: 'Technology', link: '#technology', desc: 'Neural networks, PyTorch, CNNs, Transformers.' },
    { title: 'Generative AI', category: 'Technology', link: '#technology', desc: 'LLMs, Diffusion models, Foundation models.' },
    { title: 'Computer Vision', category: 'Technology & Research', link: '#technology', desc: 'Image segmentation, YOLO, OpenCV.' },
    { title: 'Natural Language Processing', category: 'Technology & Research', link: '#technology', desc: 'Text tokenization, BERT, sentiment analysis.' },
    { title: 'Data Analyst', category: 'Career', link: '#careers', desc: 'Translates business data into visualization reports.' },
    { title: 'Data Scientist', category: 'Career', link: '#careers', desc: 'Statistical modeling & predictive machine learning.' },
    { title: 'Machine Learning Engineer', category: 'Career', link: '#careers', desc: 'Production ML architecture & model deployment.' },
    { title: 'AI Engineer', category: 'Career', link: '#careers', desc: 'LLM applications, RAG & generative systems.' },
    { title: 'Data Engineer', category: 'Career', link: '#careers', desc: 'Data pipelines, ETL, Apache Spark, Warehousing.' },
    { title: 'MLOps Engineer', category: 'Career', link: '#careers', desc: 'CI/CD pipelines, Docker, Kubernetes, Monitoring.' },
    { title: 'AI Healthcare Assistant', category: 'Example Project', link: '#projects', desc: 'Medical symptom triaging NLP assistant.' },
    { title: 'Student Performance Predictor', category: 'Example Project', link: '#projects', desc: 'Academic outcome classification model.' },
    { title: 'Fake News Detection', category: 'Example Project', link: '#projects', desc: 'Misinformation text classifier.' },
    { title: 'Academic Learning Journey', category: 'Academics', link: '#academics', desc: '4-stage progressive educational framework.' },
    { title: 'Student Resources', category: 'Resources', link: '#resources', desc: 'Curated links to Python, PyTorch, arXiv, PostgreSQL.' }
  ];

  const openSearch = () => {
    searchModal.classList.add('active');
    searchModal.setAttribute('aria-hidden', 'false');
    setTimeout(() => searchInput.focus(), 50);
  };

  const closeSearch = () => {
    searchModal.classList.remove('active');
    searchModal.setAttribute('aria-hidden', 'true');
    searchInput.value = '';
    renderSearchResults('');
  };

  searchBtn?.addEventListener('click', openSearch);
  closeSearchBtn?.addEventListener('click', closeSearch);
  searchBackdrop?.addEventListener('click', closeSearch);

  // Keyboard shortcut Ctrl+K / Cmd+K / Escape
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      closeSearch();
    }
  });

  const renderSearchResults = (query) => {
    const q = query.trim().toLowerCase();
    if (!q) {
      searchResults.innerHTML = `
        <div class="search-placeholder-state">
          <p>Type keywords like <em>Python</em>, <em>Deep Learning</em>, <em>Data Scientist</em>, or <em>Project</em>...</p>
        </div>
      `;
      return;
    }

    const filtered = searchableData.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    );

    if (filtered.length === 0) {
      searchResults.innerHTML = `
        <div class="search-placeholder-state">
          <p>No matching topics found for "<strong>${escapeHtml(query)}</strong>"</p>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = filtered.map(item => `
      <a href="${item.link}" class="search-result-item" onclick="document.getElementById('searchModal').classList.remove('active')">
        <span class="result-category">${escapeHtml(item.category)}</span>
        <span class="result-title">${escapeHtml(item.title)}</span>
        <p style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 2px;">${escapeHtml(item.desc)}</p>
      </a>
    `).join('');
  };

  searchInput?.addEventListener('input', (e) => renderSearchResults(e.target.value));

  // Helper escape HTML
  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  // 5. Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    formFeedback.textContent = 'Thank you for your academic inquiry! (Note: This is a demonstration form)';
    formFeedback.className = 'form-feedback success';
    contactForm.reset();
    setTimeout(() => {
      formFeedback.textContent = '';
      formFeedback.className = 'form-feedback';
    }, 6000);
  });
});
