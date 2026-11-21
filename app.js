/**
 * Aimine Meddeb — Personal Research Portfolio (Option 1: Obsidian Research)
 * Multi-page hash router, official institutional logos, paper previews,
 * EN/FR localization, dark/light theme, and embedded Internship CV viewer.
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
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.52c-2.51.55-3.04-1.21-3.04-1.21-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.11-1-4.11-4.46 0-.99.35-1.79.93-2.42-.09-.23-.4-1.15.09-2.39 0 0 .76-.24 2.48.92a8.6 8.6 0 0 1 4.52 0c1.72-1.16 2.48-.92 2.48-.92.49 1.24.18 2.16.09 2.39.58.63.93 1.43.93 2.42 0 3.47-2.11 4.23-4.12 4.45.32.28.61.83.61 1.67v2.48c0 .24.16.52.62.43A9 9 0 0 0 12 3Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.34H5.67V9.76h2.67v8.58ZM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.76h-2.67v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.21v4.25h-2.67V9.76h2.56v1.17h.04c.36-.68 1.23-1.39 2.53-1.39 2.7 0 3.2 1.78 3.2 4.09v4.71Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6 8.5-6"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
};

/**
 * Institutional & Company Logos
 * Verified official URLs load immediately; local overrides in assets/logos/ are
 * supported for organizations without public Wikimedia logos, with automatic
 * crisp monogram fallback so images never break.
 */
const BRANDS = {
  ens: {
    name: 'ENS Paris-Saclay',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_ENS_Paris-Saclay.svg/320px-Logo_ENS_Paris-Saclay.svg.png',
    mono: 'ENS',
  },
  upsaclay: {
    name: 'Université Paris-Saclay',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Logo_cartouche_Universit%C3%A9_Paris-Saclay.png/320px-Logo_cartouche_Universit%C3%A9_Paris-Saclay.png',
    mono: 'UPS',
  },
  iogs: {
    name: "Institut d'Optique (IOGS)",
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Logo_Institut_d%27Optique_Graduate_School.svg/320px-Logo_Institut_d%27Optique_Graduate_School.svg.png',
    mono: 'IOGS',
  },
  uqtr: {
    name: 'UQTR',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Logo_UQTR.svg/320px-Logo_UQTR.svg.png',
    mono: 'UQTR',
  },
  valeo: {
    name: 'VALEO',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Valeo_Logo.svg/320px-Valeo_Logo.svg.png',
    mono: 'VALEO',
  },
  aurea: {
    name: 'Aurea Technology',
    src: 'https://www.aureatechnology.com/wp-content/uploads/2021/10/aurea-technology-logo.svg',
    mono: 'AUREA',
  },
  inria: {
    name: 'Inria',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Inr_logo_rouge.svg/320px-Inr_logo_rouge.svg.png',
    mono: 'INRIA',
  },
  vitaim: {
    name: 'VITAIM',
    src: 'assets/logos/vitaim.png',
    mono: 'VITAIM',
  },
  saintlouis: {
    name: 'Lycée Saint-Louis',
    src: 'assets/logos/saint-louis.png',
    mono: 'SL',
  },
  parcdesloges: {
    name: 'Lycée du Parc des Loges',
    src: 'assets/logos/parc-des-loges.png',
    mono: 'LPL',
  },
};

function renderLogo(brandKey, size = 'md') {
  const b = BRANDS[brandKey];
  if (!b) return '';
  const sizeClass = size === 'sm' ? 'logo-frame--sm' : 'logo-frame--md';
  return `
    <div class="logo-frame ${sizeClass}" title="${b.name}">
      <img
        src="${b.src}"
        alt="${b.name}"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';"
      />
      <span class="logo-mono" style="display:none;">${b.mono}</span>
    </div>
  `;
}

