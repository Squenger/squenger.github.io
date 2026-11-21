/**
 * Aimine Meddeb — Personal Academic & Research Portfolio
 * Interactive SPA router, EN/FR localization, theme persistence,
 * and contextual widescreen margin rails.
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

/* Inline SVG Icons */
const ICONS = {
  paper: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
};

/* Institutional logos with clean monospace crest fallback */
const INSTITUTION_BRANDS = {
  ens: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_ENS_Paris-Saclay.svg/320px-Logo_ENS_Paris-Saclay.svg.png',
    alt: 'ENS Paris-Saclay',
    monogram: 'ENS',
  },
  upsaclay: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Logo_cartouche_Universit%C3%A9_Paris-Saclay.png/320px-Logo_cartouche_Universit%C3%A9_Paris-Saclay.png',
    alt: 'Université Paris-Saclay',
    monogram: 'UPS',
  },
  iogs: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Logo_Institut_d%27Optique_Graduate_School.svg/320px-Logo_Institut_d%27Optique_Graduate_School.svg.png',
    alt: "Institut d'Optique (IOGS)",
    monogram: 'IOGS',
  },
  saintlouis: {
    url: null,
    alt: 'Lycée Saint-Louis',
    monogram: 'SL',
  },
  uqtr: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Logo_UQTR.svg/320px-Logo_UQTR.svg.png',
    alt: 'Université du Québec à Trois-Rivières',
    monogram: 'UQTR',
  },
  valeo: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Valeo_Logo.svg/320px-Valeo_Logo.svg.png',
    alt: 'VALEO',
    monogram: 'VALEO',
  },
  aurea: {
    url: null,
    alt: 'Aurea Technology',
    monogram: 'AT',
  },
  vitaim: {
    url: null,
    alt: 'VITAIM',
    monogram: 'VITAIM',
  },
  parcdesloges: {
    url: null,
    alt: 'Lycée du Parc des Loges',
    monogram: 'LPL',
  },
};

function renderInstitutionEmblem(brandKey) {
  const brand = INSTITUTION_BRANDS[brandKey];
  if (!brand) return '';
  if (!brand.url) {
    return `<div class="institution-emblem" title="${brand.alt}"><span class="crest-fallback">${brand.monogram}</span></div>`;
  }
  return `
    <div class="institution-emblem" title="${brand.alt}">
      <img
        src="${brand.url}"
        alt="${brand.alt}"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';"
      />
      <span class="crest-fallback" style="display:none;">${brand.monogram}</span>
    </div>
  `;
}

/* Color accent mapping by domain/category */
const CATEGORY_STYLES = {
  robotics: {
    accent: 'var(--accent-terracotta)',
    bg: 'var(--accent-terracotta-soft)',
    border: 'var(--accent-terracotta-border)',
  },
  vision: {
    accent: 'var(--accent-pine)',
    bg: 'var(--accent-pine-soft)',
    border: 'var(--accent-pine-border)',
  },
  nlp: {
    accent: 'var(--accent-prussian)',
    bg: 'var(--accent-prussian-soft)',
    border: 'var(--accent-prussian-border)',
  },
};

/* ==========================================================================
   Bilingual Dataset (EN / FR)
   ========================================================================== */

