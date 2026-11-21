/**
 * Aimine Meddeb — Personal Portfolio
 * Smooth-scroll sections, scroll-spy pill navbar, EN/FR localization,
 * dark/light toggle, project filters, and embedded Internship CV viewer.
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
  renderContact();
}

const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  paper: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
};

const DATA = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      internship: 'Internship',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Aimine Meddeb',
      tagline:
        'Master MVA student at ENS Paris-Saclay & IOGS Engineer, working on Computer Vision, Multimodal Vision Transformers, Robotics, and LLMs.',
      ctaWork: 'View My Work',
      ctaInternship: 'Research Internship',
      scrollCue: 'Scroll to explore',
      loc: 'Paris-Saclay, France',
      facts: [
        { label: 'Program', value: 'Master 2 MVA — ENS Paris-Saclay' },
        { label: 'Engineering', value: "Institut d'Optique (IOGS) · GPA 4/4" },
        { label: 'Research Focus', value: 'Computer Vision · Multimodal ViTs · Robotics' },
        { label: 'Availability', value: '4–6 month research internship from April' },
      ],
    },
    about: {
      pill: 'About',
      title: 'About Me',
      bio:
        "Final-year student in the Master MVA program at ENS Paris-Saclay and engineering student at Institut d'Optique (IOGS). My work bridges applied mathematics, 3D computer vision, multimodal learning, and robotic manipulation. I enjoy digging into research papers, reproducing state-of-the-art architectures, and building clean, reliable systems.",
      skills: [
        'PyTorch',
        'Computer Vision',
        '3D Point Clouds',
        'Vision-Language-Action (VLA)',
        'Multimodal LLMs',
        'Transformers',
        'DPO',
        'Volumetric Reconstruction',
        'OpenCV',
        'French · English (C1)',
      ],
      expHeading: 'Experience',
      eduHeading: 'Education',
      experience: [
        {
          period: 'Mar – Aug 2026',
          role: 'Research Internship',
          org: 'Université du Québec à Trois-Rivières (UQTR)',
          desc:
            'Near real-time 3D reconstruction via deep learning for micro-CT integration into a 3D printing digital twin, combining cross-modal transformations and generative volumetric synthesis.',
        },
        {
          period: 'Jan – Mar 2026',
          role: 'Industrial Image Correction',
          org: 'VALEO',
          desc:
            'Automated image registration and centering pipeline (ORB, RANSAC) for industrial quality control of car logos, achieving < 0.5% precision error.',
        },
        {
          period: 'May – Aug 2025',
          role: 'Photonics Internship',
          org: 'Aurea Technology',
          desc:
            'Entangled photon source for satellite quantum communications (ESA TeQuantS) and EDFA system achieving 10 dB amplification.',
        },
        {
          period: 'Sept 2024 – Jul 2025',
          role: 'Co-founder, Innovation Program',
          org: 'VITAIM',
          desc:
            'Technical lead for a post-quantum cryptography (PQC) startup. Winner of the Paris-Saclay Entrepreneurship Pitch Competition.',
        },
        {
          period: 'Sept 2024 – Jun 2025',
          role: 'Oral Examiner (Colleur)',
          org: 'Lycée du Parc des Loges',
          desc: 'Mathematics oral examiner for engineering preparatory classes (PSI).',
        },
      ],
      education: [
        {
          period: '2026 – present',
          degree: 'Master MVA',
          org: 'ENS Paris-Saclay',
          desc: 'Applied Mathematics focusing on Machine Learning, Computer Vision, and AI.',
          courses:
            'Computer Vision · Deep Learning · Robotics · Foundations of LLMs · Text & Graph Learning · Optimization · Time Series · Computational Statistics',
        },
        {
          period: '2024 – 2026',
          degree: 'Master ATSI',
          org: 'Université Paris-Saclay',
          desc: 'Computer Vision, Deep Learning architectures, and Applied Optimization.',
          courses: null,
        },
        {
          period: '2023 – 2026',
          degree: 'Engineering Degree',
          org: "Institut d'Optique (IOGS)",
          desc: 'Mathematical modeling, Image Processing, Quantum physics. GPA: 4/4.',
          courses: null,
        },
        {
          period: '2023 – 2024',
          degree: "Mathematics Bachelor's Degree",
          org: 'Université Paris-Saclay',
          desc: 'Analysis, algebra, and probability.',
          courses: null,
        },
        {
          period: '2021 – 2023',
          degree: 'CPGE MPSI / MP*',
          org: 'Lycée Saint-Louis, Paris',
          desc: 'Intensive preparatory classes in Mathematics and Computer Science.',
          courses: null,
        },
      ],
    },
    projects: {
      pill: 'Work',
      title: 'My Projects',
      subtitle: 'Selected research reproductions and personal projects in robotics, multimodal vision, and generative AI.',
      filters: [
        { id: 'all', label: 'All' },
        { id: 'robotics', label: 'Robotics & 3D' },
        { id: 'vision', label: 'Vision & Multimodal' },
        { id: 'nlp', label: 'NLP & Generative' },
      ],
      items: [
        {
          featured: true,
          year: '2026',
          category: 'robotics',
          badge: 'Featured · Robotics & 3D',
          venue: 'Based on Shizhe Chen, Paul Pacaud & Cordelia Schmid · Inria / ENS · RSS 2026',
          title: 'PointACT — 3D-Aware Vision-Language-Action Policy',
          desc:
            'Reproduction and experimental study of PointACT, a dual-system 3D-aware VLA policy developed by Shizhe Chen’s team at Inria. It couples a frozen pretrained VLM backbone with a dedicated point-action expert using multi-scale 3D point clouds and bottleneck window self-attention for precise robotic manipulation on LIBERO and RLBench.',
          tags: ['VLA', '3D Point Clouds', 'Robotics', 'Point Transformer', 'Inria · RSS 2026'],
          links: [
            { type: 'paper', label: 'Paper (arXiv)', url: 'https://arxiv.org/abs/2605.21414' },
            { type: 'github', label: 'Code (robot-PointAct)', url: 'https://github.com/Squenger/robot-PointAct' },
          ],
        },
        {
          featured: false,
          year: '2025 – 2026',
          category: 'vision',
          badge: 'Vision & Multimodal',
          venue: 'NeurIPS 2025 · Datasets & Benchmarks Track',
          title: 'EgoBlind — Egocentric Visual Assistance',
          desc:
            'Research project around EgoBlind, the first egocentric VideoQA benchmark collected from blind and visually impaired users to evaluate Multimodal Large Language Models (MLLMs) in real daily-life assistive scenarios (1,392 first-person videos, 5,311 in-situation questions). Highlights key gaps between current MLLMs (~60%) and human performance (87.4%).',
          tags: ['Egocentric VideoQA', 'MLLMs', 'Assistive AI', 'NeurIPS 2025'],
          links: [
            { type: 'paper', label: 'Paper (arXiv)', url: 'https://arxiv.org/abs/2503.08221' },
          ],
        },
        {
          featured: false,
          year: '2026',
          category: 'nlp',
          badge: 'NLP & Generative',
          venue: 'Transformer · DPO · MidiBert',
          title: 'AI-Driven Music Generator',
          desc:
            'Generative MIDI model using a Transformer aligned with Direct Preference Optimization (DPO), paired with a pre-trained MidiBert network repurposed as a reward-based music judge.',
          tags: ['Transformer', 'DPO', 'MidiBert', 'Generative MIDI'],
          links: [
            { type: 'github', label: 'Music Model', url: 'https://github.com/Squenger/Music_Generation_Transformers' },
            { type: 'github', label: 'MidiBert Judge', url: 'https://github.com/Squenger/converting-MidiBERT-into-a-Judge' },
          ],
        },
        {
          featured: false,
          year: '2026',
          category: 'vision',
          badge: 'Vision & Multimodal',
          venue: 'CNN · Triplet Loss',
          title: 'Deep Learning Facial Recognition System',
          desc:
            'End-to-end computer vision pipeline built with CNNs and Triplet Loss, achieving 90% accuracy in learning robust facial embeddings for automated photo tagging.',
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
          featured: false,
          year: '2026',
          category: 'nlp',
          badge: 'NLP & Generative',
          venue: 'Decoder-only Transformer',
          title: 'Generative Literary Style Transfer',
          desc:
            'Decoder-only Transformer trained on classical poetry and Shakespearean plays to capture rhythmic meters and distinctive stylistic nuances.',
          tags: ['Decoder-only Transformer', 'Stylistic Generation', 'NLP'],
          links: [
            { type: 'github', label: 'Poem Generator', url: 'https://github.com/Squenger/French-poem-generator' },
          ],
        },
      ],
    },
    internship: {
      pill: 'Internship',
      bannerTitle: 'Computer Vision Research Internship',
      bannerSub: 'Multimodal Vision Transformers · Robotics · Master 2 MVA',
      lookingHeading: "What I'm Looking For",
      criteria: [
        { icon: 'calendar', label: 'Duration', value: '4–6 months starting from April' },
        { icon: 'pin', label: 'Locations', value: 'Paris, Zurich, Lausanne, Geneva, Berlin, London, Barcelona' },
        { icon: 'cpu', label: 'Focus', value: 'Computer Vision · Multimodal Vision Transformers · Robotics' },
        { icon: 'briefcase', label: 'Type', value: 'Research Internship (Master 2 MVA)' },
      ],
      resumeTitle: 'My Resume',
      downloadBtn: 'Download Resume (PDF)',
      openBtn: 'Open in New Tab',
      fallbackText: 'Your browser cannot display the PDF inline. Use the button above to download or open cv.pdf.',
    },
    contact: {
      pill: 'Contact',
      title: 'Get in Touch',
      subtitle: 'Open to research internship opportunities, academic collaborations, and technical discussions.',
      revealBtn: 'Reveal Email',
      mailBtn: 'Send Email',
      copyBtn: 'Copy Email',
      copiedToast: 'Email copied to clipboard',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      internship: 'Stage',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Aimine Meddeb',
      tagline:
        "Étudiant en Master MVA à l'ENS Paris-Saclay et élève-ingénieur à l'IOGS, spécialisé en Vision par Ordinateur, Multimodal Vision Transformers, Robotique et LLM.",
      ctaWork: 'Voir mes projets',
      ctaInternship: 'Stage de recherche',
      scrollCue: 'Défiler pour explorer',
      loc: 'Paris-Saclay, France',
      facts: [
        { label: 'Formation', value: 'Master 2 MVA — ENS Paris-Saclay' },
        { label: 'Ingénieur', value: "Institut d'Optique (IOGS) · GPA 4/4" },
        { label: 'Domaines', value: 'Vision par Ordinateur · ViT Multimodaux · Robotique' },
        { label: 'Disponibilité', value: 'Stage de recherche de 4 à 6 mois dès avril' },
      ],
    },
    about: {
      pill: 'À propos',
      title: 'À propos de moi',
      bio:
        "Étudiant en dernière année du Master MVA à l'ENS Paris-Saclay et élève-ingénieur à l'Institut d'Optique (IOGS). Mes travaux se situent à l'interface des mathématiques appliquées, de la vision par ordinateur 3D, de l'apprentissage multimodal et de la robotique. J'aime approfondir la littérature scientifique, reproduire des architectures récentes et concevoir des systèmes fiables.",
      skills: [
        'PyTorch',
        'Vision par Ordinateur',
        'Nuages de Points 3D',
        'Vision-Language-Action (VLA)',
        'MLLM',
        'Transformers',
        'DPO',
        'Reconstruction Volumétrique',
        'OpenCV',
        'Français · Anglais (C1)',
      ],
      expHeading: 'Expériences',
      eduHeading: 'Formation',
      experience: [
        {
          period: 'Mars – Août 2026',
          role: 'Stage de Recherche',
          org: 'Université du Québec à Trois-Rivières (UQTR)',
          desc:
            "Reconstruction 3D quasi temps réel par deep learning pour l'intégration micro-CT dans un jumeau numérique d'impression 3D, combinant corrélation cross-modale et synthèse volumétrique générative.",
        },
        {
          period: 'Janv. – Mars 2026',
          role: "Correction d'Images Industrielles",
          org: 'VALEO',
          desc:
            "Pipeline automatisé de recalage et centrage d'images (ORB, RANSAC) pour le contrôle qualité industriel de logos automobiles (< 0,5 % d'erreur).",
        },
        {
          period: 'Mai – Août 2025',
          role: 'Stage Photonique',
          org: 'Aurea Technology',
          desc:
            "Source de photons intriqués pour communications quantiques par satellite (ESA TeQuantS) et système EDFA à 10 dB d'amplification.",
        },
        {
          period: 'Sept. 2024 – Juil. 2025',
          role: 'Co-fondateur, Programme Innovation',
          org: 'VITAIM',
          desc:
            'Direction technique pour une startup en cryptographie post-quantique (PQC). Lauréat du concours de pitch Paris-Saclay.',
        },
        {
          period: 'Sept. 2024 – Juin 2025',
          role: 'Examinateur Oral (Colleur)',
          org: 'Lycée du Parc des Loges',
          desc: 'Examinateur oral de mathématiques en classes préparatoires (PSI).',
        },
      ],
      education: [
        {
          period: '2026 – présent',
          degree: 'Master MVA',
          org: 'ENS Paris-Saclay',
          desc: "Mathématiques Appliquées axées sur le Machine Learning, la Vision par Ordinateur et l'IA.",
          courses:
            'Computer Vision · Deep Learning · Robotics · Foundations of LLMs · Text & Graph Learning · Optimization · Time Series · Computational Statistics',
        },
        {
          period: '2024 – 2026',
          degree: 'Master ATSI',
          org: 'Université Paris-Saclay',
          desc: 'Vision par Ordinateur, architectures Deep Learning et Optimisation Appliquée.',
          courses: null,
        },
        {
          period: '2023 – 2026',
          degree: "Diplôme d'Ingénieur",
          org: "Institut d'Optique (IOGS)",
          desc: "Modélisation mathématique, Traitement d'images, Physique quantique. GPA : 4/4.",
          courses: null,
        },
        {
          period: '2023 – 2024',
          degree: 'Licence de Mathématiques',
          org: 'Université Paris-Saclay',
          desc: 'Analyse, algèbre et probabilités.',
          courses: null,
        },
        {
          period: '2021 – 2023',
          degree: 'CPGE MPSI / MP*',
          org: 'Lycée Saint-Louis, Paris',
          desc: 'Classes préparatoires intensives en Mathématiques et Informatique.',
          courses: null,
        },
      ],
    },
    projects: {
      pill: 'Travaux',
      title: 'Mes Projets',
      subtitle: 'Reproductions de papiers de recherche et projets en robotique, vision multimodale et IA générative.',
      filters: [
        { id: 'all', label: 'Tous' },
        { id: 'robotics', label: 'Robotique & 3D' },
        { id: 'vision', label: 'Vision & Multimodal' },
        { id: 'nlp', label: 'NLP & Génératif' },
      ],
      items: [
        {
          featured: true,
          year: '2026',
          category: 'robotics',
          badge: 'Mis en avant · Robotique & 3D',
          venue: "D'après Shizhe Chen, Paul Pacaud & Cordelia Schmid · Inria / ENS · RSS 2026",
          title: 'PointACT — Politique Vision-Langage-Action 3D',
          desc:
            "Reproduction et étude expérimentale de PointACT, une politique VLA 3D à double système conçue par l'équipe de Shizhe Chen à l'Inria. Elle associe un backbone VLM pré-entraîné figé à un expert point-action exploitant des nuages de points 3D multi-échelles par attention fenêtrée pour la manipulation robotique sur LIBERO et RLBench.",
          tags: ['VLA', 'Nuages de Points 3D', 'Robotique', 'Point Transformer', 'Inria · RSS 2026'],
          links: [
            { type: 'paper', label: 'Article (arXiv)', url: 'https://arxiv.org/abs/2605.21414' },
            { type: 'github', label: 'Code (robot-PointAct)', url: 'https://github.com/Squenger/robot-PointAct' },
          ],
        },
        {
          featured: false,
          year: '2025 – 2026',
          category: 'vision',
          badge: 'Vision & Multimodal',
          venue: 'NeurIPS 2025 · Datasets & Benchmarks Track',
          title: 'EgoBlind — Assistance Visuelle Égocentrique',
          desc:
            "Projet autour d'EgoBlind, le premier benchmark VideoQA égocentrique collecté auprès de personnes aveugles et malvoyantes pour évaluer les capacités d'assistance visuelle des MLLM au quotidien (1 392 vidéos subjectives, 5 311 questions en contexte). Met en évidence l'écart entre les MLLM actuels (~60 %) et l'humain (87,4 %).",
          tags: ['VideoQA Égocentrique', 'MLLM', 'IA Assistive', 'NeurIPS 2025'],
          links: [
            { type: 'paper', label: 'Article (arXiv)', url: 'https://arxiv.org/abs/2503.08221' },
          ],
        },
        {
          featured: false,
          year: '2026',
          category: 'nlp',
          badge: 'NLP & Génératif',
          venue: 'Transformer · DPO · MidiBert',
          title: 'AI-Driven Music Generator',
          desc:
            "Modèle génératif MIDI basé sur un Transformer aligné par Direct Preference Optimization (DPO), associé à un réseau MidiBert pré-entraîné converti en juge musical.",
          tags: ['Transformer', 'DPO', 'MidiBert', 'MIDI Génératif'],
          links: [
            { type: 'github', label: 'Music Model', url: 'https://github.com/Squenger/Music_Generation_Transformers' },
            { type: 'github', label: 'MidiBert Judge', url: 'https://github.com/Squenger/converting-MidiBERT-into-a-Judge' },
          ],
        },
        {
          featured: false,
          year: '2026',
          category: 'vision',
          badge: 'Vision & Multimodal',
          venue: 'CNN · Triplet Loss',
          title: 'Deep Learning Facial Recognition System',
          desc:
            "Pipeline complet de vision par ordinateur utilisant des CNN et la Triplet Loss, atteignant 90 % de précision pour l'étiquetage photo automatisé.",
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
          featured: false,
          year: '2026',
          category: 'nlp',
          badge: 'NLP & Génératif',
          venue: 'Decoder-only Transformer',
          title: 'Generative Literary Style Transfer',
          desc:
            'Transformer Decoder-only entraîné sur de la poésie classique et des pièces de Shakespeare pour capturer les motifs rythmiques et nuances stylistiques.',
          tags: ['Decoder-only Transformer', 'Génération Stylistique', 'NLP'],
          links: [
            { type: 'github', label: 'Poem Generator', url: 'https://github.com/Squenger/French-poem-generator' },
          ],
        },
      ],
    },
    internship: {
      pill: 'Stage',
      bannerTitle: 'Stage de Recherche en Vision par Ordinateur',
      bannerSub: 'Multimodal Vision Transformers · Robotique · Master 2 MVA',
      lookingHeading: 'Ce que je recherche',
      criteria: [
        { icon: 'calendar', label: 'Durée', value: '4 à 6 mois à partir de avril' },
        { icon: 'pin', label: 'Lieux', value: 'Paris, Zurich, Lausanne, Genève, Berlin, Londres, Barcelone' },
        { icon: 'cpu', label: 'Domaines', value: 'Vision par ordinateur · Multimodal Vision Transformers · Robotique' },
        { icon: 'briefcase', label: 'Type', value: 'Stage de recherche (Master 2 MVA)' },
      ],
      resumeTitle: 'Mon CV',
      downloadBtn: 'Télécharger le CV (PDF)',
      openBtn: 'Ouvrir dans un onglet',
      fallbackText: "Votre navigateur ne peut pas afficher le PDF directement. Utilisez le bouton ci-dessus pour ouvrir cv.pdf.",
    },
    contact: {
      pill: 'Contact',
      title: 'Me Contacter',
      subtitle: 'Disponible pour discuter d’un stage de recherche, d’une collaboration académique ou d’un projet technique.',
      revealBtn: "Afficher l'email",
      mailBtn: 'Envoyer un email',
      copyBtn: "Copier l'email",
      copiedToast: 'Adresse email copiée',
    },
  },
};

let currentLang = localStorage.getItem('aimine-lang') === 'fr' ? 'fr' : 'en';
let currentFilter = 'all';

function initTheme() {
  const saved = localStorage.getItem('aimine-theme');
  if (saved === 'light') {
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.remove('light');
  }
  updateThemeIcon();
}

function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light');
  localStorage.setItem('aimine-theme', isLight ? 'light' : 'dark');
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const isLight = document.documentElement.classList.contains('light');
  btn.innerHTML = isLight ? ICONS.moon : ICONS.sun;
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  localStorage.setItem('aimine-lang', currentLang);
  document.documentElement.lang = currentLang;
  renderAll();
}

function setProjectFilter(filterId) {
  currentFilter = filterId;
  renderProjects();
}

function renderNav() {
  const nav = DATA[currentLang].nav;
  document.querySelectorAll('.nav-link').forEach((el) => {
    const key = el.getAttribute('data-section');
    if (nav[key]) el.textContent = nav[key];
  });
  const langLabel = document.getElementById('lang-label');
  if (langLabel) langLabel.textContent = currentLang === 'en' ? 'FR' : 'EN';
}

function renderHero() {
  const h = DATA[currentLang].hero;
  document.getElementById('hero-greeting-text').textContent = h.greeting;
  document.getElementById('hero-name-text').textContent = h.name;
  document.getElementById('hero-tagline').textContent = h.tagline;
  document.getElementById('hero-cta-work').textContent = h.ctaWork;
  document.getElementById('hero-cta-internship').textContent = h.ctaInternship;
  document.getElementById('hero-scroll-text').textContent = h.scrollCue;
  document.getElementById('hero-loc').textContent = h.loc;

  document.getElementById('hero-facts').innerHTML = h.facts
    .map(
      (f) => `
      <div class="hero-fact">
        <span class="hero-fact-label">${f.label}</span>
        <span class="hero-fact-val">${f.value}</span>
      </div>
    `
    )
    .join('');
}

function renderAbout() {
  const a = DATA[currentLang].about;
  document.getElementById('about-pill').textContent = a.pill;
  document.getElementById('about-title').textContent = a.title;
  document.getElementById('about-bio').textContent = a.bio;
  document.getElementById('exp-heading').textContent = a.expHeading;
  document.getElementById('edu-heading').textContent = a.eduHeading;

  document.getElementById('about-skills').innerHTML = a.skills
    .map((s) => `<span class="skill-tag">${s}</span>`)
    .join('');

  document.getElementById('exp-list').innerHTML = a.experience
    .map(
      (e) => `
      <article class="timeline-card">
        <div class="timeline-top">
          <h4 class="timeline-title">${e.role}</h4>
          <span class="timeline-date">${e.period}</span>
        </div>
        <p class="timeline-org">${e.org}</p>
        <p class="timeline-desc">${e.desc}</p>
      </article>
    `
    )
    .join('');

  document.getElementById('edu-list').innerHTML = a.education
    .map(
      (e) => `
      <article class="timeline-card">
        <div class="timeline-top">
          <h4 class="timeline-title">${e.degree}</h4>
          <span class="timeline-date">${e.period}</span>
        </div>
        <p class="timeline-org">${e.org}</p>
        <p class="timeline-desc">${e.desc}</p>
        ${e.courses ? `<p class="timeline-courses">${e.courses}</p>` : ''}
      </article>
    `
    )
    .join('');
}

function renderProjects() {
  const p = DATA[currentLang].projects;
  document.getElementById('projects-pill').textContent = p.pill;
  document.getElementById('projects-title').textContent = p.title;
  document.getElementById('projects-subtitle').textContent = p.subtitle;

  document.getElementById('project-filters').innerHTML = p.filters
    .map(
      (f) => `
      <button type="button" onclick="setProjectFilter('${f.id}')" class="filter-btn ${f.id === currentFilter ? 'is-active' : ''}">
        ${f.label}
      </button>
    `
    )
    .join('');

  const filtered = p.items.filter((i) => currentFilter === 'all' || i.category === currentFilter);

  document.getElementById('projects-grid').innerHTML = filtered
    .map((item) => {
      const featCls = item.featured && currentFilter === 'all' ? 'is-featured' : '';
      const linksHtml = item.links
        .map((l) => {
          const isPaper = l.type === 'paper';
          return `
            <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="project-link ${isPaper ? 'project-link--paper' : ''}">
              ${isPaper ? ICONS.paper : ICONS.github}
              <span>${l.label}</span>
            </a>
          `;
        })
        .join('');

      return `
        <article class="project-card ${featCls}">
          <div>
            <div class="project-head">
              <span class="project-badge">${item.badge}</span>
              <span class="project-year">${item.year}</span>
            </div>
            <h3 class="project-title">${item.title}</h3>
            ${item.venue ? `<p class="project-venue">${item.venue}</p>` : ''}
            <p class="project-desc">${item.desc}</p>
          </div>
          <div class="project-bottom">
            <div class="project-tags">
              ${item.tags.map((t) => `<span class="project-tag">${t}</span>`).join('')}
            </div>
            <div class="project-links">${linksHtml}</div>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderInternship() {
  const i = DATA[currentLang].internship;
  document.getElementById('intern-pill').textContent = i.pill;
  document.getElementById('intern-title').textContent = i.bannerTitle;
  document.getElementById('intern-sub').textContent = i.bannerSub;
  document.getElementById('intern-looking-heading').textContent = i.lookingHeading;
  document.getElementById('resume-title').textContent = i.resumeTitle;
  document.getElementById('resume-download-label').textContent = i.downloadBtn;
  document.getElementById('resume-open-label').textContent = i.openBtn;
  document.getElementById('cv-fallback-text').textContent = i.fallbackText;

  document.getElementById('criteria-grid').innerHTML = i.criteria
    .map(
      (c) => `
      <div class="criteria-card">
        <div class="criteria-icon">${ICONS[c.icon]}</div>
        <div class="criteria-label">${c.label}</div>
        <div class="criteria-val">${c.value}</div>
      </div>
    `
    )
    .join('');
}

function renderContact() {
  const c = DATA[currentLang].contact;
  document.getElementById('contact-pill').textContent = c.pill;
  document.getElementById('contact-title').textContent = c.title;
  document.getElementById('contact-subtitle').textContent = c.subtitle;

  const emailEl = document.getElementById('contact-email-row');
  if (isEmailRevealed) {
    emailEl.innerHTML = `
      <button type="button" onclick="openObfuscatedMail()" class="email-pill">${getAssembledEmail()}</button>
      <button type="button" onclick="openObfuscatedMail()" class="btn btn-primary" style="padding:9px 16px; font-size:13px;">${c.mailBtn}</button>
      <button type="button" onclick="copyEmail()" class="btn btn-ghost" style="padding:9px 16px; font-size:13px;">${c.copyBtn}</button>
    `;
  } else {
    emailEl.innerHTML = `
      <span class="email-pill" style="user-select:none;">${getMaskedEmail()}</span>
      <button type="button" onclick="revealEmailAddress()" class="btn btn-primary" style="padding:9px 16px; font-size:13px;">${c.revealBtn}</button>
      <button type="button" onclick="copyEmail()" class="btn btn-ghost" style="padding:9px 16px; font-size:13px;">${c.copyBtn}</button>
    `;
  }
}

function renderAll() {
  renderNav();
  renderHero();
  renderAbout();
  renderProjects();
  renderInternship();
  renderContact();
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

function initScrollObservers() {
  // Reveal animations on scroll
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // Active floating navbar pill tracking on scroll
  const sections = document.querySelectorAll('section[data-nav]');
  const navLinks = document.querySelectorAll('.nav-link');

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-nav');
          navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('data-section') === id);
          });
        }
      });
    },
    { rootMargin: '-38% 0px -52% 0px' }
  );
  sections.forEach((sec) => spyObserver.observe(sec));
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  document.documentElement.lang = currentLang;
  renderAll();
  initScrollObservers();
});