const DATA = {
  en: {
    nav: {
      home: 'Home',
      about: 'Background',
      projects: 'Projects',
      internship: 'Internship & CV',
      contact: 'Contact',
    },
    home: {
      kicker: 'Master 2 MVA · ENS Paris-Saclay · IOGS',
      firstName: 'Aimine',
      lastName: 'Meddeb',
      lead:
        "Final-year student in the Master MVA program at ENS Paris-Saclay and engineering student at Institut d'Optique (IOGS). My research focuses on Computer Vision, Multimodal Vision Transformers, 3D Robotics, and Large Language Models.",
      ctaProjects: 'Explore Projects →',
      ctaInternship: 'Internship & CV',
      status: [
        { label: 'Target Internship', val: 'Computer Vision Research · Multimodal ViTs / Robotics' },
        { label: 'Availability', val: '4 to 6 months starting from April' },
        { label: 'Preferred Locations', val: 'Paris, Zurich, Lausanne, Geneva, Berlin, London, Barcelona' },
      ],
      logosHeading: 'Universities & Companies',
      skillsHeading: 'Core Technical Domains',
      skills: [
        { title: 'Machine Learning & AI', text: 'LLMs, MLLMs, Multimodal ViTs, DPO, Generative AI, PyTorch, Scikit-learn' },
        { title: 'Computer Vision & 3D', text: '3D Point Clouds, Volumetric Reconstruction, Image Registration, OpenCV' },
        { title: 'Robotics & Optimization', text: 'VLA Policies, Control Systems, Mathematical Modeling, Time Series, LaTeX' },
        { title: 'Languages', text: 'French (Native), English (TOEIC C1), German (Beginner)' },
      ],
    },
    about: {
      kicker: 'Academic & Industrial Path',
      title: 'Background',
      sub: 'Research internships in 3D deep learning and photonics, industrial computer vision, and applied mathematics.',
      expTitle: 'Experience',
      eduTitle: 'Education',
      experience: [
        {
          brand: 'uqtr',
          period: 'Mar – Aug 2026',
          role: 'Research Internship',
          org: 'Université du Québec à Trois-Rivières (UQTR)',
          desc:
            'Near real-time 3D reconstruction based on deep learning for micro-CT integration into a 3D printing digital twin. Cross-modal mathematical transformations and generative volumetric synthesis.',
        },
        {
          brand: 'valeo',
          period: 'Jan – Mar 2026',
          role: 'Industrial Image Correction',
          org: 'VALEO',
          desc:
            'Computer vision pipeline for automated image registration and centering (ORB, RANSAC) for industrial quality control of car logos, achieving < 0.5% precision error.',
        },
        {
          brand: 'aurea',
          period: 'May – Aug 2025',
          role: 'Photonics Internship',
          org: 'Aurea Technology',
          desc:
            'Entangled photon source for satellite quantum communications (ESA TeQuantS). Developed an EDFA optical amplification system achieving 10 dB gain.',
        },
        {
          brand: 'vitaim',
          period: 'Sept 2024 – Jul 2025',
          role: 'Co-founder, Innovation Program',
          org: 'VITAIM',
          desc:
            'Technical lead for a startup specializing in post-quantum cryptography (PQC). Winner of the Paris-Saclay Entrepreneurship Pitch Competition.',
        },
        {
          brand: 'parcdesloges',
          period: 'Sept 2024 – Jun 2025',
          role: 'Oral Examiner (Colleur)',
          org: 'Lycée du Parc des Loges',
          desc: 'Mathematics oral examiner for engineering school preparatory classes (PSI).',
        },
      ],
      education: [
        {
          brand: 'ens',
          period: '2026 – present',
          degree: 'Master MVA',
          org: 'ENS Paris-Saclay',
          desc: 'Master of Applied Mathematics focusing on Machine Learning, Computer Vision, and AI.',
          courses:
            'Courses: Computer Vision · Deep Learning · Robotics · Foundations of LLMs · Advanced Text & Graph Learning · Optimization · Time Series · Computational Statistics',
        },
        {
          brand: 'upsaclay',
          period: '2024 – 2026',
          degree: 'Master ATSI',
          org: 'Université Paris-Saclay',
          desc: 'Specialized in Computer Vision, Deep Learning architectures, and Applied Optimization.',
          courses: null,
        },
        {
          brand: 'iogs',
          period: '2023 – 2026',
          degree: 'Engineering Degree (Diplôme d’Ingénieur)',
          org: "Institut d'Optique (IOGS)",
          desc: 'Mathematical modeling, Image Processing, Quantum physics. GPA: 4/4.',
          courses: null,
        },
        {
          brand: 'upsaclay',
          period: '2023 – 2024',
          degree: "Mathematics Bachelor's Degree",
          org: 'Université Paris-Saclay',
          desc: 'Analysis, algebra, and probability theory.',
          courses: null,
        },
        {
          brand: 'saintlouis',
          period: '2021 – 2023',
          degree: 'Preparatory Class (CPGE MPSI/MP*)',
          org: 'Lycée Saint-Louis, Paris',
          desc: 'Intensive preparatory classes in Mathematics and Computer Science.',
          courses: null,
        },
      ],
    },
    projects: {
      kicker: 'Research & Implementations',
      title: 'Projects & Papers',
      sub: 'Paper reproductions, benchmarks, and personal implementations in 3D robotics, multimodal vision, and generative modeling.',
      filters: [
        { id: 'all', label: 'All' },
        { id: 'robotics', label: 'Robotics & 3D' },
        { id: 'vision', label: 'Vision & Multimodal' },
        { id: 'nlp', label: 'NLP & Generative' },
      ],
      items: [
        {
          year: '2026',
          category: 'robotics',
          catLabel: 'Robotics & 3D',
          title: 'PointACT — 3D-Aware Vision-Language-Action Policy',
          desc:
            'Reproduction and experimental study of PointACT, a dual-system 3D-aware VLA policy developed by Shizhe Chen’s team at Inria. It couples a frozen pretrained VLM backbone with a dedicated point-action expert using multi-scale 3D point clouds and bottleneck window self-attention for robotic manipulation on LIBERO and RLBench.',
          tags: ['VLA', '3D Point Clouds', 'Robotics', 'Point Transformer', 'Inria · RSS 2026'],
          paperPreview: {
            venue: 'RSS 2026 · arXiv:2605.21414 · Inria / ENS',
            instLogo: BRANDS.inria.src,
            instAlt: 'Inria',
            paperTitle: 'PointACT: Vision-Language-Action Models with Multi-Scale Point-Action Interaction',
            authors: 'Shizhe Chen, Paul Pacaud, Cordelia Schmid',
            figureImg: 'https://cshizhe.github.io/projects/resources/pointact/teaser_c.png',
            fallbackFlow: '[Frozen VLM] + [Multi-Scale Point Transformer] → [Point-Action Expert]',
            metric: '+10% RLBench',
          },
          links: [
            { type: 'paper', label: 'Paper (arXiv:2605.21414)', url: 'https://arxiv.org/abs/2605.21414' },
            { type: 'github', label: 'GitHub · robot-PointAct', url: 'https://github.com/Squenger/robot-PointAct' },
          ],
        },
        {
          year: '2025 – 2026',
          category: 'vision',
          catLabel: 'Vision & Multimodal',
          title: 'EgoBlind — Egocentric Visual Assistance for the Blind',
          desc:
            'Research project centered on EgoBlind, the first egocentric VideoQA benchmark collected directly from blind and visually impaired users to evaluate Multimodal Large Language Models (MLLMs) in real daily-life assistive scenarios (navigating, cooking, shopping, traveling). Across 1,392 first-person videos and 5,311 in-situation questions, it reveals key gaps between current MLLMs (~60%) and human performance (87.4%).',
          tags: ['Egocentric VideoQA', 'MLLMs', 'Assistive AI', 'NeurIPS 2025'],
          paperPreview: {
            venue: 'NeurIPS 2025 · arXiv:2503.08221 · Datasets & Benchmarks',
            instLogo: null,
            instAlt: '',
            paperTitle: 'EgoBlind: Towards Egocentric Visual Assistance for the Blind',
            authors: 'First Egocentric VideoQA Benchmark from Blind & Visually Impaired Users',
            figureImg: null,
            fallbackFlow: '1,392 First-Person Daily Videos + 5,311 In-Situation Questions → MLLM Evaluation',
            metric: 'MLLM ~60% vs 87.4%',
          },
          links: [
            { type: 'paper', label: 'Paper (arXiv:2503.08221)', url: 'https://arxiv.org/abs/2503.08221' },
          ],
        },
        {
          year: '2026',
          category: 'nlp',
          catLabel: 'NLP & Generative',
          title: 'AI-Driven Music Generator',
          desc:
            'Designed a generative MIDI model utilizing a Transformer architecture aligned with Direct Preference Optimization (DPO). Repurposed a pre-trained MidiBert network into a reward-based "music judge" to improve harmonic quality and structural consistency.',
          tags: ['Transformer', 'DPO', 'MidiBert', 'Generative MIDI'],
          paperPreview: null,
          links: [
            { type: 'github', label: 'Music Model', url: 'https://github.com/Squenger/Music_Generation_Transformers' },
            { type: 'github', label: 'MidiBert Judge', url: 'https://github.com/Squenger/converting-MidiBERT-into-a-Judge' },
          ],
        },
        {
          year: '2026',
          category: 'vision',
          catLabel: 'Vision & Multimodal',
          title: 'Deep Learning Facial Recognition System',
          desc:
            'Developed an end-to-end computer vision pipeline using Convolutional Neural Networks and Triplet Loss, achieving 90% accuracy in learning robust facial embeddings for automated photo tagging.',
          tags: ['CNN', 'Triplet Loss', 'Facial Embeddings', 'Computer Vision'],
          paperPreview: null,
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
          year: '2026',
          category: 'nlp',
          catLabel: 'NLP & Generative',
          title: 'Generative Literary Style Transfer',
          desc:
            'Engineered a Decoder-only Transformer for stylistic text generation, trained on classical poetry and Shakespearean plays to capture unique rhythmic meters and linguistic nuances.',
          tags: ['Decoder-only Transformer', 'Stylistic Generation', 'NLP'],
          paperPreview: null,
          links: [
            { type: 'github', label: 'Poem Generator', url: 'https://github.com/Squenger/French-poem-generator' },
          ],
        },
      ],
    },
    internship: {
      kicker: 'Master 2 MVA · Research Internship',
      title: 'Internship Search & Resume',
      sub: 'Looking for a Computer Vision research internship in Multimodal Vision Transformers or Robotics.',
      criteria: [
        { label: 'Duration', val: '4 to 6 months starting from April' },
        { label: 'Research Focus', val: 'Computer Vision · Multimodal Vision Transformers · Robotics' },
        { label: 'Locations', val: 'Paris, Zurich, Lausanne, Geneva, Berlin, London, Barcelona' },
        { label: 'Program', val: 'Master 2 MVA — ENS Paris-Saclay' },
      ],
      cvTitle: 'Curriculum Vitae (cv.pdf)',
      downloadBtn: 'Download CV (PDF)',
      openBtn: 'Open in New Tab',
      fallbackText: 'Inline PDF preview requires cv.pdf at the root of the repository. Use the buttons above once uploaded.',
    },
    contact: {
      kicker: 'Correspondence',
      title: 'Contact',
      sub: 'Feel free to reach out regarding research internships, collaborations, or academic inquiries.',
      emailLabel: 'Direct Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      revealBtn: 'Reveal Email',
      mailBtn: 'Open Mail',
      copyBtn: 'Copy',
      openProfile: 'Open Profile',
      copiedToast: 'Email copied to clipboard',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      about: 'Parcours',
      projects: 'Projets',
      internship: 'Stage & CV',
      contact: 'Contact',
    },
    home: {
      kicker: 'Master 2 MVA · ENS Paris-Saclay · IOGS',
      firstName: 'Aimine',
      lastName: 'Meddeb',
      lead:
        "Étudiant en dernière année du Master MVA à l'ENS Paris-Saclay et élève-ingénieur à l'Institut d'Optique (IOGS). Mes travaux portent sur la Vision par Ordinateur, les Multimodal Vision Transformers, la Robotique 3D et les LLM.",
      ctaProjects: 'Voir mes projets →',
      ctaInternship: 'Stage & CV',
      status: [
        { label: 'Stage recherché', val: 'Recherche en Vision par Ordinateur · Multimodal ViT / Robotique' },
        { label: 'Disponibilité', val: "4 à 6 mois à partir d'avril" },
        { label: 'Lieux souhaités', val: 'Paris, Zurich, Lausanne, Genève, Berlin, Londres, Barcelone' },
      ],
      logosHeading: 'Universités & Entreprises',
      skillsHeading: 'Domaines Techniques',
      skills: [
        { title: 'Machine Learning & IA', text: 'LLM, MLLM, ViT Multimodaux, DPO, IA Générative, PyTorch, Scikit-learn' },
        { title: 'Vision & 3D', text: "Nuages de Points 3D, Reconstruction Volumétrique, Recalage d'Images, OpenCV" },
        { title: 'Robotique & Optimisation', text: 'Politiques VLA, Contrôle, Modélisation Mathématique, Séries Temporelles, LaTeX' },
        { title: 'Langues', text: 'Français (Natif), Anglais (TOEIC C1), Allemand (Débutant)' },
      ],
    },
    about: {
      kicker: 'Parcours Académique & Industriel',
      title: 'Parcours',
      sub: 'Stages de recherche en deep learning 3D et photonique, vision industrielle et mathématiques appliquées.',
      expTitle: 'Expériences',
      eduTitle: 'Formation',
      experience: [
        {
          brand: 'uqtr',
          period: 'Mars – Août 2026',
          role: 'Stage de Recherche',
          org: 'Université du Québec à Trois-Rivières (UQTR)',
          desc:
            "Reconstruction 3D quasi temps réel par deep learning pour l'intégration micro-CT dans un jumeau numérique d'impression 3D. Corrélation cross-modale et synthèse volumétrique générative.",
        },
        {
          brand: 'valeo',
          period: 'Janv. – Mars 2026',
          role: "Correction d'Images Industrielles",
          org: 'VALEO',
          desc:
            "Pipeline de vision par ordinateur pour le recalage et centrage automatisés (ORB, RANSAC) pour le contrôle qualité de logos automobiles (< 0,5 % d'erreur).",
        },
        {
          brand: 'aurea',
          period: 'Mai – Août 2025',
          role: 'Stage Photonique',
          org: 'Aurea Technology',
          desc:
            "Source de photons intriqués pour les communications quantiques par satellite (ESA TeQuantS). Développement d'un système EDFA atteignant 10 dB d'amplification.",
        },
        {
          brand: 'vitaim',
          period: 'Sept. 2024 – Juil. 2025',
          role: 'Co-fondateur, Programme Innovation',
          org: 'VITAIM',
          desc:
            'Direction technique pour une startup en cryptographie post-quantique (PQC). Lauréat du concours de pitch entrepreneurial Paris-Saclay.',
        },
        {
          brand: 'parcdesloges',
          period: 'Sept. 2024 – Juin 2025',
          role: 'Examinateur Oral (Colleur)',
          org: 'Lycée du Parc des Loges',
          desc: 'Examinateur oral de mathématiques pour les classes préparatoires aux grandes écoles (PSI).',
        },
      ],
      education: [
        {
          brand: 'ens',
          period: '2026 – présent',
          degree: 'Master MVA',
          org: 'ENS Paris-Saclay',
          desc: "Master de Mathématiques Appliquées axé sur le Machine Learning, la Vision par Ordinateur et l'IA.",
          courses:
            'Cours : Computer Vision · Deep Learning · Robotics · Foundations of LLMs · Advanced Text & Graph Learning · Optimization · Time Series · Computational Statistics',
        },
        {
          brand: 'upsaclay',
          period: '2024 – 2026',
          degree: 'Master ATSI',
          org: 'Université Paris-Saclay',
          desc: 'Spécialisé en Vision par Ordinateur, architectures Deep Learning et Optimisation Appliquée.',
          courses: null,
        },
        {
          brand: 'iogs',
          period: '2023 – 2026',
          degree: "Diplôme d'Ingénieur",
          org: "Institut d'Optique (IOGS)",
          desc: "Modélisation mathématique, Traitement d'images, Physique quantique. GPA : 4/4.",
          courses: null,
        },
        {
          brand: 'upsaclay',
          period: '2023 – 2024',
          degree: 'Licence de Mathématiques',
          org: 'Université Paris-Saclay',
          desc: 'Analyse, algèbre et probabilités.',
          courses: null,
        },
        {
          brand: 'saintlouis',
          period: '2021 – 2023',
          degree: 'Classes Préparatoires (CPGE MPSI/MP*)',
          org: 'Lycée Saint-Louis, Paris',
          desc: 'Classes préparatoires intensives en Mathématiques et Informatique.',
          courses: null,
        },
      ],
    },
    projects: {
      kicker: 'Recherche & Implémentations',
      title: 'Projets & Papiers',
      sub: 'Reproductions de papiers de recherche, benchmarks et implémentations en robotique 3D, vision multimodale et IA générative.',
      filters: [
        { id: 'all', label: 'Tous' },
        { id: 'robotics', label: 'Robotique & 3D' },
        { id: 'vision', label: 'Vision & Multimodal' },
        { id: 'nlp', label: 'NLP & Génératif' },
      ],
      items: [
        {
          year: '2026',
          category: 'robotics',
          catLabel: 'Robotique & 3D',
          title: 'PointACT — Politique Vision-Langage-Action 3D',
          desc:
            "Reproduction et étude expérimentale de PointACT, une politique VLA 3D à double système conçue par l'équipe de Shizhe Chen à l'Inria. Elle associe un backbone VLM pré-entraîné figé à un expert point-action exploitant des nuages de points 3D multi-échelles par attention fenêtrée pour la manipulation robotique sur LIBERO et RLBench.",
          tags: ['VLA', 'Nuages de Points 3D', 'Robotique', 'Point Transformer', 'Inria · RSS 2026'],
          paperPreview: {
            venue: 'RSS 2026 · arXiv:2605.21414 · Inria / ENS',
            instLogo: BRANDS.inria.src,
            instAlt: 'Inria',
            paperTitle: 'PointACT: Vision-Language-Action Models with Multi-Scale Point-Action Interaction',
            authors: 'Shizhe Chen, Paul Pacaud, Cordelia Schmid',
            figureImg: 'https://cshizhe.github.io/projects/resources/pointact/teaser_c.png',
            fallbackFlow: '[VLM Figé] + [Point Transformer Multi-Échelles] → [Expert Point-Action]',
            metric: '+10% RLBench',
          },
          links: [
            { type: 'paper', label: 'Article (arXiv:2605.21414)', url: 'https://arxiv.org/abs/2605.21414' },
            { type: 'github', label: 'GitHub · robot-PointAct', url: 'https://github.com/Squenger/robot-PointAct' },
          ],
        },
        {
          year: '2025 – 2026',
          category: 'vision',
          catLabel: 'Vision & Multimodal',
          title: 'EgoBlind — Assistance Visuelle Égocentrique',
          desc:
            "Projet autour d'EgoBlind, le premier benchmark VideoQA égocentrique collecté directement auprès de personnes aveugles et malvoyantes pour évaluer les capacités d'assistance visuelle des grands modèles multimodaux (MLLM) au quotidien (navigation, cuisine, courses, trajets). Sur 1 392 vidéos subjectives et 5 311 questions en contexte, il met en évidence l'écart entre les MLLM actuels (~60 %) et l'humain (87,4 %).",
          tags: ['VideoQA Égocentrique', 'MLLM', 'IA Assistive', 'NeurIPS 2025'],
          paperPreview: {
            venue: 'NeurIPS 2025 · arXiv:2503.08221 · Datasets & Benchmarks',
            instLogo: null,
            instAlt: '',
            paperTitle: 'EgoBlind: Towards Egocentric Visual Assistance for the Blind',
            authors: 'Premier benchmark VideoQA égocentrique issu de personnes aveugles et malvoyantes',
            figureImg: null,
            fallbackFlow: '1 392 vidéos 1ère personne + 5 311 questions en situation → Évaluation MLLM',
            metric: 'MLLM ~60% vs 87.4%',
          },
          links: [
            { type: 'paper', label: 'Article (arXiv:2503.08221)', url: 'https://arxiv.org/abs/2503.08221' },
          ],
        },
        {
          year: '2026',
          category: 'nlp',
          catLabel: 'NLP & Génératif',
          title: 'AI-Driven Music Generator',
          desc:
            "Conception d'un modèle génératif MIDI basé sur un Transformer aligné par Direct Preference Optimization (DPO). Réutilisation d'un réseau MidiBert pré-entraîné en « juge musical » pour améliorer la qualité harmonique et la cohérence.",
          tags: ['Transformer', 'DPO', 'MidiBert', 'MIDI Génératif'],
          paperPreview: null,
          links: [
            { type: 'github', label: 'Music Model', url: 'https://github.com/Squenger/Music_Generation_Transformers' },
            { type: 'github', label: 'MidiBert Judge', url: 'https://github.com/Squenger/converting-MidiBERT-into-a-Judge' },
          ],
        },
        {
          year: '2026',
          category: 'vision',
          catLabel: 'Vision & Multimodal',
          title: 'Deep Learning Facial Recognition System',
          desc:
            "Développement d'un pipeline de vision de bout en bout utilisant des CNN et la Triplet Loss, atteignant 90 % de précision dans l'apprentissage d'embeddings faciaux robustes pour l'étiquetage photo automatisé.",
          tags: ['CNN', 'Triplet Loss', 'Embeddings Faciaux', 'Vision par Ordinateur'],
          paperPreview: null,
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
          year: '2026',
          category: 'nlp',
          catLabel: 'NLP & Génératif',
          title: 'Generative Literary Style Transfer',
          desc:
            "Conception d'un Transformer Decoder-only pour la génération stylistique, entraîné sur de la poésie classique et des pièces de Shakespeare pour capturer des motifs rythmiques et des nuances linguistiques.",
          tags: ['Decoder-only Transformer', 'Génération Stylistique', 'NLP'],
          paperPreview: null,
          links: [
            { type: 'github', label: 'Poem Generator', url: 'https://github.com/Squenger/French-poem-generator' },
          ],
        },
      ],
    },
    internship: {
      kicker: 'Master 2 MVA · Stage de Recherche',
      title: 'Recherche de Stage & CV',
      sub: 'À la recherche d’un stage de recherche en Vision par Ordinateur (Multimodal Vision Transformers ou Robotique).',
      criteria: [
        { label: 'Durée', val: "4 à 6 mois à partir d'avril" },
        { label: 'Domaines', val: 'Vision par ordinateur · Multimodal Vision Transformers · Robotique' },
        { label: 'Lieux', val: 'Paris, Zurich, Lausanne, Genève, Berlin, Londres, Barcelone' },
        { label: 'Formation', val: 'Master 2 MVA — ENS Paris-Saclay' },
      ],
      cvTitle: 'Curriculum Vitae (cv.pdf)',
      downloadBtn: 'Télécharger le CV (PDF)',
      openBtn: 'Ouvrir dans un onglet',
      fallbackText: "L'aperçu intégré s'affichera automatiquement dès que cv.pdf sera placé à la racine du dépôt.",
    },
    contact: {
      kicker: 'Correspondance',
      title: 'Contact',
      sub: "N'hésitez pas à me contacter pour un stage de recherche, une collaboration académique ou un projet technique.",
      emailLabel: 'Email Direct',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      revealBtn: "Afficher l'email",
      mailBtn: 'Écrire',
      copyBtn: 'Copier',
      openProfile: 'Ouvrir le profil',
      copiedToast: 'Adresse email copiée',
    },
  },
};

function safeGetStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

function safeSetStorage(key, val) {
  try {
    window.localStorage.setItem(key, val);
  } catch (e) {
    // Ignore storage errors in sandboxed preview iframes
  }
}

const VALID_ROUTES = ['home', 'about', 'projects', 'internship', 'contact'];
let currentRoute = 'home';
let currentLang = safeGetStorage('aimine-lang') === 'fr' ? 'fr' : 'en';
let currentFilter = 'all';

function getRouteFromHash() {
  try {
    const hash = window.location.hash.replace('#', '').trim().toLowerCase();
    return VALID_ROUTES.includes(hash) ? hash : 'home';
  } catch (e) {
    return 'home';
  }
}

function navigateTo(route, event) {
  if (event) event.preventDefault();
  if (!VALID_ROUTES.includes(route)) route = 'home';
  currentRoute = route;
  try {
    if (window.location.hash !== '#' + route) {
      window.history.pushState({ route }, '', '#' + route);
    }
  } catch (e) {
    // Sandboxed iframe without history access
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  renderApp();
}

function toggleLanguage() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  safeSetStorage('aimine-lang', currentLang);
  document.documentElement.lang = currentLang;
  renderApp();
}

function initTheme() {
  const saved = safeGetStorage('aimine-theme');
  if (saved === 'dark') {
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
  }
}