const DATA = {
  en: {
    rail: {
      location: 'Paris-Saclay, FR',
      rolePrefix: 'MVA Master Student',
      roleOrg: 'ENS Paris-Saclay',
      roleSub: 'Machine Learning · 3D Vision · Robotics · LLMs',
      emailShort: 'Email',
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
      kicker: 'Master MVA · ENS Paris-Saclay',
      name: 'Aimine Meddeb',
      summary:
        'Final-year student in the Master MVA program at ENS Paris-Saclay, specializing in Machine Learning, Computer Vision, Robotics, and Large Language Models. I combine a strong foundation in applied mathematics and optical engineering with hands-on research in 3D-aware robotic policies, multimodal assistants, and generative modeling.',
      ctaProjects: 'Explore Projects',
      ctaContact: 'Get in Touch',
      featuredHeading: 'Recent Research Spotlights',
      featuredAll: 'View all 5 projects →',
      directoryHeading: 'Portfolio Sections',
      cards: [
        {
          route: 'projects',
          accent: 'var(--accent-terracotta)',
          title: 'Research & Projects',
          desc: 'PointACT 3D VLA reproduction (Inria), EgoBlind visual assistance, DPO music generation, facial embeddings, and style transfer.',
          action: 'Open Projects →',
        },
        {
          route: 'experience',
          accent: 'var(--accent-pine)',
          title: 'Work Experience',
          desc: 'Research internships at UQTR, VALEO, and Aurea Technology; co-founder at VITAIM and mathematics oral examiner in CPGE.',
          action: 'Open Experience →',
        },
        {
          route: 'education',
          accent: 'var(--accent-prussian)',
          title: 'Education',
          desc: 'Master MVA at ENS Paris-Saclay, Master ATSI at Université Paris-Saclay, Engineering Degree at IOGS (GPA 4/4), and CPGE MP*.',
          action: 'Open Education →',
        },
      ],
      areasHeading: 'Technical Domains & Languages',
    },
    projectsPage: {
      kicker: 'Selected Work & Research',
      title: 'Research & Projects',
      subtitle:
        'Hands-on implementations, paper reproductions, and research explorations across 3D robotic manipulation, egocentric multimodal AI, computer vision, and generative modeling.',
      filters: [
        { id: 'all', label: 'All' },
        { id: 'robotics', label: 'Robotics & 3D' },
        { id: 'vision', label: 'Vision & Multimodal' },
        { id: 'nlp', label: 'NLP & Generative' },
      ],
      items: [
        {
          id: 'pointact',
          featured: true,
          year: '2026',
          category: 'robotics',
          categoryLabel: 'Robotics & 3D',
          venue: 'Based on Shizhe Chen, Paul Pacaud & Cordelia Schmid · Inria / ENS · RSS 2026',
          title: 'PointACT — 3D-Aware Vision-Language-Action Policy',
          description:
            'Reproduction and experimental study of PointACT, a dual-system 3D-aware Vision-Language-Action (VLA) policy developed by Shizhe Chen’s team at Inria. The architecture keeps a frozen pretrained VLM backbone for semantic reasoning and couples it with a dedicated point-action expert that injects hierarchical multi-scale 3D point cloud features via bottleneck window self-attention, improving spatial grounding on LIBERO and RLBench manipulation benchmarks.',
          tags: ['VLA', '3D Point Clouds', 'Robotics', 'Point Transformer', 'Inria · RSS 2026'],
          links: [
            { type: 'paper', label: 'Paper (arXiv:2605.21414)', url: 'https://arxiv.org/abs/2605.21414' },
            { type: 'github', label: 'GitHub · robot-PointAct', url: 'https://github.com/Squenger/robot-PointAct' },
          ],
        },
        {
          id: 'egoblind',
          featured: false,
          year: '2025 – 2026',
          category: 'vision',
          categoryLabel: 'Vision & Multimodal',
          venue: 'NeurIPS 2025 · Datasets & Benchmarks Track',
          title: 'EgoBlind — Egocentric Visual Assistance for the Blind',
          description:
            'Research project centered on EgoBlind, the first egocentric VideoQA benchmark collected directly from blind and visually impaired users to evaluate Multimodal Large Language Models (MLLMs) in real-world assistive settings. Spanning 1,392 first-person daily-life videos (navigating streets, cooking, shopping, traveling) and 5,311 in-situation questions with multiple reference answers, it highlights major spatial and temporal reasoning gaps in current MLLMs (~60% vs 87.4% human performance) to guide more dependable AI visual assistants.',
          tags: ['Egocentric VideoQA', 'MLLMs', 'Assistive AI', 'Multimodal Benchmark'],
          links: [
            { type: 'paper', label: 'Paper (arXiv:2503.08221)', url: 'https://arxiv.org/abs/2503.08221' },
          ],
        },
        {
          id: 'music-dpo',
          featured: false,
          year: '2026',
          category: 'nlp',
          categoryLabel: 'NLP & Generative',
          venue: 'Preference Optimization & Symbolic Music',
          title: 'AI-Driven Music Generator',
          description:
            'Designed a generative MIDI model utilizing a Transformer architecture aligned with Direct Preference Optimization (DPO). Repurposed a pre-trained MidiBert network into a reward-based "music judge" to score harmonic quality, rhythmic structure, and musical consistency.',
          tags: ['Transformer', 'DPO', 'MidiBert', 'Generative MIDI'],
          links: [
            { type: 'github', label: 'Music Model', url: 'https://github.com/Squenger/Music_Generation_Transformers' },
            { type: 'github', label: 'MidiBert Judge', url: 'https://github.com/Squenger/converting-MidiBERT-into-a-Judge' },
          ],
        },
        {
          id: 'face-rec',
          featured: false,
          year: '2026',
          category: 'vision',
          categoryLabel: 'Vision & Multimodal',
          venue: 'Metric Learning & Computer Vision',
          title: 'Deep Learning Facial Recognition System',
          description:
            'Developed an end-to-end computer vision pipeline using Convolutional Neural Networks and Triplet Loss. Achieved 90% accuracy in learning robust facial embeddings for automated photo tagging and identity clustering.',
          tags: ['CNN', 'Triplet Loss', 'Facial Embeddings', 'Computer Vision'],
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
          featured: false,
          year: '2026',
          category: 'nlp',
          categoryLabel: 'NLP & Generative',
          venue: 'Autoregressive Language Modeling',
          title: 'Generative Literary Style Transfer',
          description:
            'Engineered a Decoder-only Transformer for stylistic text generation. Trained on classical poetry and Shakespearean plays to capture distinctive rhythmic meters, vocabulary, and linguistic nuances.',
          tags: ['Decoder-only Transformer', 'Stylistic Generation', 'NLP'],
          links: [
            { type: 'github', label: 'Poem Generator', url: 'https://github.com/Squenger/French-poem-generator' },
          ],
        },
      ],
    },
    experiencePage: {
      kicker: 'Research, Industry & Leadership',
      title: 'Work Experience',
      subtitle:
        'Research internships in 3D deep learning and photonics, industrial computer vision, post-quantum startup leadership, and academic examination.',
      items: [
        {
          period: 'Mar 2026 – Aug 2026',
          tag: 'Research',
          tagStyle: 'terracotta',
          role: 'Research Internship',
          institution: 'Université du Québec à Trois-Rivières (UQTR)',
          brand: 'uqtr',
          description:
            'Near real-time 3D reconstruction based on deep learning for micro-CT integration into a 3D printing digital twin. Engineered mathematical transformations for cross-modal data correlation and designed a generative neural network architecture to synthesize high-resolution volumetric data.',
        },
        {
          period: 'Jan 2026 – Mar 2026',
          tag: 'Industry · CV',
          tagStyle: 'pine',
          role: 'Industrial Image Correction',
          institution: 'VALEO',
          brand: 'valeo',
          description:
            'Developed a computer vision pipeline for automated image registration and centering using ORB and RANSAC. Optimized the algorithm for industrial-scale quality control of car logos, achieving a precision error rate of less than 0.5%.',
        },
        {
          period: 'May 2025 – Aug 2025',
          tag: 'Photonics',
          tagStyle: 'prussian',
          role: 'Internship',
          institution: 'Aurea Technology',
          brand: 'aurea',
          description:
            'Designed a source of entangled photons for satellite-based quantum communications (ESA TeQuantS). Developed an EDFA system achieving 10 dB signal amplification.',
        },
        {
          period: 'Sept 2024 – Jul 2025',
          tag: 'Startup',
          tagStyle: 'ochre',
          role: 'Co-founder, Innovation Program',
          institution: 'VITAIM',
          brand: 'vitaim',
          description:
            'Led technical development for a startup specializing in post-quantum cryptography (PQC). Winner of the Paris-Saclay Entrepreneurship Pitch Competition.',
        },
        {
          period: 'Sept 2024 – Jun 2025',
          tag: 'Teaching',
          tagStyle: 'pine',
          role: 'Oral Examiner in Preparatory Class',
          institution: 'Lycée du Parc des Loges',
          brand: 'parcdesloges',
          description:
            'Mathematics oral examiner (colleur) for engineering school preparatory classes (PSI).',
        },
      ],
    },
    educationPage: {
      kicker: 'Academic Background',
      title: 'Education',
      subtitle:
        'Applied mathematics, machine learning, computer vision, and optical engineering across leading French institutions.',
      items: [
        {
          period: '2026 – present',
          tag: 'Master M2',
          tagStyle: 'terracotta',
          degree: 'Master MVA',
          institution: 'ENS Paris-Saclay',
          brand: 'ens',
          details:
            'Master of Applied Mathematics (Mathématiques, Vision, Apprentissage) focusing on Machine Learning and Artificial Intelligence.',
          courses:
            'Courses: Time Series Learning, Optimization, Advanced Learning for Text and Graph Data, Computer Vision, Deep Learning, Robotics, Foundations of Large Language Models, Computational Statistics.',
        },
        {
          period: '2024 – 2026',
          tag: 'Master',
          tagStyle: 'prussian',
          degree: 'Master ATSI',
          institution: 'Université Paris-Saclay',
          brand: 'upsaclay',
          details:
            'Specialized in Computer Vision, Deep Learning architectures, and Applied Optimization.',
          courses: null,
        },
        {
          period: '2023 – 2026',
          tag: 'GPA 4/4',
          tagStyle: 'ochre',
          degree: 'Engineering Student (Diplôme d’Ingénieur)',
          institution: "Institut d'Optique (IOGS)",
          brand: 'iogs',
          details: 'Mathematical modeling, Image Processing, Quantum physics. GPA: 4/4.',
          courses: null,
        },
        {
          period: '2023 – 2024',
          tag: 'B.Sc.',
          tagStyle: 'pine',
          degree: "Mathematics Bachelor's Degree",
          institution: 'Université Paris-Saclay',
          brand: 'upsaclay',
          details: 'Analysis, algebra, and probability theory.',
          courses: null,
        },
        {
          period: '2021 – 2023',
          tag: 'CPGE MP*',
          tagStyle: 'prussian',
          degree: 'Preparatory Class (CPGE MPSI/MP*)',
          institution: 'Lycée Saint-Louis, Paris',
          brand: 'saintlouis',
          details: 'Intensive preparatory classes in Mathematics and Computer Science.',
          courses: null,
        },
      ],
    },
    skills: [
      {
        category: 'Machine Learning & AI',
        color: 'var(--accent-terracotta)',
        items: ['LLMs', 'MLLMs', 'DPO', 'Generative AI', 'Sequence Modeling', 'PyTorch', 'Scikit-learn'],
      },
      {
        category: 'Computer Vision & 3D',
        color: 'var(--accent-pine)',
        items: ['3D Vision', 'Point Cloud Processing', 'Volumetric Reconstruction', 'Image Registration', 'OpenCV'],
      },
      {
        category: 'Robotics & Optimization',
        color: 'var(--accent-prussian)',
        items: ['VLA Policies', 'Control Systems', 'Mathematical Modeling', 'Time Series', 'Git', 'LaTeX'],
      },
      {
        category: 'Languages',
        color: 'var(--accent-ochre)',
        items: ['French (Native)', 'English (TOEIC C1)', 'German (Beginner)'],
      },
    ],
    contactPage: {
      kicker: 'Correspondence',
      title: 'Contact',
      subtitle:
        'For research collaborations, PhD or R&D opportunities, or academic correspondence, feel free to reach out via email or connect on GitHub and LinkedIn.',
      emailLabel: 'Direct Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      revealAction: 'Reveal address',
      sendAction: 'Open mail client',
      copyAction: 'Copy address',
      visitAction: 'Open profile',
      copiedToast: 'Email address copied to clipboard',
    },
    aside: {
      overview: {
        snapshotTitle: 'At a Glance',
        stats: [
          { value: 'Master MVA', label: 'ENS Paris-Saclay · Final-year student' },
          { value: 'GPA 4.0 / 4.0', label: "Institut d'Optique (IOGS) Engineering" },
          { value: 'Pitch Winner', label: 'Paris-Saclay Entrepreneurship (VITAIM)' },
        ],
        focusTitle: 'Research Interests',
        focusItems: [
          '3D-Aware Vision-Language-Action (VLA) policies for robotic manipulation',
          'Egocentric multimodal understanding & assistive AI for the blind',
          'Generative volumetric reconstruction & preference optimization (DPO)',
        ],
        affiliationsTitle: 'Affiliations',
      },
      projects: {
        papersTitle: 'Featured Papers',
        papers: [
          {
            name: 'PointACT (RSS 2026)',
            meta: 'Inria / ENS · arXiv:2605.21414 ↗',
            url: 'https://arxiv.org/abs/2605.21414',
          },
          {
            name: 'EgoBlind (NeurIPS 2025)',
            meta: 'VideoQA Benchmark · arXiv:2503.08221 ↗',
            url: 'https://arxiv.org/abs/2503.08221',
          },
        ],
        repoTitle: 'Open Source',
        repoDesc: 'Codebases, reproductions, and MVA coursework repositories are published on GitHub.',
        repoCta: 'github.com/Squenger ↗',
      },
      experience: {
        impactTitle: 'Selected Impact',
        stats: [
          { value: '< 0.5% Error', label: 'Industrial logo registration pipeline at VALEO (ORB + RANSAC)' },
          { value: '10 dB Gain', label: 'EDFA optical amplification for ESA TeQuantS at Aurea Technology' },
          { value: '3D Digital Twin', label: 'Near real-time deep volumetric reconstruction at UQTR' },
        ],
        tracksTitle: 'Career Tracks',
        tracks: [
          'Academic & Applied AI Research (UQTR)',
          'Industrial Computer Vision & Photonics (VALEO, Aurea)',
          'Deep-Tech Entrepreneurship & Teaching (VITAIM, CPGE PSI)',
        ],
      },
      education: {
        courseworkTitle: 'MVA Core Coursework',
        courses: [
          'Computer Vision & Deep Learning',
          'Robotics & 3D Representations',
          'Foundations of Large Language Models',
          'Advanced Learning for Text & Graphs',
          'Optimization & Time Series Learning',
          'Computational Statistics',
        ],
        honorsTitle: 'Academic Distinctions',
        honors: [
          { value: '4.0 / 4.0 GPA', label: "Institut d'Optique Graduate School" },
          { value: 'CPGE MP*', label: 'Lycée Saint-Louis, Paris' },
        ],
      },
      contact: {
        topicsTitle: 'Open To',
        topics: [
          'Research internships & PhD discussions in Robotics / 3D Vision / MLLMs',
          'Open-source collaborations around PointACT & multimodal benchmarks',
          'Applied ML & computer vision engineering challenges',
        ],
        locationTitle: 'Location & Timezone',
        locationValue: 'Paris-Saclay, France',
        locationMeta: 'Central European Time (CET / CEST)',
      },
    },
  },

  fr: {
    rail: {
      location: 'Paris-Saclay, FR',
      rolePrefix: 'Étudiant Master MVA',
      roleOrg: 'ENS Paris-Saclay',
      roleSub: 'Machine Learning · Vision 3D · Robotique · LLM',
      emailShort: 'Email',
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
      kicker: 'Master MVA · ENS Paris-Saclay',
      name: 'Aimine Meddeb',
      summary:
        "Étudiant en dernière année du Master MVA à l'ENS Paris-Saclay, spécialisé en Machine Learning, Vision par Ordinateur, Robotique et Grands Modèles de Langage (LLM). J'associe une solide formation en mathématiques appliquées et ingénierie optique à des travaux concrets en politiques robotiques 3D, IA multimodale et modélisation générative.",
      ctaProjects: 'Voir les Projets',
      ctaContact: 'Me Contacter',
      featuredHeading: 'Projets de Recherche Mis en Avant',
      featuredAll: 'Voir les 5 projets →',
      directoryHeading: 'Explorer le Portfolio',
      cards: [
        {
          route: 'projects',
          accent: 'var(--accent-terracotta)',
          title: 'Recherche & Projets',
          desc: 'Reproduction PointACT (Inria), assistance visuelle EgoBlind, génération musicale par DPO, reconnaissance faciale et transfert de style.',
          action: 'Ouvrir les Projets →',
        },
        {
          route: 'experience',
          accent: 'var(--accent-pine)',
          title: 'Expériences Professionnelles',
          desc: "Stages de recherche à l'UQTR, VALEO et Aurea Technology ; co-fondateur de VITAIM et examinateur oral en CPGE.",
          action: 'Ouvrir les Expériences →',
        },
        {
          route: 'education',
          accent: 'var(--accent-prussian)',
          title: 'Formation',
          desc: "Master MVA à l'ENS Paris-Saclay, Master ATSI à l'Université Paris-Saclay, diplôme d'ingénieur IOGS (GPA 4/4) et CPGE MP*.",
          action: 'Ouvrir la Formation →',
        },
      ],
      areasHeading: 'Domaines Techniques & Langues',
    },
    projectsPage: {
      kicker: 'Travaux & Recherche',
      title: 'Recherche & Projets',
      subtitle:
        'Implémentations, reproductions de papiers de recherche et explorations en manipulation robotique 3D, IA multimodale égocentrique, vision par ordinateur et modèles génératifs.',
      filters: [
        { id: 'all', label: 'Tous' },
        { id: 'robotics', label: 'Robotique & 3D' },
        { id: 'vision', label: 'Vision & Multimodal' },
        { id: 'nlp', label: 'NLP & Génératif' },
      ],
      items: [
        {
          id: 'pointact',
          featured: true,
          year: '2026',
          category: 'robotics',
          categoryLabel: 'Robotique & 3D',
          venue: "D'après Shizhe Chen, Paul Pacaud & Cordelia Schmid · Inria / ENS · RSS 2026",
          title: 'PointACT — Politique Vision-Langage-Action 3D',
          description:
            "Reproduction et étude expérimentale de PointACT, une politique Vision-Langage-Action (VLA) 3D à double système conçue par l'équipe de Shizhe Chen à l'Inria. L'architecture associe un backbone VLM pré-entraîné figé pour la compréhension sémantique à un expert point-action dédié qui intègre des nuages de points 3D multi-échelles via une attention fenêtrée à goulot d'étranglement, améliorant la précision spatiale sur LIBERO et RLBench.",
          tags: ['VLA', 'Nuages de Points 3D', 'Robotique', 'Point Transformer', 'Inria · RSS 2026'],
          links: [
            { type: 'paper', label: 'Article (arXiv:2605.21414)', url: 'https://arxiv.org/abs/2605.21414' },
            { type: 'github', label: 'GitHub · robot-PointAct', url: 'https://github.com/Squenger/robot-PointAct' },
          ],
        },
        {
          id: 'egoblind',
          featured: false,
          year: '2025 – 2026',
          category: 'vision',
          categoryLabel: 'Vision & Multimodal',
          venue: 'NeurIPS 2025 · Datasets & Benchmarks Track',
          title: 'EgoBlind — Assistance Visuelle Égocentrique',
          description:
            "Projet autour d'EgoBlind, le premier benchmark VideoQA égocentrique collecté directement auprès de personnes aveugles et malvoyantes pour évaluer les grands modèles multimodaux (MLLM) en situation réelle d'assistance. Composé de 1 392 vidéos en vue à la première personne du quotidien (navigation, cuisine, courses, trajets) et de 5 311 questions posées en contexte, il met en évidence les limites actuelles des MLLM (~60 % contre 87,4 % chez l'humain) afin de guider des assistants visuels plus fiables.",
          tags: ['VideoQA Égocentrique', 'MLLM', 'IA Assistive', 'Benchmark Multimodal'],
          links: [
            { type: 'paper', label: 'Article (arXiv:2503.08221)', url: 'https://arxiv.org/abs/2503.08221' },
          ],
        },
        {
          id: 'music-dpo',
          featured: false,
          year: '2026',
          category: 'nlp',
          categoryLabel: 'NLP & Génératif',
          venue: 'Optimisation par Préférences & Musique Symbolique',
          title: 'AI-Driven Music Generator',
          description:
            "Conception d'un modèle génératif MIDI reposant sur une architecture Transformer alignée par Direct Preference Optimization (DPO). Réutilisation d'un réseau MidiBert pré-entraîné en « juge musical » basé sur la récompense pour améliorer la qualité harmonique et la cohérence rythmique.",
          tags: ['Transformer', 'DPO', 'MidiBert', 'MIDI Génératif'],
          links: [
            { type: 'github', label: 'Music Model', url: 'https://github.com/Squenger/Music_Generation_Transformers' },
            { type: 'github', label: 'MidiBert Judge', url: 'https://github.com/Squenger/converting-MidiBERT-into-a-Judge' },
          ],
        },
        {
          id: 'face-rec',
          featured: false,
          year: '2026',
          category: 'vision',
          categoryLabel: 'Vision & Multimodal',
          venue: 'Apprentissage Métrique & Vision par Ordinateur',
          title: 'Deep Learning Facial Recognition System',
          description:
            "Développement d'un pipeline de vision de bout en bout utilisant des réseaux de neurones convolutifs (CNN) et la Triplet Loss. Précision de 90 % atteinte dans l'apprentissage d'embeddings faciaux robustes pour l'étiquetage automatisé en photographie.",
          tags: ['CNN', 'Triplet Loss', 'Embeddings Faciaux', 'Vision par Ordinateur'],
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
          featured: false,
          year: '2026',
          category: 'nlp',
          categoryLabel: 'NLP & Génératif',
          venue: 'Modélisation de Langage Autorégressive',
          title: 'Generative Literary Style Transfer',
          description:
            "Conception d'un Transformer Decoder-only pour la génération stylistique. Entraîné sur de la poésie classique et des pièces de Shakespeare pour capturer des motifs rythmiques, un lexique et des nuances linguistiques uniques.",
          tags: ['Decoder-only Transformer', 'Génération Stylistique', 'NLP'],
          links: [
            { type: 'github', label: 'Poem Generator', url: 'https://github.com/Squenger/French-poem-generator' },
          ],
        },
      ],
    },
    experiencePage: {
      kicker: 'Recherche, Industrie & Leadership',
      title: 'Expériences Professionnelles',
      subtitle:
        'Stages de recherche en deep learning 3D et photonique, vision industrielle, entrepreneuriat deep-tech et enseignement en CPGE.',
      items: [
        {
          period: 'Mars 2026 – Août 2026',
          tag: 'Recherche',
          tagStyle: 'terracotta',
          role: 'Stage de Recherche',
          institution: 'Université du Québec à Trois-Rivières (UQTR)',
          brand: 'uqtr',
          description:
            "Reconstruction 3D quasi temps réel basée sur le deep learning pour l'intégration micro-CT dans un jumeau numérique d'impression 3D. Conception de transformations mathématiques pour la corrélation de données cross-modales et d'une architecture générative pour synthétiser des données volumétriques haute résolution.",
        },
        {
          period: 'Janv. 2026 – Mars 2026',
          tag: 'Industrie · CV',
          tagStyle: 'pine',
          role: "Correction d'Images Industrielles",
          institution: 'VALEO',
          brand: 'valeo',
          description:
            "Développement d'un pipeline de vision par ordinateur pour le recalage et le centrage automatisés d'images via ORB et RANSAC. Optimisation de l'algorithme pour le contrôle qualité industriel de logos automobiles, atteignant un taux d'erreur inférieur à 0,5 %.",
        },
        {
          period: 'Mai 2025 – Août 2025',
          tag: 'Photonique',
          tagStyle: 'prussian',
          role: 'Stage',
          institution: 'Aurea Technology',
          brand: 'aurea',
          description:
            "Conception d'une source de photons intriqués pour les communications quantiques par satellite (ESA TeQuantS). Développement d'un système EDFA atteignant une amplification du signal de 10 dB.",
        },
        {
          period: 'Sept. 2024 – Juil. 2025',
          tag: 'Startup',
          tagStyle: 'ochre',
          role: 'Co-fondateur, programme innovation',
          institution: 'VITAIM',
          brand: 'vitaim',
          description:
            "Direction du développement technique d'une startup spécialisée dans la cryptographie post-quantique (PQC). Lauréat du concours de pitch entrepreneurial Paris-Saclay.",
        },
        {
          period: 'Sept. 2024 – Juin 2025',
          tag: 'Enseignement',
          tagStyle: 'pine',
          role: 'Examinateur Oral en Classe Préparatoire',
          institution: 'Lycée du Parc des Loges',
          brand: 'parcdesloges',
          description:
            "Examinateur oral (colleur) en mathématiques pour les classes préparatoires aux grandes écoles d'ingénieurs (PSI).",
        },
      ],
    },
    educationPage: {
      kicker: 'Parcours Académique',
      title: 'Formation',
      subtitle:
        'Mathématiques appliquées, machine learning, vision par ordinateur et ingénierie optique au sein des grandes écoles et universités françaises.',
      items: [
        {
          period: '2026 – présent',
          tag: 'Master M2',
          tagStyle: 'terracotta',
          degree: 'Master MVA',
          institution: 'ENS Paris-Saclay',
          brand: 'ens',
          details:
            "Master de Mathématiques Appliquées (Mathématiques, Vision, Apprentissage) axé sur le Machine Learning et l'Intelligence Artificielle.",
          courses:
            'Cours : Time Series Learning, Optimization, Advanced Learning for Text and Graph Data, Computer Vision, Deep Learning, Robotics, Foundations of Large Language Models, Computational Statistics.',
        },
        {
          period: '2024 – 2026',
          tag: 'Master',
          tagStyle: 'prussian',
          degree: 'Master ATSI',
          institution: 'Université Paris-Saclay',
          brand: 'upsaclay',
          details:
            'Spécialisé en Vision par Ordinateur, architectures de Deep Learning et Optimisation Appliquée.',
          courses: null,
        },
        {
          period: '2023 – 2026',
          tag: 'GPA 4/4',
          tagStyle: 'ochre',
          degree: "Élève Ingénieur (Diplôme d'Ingénieur)",
          institution: "Institut d'Optique (IOGS)",
          brand: 'iogs',
          details: "Modélisation mathématique, Traitement d'images, Physique quantique. GPA : 4/4.",
          courses: null,
        },
        {
          period: '2023 – 2024',
          tag: 'Licence',
          tagStyle: 'pine',
          degree: 'Licence de Mathématiques',
          institution: 'Université Paris-Saclay',
          brand: 'upsaclay',
          details: 'Analyse, algèbre et probabilités.',
          courses: null,
        },
        {
          period: '2021 – 2023',
          tag: 'CPGE MP*',
          tagStyle: 'prussian',
          degree: 'Classes Préparatoires (CPGE MPSI/MP*)',
          institution: 'Lycée Saint-Louis, Paris',
          brand: 'saintlouis',
          details: 'Classes préparatoires intensives en Mathématiques et Informatique.',
          courses: null,
        },
      ],
    },
    skills: [
      {
        category: 'Machine Learning & IA',
        color: 'var(--accent-terracotta)',
        items: ['LLM', 'MLLM', 'DPO', 'IA Générative', 'Modélisation de Séquences', 'PyTorch', 'Scikit-learn'],
      },
      {
        category: 'Vision par Ordinateur & 3D',
        color: 'var(--accent-pine)',
        items: ['Vision 3D', 'Nuages de Points', 'Reconstruction Volumétrique', "Recalage d'Images", 'OpenCV'],
      },
      {
        category: 'Robotique & Optimisation',
        color: 'var(--accent-prussian)',
        items: ['Politiques VLA', 'Systèmes de Contrôle', 'Modélisation Mathématique', 'Séries Temporelles', 'Git', 'LaTeX'],
      },
      {
        category: 'Langues',
        color: 'var(--accent-ochre)',
        items: ['Français (Natif)', 'Anglais (TOEIC C1)', 'Allemand (Débutant)'],
      },
    ],
    contactPage: {
      kicker: 'Correspondance',
      title: 'Contact',
      subtitle:
        'Pour toute collaboration de recherche, opportunité en thèse ou R&D, ou échange académique, vous pouvez me joindre par email ou via GitHub et LinkedIn.',
      emailLabel: 'Email Direct',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      revealAction: "Afficher l'adresse",
      sendAction: 'Ouvrir la messagerie',
      copyAction: "Copier l'adresse",
      visitAction: 'Ouvrir le profil',
      copiedToast: 'Adresse email copiée',
    },
    aside: {
      overview: {
        snapshotTitle: 'En Bref',
        stats: [
          { value: 'Master MVA', label: 'ENS Paris-Saclay · Dernière année' },
          { value: 'GPA 4.0 / 4.0', label: "Institut d'Optique (IOGS) · Ingénieur" },
          { value: 'Lauréat Pitch', label: 'Entrepreneuriat Paris-Saclay (VITAIM)' },
        ],
        focusTitle: 'Axes de Recherche',
        focusItems: [
          'Politiques Vision-Langage-Action (VLA) 3D pour la manipulation robotique',
          'Compréhension multimodale égocentrique & IA assistive (EgoBlind)',
          'Reconstruction volumétrique générative & alignement par préférences (DPO)',
        ],
        affiliationsTitle: 'Affiliations',
      },
      projects: {
        papersTitle: 'Papiers Associés',
        papers: [
          {
            name: 'PointACT (RSS 2026)',
            meta: 'Inria / ENS · arXiv:2605.21414 ↗',
            url: 'https://arxiv.org/abs/2605.21414',
          },
          {
            name: 'EgoBlind (NeurIPS 2025)',
            meta: 'Benchmark VideoQA · arXiv:2503.08221 ↗',
            url: 'https://arxiv.org/abs/2503.08221',
          },
        ],
        repoTitle: 'Open Source',
        repoDesc: 'Mes implémentations, reproductions de papiers et travaux du MVA sont disponibles sur GitHub.',
        repoCta: 'github.com/Squenger ↗',
      },
      experience: {
        impactTitle: 'Résultats Clés',
        stats: [
          { value: '< 0,5 % Erreur', label: 'Pipeline de recalage industriel chez VALEO (ORB + RANSAC)' },
          { value: 'Gain de 10 dB', label: 'Amplification optique EDFA pour ESA TeQuantS chez Aurea' },
          { value: 'Jumeau 3D', label: 'Reconstruction volumétrique quasi temps réel à l’UQTR' },
        ],
        tracksTitle: 'Domaines',
        tracks: [
          'Recherche académique & IA appliquée (UQTR)',
          'Vision industrielle & photonique quantique (VALEO, Aurea)',
          'Entrepreneuriat deep-tech & enseignement (VITAIM, CPGE PSI)',
        ],
      },
      education: {
        courseworkTitle: 'Cours Clés du MVA',
        courses: [
          'Computer Vision & Deep Learning',
          'Robotics & Représentations 3D',
          'Foundations of Large Language Models',
          'Advanced Learning for Text & Graphs',
          'Optimization & Time Series Learning',
          'Computational Statistics',
        ],
        honorsTitle: 'Distinctions',
        honors: [
          { value: 'GPA 4.0 / 4.0', label: "Institut d'Optique Graduate School" },
          { value: 'CPGE MP*', label: 'Lycée Saint-Louis, Paris' },
        ],
      },
      contact: {
        topicsTitle: 'Ouvert Aux Échanges',
        topics: [
          'Stages de recherche, thèses et projets R&D en Robotique / Vision 3D / MLLM',
          'Collaborations open-source autour de PointACT et des benchmarks multimodaux',
          'Défis techniques en Machine Learning et vision par ordinateur',
        ],
        locationTitle: 'Localisation',
        locationValue: 'Paris-Saclay, France',
        locationMeta: 'Heure d’Europe centrale (CET / CEST)',
      },
    },
  },
};

