/**
 * Aimine Meddeb — Personal Portfolio
 * Minimal SPA router, EN/FR localization, and theme toggle.
 */

const MAIL_SEGMENTS = ['aimine28', 'gmail', 'com'];
let isEmailRevealed = false;

function getAssembledEmail() {
  return `${MAIL_SEGMENTS[0]}@${MAIL_SEGMENTS[1]}.${MAIL_SEGMENTS[2]}`;
}

function getMaskedEmail() {
  return `${MAIL_SEGMENTS[0]} [at] ${MAIL_SEGMENTS[1]} [dot] ${MAIL_SEGMENTS[2]}`;
}

function openObfuscatedMail() {
  window.location.href = 'mailto:' + getAssembledEmail();
}

function revealEmailAddress() {
  isEmailRevealed = true;
  renderApp();
}

const ICONS = {
  paper: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
};

const DATA = {
  en: {
    sidebar: {
      role: 'Master MVA · ENS Paris-Saclay',
      meta: 'Machine Learning · 3D Vision · Robotics · LLMs',
      themeLight: 'Light',
      themeDark: 'Dark',
    },
    nav: {
      overview: 'Overview',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    overview: {
      heading: 'Aimine Meddeb',
      summary:
        'Final-year student in the Master MVA program at ENS Paris-Saclay and engineering student at Institut d’Optique (IOGS), specializing in Machine Learning, 3D Computer Vision, Robotics, and LLMs. Interested in 3D-aware robotic manipulation, multimodal assistants, and generative modeling.',
      selectedTitle: 'Selected Projects',
      allProjectsLink: 'All projects →',
      skillsTitle: 'Technical Skills & Languages',
    },
    projectsPage: {
      heading: 'Projects',
      subtitle: 'Research reproductions and personal implementations in robotics, multimodal vision, and generative modeling.',
      filters: [
        { id: 'all', label: 'All' },
        { id: 'robotics', label: 'Robotics & 3D' },
        { id: 'vision', label: 'Vision & Multimodal' },
        { id: 'nlp', label: 'NLP & Generative' },
      ],
      items: [
        {
          id: 'pointact',
          wide: true,
          year: '2026',
          category: 'robotics',
          categoryLabel: 'Robotics & 3D',
          venue: 'Shizhe Chen, Paul Pacaud & Cordelia Schmid · Inria / ENS · RSS 2026',
          title: 'PointACT — 3D-Aware Vision-Language-Action Policy',
          shortDesc:
            'Reproduction of Inria’s dual-system 3D VLA policy coupling a frozen VLM backbone with a multi-scale point-action expert on LIBERO and RLBench.',
          description:
            'Reproduction and experiments around PointACT, a dual-system 3D-aware Vision-Language-Action (VLA) policy from Shizhe Chen’s team at Inria. It preserves a frozen pretrained VLM backbone for semantics and pairs it with a dedicated point-action expert using multi-scale 3D point clouds and bottleneck window self-attention for robot manipulation.',
          links: [
            { type: 'paper', label: 'Paper (arXiv:2605.21414)', url: 'https://arxiv.org/abs/2605.21414' },
            { type: 'github', label: 'GitHub · robot-PointAct', url: 'https://github.com/Squenger/robot-PointAct' },
          ],
        },
        {
          id: 'egoblind',
          wide: false,
          year: '2025 – 2026',
          category: 'vision',
          categoryLabel: 'Vision & Multimodal',
          venue: 'NeurIPS 2025 · Datasets & Benchmarks Track',
          title: 'EgoBlind — Egocentric Visual Assistance',
          shortDesc:
            'Study of the first egocentric VideoQA benchmark collected from blind users (1,392 videos, 5,311 questions) to evaluate MLLM assistive capabilities.',
          description:
            'Project around EgoBlind, the first egocentric VideoQA benchmark collected from blind and visually impaired individuals to evaluate Multimodal Large Language Models (MLLMs) in real daily-life assistance (navigating, cooking, shopping, traveling). Across 1,392 first-person videos and 5,311 in-situation questions, it reveals key gaps between current MLLMs (~60%) and human accuracy (87.4%).',
          links: [
            { type: 'paper', label: 'Paper (arXiv:2503.08221)', url: 'https://arxiv.org/abs/2503.08221' },
          ],
        },
        {
          id: 'music-dpo',
          wide: false,
          year: '2026',
          category: 'nlp',
          categoryLabel: 'NLP & Generative',
          venue: 'Transformer · DPO · MidiBert',
          title: 'AI-Driven Music Generator',
          shortDesc: 'Generative MIDI Transformer aligned with DPO using a repurposed MidiBert reward judge.',
          description:
            'Generative MIDI model built on a Transformer architecture with Direct Preference Optimization (DPO). Repurposed a pre-trained MidiBert network into a reward-based "music judge" to improve harmonic quality and coherence.',
          links: [
            { type: 'github', label: 'Music Model', url: 'https://github.com/Squenger/Music_Generation_Transformers' },
            { type: 'github', label: 'MidiBert Judge', url: 'https://github.com/Squenger/converting-MidiBERT-into-a-Judge' },
          ],
        },
        {
          id: 'face-rec',
          wide: false,
          year: '2026',
          category: 'vision',
          categoryLabel: 'Vision & Multimodal',
          venue: 'CNN · Triplet Loss',
          title: 'Deep Learning Facial Recognition System',
          shortDesc: 'End-to-end CNN + Triplet Loss pipeline achieving 90% accuracy for automated photo tagging.',
          description:
            'End-to-end computer vision pipeline using Convolutional Neural Networks and Triplet Loss, achieving 90% accuracy in learning robust facial embeddings for automated photo tagging.',
          links: [
            {
              type: 'github',
              label: 'Recognition System',
              url: 'https://github.com/Squenger/PAI_2025_Leonard_Aimine_Reconnaissance_faciale_automatisee',
            },
            {
              type: 'github',
              label: 'DL Model',
              url: 'https://github.com/Squenger/Face_recognition_Deep_Learning_triplet_loss',
            },
          ],
        },
        {
          id: 'literary-style',
          wide: false,
          year: '2026',
          category: 'nlp',
          categoryLabel: 'NLP & Generative',
          venue: 'Decoder-only Transformer',
          title: 'Generative Literary Style Transfer',
          shortDesc: 'Decoder-only Transformer trained on classical poetry and Shakespearean plays.',
          description:
            'Decoder-only Transformer engineered for stylistic text generation, trained on classical poetry and Shakespearean plays to capture rhythmic patterns and linguistic nuances.',
          links: [
            { type: 'github', label: 'Poem Generator', url: 'https://github.com/Squenger/French-poem-generator' },
          ],
        },
      ],
    },
    experiencePage: {
      heading: 'Experience',
      items: [
        {
          period: 'Mar – Aug 2026',
          role: 'Research Internship',
          institution: 'Université du Québec à Trois-Rivières (UQTR)',
          description:
            'Near real-time 3D reconstruction based on deep learning for micro-CT integration into a 3D printing digital twin. Mathematical transformations for cross-modal data correlation and generative volumetric synthesis.',
        },
        {
          period: 'Jan – Mar 2026',
          role: 'Industrial Image Correction',
          institution: 'VALEO',
          description:
            'Computer vision pipeline for automated image registration and centering (ORB, RANSAC) for industrial quality control of car logos, achieving < 0.5% precision error.',
        },
        {
          period: 'May – Aug 2025',
          role: 'Internship',
          institution: 'Aurea Technology',
          description:
            'Entangled photon source for satellite quantum communications (ESA TeQuantS). Developed an EDFA system achieving 10 dB signal amplification.',
        },
        {
          period: 'Sept 2024 – Jul 2025',
          role: 'Co-founder, Innovation Program',
          institution: 'VITAIM',
          description:
            'Led technical development for a post-quantum cryptography (PQC) startup. Winner of the Paris-Saclay Entrepreneurship Pitch Competition.',
        },
        {
          period: 'Sept 2024 – Jun 2025',
          role: 'Oral Examiner in Preparatory Class',
          institution: 'Lycée du Parc des Loges',
          description: 'Mathematics oral examiner for engineering school preparatory classes (PSI).',
        },
      ],
    },
    educationPage: {
      heading: 'Education',
      items: [
        {
          period: '2026 – present',
          degree: 'Master MVA',
          institution: 'ENS Paris-Saclay',
          details: 'Master of Applied Mathematics focusing on Machine Learning and Artificial Intelligence.',
          courses:
            'Courses: Time Series Learning, Optimization, Advanced Learning for Text and Graph Data, Computer Vision, Deep Learning, Robotics, Foundations of Large Language Models, Computational Statistics.',
        },
        {
          period: '2024 – 2026',
          degree: 'Master ATSI',
          institution: 'Université Paris-Saclay',
          details: 'Computer Vision, Deep Learning architectures, and Applied Optimization.',
          courses: null,
        },
        {
          period: '2023 – 2026',
          degree: 'Engineering Student',
          institution: "Institut d'Optique (IOGS)",
          details: 'Mathematical modeling, Image Processing, Quantum physics. GPA: 4/4.',
          courses: null,
        },
        {
          period: '2023 – 2024',
          degree: "Mathematics Bachelor's Degree",
          institution: 'Université Paris-Saclay',
          details: 'Analysis, algebra, probability.',
          courses: null,
        },
        {
          period: '2021 – 2023',
          degree: 'Preparatory Class (CPGE MPSI/MP*)',
          institution: 'Lycée Saint-Louis, Paris',
          details: 'Intensive preparatory classes in Mathematics and Computer Science.',
          courses: null,
        },
      ],
    },
    skills: [
      { category: 'Machine Learning & AI', items: 'LLMs, MLLMs, DPO, Generative AI, Sequence Modeling, PyTorch, Scikit-learn' },
      { category: 'Computer Vision & 3D', items: '3D Vision, Point Clouds, Volumetric Reconstruction, Image Registration, OpenCV' },
      { category: 'Robotics & Optimization', items: 'VLA Policies, Control Systems, Mathematical Modeling, Time Series, Git, LaTeX' },
      { category: 'Languages', items: 'French (native), English (TOEIC C1), German (beginner)' },
    ],
    contactPage: {
      heading: 'Contact',
      subtitle: 'Feel free to reach out for research collaborations, opportunities, or academic inquiries.',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      revealAction: 'Reveal',
      sendAction: 'Mail',
      copyAction: 'Copy',
      copiedToast: 'Email copied to clipboard',
    },
  },

  fr: {
    sidebar: {
      role: 'Master MVA · ENS Paris-Saclay',
      meta: 'Machine Learning · Vision 3D · Robotique · LLM',
      themeLight: 'Clair',
      themeDark: 'Sombre',
    },
    nav: {
      overview: 'Présentation',
      projects: 'Projets',
      experience: 'Expériences',
      education: 'Formation',
      contact: 'Contact',
    },
    overview: {
      heading: 'Aimine Meddeb',
      summary:
        "Étudiant en dernière année du Master MVA à l'ENS Paris-Saclay et élève-ingénieur à l'Institut d'Optique (IOGS), spécialisé en Machine Learning, Vision 3D, Robotique et LLM. Je m'intéresse particulièrement aux politiques robotiques 3D, à l'IA multimodale et aux modèles génératifs.",
      selectedTitle: 'Projets Récents',
      allProjectsLink: 'Tous les projets →',
      skillsTitle: 'Compétences & Langues',
    },
    projectsPage: {
      heading: 'Projets',
      subtitle: 'Reproductions de papiers de recherche et implémentations en robotique, vision multimodale et IA générative.',
      filters: [
        { id: 'all', label: 'Tous' },
        { id: 'robotics', label: 'Robotique & 3D' },
        { id: 'vision', label: 'Vision & Multimodal' },
        { id: 'nlp', label: 'NLP & Génératif' },
      ],
      items: [
        {
          id: 'pointact',
          wide: true,
          year: '2026',
          category: 'robotics',
          categoryLabel: 'Robotique & 3D',
          venue: 'Shizhe Chen, Paul Pacaud & Cordelia Schmid · Inria / ENS · RSS 2026',
          title: 'PointACT — Politique Vision-Langage-Action 3D',
          shortDesc:
            "Reproduction de la politique VLA 3D à double système de l'équipe Inria (backbone VLM figé + expert point-action multi-échelles).",
          description:
            "Reproduction et expérimentations autour de PointACT, une politique Vision-Langage-Action (VLA) 3D à double système conçue par l'équipe de Shizhe Chen à l'Inria. Elle conserve un backbone VLM pré-entraîné figé pour la sémantique et lui associe un expert point-action exploitant des nuages de points 3D multi-échelles par attention fenêtrée pour la manipulation robotique.",
          links: [
            { type: 'paper', label: 'Article (arXiv:2605.21414)', url: 'https://arxiv.org/abs/2605.21414' },
            { type: 'github', label: 'GitHub · robot-PointAct', url: 'https://github.com/Squenger/robot-PointAct' },
          ],
        },
        {
          id: 'egoblind',
          wide: false,
          year: '2025 – 2026',
          category: 'vision',
          categoryLabel: 'Vision & Multimodal',
          venue: 'NeurIPS 2025 · Datasets & Benchmarks Track',
          title: 'EgoBlind — Assistance Visuelle Égocentrique',
          shortDesc:
            'Étude du premier benchmark VideoQA égocentrique collecté auprès de personnes aveugles (1 392 vidéos, 5 311 questions) pour évaluer les MLLM.',
          description:
            "Projet autour d'EgoBlind, le premier benchmark VideoQA égocentrique collecté auprès de personnes aveugles et malvoyantes pour évaluer les capacités d'assistance visuelle des MLLM au quotidien (navigation, cuisine, courses, déplacements). Avec 1 392 vidéos en vue subjective et 5 311 questions en contexte, il met en évidence l'écart entre les MLLM actuels (~60 %) et la performance humaine (87,4 %).",
          links: [
            { type: 'paper', label: 'Article (arXiv:2503.08221)', url: 'https://arxiv.org/abs/2503.08221' },
          ],
        },
        {
          id: 'music-dpo',
          wide: false,
          year: '2026',
          category: 'nlp',
          categoryLabel: 'NLP & Génératif',
          venue: 'Transformer · DPO · MidiBert',
          title: 'AI-Driven Music Generator',
          shortDesc: 'Modèle génératif MIDI aligné par DPO avec un réseau MidiBert converti en juge musical.',
          description:
            "Modèle génératif MIDI basé sur une architecture Transformer avec Direct Preference Optimization (DPO). Réutilisation d'un réseau MidiBert pré-entraîné en « juge musical » pour améliorer la qualité harmonique et la cohérence.",
          links: [
            { type: 'github', label: 'Music Model', url: 'https://github.com/Squenger/Music_Generation_Transformers' },
            { type: 'github', label: 'MidiBert Judge', url: 'https://github.com/Squenger/converting-MidiBERT-into-a-Judge' },
          ],
        },
        {
          id: 'face-rec',
          wide: false,
          year: '2026',
          category: 'vision',
          categoryLabel: 'Vision & Multimodal',
          venue: 'CNN · Triplet Loss',
          title: 'Deep Learning Facial Recognition System',
          shortDesc: "Pipeline CNN + Triplet Loss atteignant 90 % de précision pour l'étiquetage photo automatisé.",
          description:
            "Pipeline complet de vision par ordinateur utilisant des CNN et la Triplet Loss, atteignant 90 % de précision dans l'apprentissage d'embeddings faciaux robustes pour l'étiquetage automatisé en photographie.",
          links: [
            {
              type: 'github',
              label: 'Recognition System',
              url: 'https://github.com/Squenger/PAI_2025_Leonard_Aimine_Reconnaissance_faciale_automatisee',
            },
            {
              type: 'github',
              label: 'DL Model',
              url: 'https://github.com/Squenger/Face_recognition_Deep_Learning_triplet_loss',
            },
          ],
        },
        {
          id: 'literary-style',
          wide: false,
          year: '2026',
          category: 'nlp',
          categoryLabel: 'NLP & Génératif',
          venue: 'Decoder-only Transformer',
          title: 'Generative Literary Style Transfer',
          shortDesc: 'Transformer Decoder-only entraîné sur de la poésie classique et les pièces de Shakespeare.',
          description:
            "Transformer Decoder-only conçu pour la génération stylistique, entraîné sur de la poésie classique et des pièces de Shakespeare afin de capturer des motifs rythmiques et des nuances linguistiques.",
          links: [
            { type: 'github', label: 'Poem Generator', url: 'https://github.com/Squenger/French-poem-generator' },
          ],
        },
      ],
    },
    experiencePage: {
      heading: 'Expériences',
      items: [
        {
          period: 'Mars – Août 2026',
          role: 'Stage de Recherche',
          institution: 'Université du Québec à Trois-Rivières (UQTR)',
          description:
            "Reconstruction 3D quasi temps réel par deep learning pour l'intégration micro-CT dans un jumeau numérique d'impression 3D. Transformations mathématiques cross-modales et synthèse volumétrique générative.",
        },
        {
          period: 'Janv. – Mars 2026',
          role: "Correction d'Images Industrielles",
          institution: 'VALEO',
          description:
            "Pipeline de vision par ordinateur pour le recalage et le centrage automatisés d'images (ORB, RANSAC) pour le contrôle qualité de logos automobiles, avec un taux d'erreur < 0,5 %.",
        },
        {
          period: 'Mai – Août 2025',
          role: 'Stage',
          institution: 'Aurea Technology',
          description:
            "Source de photons intriqués pour les communications quantiques par satellite (ESA TeQuantS). Développement d'un système EDFA atteignant 10 dB d'amplification.",
        },
        {
          period: 'Sept. 2024 – Juil. 2025',
          role: 'Co-fondateur, Programme Innovation',
          institution: 'VITAIM',
          description:
            'Direction technique pour une startup en cryptographie post-quantique (PQC). Lauréat du concours de pitch entrepreneurial Paris-Saclay.',
        },
        {
          period: 'Sept. 2024 – Juin 2025',
          role: 'Examinateur Oral en Classe Préparatoire',
          institution: 'Lycée du Parc des Loges',
          description: 'Examinateur oral (colleur) en mathématiques pour les classes préparatoires PSI.',
        },
      ],
    },
    educationPage: {
      heading: 'Formation',
      items: [
        {
          period: '2026 – présent',
          degree: 'Master MVA',
          institution: 'ENS Paris-Saclay',
          details: "Master de Mathématiques Appliquées axé sur le Machine Learning et l'Intelligence Artificielle.",
          courses:
            'Cours : Time Series Learning, Optimization, Advanced Learning for Text and Graph Data, Computer Vision, Deep Learning, Robotics, Foundations of Large Language Models, Computational Statistics.',
        },
        {
          period: '2024 – 2026',
          degree: 'Master ATSI',
          institution: 'Université Paris-Saclay',
          details: 'Vision par Ordinateur, architectures de Deep Learning et Optimisation Appliquée.',
          courses: null,
        },
        {
          period: '2023 – 2026',
          degree: 'Élève Ingénieur',
          institution: "Institut d'Optique (IOGS)",
          details: "Modélisation mathématique, Traitement d'images, Physique quantique. GPA : 4/4.",
          courses: null,
        },
        {
          period: '2023 – 2024',
          degree: 'Licence de Mathématiques',
          institution: 'Université Paris-Saclay',
          details: 'Analyse, algèbre, probabilités.',
          courses: null,
        },
        {
          period: '2021 – 2023',
          degree: 'Classes Préparatoires (CPGE MPSI/MP*)',
          institution: 'Lycée Saint-Louis, Paris',
          details: 'Classes préparatoires intensives en Mathématiques et Informatique.',
          courses: null,
        },
      ],
    },
    skills: [
      { category: 'Machine Learning & IA', items: 'LLM, MLLM, DPO, IA Générative, Modélisation de Séquences, PyTorch, Scikit-learn' },
      { category: 'Vision & 3D', items: "Vision 3D, Nuages de Points, Reconstruction Volumétrique, Recalage d'Images, OpenCV" },
      { category: 'Robotique & Optimisation', items: 'Politiques VLA, Contrôle, Modélisation Mathématique, Séries Temporelles, Git, LaTeX' },
      { category: 'Langues', items: 'Français (natif), Anglais (TOEIC C1), Allemand (débutant)' },
    ],
    contactPage: {
      heading: 'Contact',
      subtitle: 'Pour toute collaboration de recherche, opportunité ou échange académique.',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      revealAction: 'Afficher',
      sendAction: 'Écrire',
      copyAction: 'Copier',
      copiedToast: 'Adresse email copiée',
    },
  },
};

const VALID_ROUTES = ['overview', 'projects', 'experience', 'education', 'contact'];
let currentRoute = 'overview';
let currentLang = localStorage.getItem('aimine-lang') === 'fr' ? 'fr' : 'en';
let currentProjectFilter = 'all';

function getRouteFromHash() {
  const hash = window.location.hash.replace('#', '').trim().toLowerCase();
  return VALID_ROUTES.includes(hash) ? hash : 'overview';
}

function navigateTo(route, event) {
  if (event) event.preventDefault();
  if (!VALID_ROUTES.includes(route)) route = 'overview';
  currentRoute = route;
  if (window.location.hash !== '#' + route) {
    window.history.pushState({ route }, '', '#' + route);
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  renderApp();
}

function setLanguage(lang) {
  currentLang = lang === 'fr' ? 'fr' : 'en';
  localStorage.setItem('aimine-lang', currentLang);
  document.documentElement.lang = currentLang;
  renderApp();
}

function setProjectFilter(filterId) {
  currentProjectFilter = filterId;
  renderApp();
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('aimine-theme', isDark ? 'dark' : 'light');
  updateChrome();
}

function initTheme() {
  const saved = localStorage.getItem('aimine-theme');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function updateChrome() {
  const t = DATA[currentLang];
  const isDark = document.documentElement.classList.contains('dark');

  const roleEl = document.getElementById('brand-role');
  const metaEl = document.getElementById('brand-meta');
  if (roleEl) roleEl.textContent = t.sidebar.role;
  if (metaEl) metaEl.textContent = t.sidebar.meta;

  document.querySelectorAll('[data-route]').forEach((el) => {
    const route = el.getAttribute('data-route');
    if (t.nav[route]) el.textContent = t.nav[route];
    el.classList.toggle('is-active', route === currentRoute);
  });

  document.querySelectorAll('.lang-btn-en').forEach((b) => b.classList.toggle('is-active', currentLang === 'en'));
  document.querySelectorAll('.lang-btn-fr').forEach((b) => b.classList.toggle('is-active', currentLang === 'fr'));

  document.querySelectorAll('.theme-label').forEach((el) => {
    el.textContent = isDark ? t.sidebar.themeLight : t.sidebar.themeDark;
  });
}

function renderLinkChip(link) {
  const isPaper = link.type === 'paper';
  const cls = isPaper ? 'link-chip link-chip--paper' : 'link-chip link-chip--github';
  const icon = isPaper ? ICONS.paper : ICONS.github;
  return `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="${cls}">${icon}<span>${link.label}</span></a>`;
}

function renderOverviewPage() {
  const ov = DATA[currentLang].overview;
  const selected = DATA[currentLang].projectsPage.items.slice(0, 2);
  const skills = DATA[currentLang].skills;

  const selectedHtml = selected
    .map(
      (p) => `
      <div class="selected-row">
        <div>
          <h3 class="selected-title">${p.title}</h3>
          <p class="selected-desc">${p.shortDesc}</p>
        </div>
        <div class="selected-actions">
          ${p.links.map(renderLinkChip).join('')}
        </div>
      </div>
    `
    )
    .join('');

  const skillsHtml = skills
    .map(
      (s) => `
      <div class="skills-row">
        <dt>${s.category}</dt>
        <dd>${s.items}</dd>
      </div>
    `
    )
    .join('');

  return `
    <div class="view-fade">
      <section class="section-block">
        <h1 class="page-heading">${ov.heading}</h1>
        <p class="page-lead">${ov.summary}</p>
      </section>

      <section class="section-block">
        <div class="section-header">
          <h2 class="section-title">${ov.selectedTitle}</h2>
          <a href="#projects" onclick="navigateTo('projects', event)" class="inline-link">${ov.allProjectsLink}</a>
        </div>
        <div class="selected-list">${selectedHtml}</div>
      </section>

      <section class="section-block">
        <div class="section-header">
          <h2 class="section-title">${ov.skillsTitle}</h2>
        </div>
        <dl class="skills-dl">${skillsHtml}</dl>
      </section>
    </div>
  `;
}

function renderProjectsPage() {
  const page = DATA[currentLang].projectsPage;
  const filtered = page.items.filter((i) => currentProjectFilter === 'all' || i.category === currentProjectFilter);

  const tabsHtml = page.filters
    .map(
      (tab) => `
      <button type="button" onclick="setProjectFilter('${tab.id}')" class="filter-tab ${tab.id === currentProjectFilter ? 'is-active' : ''}">
        ${tab.label}
      </button>
    `
    )
    .join('');

  const cardsHtml = filtered
    .map((p) => {
      const wideClass = p.wide && currentProjectFilter === 'all' ? 'is-wide' : '';
      return `
        <article class="project-item ${wideClass}">
          <div>
            <div class="project-top">
              <span class="project-cat">${p.categoryLabel}</span>
              <span class="project-year">${p.year}</span>
            </div>
            <h2 class="project-name">${p.title}</h2>
            ${p.venue ? `<p class="project-venue">${p.venue}</p>` : ''}
            <p class="project-desc">${p.description}</p>
          </div>
          <div class="project-links">
            ${p.links.map(renderLinkChip).join('')}
          </div>
        </article>
      `;
    })
    .join('');

  return `
    <div class="view-fade">
      <section class="section-block" style="margin-bottom:28px;">
        <h1 class="page-heading">${page.heading}</h1>
        <p class="page-lead">${page.subtitle}</p>
      </section>

      <div class="filter-tabs" role="tablist">${tabsHtml}</div>
      <section class="projects-grid">${cardsHtml}</section>
    </div>
  `;
}

function renderExperiencePage() {
  const page = DATA[currentLang].experiencePage;
  const rows = page.items
    .map(
      (e) => `
      <article class="entry-row">
        <div class="entry-date">${e.period}</div>
        <div>
          <h2 class="entry-title">${e.role}</h2>
          <p class="entry-org">${e.institution}</p>
          <p class="entry-desc">${e.description}</p>
        </div>
      </article>
    `
    )
    .join('');

  return `
    <div class="view-fade">
      <section class="section-block" style="margin-bottom:28px;">
        <h1 class="page-heading">${page.heading}</h1>
      </section>
      <div class="entry-list">${rows}</div>
    </div>
  `;
}

function renderEducationPage() {
  const page = DATA[currentLang].educationPage;
  const rows = page.items
    .map(
      (e) => `
      <article class="entry-row">
        <div class="entry-date">${e.period}</div>
        <div>
          <h2 class="entry-title">${e.degree}</h2>
          <p class="entry-org">${e.institution}</p>
          <p class="entry-desc">${e.details}</p>
          ${e.courses ? `<p class="entry-note">${e.courses}</p>` : ''}
        </div>
      </article>
    `
    )
    .join('');

  return `
    <div class="view-fade">
      <section class="section-block" style="margin-bottom:28px;">
        <h1 class="page-heading">${page.heading}</h1>
      </section>
      <div class="entry-list">${rows}</div>
    </div>
  `;
}

function renderContactPage() {
  const p = DATA[currentLang].contactPage;
  const emailVal = isEmailRevealed
    ? `<button type="button" onclick="openObfuscatedMail()" class="inline-link" style="font-family:var(--font-mono); font-size:13.5px;">${getAssembledEmail()}</button>`
    : `<span style="user-select:none;">${getMaskedEmail()}</span>`;

  const emailActions = isEmailRevealed
    ? `
      <button type="button" onclick="openObfuscatedMail()" class="link-chip link-chip--paper">${p.sendAction}</button>
      <button type="button" onclick="copyEmail()" class="link-chip link-chip--github">${p.copyAction}</button>
    `
    : `
      <button type="button" onclick="revealEmailAddress()" class="link-chip link-chip--paper">${p.revealAction}</button>
      <button type="button" onclick="copyEmail()" class="link-chip link-chip--github">${p.copyAction}</button>
    `;

  return `
    <div class="view-fade">
      <section class="section-block" style="margin-bottom:32px;">
        <h1 class="page-heading">${p.heading}</h1>
        <p class="page-lead">${p.subtitle}</p>
      </section>

      <dl class="contact-list">
        <div class="contact-row">
          <dt class="contact-label">${p.emailLabel}</dt>
          <dd class="contact-val">
            ${emailVal}
            <div class="contact-actions">${emailActions}</div>
          </dd>
        </div>
        <div class="contact-row">
          <dt class="contact-label">${p.githubLabel}</dt>
          <dd class="contact-val">
            <a href="https://github.com/Squenger" target="_blank" rel="noopener noreferrer" class="inline-link">github.com/Squenger</a>
          </dd>
        </div>
        <div class="contact-row">
          <dt class="contact-label">${p.linkedinLabel}</dt>
          <dd class="contact-val">
            <a href="https://linkedin.com/in/aimine-meddeb-a2b352248/" target="_blank" rel="noopener noreferrer" class="inline-link">linkedin.com/in/aimine-meddeb-a2b352248</a>
          </dd>
        </div>
      </dl>
    </div>
  `;
}

function renderApp() {
  updateChrome();
  const container = document.getElementById('app-view');
  switch (currentRoute) {
    case 'projects':
      container.innerHTML = renderProjectsPage();
      break;
    case 'experience':
      container.innerHTML = renderExperiencePage();
      break;
    case 'education':
      container.innerHTML = renderEducationPage();
      break;
    case 'contact':
      container.innerHTML = renderContactPage();
      break;
    case 'overview':
    default:
      container.innerHTML = renderOverviewPage();
      break;
  }
}

function copyEmail() {
  const email = getAssembledEmail();
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(email)
      .then(() => showToast(DATA[currentLang].contactPage.copiedToast))
      .catch(() => fallbackCopy(email));
  } else {
    fallbackCopy(email);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(DATA[currentLang].contactPage.copiedToast);
  } catch (err) {
    console.error('Copy failed', err);
  }
  document.body.removeChild(textarea);
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

window.addEventListener('hashchange', () => {
  currentRoute = getRouteFromHash();
  renderApp();
});

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  document.documentElement.lang = currentLang;
  currentRoute = getRouteFromHash();
  renderApp();
});