function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light');
  safeSetStorage('aimine-theme', isLight ? 'light' : 'dark');
  updateTopbar();
}

function setProjectFilter(filterId) {
  currentFilter = filterId;
  renderApp();
}

function updateTopbar() {
  const nav = DATA[currentLang].nav;
  document.querySelectorAll('.nav-link').forEach((el) => {
    const r = el.getAttribute('data-route');
    if (nav[r]) el.textContent = nav[r];
    el.classList.toggle('is-active', r === currentRoute);
  });

  const langBtn = document.getElementById('lang-label');
  if (langBtn) langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    const isLight = document.documentElement.classList.contains('light');
    themeBtn.innerHTML = isLight ? ICONS.moon : ICONS.sun;
  }
}

function renderHomePage() {
  const h = DATA[currentLang].home;
  const featuredLogos = ['ens', 'upsaclay', 'iogs', 'uqtr', 'valeo', 'aurea'];

  return `
    <div class="page-view">
      <section class="hero-grid">
        <div>
          <p class="kicker">${h.kicker}</p>
          <h1 class="hero-h1">${h.firstName} <span>${h.lastName}</span></h1>
          <p class="hero-lead">${h.lead}</p>
          <div class="btn-row">
            <a href="#projects" onclick="navigateTo('projects', event)" class="btn btn-primary">${h.ctaProjects}</a>
            <a href="#internship" onclick="navigateTo('internship', event)" class="btn btn-outline">${h.ctaInternship}</a>
          </div>
          <div class="hero-socials">
            <a href="https://github.com/Squenger" target="_blank" rel="noopener noreferrer" class="social-chip social-chip--github">
              ${ICONS.github}
              <span>GitHub · Squenger</span>
            </a>
            <a href="https://linkedin.com/in/aimine-meddeb-a2b352248/" target="_blank" rel="noopener noreferrer" class="social-chip social-chip--linkedin">
              ${ICONS.linkedin}
              <span>LinkedIn</span>
            </a>
            <button type="button" onclick="openObfuscatedMail()" class="social-chip social-chip--mail">
              ${ICONS.mail}
              <span>aimine28 [at] gmail [dot] com</span>
            </button>
          </div>
        </div>

        <aside class="status-panel">
          ${h.status
            .map(
              (s) => `
              <div class="status-row">
                <div class="status-label">${s.label}</div>
                <div class="status-val">${s.val}</div>
              </div>
            `
            )
            .join('')}
        </aside>
      </section>

      <section class="logos-section">
        <p class="logos-head">${h.logosHeading}</p>
        <div class="logos-grid">
          ${featuredLogos
            .map(
              (key) => `
              <div class="logo-tile">
                ${renderLogo(key, 'sm')}
                <span class="logo-tile-name">${BRANDS[key].name}</span>
              </div>
            `
            )
            .join('')}
        </div>
      </section>

      <section class="skills-section">
        <p class="logos-head">${h.skillsHeading}</p>
        <div class="skills-grid">
          ${h.skills
            .map(
              (s) => `
              <div class="skill-card">
                <h3>${s.title}</h3>
                <p>${s.text}</p>
              </div>
            `
            )
            .join('')}
        </div>
      </section>
    </div>
  `;
}