/* ==========================================================================
   State & Persistence
   ========================================================================== */

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
  updateChromeState();
}

function initTheme() {
  const saved = localStorage.getItem('aimine-theme');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (saved === 'light') {
    document.documentElement.classList.remove('dark');
  }
}

/* ==========================================================================
   Chrome Updates (Left Rail + Mobile Bar)
   ========================================================================== */

function updateChromeState() {
  const langData = DATA[currentLang];
  const isDark = document.documentElement.classList.contains('dark');

  // Update rail identity strings
  const railLoc = document.getElementById('rail-location');
  const railRole = document.getElementById('rail-role');
  const railSub = document.getElementById('rail-sub');
  if (railLoc) railLoc.textContent = langData.rail.location;
  if (railRole) railRole.innerHTML = `${langData.rail.rolePrefix} · <strong>${langData.rail.roleOrg}</strong>`;
  if (railSub) railSub.textContent = langData.rail.roleSub;

  // Update nav links (desktop rail + mobile bar)
  document.querySelectorAll('[data-route]').forEach((el) => {
    const route = el.getAttribute('data-route');
    const labelEl = el.querySelector('.nav-label');
    if (labelEl && langData.nav[route]) {
      labelEl.textContent = langData.nav[route];
    } else if (!labelEl && langData.nav[route]) {
      el.textContent = langData.nav[route];
    }
    el.classList.toggle('is-active', route === currentRoute);
  });

  // Update language buttons
  document.querySelectorAll('.lang-btn-en').forEach((btn) => btn.classList.toggle('is-active', currentLang === 'en'));
  document.querySelectorAll('.lang-btn-fr').forEach((btn) => btn.classList.toggle('is-active', currentLang === 'fr'));

  // Update theme label
  document.querySelectorAll('.theme-label').forEach((el) => {
    el.textContent = isDark ? langData.rail.themeLight : langData.rail.themeDark;
  });
}

