/**
 * PORTFOLIO CONTENT
 * --------------------------------------------------------------------------
 * Everything visible on the site lives here. Text wrapped in [ BRACKETS ] is a
 * placeholder still waiting for real details.
 */
import jobConnectImg from '../../ASSETS/JobConnect.png';
import sentinelImg from '../../ASSETS/sentinelci.png';
import aquadocImg from '../../ASSETS/aquadoc.png';

export type Accent = 'a-or' | 'a-cy' | 'a-am' | 'a-te';

const icon = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;

export const portfolio = {
  name: 'NAYAN RAJ',
  shortName: 'NAYAN.RAJ',
  role: 'AI / ML ENGINEER · ROBOTICS · FULL-STACK',
  tagline: 'B.Tech CSE student at SRM Institute of Science and Technology, building practical systems across AI/ML, computer vision, robotics and full-stack development.',
  status: 'B.TECH CSE · SRM · MAY 2027 · SDE INTERN @ SPRITLE SOFTWARE',
  // Drop your photo in ASSETS/ and import it here, e.g. import photo from '../../ASSETS/photo.jpg'
  photo: '' as string,

  about: {
    paragraphs: [
      'I am a 2027 B.Tech Computer Science and Engineering student at SRM Institute of Science and Technology with a strong interest in building real-world software and AI systems. My work spans offline RAG and document intelligence, anomaly detection, distributed AI agents, data engineering, DevSecOps, full-stack applications, embedded/IoT systems, and computer vision.',
      'I enjoy taking systems from an idea or research problem to something that can actually be tested, measured, and used. I have worked on applied AI research, autonomous surface-vehicle mission control, robotics perception and manipulation, and production-style software pipelines, with a focus on Python, APIs, Linux, model evaluation, debugging, and system integration.',
    ],
    highlights: [
      { icon: '⚙', text: 'Building language-to-3D perception and VLA pick-and-place for robot arms' },
      { icon: '⚓', text: '97%+ GPS path-tracking accuracy on an ASV mission-control system at NIOT' },
      { icon: '◈', text: 'Accepted research project: 0.79 F1 vs 0.40 Isolation Forest baseline' },
      { icon: '⚡', text: 'Offline RAG system with sub-1.5 s answers and zero cloud dependency' },
    ],
  },

  // CLASSES — roles + the skills that back them up.
  classes: [
    {
      short: 'ML / AI', icon: '✦', cls: 'CLASS · ARCANE', title: 'MACHINE LEARNING & AI', accent: 'a-or' as Accent, hex: 'FFB366',
      desc: 'Retrieval-augmented LLM systems, self-healing agents and anomaly detectors, now pushing into vision-language-action models for robots.',
      skills: ['RAG pipelines', 'LLM agents', 'Sentence Transformers', 'FAISS + BM25', 'Ollama local LLMs', 'Anomaly detection', 'scikit-learn', 'VLM / VLA', 'SmolVLA', 'Model evaluation'],
      logos: [['pytorch', 'PyTorch'], ['huggingface', 'Hugging Face'], ['ollama', 'Ollama'], ['scikitlearn', 'scikit-learn']],
    },
    {
      short: 'DATA ANALYTICS', icon: '▤', cls: 'CLASS · ORACLE', title: 'DATA ANALYTICS', accent: 'a-am' as Accent, hex: 'FFE380',
      desc: 'Distributed pipelines, time-series drift tracking and statistically validated results, shipped as dashboards people can read.',
      skills: ['Pandas', 'NumPy', 'PySpark', 'Time-series analysis', 'Statistical testing', 'Apache Solr', 'Streamlit', 'Plotly', 'Benchmarking'],
      logos: [['pandas', 'Pandas'], ['apachespark', 'PySpark'], ['plotly', 'Plotly'], ['streamlit', 'Streamlit']],
    },
    {
      short: 'ROBOTICS', icon: '⚙', cls: 'CLASS · ENGINEER', title: 'ROBOTICS & PHYSICAL AI', accent: 'a-te' as Accent, hex: '80FFE8',
      desc: 'Language-conditioned pick-and-place on a LeRobot SO-101 arm and OpenArm in MuJoCo simulation: hand-eye calibration, inverse kinematics and VLA policies. Earlier, mission control for an autonomous surface vehicle.',
      skills: ['LeRobot SO-101', 'OpenArm', 'MuJoCo', 'Inverse kinematics', 'Hand-eye calibration', 'Pick & place', 'Sim-to-real testing', 'ASV mission control', 'GPS / NMEA', 'Arduino + LoRa'],
      logos: [['python', 'Python'], ['huggingface', 'LeRobot'], ['arduino', 'Arduino'], ['qt', 'PyQt5']],
    },
    {
      short: 'COMPUTER VISION', icon: '◉', cls: 'CLASS · SEER', title: 'COMPUTER VISION', accent: 'a-cy' as Accent, hex: '80E8FF',
      desc: 'RGB-D perception that turns a text prompt into 3D object coordinates, plus OCR, underwater and satellite imagery work.',
      skills: ['Grounding DINO', 'SAM', 'Depth Anything V2', 'RGB-D perception', '3D localisation', 'OpenCV', 'EasyOCR', 'NDWI / satellite', 'Image classification'],
      logos: [['opencv', 'OpenCV'], ['pytorch', 'PyTorch'], ['numpy', 'NumPy'], ['python', 'Python']],
    },
    {
      short: 'FULL-STACK', icon: '⌘', cls: 'CLASS · BUILDER', title: 'FULL STACK DEVELOPMENT', accent: 'a-or' as Accent, hex: 'FFB366',
      desc: 'React + TypeScript front ends, FastAPI and Node back ends, CI/CD with security gates and cloud deploys.',
      skills: ['React', 'TypeScript', 'Tailwind', 'Node / Express', 'FastAPI', 'PostgreSQL + Drizzle', 'Celery / Redis', 'Docker', 'GitHub Actions', 'Vercel'],
      logos: [['react', 'React'], ['typescript', 'TypeScript'], ['fastapi', 'FastAPI'], ['docker', 'Docker']],
    },
  ],

  experience: {
    current: {
      when: '[ START DATE ] — PRESENT',
      title: 'SOFTWARE DEVELOPMENT ENGINEER INTERN',
      focus: 'PHYSICAL AI · 3D PERCEPTION · VLM / VLA',
      org: 'SPRITLE SOFTWARE',
      bullets: [
        'Developing Python RGB-D perception pipelines that map language prompts to 3D object coordinates using Grounding DINO, SAM and Depth Anything V2, and evaluating depth error on held-out benchmarks.',
        'Integrating hand-eye calibration and inverse-kinematics pick-and-place on a LeRobot SO-101 arm, tested in simulation first.',
        'Evaluating SmolVLA for language-conditioned manipulation.',
        'Simulating an autonomous pick-and-place environment for OpenArm in MuJoCo.',
      ],
      tags: ['PYTHON', 'GROUNDING DINO', 'SAM', 'DEPTH ANYTHING V2', 'LEROBOT SO-101', 'SMOLVLA', 'OPENARM', 'MUJOCO', 'IK'],
    },
    previous: {
      when: '[ DATES ]',
      title: 'OCEAN ELECTRONICS INTERN',
      org: 'NIOT — NATIONAL INSTITUTE OF OCEAN TECHNOLOGY',
      bullets: [
        'Engineered an end-to-end mission-control system for an Autonomous Surface Vehicle: Python/PyQt5 UI for live GPS/NMEA telemetry, real-time map tracking, waypoint control and mission logging.',
        'Integrated Arduino + LoRa hardware and automated telemetry processing and post-mission analytics.',
        'Reached 97%+ GPS path-tracking accuracy through calibration and statistical validation.',
        'Prototyped an underwater coral-reef image classifier with OpenCV and ML.',
      ],
      tags: ['PYTHON', 'PYQT5', 'ARDUINO', 'LORA', 'GPS/NMEA', 'LEAFLET', 'OPENCV'],
    },
  },

  projects: [
    { title: 'Offline AI Document Intelligence — Local RAG', glyph: '✦', cat: 'AI / RAG', accent: 'a-or' as Accent, image: '',
      desc: 'Built a fully offline document question-answering system using OCR/OpenCV preprocessing, Sentence Transformers embeddings, FAISS + BM25 hybrid retrieval and Ollama local LLMs behind FastAPI. Improved OCR accuracy from ~40% to ~75%, cut irrelevant responses ~30%, sub-1.5 s inference with zero cloud dependency.',
      tech: ['PYTHON', 'FASTAPI', 'EASYOCR', 'OPENCV', 'FAISS', 'BM25', 'OLLAMA', 'RAG'], github: 'https://github.com/NR0498/offline-doc-poc', live: '' },
    { title: 'AgentPulse — Agentic Task Orchestration', glyph: '⚡', cat: 'AI AGENTS', accent: 'a-te' as Accent, image: '',
      desc: 'LLM-powered self-healing agent that classifies distributed-worker failures (timeouts, invalid inputs, resource errors) and picks retry, reassignment or escalation. Celery/Redis workers, SQS-compatible decision queues, FastAPI endpoints and a dashboard of agent decisions and confidence.',
      tech: ['PYTHON', 'LLMS', 'AI AGENTS', 'FASTAPI', 'CELERY', 'REDIS', 'SQS', 'LOCALSTACK'], github: '', live: '' },
    { title: 'Spatio-Temporal Climate Anomaly Detection', glyph: '◈', cat: 'RESEARCH', accent: 'a-am' as Accent, image: '',
      desc: 'Accepted research-paper project for resilient geospatial IoT monitoring. Hybrid detector combining temporal deviation, KNN spatial correlation and rate-of-change over 800K+ readings — 0.79 F1 vs 0.40 for Isolation Forest, validated with ablations and a t-test (p<0.001).',
      tech: ['PYTHON', 'PANDAS', 'SCIKIT-LEARN', 'KNN', 'ISOLATION FOREST', 'LOF', 'STREAMLIT'], github: '', live: '' },
    { title: 'SkillDrift — Real-Time Skill Demand Tracker', glyph: '▤', cat: 'DATA', accent: 'a-cy' as Accent, image: '',
      desc: 'Distributed PySpark pipeline ingesting live job postings and computing per-skill demand drift across time-series snapshots. 25+ skills across 100K+ data points, Apache Solr full-text search, S3 via LocalStack, FastAPI + live trend dashboard.',
      tech: ['PYTHON', 'PYSPARK', 'APACHE SOLR', 'AWS S3', 'LOCALSTACK', 'FASTAPI'], github: 'https://github.com/NR0498/skilldrift', live: 'https://skilldrift.vercel.app' },
    { title: 'SentinelCI — DevSecOps Pipeline', glyph: '▣', cat: 'DEVSECOPS', accent: 'a-or' as Accent, image: sentinelImg,
      desc: 'Automated CI/CD security pipeline with build, test, SAST/DAST-style checks, dependency and container scanning. Threshold-based build failure, S3 report archival and SNS notifications via LocalStack, plus a FastAPI + React dashboard of build history and critical findings.',
      tech: ['PYTHON', 'BASH', 'DOCKER', 'GH ACTIONS', 'TRIVY', 'PIP-AUDIT', 'K8S', 'PROMETHEUS', 'GRAFANA'], github: 'https://github.com/NR0498/sentinelci', live: 'https://sentinelci-dashboard.vercel.app' },
    { title: 'JobConnect — Jobs & Internship Platform', glyph: '◎', cat: 'FULL-STACK', accent: 'a-cy' as Accent, image: jobConnectImg,
      desc: 'India-focused job and internship discovery platform with secure auth, database-backed listings, advanced filtering, skill-based discovery and relevance scoring. Aggregates The Muse, Remotive and Jobicy APIs with scheduled sync and production-ready API routing.',
      tech: ['REACT', 'TYPESCRIPT', 'TAILWIND', 'REDUX', 'NODE.JS', 'EXPRESS', 'POSTGRESQL', 'DRIZZLE'], github: 'https://github.com/NR0498/jobconnect', live: 'https://jobconnect-olive.vercel.app' },
    { title: 'FLYDEMAND — Airline Demand Analysis', glyph: '↗', cat: 'DATA + AI', accent: 'a-am' as Accent, image: '',
      desc: 'AI-powered airline demand dashboard combining live AviationStack and OpenFlights data with interactive Streamlit/Plotly analytics and LLM-assisted insights. Caching and modular design cut API load 40% and improved processing efficiency 35%.',
      tech: ['PYTHON', 'STREAMLIT', 'PLOTLY', 'GPT-4O-MINI', 'PANDAS'], github: '', live: '' },
    { title: 'Mission Control for an Autonomous Surface Vehicle', glyph: '⚓', cat: 'ROBOTICS', accent: 'a-te' as Accent, image: '',
      desc: 'End-to-end ASV mission-control system from the NIOT Ocean Electronics internship: PyQt5 interface for live GPS/NMEA telemetry, map tracking, waypoint control, sensor visualisation and logging. Arduino/LoRa integration and 97%+ GPS path-tracking accuracy.',
      tech: ['PYTHON', 'PYQT5', 'ARDUINO', 'LORA', 'GPS/NMEA', 'LEAFLET'], github: '', live: '' },
    { title: 'Coral-Reef Underwater Image Classification', glyph: '◉', cat: 'VISION', accent: 'a-cy' as Accent, image: '',
      desc: 'Prototyped an underwater-image classification system at NIOT to label coral-reef imagery, applying computer vision to underwater data alongside the ASV mission-control and telemetry work.',
      tech: ['PYTHON', 'OPENCV', 'ML', 'CLASSIFICATION'], github: '', live: '' },
    { title: 'AquaDoc — Satellite Water-Quality Analysis', glyph: '◇', cat: 'REMOTE SENSING', accent: 'a-te' as Accent, image: aquadocImg,
      desc: 'Checks the health of any lake, reservoir or river from space. Pulls the latest clear Sentinel-2 scene, masks clouds, shadows and shoreline, then estimates chlorophyll-a, suspended solids, turbidity, Secchi depth and CDOM pixel by pixel with a neural-network ensemble trained on GLORIA. A transparent 7-stage pipeline streams live to the dashboard, and every estimate ships with an uncertainty range.',
      tech: ['PYTHON', 'SENTINEL-2', 'RASTERIO / GDAL', 'NUMPY', 'FASTAPI', 'SSE', 'POSTGRESQL', 'NEXT.JS', 'MAPLIBRE'], github: '', live: '' },
  ],

  certificates: [
    { title: 'Certificate One', issuer: 'Issuing Organization', date: '2026', icon: '✦' },
    { title: 'Certificate Two', issuer: 'Issuing Organization', date: '2025', icon: '◈' },
    { title: 'Certificate Three', issuer: 'Issuing Organization', date: '2024', icon: '◇' },
  ],

  latestPost: {
    title: 'A short title for your latest article or update',
    summary: 'Use this space for a short preview. You can change the button link to a blog post, a LinkedIn post, or remove this section entirely.',
    date: 'Month DD, YYYY',
    readingTime: '5 min read',
    url: 'https://your-blog-url.example',
  },
  activities: [
    { icon: '✎', text: 'Add a recent project, post, or milestone', time: 'Recently' },
    { icon: '↗', text: 'Share an achievement or learning update', time: 'This month' },
    { icon: '◎', text: 'Mention a current focus or collaboration', time: 'Ongoing' },
  ],

  contact: {
    email: 'nayanraj083@gmail.com',
    phone: '+91 93892 71756',
    phoneHref: 'tel:+919389271756',
    location: 'Chennai, India',
    availability: 'Available for freelance and full-time opportunities.',
    github: 'https://github.com/NR0498',
    linkedin: 'https://linkedin.com/in/your-username',
  },
};