function renderAboutPage() {
  const a = DATA[currentLang].about;

  const expHtml = a.experience
    .map(
      (e) => `
      <article class="entry-card">
        ${renderLogo(e.brand, 'md')}
        <div class="entry-body">
          <div class="entry-top">
            <h3 class="entry-title">${e.role}</h3>
            <span class="entry-date">${e.period}</span>
          </div>
          <p class="entry-org">${e.org}</p>
          <p class="entry-desc">${e.desc}</p>
        </div>
      </article>
    `
    )
    .join('');

  const eduHtml = a.education
    .map(
      (e) => `
      <article class="entry-card">
        ${renderLogo(e.brand, 'md')}
        <div class="entry-body">
          <div class="entry-top">
            <h3 class="entry-title">${e.degree}</h3>
            <span class="entry-date">${e.period}</span>
          </div>
          <p class="entry-org">${e.org}</p>
          <p class="entry-desc">${e.desc}</p>
          ${e.courses ? `<p class="entry-courses">${e.courses}</p>` : ''}
        </div>
      </article>
    `
    )
    .join('');

  return `
    <div class="page-view">
      <header class="page-head">
        <p class="kicker">${a.kicker}</p>
        <h1 class="page-title">${a.title}</h1>
        <p class="page-sub">${a.sub}</p>
      </header>

      <div class="career-grid">
        <section>
          <h2 class="col-title">${a.expTitle}</h2>
          <div class="entry-stack">${expHtml}</div>
        </section>
        <section>
          <h2 class="col-title">${a.eduTitle}</h2>
          <div class="entry-stack">${eduHtml}</div>
        </section>
      </div>
    </div>
  `;
}