/* ==========================================================================
   Helper: Project Resource Link Button
   ========================================================================== */

function renderResourceLink(link) {
  const isPaper = link.type === 'paper';
  const cls = isPaper ? 'resource-btn resource-btn--paper' : 'resource-btn resource-btn--github';
  const icon = isPaper ? ICONS.paper : ICONS.github;
  return `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="${cls}">
      ${icon}
      <span>${link.label}</span>
    </a>
  `;
}

function getTagStyleVars(styleName) {
  const map = {
    terracotta: '--tag-bg: var(--accent-terracotta-soft); --tag-fg: var(--accent-terracotta);',
    pine: '--tag-bg: var(--accent-pine-soft); --tag-fg: var(--accent-pine);',
    prussian: '--tag-bg: var(--accent-prussian-soft); --tag-fg: var(--accent-prussian);',
    ochre: '--tag-bg: var(--accent-ochre-soft); --tag-fg: var(--accent-ochre);',
  };
  return map[styleName] || map.pine;
}

/* ==========================================================================
   Main Stage Page Renderers
   ========================================================================== */

function renderOverviewPage() {
  const ov = DATA[currentLang].overview;
  const projects = DATA[currentLang].projectsPage.items.slice(0, 2); // PointACT & EgoBlind
  const skills = DATA[currentLang].skills;

  const spotlightHtml = projects
    .map((proj) => {
      const catStyle = CATEGORY_STYLES[proj.category] || CATEGORY_STYLES.robotics;
      return `
        <article class="spotlight-card" style="--card-accent: ${catStyle.accent};">
          <div>
            <div class="project-meta">
              <span class="category-badge" style="--badge-bg: ${catStyle.bg}; --badge-fg: ${catStyle.accent}; --badge-border: ${catStyle.border};">
                ${proj.categoryLabel}
              </span>
              <span class="project-year">${proj.year}</span>
            </div>
            <h3 class="project-title" style="font-size: 20px;">${proj.title}</h3>
            <p class="project-subtitle-venue">${proj.venue}</p>
            <p class="project-desc" style="font-size: 13.8px;">${proj.description}</p>
          </div>
          <div class="link-row">
            ${proj.links.map(renderResourceLink).join('')}
          </div>
        </article>
      `;
    })
    .join('');

  const directoryHtml = ov.cards
    .map(
      (card) => `
      <a href="#${card.route}" onclick="navigateTo('${card.route}', event)" class="dir-card" style="--card-accent: ${card.accent};">
        <div>
          <h3 class="dir-card-title">${card.title}</h3>
          <p class="dir-card-desc">${card.desc}</p>
        </div>
        <span class="dir-card-action">${card.action}</span>
      </a>
    `
    )
    .join('');

  const skillsHtml = skills
    .map(
      (group) => `
      <div class="skill-box">
        <div class="skill-box-head">
          <span class="skill-swatch" style="--swatch-color: ${group.color};"></span>
          <h3 class="skill-box-title">${group.category}</h3>
        </div>
        <div class="skill-chips">
          ${group.items.map((item) => `<span class="skill-chip">${item}</span>`).join('')}
        </div>
      </div>
    `
    )
    .join('');

  return `
    <div class="view-animate" style="display:flex; flex-direction:column; gap:28px;">
      <section class="page-header" style="--header-accent: var(--accent-terracotta);">
        <p class="page-kicker">${ov.kicker}</p>
        <h1 class="page-title">${ov.name}</h1>
        <p class="page-subtitle">${ov.summary}</p>
        <div class="hero-actions">
          <a href="#projects" onclick="navigateTo('projects', event)" class="btn btn-primary" id="hero-cta-projects">
            <span>${ov.ctaProjects}</span>
            ${ICONS.arrowRight}
          </a>
          <a href="#contact" onclick="navigateTo('contact', event)" class="btn btn-secondary" id="hero-cta-contact">
            ${ICONS.mail}
            <span>${ov.ctaContact}</span>
          </a>
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2 class="section-label">${ov.featuredHeading}</h2>
          <a href="#projects" onclick="navigateTo('projects', event)" class="section-link">${ov.featuredAll}</a>
        </div>
        <div class="featured-grid">
          ${spotlightHtml}
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2 class="section-label">${ov.directoryHeading}</h2>
        </div>
        <div class="directory-grid">
          ${directoryHtml}
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2 class="section-label">${ov.areasHeading}</h2>
        </div>
        <div class="skills-grid">
          ${skillsHtml}
        </div>
      </section>
    </div>
  `;
}