export const logoRows = {
  ai: [
    ['python', 'PYTHON'], ['pytorch', 'PYTORCH'], ['huggingface', 'HUGGING FACE'], ['opencv', 'OPENCV'], ['scikitlearn', 'SCIKIT-LEARN'],
    ['pandas', 'PANDAS'], ['numpy', 'NUMPY'], ['ollama', 'OLLAMA'], ['fastapi', 'FASTAPI'], ['apachespark', 'PYSPARK'],
    ['streamlit', 'STREAMLIT'], ['plotly', 'PLOTLY'], ['arduino', 'ARDUINO'], ['qt', 'PYQT5'],
  ].map(([slug, name]) => ({ src: icon(slug, 'FFB366'), name })),
  web: [
    ['react', 'REACT'], ['typescript', 'TYPESCRIPT'], ['nodedotjs', 'NODE.JS'], ['express', 'EXPRESS'], ['tailwindcss', 'TAILWIND'],
    ['postgresql', 'POSTGRESQL'], ['redis', 'REDIS'], ['celery', 'CELERY'], ['docker', 'DOCKER'], ['kubernetes', 'KUBERNETES'],
    ['githubactions', 'GH ACTIONS'], ['prometheus', 'PROMETHEUS'], ['grafana', 'GRAFANA'], ['vercel', 'VERCEL'],
  ].map(([slug, name]) => ({ src: icon(slug, '80E8FF'), name })),
};

export const classLogo = (slug: string, hex: string) => icon(slug, hex);

// NAVIGATION — ids must match section ids in App.tsx.
export const navigationItems = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'CLASSES' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'certificates', label: 'CERTS' },
  { id: 'writing', label: 'WRITING' },
  { id: 'contact', label: 'CONTACT' },
];