function renderPaperPreview(preview) {
  if (!preview) return '';
  const instLogoHtml = preview.instLogo
    ? `<img src="${preview.instLogo}" alt="${preview.instAlt}" class="paper-inst-logo" loading="lazy" onerror="this.style.display='none';" />`
    : '';

  const figureHtml = preview.figureImg
    ? `
      <div class="paper-figure" style="flex-direction:column; align-items:stretch;">
        <img
          src="${preview.figureImg}"
          alt="${preview.paperTitle}"
          class="paper-figure-img"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div style="display:none; align-items:center; justify-content:space-between; gap:10px;">
          <span class="paper-fig-flow">${preview.fallbackFlow}</span>
          <span class="paper-fig-metric">${preview.metric}</span>
        </div>
      </div>
    `
    : `
      <div class="paper-figure">
        <span class="paper-fig-flow">${preview.fallbackFlow}</span>
        <span class="paper-fig-metric">${preview.metric}</span>
      </div>
    `;

  return `
    <div class="paper-preview">
      <div class="paper-sheet">
        <div class="paper-sheet-top">
          <span class="paper-venue">${preview.venue}</span>
          ${instLogoHtml}
        </div>
        <div class="paper-title">${preview.paperTitle}</div>
        <div class="paper-authors">${preview.authors}</div>
        ${figureHtml}
      </div>
    </div>
  `;
}