function renderProjectsPage() {
  const page = DATA[currentLang].projectsPage;
  const filtered = page.items.filter(
    (item) => currentProjectFilter === 'all' || item.category === currentProjectFilter
  );

  const filterBarHtml = page.filters
    .map((tab) => {
      const count =
        tab.id === 'all'
          ? page.items.length
          : page.items.filter((i) => i.category === tab.id).length;
      const active = tab.id === currentProjectFilter ? 'is-active' : '';
      return `
        <button type="button" id="filter-${tab.id}" onclick="setProjectFilter('${tab.id}')" class="filter-pill ${active}">
          <span>${tab.label}</span>
          <span class="filter-count">${count}</span>
        </button>
      `;
    })
    .join('');

  const cardsHtml = filtered
    .map((proj) => {
      const catStyle = CATEGORY_STYLES[proj.category] || CATEGORY_STYLES.robotics;
      const featuredClass = proj.featured && currentProjectFilter === 'all' ? 'is-featured' : '';
      return `
        <article class="project-card ${featuredClass}" id="project-${proj.id}" style="--card-accent: ${catStyle.accent};">
          <div>
            <div class="project-meta">
              <span class="category-badge" style="--badge-bg: ${catStyle.bg}; --badge-fg: ${catStyle.accent}; --badge-border: ${catStyle.border};">
                ${proj.categoryLabel}
              </span>
              <span class="project-year">${proj.year}</span>
            </div>
            <h2 class="project-title">${proj.title}</h2>
            ${proj.venue ? `<p class="project-subtitle-venue">${proj.venue}</p>` : ''}
            <p class="project-desc">${proj.description}</p>
          </div>
          <div class="project-footer">
            <div class="tag-list">
              ${proj.tags.map((t) => `<span class="tag-item">${t}</span>`).join('')}
            </div>
            <div class="link-row">
              ${proj.links.map(renderResourceLink).join('')}
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  return `
    <div class="view-animate" style="display:flex; flex-direction:column; gap:24px;">
      <header class="page-header" style="--header-accent: var(--accent-terracotta);">
        <p class="page-kicker">${page.kicker}</p>
        <h1 class="page-title">${page.title}</h1>
        <p class="page-subtitle">${page.subtitle}</p>
      </header>

      <div class="filter-bar" role="tablist" aria-label="Project categories">
        ${filterBarHtml}
      </div>

      <section class="projects-grid">
        ${cardsHtml}
      </section>
    </div>
  `;
}

function renderExperiencePage() {
  const page = DATA[currentLang].experiencePage;

  const itemsHtml = page.items
    .map(
      (exp) => `
      <article class="timeline-card">
        <div class="timeline-period">
          <span>${exp.period}</span>
          <span class="timeline-tag" style="${getTagStyleVars(exp.tagStyle)}">${exp.tag}</span>
        </div>
        <div>
          <div class="timeline-head">
            <div>
              <h2 class="timeline-title">${exp.role}</h2>
              <p class="timeline-org">${exp.institution}</p>
            </div>
            ${renderInstitutionEmblem(exp.brand)}
          </div>
          <p class="timeline-desc">${exp.description}</p>
        </div>
      </article>
    `
    )
    .join('');

  return `
    <div class="view-animate" style="display:flex; flex-direction:column; gap:24px;">
      <header class="page-header" style="--header-accent: var(--accent-pine);">
        <p class="page-kicker">${page.kicker}</p>
        <h1 class="page-title">${page.title}</h1>
        <p class="page-subtitle">${page.subtitle}</p>
      </header>
      <section class="timeline-list">
        ${itemsHtml}
      </section>
    </div>
  `;
}

function renderEducationPage() {
  const page = DATA[currentLang].educationPage;

  const itemsHtml = page.items
    .map(
      (edu) => `
      <article class="timeline-card">
        <div class="timeline-period">
          <span>${edu.period}</span>
          <span class="timeline-tag" style="${getTagStyleVars(edu.tagStyle)}">${edu.tag}</span>
        </div>
        <div>
          <div class="timeline-head">
            <div>
              <h2 class="timeline-title">${edu.degree}</h2>
              <p class="timeline-org">${edu.institution}</p>
            </div>
            ${renderInstitutionEmblem(edu.brand)}
          </div>
          <p class="timeline-desc">${edu.details}</p>
          ${edu.courses ? `<div class="timeline-courses">${edu.courses}</div>` : ''}
        </div>
      </article>
    `
    )
    .join('');

  return `
    <div class="view-animate" style="display:flex; flex-direction:column; gap:24px;">
      <header class="page-header" style="--header-accent: var(--accent-prussian);">
        <p class="page-kicker">${page.kicker}</p>
        <h1 class="page-title">${page.title}</h1>
        <p class="page-subtitle">${page.subtitle}</p>
      </header>
      <section class="timeline-list">
        ${itemsHtml}
      </section>
    </div>
  `;
}

function renderContactPage() {
  const page = DATA[currentLang].contactPage;

  const emailValueHtml = isEmailRevealed
    ? `<button type="button" onclick="openObfuscatedMail()" class="contact-card-value" style="text-align:left; text-decoration:underline; text-underline-offset:3px;">${getAssembledEmail()}</button>`
    : `<p class="contact-card-value" style="user-select:none;">${getMaskedEmail()}</p>`;

  const emailActionsHtml = isEmailRevealed
    ? `
      <button type="button" id="btn-send-email" onclick="openObfuscatedMail()" class="resource-btn resource-btn--paper">
        ${ICONS.mail}<span>${page.sendAction}</span>
      </button>
      <button type="button" id="btn-copy-email" onclick="copyEmail()" class="resource-btn resource-btn--github">
        <span>${page.copyAction}</span>
      </button>
    `
    : `
      <button type="button" id="btn-reveal-email" onclick="revealEmailAddress()" class="resource-btn resource-btn--paper">
        <span>${page.revealAction}</span>
      </button>
      <button type="button" id="btn-copy-email" onclick="copyEmail()" class="resource-btn resource-btn--github">
        <span>${page.copyAction}</span>
      </button>
    `;

  return `
    <div class="view-animate" style="display:flex; flex-direction:column; gap:24px;">
      <header class="page-header" style="--header-accent: var(--accent-ochre);">
        <p class="page-kicker">${page.kicker}</p>
        <h1 class="page-title">${page.title}</h1>
        <p class="page-subtitle">${page.subtitle}</p>
      </header>

      <section class="contact-grid">
        <div class="contact-card" style="--card-accent: var(--accent-terracotta);">
          <div>
            <p class="contact-card-label">${page.emailLabel}</p>
            ${emailValueHtml}
          </div>
          <div class="contact-card-actions">
            ${emailActionsHtml}
          </div>
        </div>

        <div class="contact-card" style="--card-accent: var(--accent-prussian);">
          <div>
            <p class="contact-card-label">${page.githubLabel}</p>
            <p class="contact-card-value">github.com/Squenger</p>
          </div>
          <div class="contact-card-actions">
            <a href="https://github.com/Squenger" target="_blank" rel="noopener noreferrer" class="resource-btn resource-btn--github">
              ${ICONS.github}<span>${page.visitAction}</span>
            </a>
          </div>
        </div>

        <div class="contact-card" style="--card-accent: var(--accent-pine);">
          <div>
            <p class="contact-card-label">${page.linkedinLabel}</p>
            <p class="contact-card-value">linkedin.com/in/aimine-meddeb-a2b352248</p>
          </div>
          <div class="contact-card-actions">
            <a href="https://linkedin.com/in/aimine-meddeb-a2b352248/" target="_blank" rel="noopener noreferrer" class="resource-btn resource-btn--paper">
              ${ICONS.external}<span>${page.visitAction}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

/* ==========================================================================
   Right Contextual Margin Rail Renderer
   ========================================================================== */

function renderRightRail() {
  const aside = DATA[currentLang].aside;

  if (currentRoute === 'projects') {
    const p = aside.projects;
    return `
      <div class="aside-card aside-card--tinted" style="--aside-bg: var(--accent-prussian-soft); --aside-border: var(--accent-prussian-border); --aside-fg: var(--accent-prussian);">
        <h2 class="aside-title">${p.papersTitle}</h2>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${p.papers
            .map(
              (paper) => `
              <a href="${paper.url}" target="_blank" rel="noopener noreferrer" class="aside-paper-link">
                <span class="aside-paper-name">${paper.name}</span>
                <span class="aside-paper-meta">${paper.meta}</span>
              </a>
            `
            )
            .join('')}
        </div>
      </div>

      <div class="aside-card">
        <h2 class="aside-title">${p.repoTitle}</h2>
        <p style="font-size:13px; color:var(--ink-secondary); line-height:1.55; margin-bottom:14px;">
          ${p.repoDesc}
        </p>
        <a href="https://github.com/Squenger" target="_blank" rel="noopener noreferrer" class="resource-btn resource-btn--github" style="width:100%; justify-content:center;">
          ${ICONS.github}
          <span>${p.repoCta}</span>
        </a>
      </div>
    `;
  }

  if (currentRoute === 'experience') {
    const e = aside.experience;
    return `
      <div class="aside-card aside-card--tinted" style="--aside-bg: var(--accent-pine-soft); --aside-border: var(--accent-pine-border); --aside-fg: var(--accent-pine);">
        <h2 class="aside-title">${e.impactTitle}</h2>
        <div class="stat-list">
          ${e.stats
            .map(
              (s) => `
              <div class="stat-item">
                <span class="stat-value">${s.value}</span>
                <span class="stat-label">${s.label}</span>
              </div>
            `
            )
            .join('')}
        </div>
      </div>

      <div class="aside-card">
        <h2 class="aside-title">${e.tracksTitle}</h2>
        <ul class="aside-list" style="--dot-color: var(--accent-pine);">
          ${e.tracks.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  if (currentRoute === 'education') {
    const ed = aside.education;
    return `
      <div class="aside-card aside-card--tinted" style="--aside-bg: var(--accent-ochre-soft); --aside-border: var(--accent-ochre-border); --aside-fg: var(--accent-ochre);">
        <h2 class="aside-title">${ed.honorsTitle}</h2>
        <div class="stat-list">
          ${ed.honors
            .map(
              (h) => `
              <div class="stat-item">
                <span class="stat-value">${h.value}</span>
                <span class="stat-label">${h.label}</span>
              </div>
            `
            )
            .join('')}
        </div>
      </div>

      <div class="aside-card">
        <h2 class="aside-title">${ed.courseworkTitle}</h2>
        <ul class="aside-list" style="--dot-color: var(--accent-prussian);">
          ${ed.courses.map((c) => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  if (currentRoute === 'contact') {
    const c = aside.contact;
    return `
      <div class="aside-card aside-card--tinted" style="--aside-bg: var(--accent-terracotta-soft); --aside-border: var(--accent-terracotta-border); --aside-fg: var(--accent-terracotta);">
        <h2 class="aside-title">${c.locationTitle}</h2>
        <div class="stat-item">
          <span class="stat-value">${c.locationValue}</span>
          <span class="stat-label">${c.locationMeta}</span>
        </div>
      </div>

      <div class="aside-card">
        <h2 class="aside-title">${c.topicsTitle}</h2>
        <ul class="aside-list" style="--dot-color: var(--accent-terracotta);">
          ${c.topics.map((t) => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // Default: Overview Right Rail
  const ov = aside.overview;
  const affiliations = ['ENS Paris-Saclay', 'IOGS', 'Paris-Saclay', 'UQTR', 'VALEO', 'Aurea', 'VITAIM'];

  return `
    <div class="aside-card aside-card--tinted" style="--aside-bg: var(--accent-pine-soft); --aside-border: var(--accent-pine-border); --aside-fg: var(--accent-pine);">
      <h2 class="aside-title">${ov.snapshotTitle}</h2>
      <div class="stat-list">
        ${ov.stats
          .map(
            (s) => `
            <div class="stat-item">
              <span class="stat-value">${s.value}</span>
              <span class="stat-label">${s.label}</span>
            </div>
          `
          )
          .join('')}
      </div>
    </div>

    <div class="aside-card">
      <h2 class="aside-title">${ov.focusTitle}</h2>
      <ul class="aside-list" style="--dot-color: var(--accent-terracotta);">
        ${ov.focusItems.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </div>

    <div class="aside-card">
      <h2 class="aside-title">${ov.affiliationsTitle}</h2>
      <div class="affiliations-wrap">
        ${affiliations.map((a) => `<span class="affiliation-pill">${a}</span>`).join('')}
      </div>
    </div>
  `;
}

/* ==========================================================================
   Master Render Controller & Utilities
   ========================================================================== */

function renderApp() {
  updateChromeState();
  const mainContainer = document.getElementById('app-view');
  const rightRail = document.getElementById('right-rail');

  switch (currentRoute) {
    case 'projects':
      mainContainer.innerHTML = renderProjectsPage();
      break;
    case 'experience':
      mainContainer.innerHTML = renderExperiencePage();
      break;
    case 'education':
      mainContainer.innerHTML = renderEducationPage();
      break;
    case 'contact':
      mainContainer.innerHTML = renderContactPage();
      break;
    case 'overview':
    default:
      mainContainer.innerHTML = renderOverviewPage();
      break;
  }

  if (rightRail) {
    rightRail.innerHTML = renderRightRail();
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
  toastTimer = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2400);
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