function renderProjectsPage() {
  const p = DATA[currentLang].projects;
  const filtered = p.items.filter((i) => currentFilter === 'all' || i.category === currentFilter);

  const filtersHtml = p.filters
    .map(
      (f) => `
      <button type="button" onclick="setProjectFilter('${f.id}')" class="filter-btn ${f.id === currentFilter ? 'is-active' : ''}">
        ${f.label}
      </button>
    `
    )
    .join('');

  const cardsHtml = filtered
    .map((item) => {
      const linksHtml = item.links
        .map((l) => {
          const isPaper = l.type === 'paper';
          return `
            <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="chip-link ${isPaper ? 'chip-link--paper' : ''}">
              ${isPaper ? ICONS.paper : ICONS.github}
              <span>${l.label}</span>
            </a>
          `;
        })
        .join('');

      return `
        <article class="proj-card">
          ${renderPaperPreview(item.paperPreview)}
          <div class="proj-body">
            <div>
              <div class="proj-meta">
                <span class="proj-cat">${item.catLabel}</span>
                <span class="proj-year">${item.year}</span>
              </div>
              <h2 class="proj-title">${item.title}</h2>
              <p class="proj-desc">${item.desc}</p>
            </div>
            <div style="display:flex; flex-direction:column; gap:14px;">
              <div class="proj-tags">
                ${item.tags.map((t) => `<span class="proj-tag">${t}</span>`).join('')}
              </div>
              <div class="proj-links">${linksHtml}</div>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  return `
    <div class="page-view">
      <header class="page-head">
        <p class="kicker">${p.kicker}</p>
        <h1 class="page-title">${p.title}</h1>
        <p class="page-sub">${p.sub}</p>
      </header>
      <div class="filter-row" role="tablist">${filtersHtml}</div>
      <section class="projects-grid">${cardsHtml}</section>
    </div>
  `;
}

function renderInternshipPage() {
  const i = DATA[currentLang].internship;

  return `
    <div class="page-view">
      <header class="page-head">
        <p class="kicker">${i.kicker}</p>
        <h1 class="page-title">${i.title}</h1>
        <p class="page-sub">${i.sub}</p>
      </header>

      <section class="intern-grid">
        ${i.criteria
          .map(
            (c) => `
            <div class="intern-card">
              <h3>${c.label}</h3>
              <p>${c.val}</p>
            </div>
          `
          )
          .join('')}
      </section>

      <section class="cv-panel">
        <div class="cv-panel-head">
          <h2 class="cv-panel-title">${i.cvTitle}</h2>
          <div class="btn-row">
            <a href="cv.pdf" download class="btn btn-primary" style="padding:9px 16px; font-size:13px;">
              ${ICONS.download}<span>${i.downloadBtn}</span>
            </a>
            <a href="cv.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding:9px 16px; font-size:13px;">
              ${ICONS.external}<span>${i.openBtn}</span>
            </a>
          </div>
        </div>
        <div class="cv-frame-wrap">
          <object data="cv.pdf#view=FitH" type="application/pdf" class="cv-viewer">
            <div class="cv-fallback">${i.fallbackText}</div>
          </object>
        </div>
      </section>
    </div>
  `;
}

function renderContactPage() {
  const c = DATA[currentLang].contact;

  const emailVal = isEmailRevealed
    ? `<button type="button" onclick="openObfuscatedMail()" class="contact-val" style="text-align:left; text-decoration:underline; text-underline-offset:4px;">${getAssembledEmail()}</button>`
    : `<p class="contact-val" style="user-select:none;">${getMaskedEmail()}</p>`;

  const emailBtns = isEmailRevealed
    ? `
      <button type="button" onclick="openObfuscatedMail()" class="chip-link chip-link--paper">${ICONS.mail}<span>${c.mailBtn}</span></button>
      <button type="button" onclick="copyEmail()" class="chip-link"><span>${c.copyBtn}</span></button>
    `
    : `
      <button type="button" onclick="revealEmailAddress()" class="chip-link chip-link--paper">${ICONS.mail}<span>${c.revealBtn}</span></button>
      <button type="button" onclick="copyEmail()" class="chip-link"><span>${c.copyBtn}</span></button>
    `;

  return `
    <div class="page-view">
      <header class="page-head">
        <p class="kicker">${c.kicker}</p>
        <h1 class="page-title">${c.title}</h1>
        <p class="page-sub">${c.sub}</p>
      </header>

      <section class="contact-grid">
        <div class="contact-card">
          <div>
            <p class="contact-label">${c.emailLabel}</p>
            ${emailVal}
          </div>
          <div class="btn-row">${emailBtns}</div>
        </div>

        <div class="contact-card">
          <div>
            <p class="contact-label">${c.githubLabel}</p>
            <p class="contact-val">github.com/Squenger</p>
          </div>
          <div class="btn-row">
            <a href="https://github.com/Squenger" target="_blank" rel="noopener noreferrer" class="chip-link">
              ${ICONS.github}<span>${c.openProfile}</span>
            </a>
          </div>
        </div>

        <div class="contact-card">
          <div>
            <p class="contact-label">${c.linkedinLabel}</p>
            <p class="contact-val">linkedin.com/in/aimine-meddeb-a2b352248</p>
          </div>
          <div class="btn-row">
            <a href="https://linkedin.com/in/aimine-meddeb-a2b352248/" target="_blank" rel="noopener noreferrer" class="chip-link chip-link--paper">
              ${ICONS.linkedin}<span>${c.openProfile}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderApp() {
  updateTopbar();
  const container = document.getElementById('app-view');
  switch (currentRoute) {
    case 'about':
      container.innerHTML = renderAboutPage();
      break;
    case 'projects':
      container.innerHTML = renderProjectsPage();
      break;
    case 'internship':
      container.innerHTML = renderInternshipPage();
      break;
    case 'contact':
      container.innerHTML = renderContactPage();
      break;
    case 'home':
    default:
      container.innerHTML = renderHomePage();
      break;
  }
}

function copyEmail() {
  const email = getAssembledEmail();
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(email)
      .then(() => showToast(DATA[currentLang].contact.copiedToast))
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
    showToast(DATA[currentLang].contact.copiedToast);
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

function initApp() {
  initTheme();
  document.documentElement.lang = currentLang;
  currentRoute = getRouteFromHash();
  renderApp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
