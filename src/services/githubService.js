// Live GitHub Repository Fetcher & Deep Analyzer for Navaneethanrs

export const GITHUB_USERNAME = 'Navaneethanrs';

function getGitHubHeaders() {
  const token =
    (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GITHUB_TOKEN) ||
    (typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem('portfolio_github_token')) ||
    '';
  const headers = { 'Accept': 'application/vnd.github.v3+json' };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

// Pre-seeded comprehensive commit counts verified directly from GitHub API
export const VERIFIED_COMMIT_COUNTS = {
  'MediRoute': 73,
  'Civic-Connect': 45,
  'Madathon-': 23,
  'PORTFOLIO': 22,
  'MADC': 21,
  'Navaneethanrs': 11,
  'MindBlossom': 9,
  'jarvis': 8,
  'FOODSAVER': 6,
  'Cpu-Scheduling': 6,
  'MADC-LANUCH': 6,
  'CareerLens': 3,
  'ConsoleBasedApplication-': 3,
  '-Virtual-Herbal-Garden': 2,
  'AutoAttend': 2,
  'Decrease-by-One-Factor-Prime-Factor-Finder': 2,
  'MADC-APP': 2,
  'madc-attendance': 2,
  'medikiosk': 2,
};

// Pre-seeded comprehensive data for all 19 repositories
export const PRELOADED_REPOSITORIES = [
  {
    name: '-Virtual-Herbal-Garden',
    displayName: 'Virtual Herbal Garden',
    description: 'An interactive digital platform showcasing medicinal plants used in AYUSH systems through realistic 3D models and rich multimedia content. Enables users to explore, rotate, and zoom into plants while learning botanical details, medicinal uses, habitat, and cultivation methods.',
    language: 'JavaScript / 3D Web',
    url: 'https://github.com/Navaneethanrs/-Virtual-Herbal-Garden',
    topics: ['ayush', '3d-models', 'medicinal-plants', 'interactive-web', 'botany'],
    commits: 2,
    highlights: [
      'Interactive 3D plant rendering with 360-degree rotation and zoom',
      'Curated medicinal knowledge base spanning AYUSH herbal systems',
      'Detailed botanical classification, active therapeutic compounds, and habitat data',
      'Cultivation guides and traditional remedy references'
    ]
  },
  {
    name: 'AutoAttend',
    displayName: 'AutoAttend — Rural Schools Attendance System',
    description: 'Automated Attendance System specifically designed for rural schools featuring facial recognition and RFID technology. Includes a responsive dashboard, teacher portal, student management, real-time attendance tracking, and downloadable analytics.',
    language: 'HTML / CSS / JavaScript',
    url: 'https://github.com/Navaneethanrs/AutoAttend',
    topics: ['facial-recognition', 'rfid', 'attendance-system', 'rural-education', 'analytics'],
    commits: 2,
    highlights: [
      'Facial recognition and RFID hardware integration for automated check-in',
      'Low-bandwidth friendly responsive web dashboard for rural environments',
      'Real-time student attendance tracking and automated absence reporting',
      'Teacher administrative portal with CSV/PDF report generation'
    ]
  },
  {
    name: 'medikiosk',
    displayName: 'MediKiosk — Multimodal AI Medical Intake & Digitization System',
    description: 'An intelligent, bilingual/multimodal medical kiosk platform designed to streamline outpatient intake, clinical triage, document digitization, entity extraction, and clinician handover.',
    language: 'JavaScript / AI',
    url: 'https://github.com/Navaneethanrs/medikiosk',
    topics: ['healthcare-ai', 'document-digitization', 'entity-extraction', 'triage', 'multimodal'],
    commits: 2,
    highlights: [
      'Multimodal bilingual voice & touch interaction for diverse outpatient demographics',
      'Automated medical document scanning, OCR digitization, and clinical entity extraction',
      'Clinical triage risk assessment engine for incoming emergency cases',
      'Clinician handover dashboard with structured electronic health records (EHR)'
    ]
  },
  {
    name: 'CareerLens',
    displayName: 'CareerLens',
    description: 'Hackathon innovation built during the Zentra / VIT 24-hour sprint. Provides intelligent career guidance, skill gap analysis, and personalized roadmaps for engineering students.',
    language: 'JavaScript / Python',
    url: 'https://github.com/Navaneethanrs/CareerLens',
    topics: ['hackathon', 'vit-chennai', 'career-guidance', 'skill-analysis', 'roadmaps'],
    commits: 3,
    highlights: [
      'Engineered in 24 hours at the VIT Chennai Zentra hackathon',
      'Automated skill matrix assessment comparing student profiles against industry roles',
      'Generates curated learning roadmaps and tech stack recommendations'
    ]
  },
  {
    name: 'Civic-Connect',
    displayName: 'CivicConnect (TechSphere — SIH 2k26)',
    description: 'Smart India Hackathon (SIH 2025/2026) civilian platform empowering everyday citizens to report daily civic issues (potholes, sanitation, street lighting) with automated GPS tagging and municipal routing.',
    language: 'HTML / JavaScript / Node.js',
    url: 'https://github.com/Navaneethanrs/Civic-Connect',
    topics: ['sih', 'civic-tech', 'grievance-redressal', 'smart-governance', 'gps-tagging'],
    commits: 45,
    highlights: [
      'Pre-Finalist in Smart India Hackathon (Top 53 / 300 teams nationwide)',
      'Photo upload with automatic GPS metadata geo-tagging',
      'Automated municipal officer routing based on grievance jurisdiction',
      'Public transparency dashboard tracking resolution timelines'
    ]
  },
  {
    name: 'ConsoleBasedApplication-',
    displayName: 'Console HR Management System (Java)',
    description: 'A robust console-based Human Resource Management System built in pure Java. Features role-based access for Admin and Employees, attendance marking, digital leave applications, and automated payroll calculations stored in high-performance in-memory structures.',
    language: 'Java',
    url: 'https://github.com/Navaneethanrs/ConsoleBasedApplication-',
    topics: ['java', 'oop', 'hr-management', 'payroll-system', 'data-structures'],
    commits: 3,
    highlights: [
      'Role-based security: Admin and Employee portals with session verification',
      'Full lifecycle employee records management (Add, Update, Query, Archive)',
      'Digital leave request workflow with manager approval state machine',
      'Automated monthly payroll calculation and salary slip generation'
    ]
  },
  {
    name: 'Cpu-Scheduling',
    displayName: 'CPU Scheduling Simulator',
    description: 'A premium, interactive web application visualizing classic CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority) with animated Gantt charts, per-process statistics, and system efficiency metrics.',
    language: 'JavaScript / React',
    url: 'https://github.com/Navaneethanrs/Cpu-Scheduling',
    topics: ['operating-systems', 'cpu-scheduling', 'gantt-chart', 'react', 'algorithms'],
    commits: 6,
    highlights: [
      'Supports FCFS, Shortest Job First, Round Robin (custom quantum), and Priority',
      'Step-by-step animated Gantt chart with live process execution states',
      'Instant calculation of individual and average waiting and turnaround times',
      'Zero backend dependency — 100% responsive client-side execution'
    ]
  },
  {
    name: 'Decrease-by-One-Factor-Prime-Factor-Finder',
    displayName: 'Decrease-by-One Factor & Prime Factor Finder',
    description: 'An algorithmic implementation demonstrating the Decrease-and-Conquer paradigm to compute mathematical factors and prime factorizations with optimized step complexity.',
    language: 'HTML / JavaScript / Algorithms',
    url: 'https://github.com/Navaneethanrs/Decrease-by-One-Factor-Prime-Factor-Finder',
    topics: ['algorithms', 'number-theory', 'prime-factors', 'divide-and-conquer'],
    commits: 2,
    highlights: [
      'Demonstrates Decrease-by-One algorithmic design paradigm',
      'Instant integer factor decomposition and prime testing',
      'Step-by-step visualization of recursive reduction steps'
    ]
  },
  {
    name: 'FOODSAVER',
    displayName: 'FoodSaver — Surplus Food Donation Platform',
    description: 'A complete food recovery system connecting wedding halls, restaurants, and canteens with registered local NGOs to prevent food spoilage and fight hunger through geo-proximity matching and automated PHPMailer alerts.',
    language: 'PHP / MySQL / JavaScript',
    url: 'https://github.com/Navaneethanrs/FOODSAVER',
    topics: ['food-donation', 'ngo-matching', 'phpmailer', 'social-impact', 'mysql'],
    commits: 6,
    highlights: [
      'Geo-matching algorithm locates closest NGOs within donor delivery radius',
      'Automated transactional email dispatch via PHPMailer with food specifications and pickup deadlines',
      'Two-sided status tracking workflow (Listed → NGO Accepted → Picked Up → Delivered)',
      'Administrative analytics measuring cumulative kilograms of food salvaged'
    ]
  },
  {
    name: 'jarvis',
    displayName: 'Jarvis — Personal AI Assistant Interface',
    description: 'A futuristic voice and text virtual assistant interface inspired by Iron Man’s JARVIS. Implements speech synthesis, voice recognition, task automation triggers, and responsive UI widgets.',
    language: 'HTML / CSS / JavaScript',
    url: 'https://github.com/Navaneethanrs/jarvis',
    topics: ['jarvis', 'voice-assistant', 'web-speech-api', 'ui-design', 'automation'],
    commits: 8,
    highlights: [
      'Two-way conversational audio using Web Speech API Recognition & Synthesis',
      'Futuristic sci-fi HUD animated dashboard with sound effects',
      'Quick action commands: system queries, weather, search triggers, and shortcuts'
    ]
  },
  {
    name: 'Madathon-',
    displayName: 'Madathon Hackathon Project',
    description: 'Rapid sprint repository built during the Mobile App Development Club (MADC) Madathon competition, prototyping innovative mobile utility concepts under sprint deadlines.',
    language: 'JavaScript / Flutter',
    url: 'https://github.com/Navaneethanrs/Madathon-',
    topics: ['madathon', 'hackathon-sprint', 'madc', 'mobile-dev'],
    commits: 23,
    highlights: [
      'High-velocity code written during the Madathon timed hackathon',
      'Focus on mobile utility interfaces and streamlined data persistence'
    ]
  },
  {
    name: 'MADC',
    displayName: 'App Development Club (MADC) Web Portal',
    description: 'Interactive web platform for the Mobile App Development Club (MADC) built using React, Vite, and React Three Fiber (R3F) featuring interactive 3D models, dynamic event schedules, club projects, and team showcases.',
    language: 'React / Three.js / Vite',
    url: 'https://github.com/Navaneethanrs/MADC',
    topics: ['three-js', 'react-three-fiber', 'madc', '3d-web', 'vite'],
    commits: 21,
    highlights: [
      'Immersive 3D interactive graphics rendered with React Three Fiber',
      'Dynamic event calendar and registration pipeline for college workshops',
      'Showcase portfolio of mobile apps designed by club developers'
    ]
  },
  {
    name: 'MADC-APP',
    displayName: 'MADC Mobile Application',
    description: 'The mobile app repository for club members of MADC, delivering announcements, notifications, workshop materials, and project submissions directly to student smartphones.',
    language: 'Flutter / Dart',
    url: 'https://github.com/Navaneethanrs/MADC-APP',
    topics: ['flutter', 'mobile-app', 'madc', 'student-portal'],
    commits: 2,
    highlights: [
      'Cross-platform Flutter build supporting Android and iOS',
      'Push notification alerts for upcoming hackathons and code camps'
    ]
  },
  {
    name: 'madc-attendance',
    displayName: 'MADC Club Attendance Portal & Backend',
    description: 'Complete multi-tier attendance infrastructure: a Node.js/Express/MongoDB REST API backend and a Flutter mobile app for scanning student ID cards, logging attendance, and managing club rosters.',
    language: 'Dart (Flutter) / Node.js',
    url: 'https://github.com/Navaneethanrs/madc-attendance',
    topics: ['attendance', 'flutter', 'nodejs', 'mongodb', 'qr-scanner'],
    commits: 2,
    highlights: [
      'Dual architecture: Node.js Express backend + Flutter client application',
      'Barcode/QR and manual student check-in with duplicate prevention',
      'MongoDB aggregation pipelines generating real-time attendance percentages'
    ]
  },
  {
    name: 'MADC-LANUCH',
    displayName: 'MADC Official Launch Site',
    description: 'Launch event portal for the formal inauguration of the Mobile App Development Club featuring event timelines, keynote speakers, and promotional teasers.',
    language: 'HTML / CSS / JavaScript',
    url: 'https://github.com/Navaneethanrs/MADC-LANUCH',
    topics: ['event-launch', 'landing-page', 'madc'],
    commits: 6,
    highlights: [
      'High-impact landing page with countdown timer and interactive reveals'
    ]
  },
  {
    name: 'MediRoute',
    displayName: 'MediRoute — Smart Emergency Corridor & Hospital System',
    description: 'Smart ambulance traffic control and hospital coordination system using GPS, IoT-based traffic signal automation, and real-time dashboards to create green corridors. Won 1st Place in 3 College-Level Hackathons.',
    language: 'JavaScript / Node.js / IoT',
    url: 'https://github.com/Navaneethanrs/MediRoute',
    topics: ['iot', 'socket-io', 'gps-tracking', 'emergency-corridor', 'hackathon-winner'],
    commits: 73,
    highlights: [
      'Secured 1st Prize across three separate collegiate hackathons',
      'Real-time WebSocket corridor synchronization with Socket.io',
      'Automated IoT traffic light controller simulation turning signals green',
      'Emergency room dispatch console pushing triage telemetry and live ETA'
    ]
  },
  {
    name: 'MindBlossom',
    displayName: 'MindBlossom — AI Mental Wellness Companion',
    description: 'Mental wellness web app enabling users to express emotions anonymously via voice or text with empathetic AI support, stress-relief guidance, and mood-curated Tamil song recommendations with MongoDB storage.',
    language: 'JavaScript / React / Node.js',
    url: 'https://github.com/Navaneethanrs/MindBlossom',
    topics: ['ai-wellness', 'web-speech-api', 'nlp', 'mental-health', 'tamil-songs'],
    commits: 9,
    highlights: [
      'Completely anonymous interaction — zero sign-up barrier',
      'Web Speech API speech-to-text input with emotion sentiment engine',
      'Curated mood-based Tamil song recommendation playlists',
      'Guided interactive breathing and anxiety-relief exercises'
    ]
  },
  {
    name: 'PORTFOLIO',
    displayName: 'Personal Portfolio (Current Site)',
    description: 'Navaneethan’s official developer portfolio built with React 19, Vite, Tailwind CSS v4, GSAP, and AOS featuring interactive project showcases, live competitive coding stats, and AI assistant.',
    language: 'React / JavaScript',
    url: 'https://github.com/Navaneethanrs/PORTFOLIO',
    topics: ['portfolio', 'react', 'tailwind-v4', 'gsap', 'aos'],
    commits: 22,
    highlights: [
      'Modern aesthetics with smooth GSAP and AOS scroll animations',
      'Live synced competitive coding statistics from LeetCode and GeeksforGeeks',
      'Integrated intelligent conversational AI assistant'
    ]
  },
  {
    name: 'Navaneethanrs',
    displayName: 'GitHub Profile README',
    description: 'Special configuration repository containing Navaneethan’s GitHub profile README, visual tech stack badges, and developer biography.',
    language: 'Markdown / GitHub Config',
    url: 'https://github.com/Navaneethanrs/Navaneethanrs',
    topics: ['github-profile', 'readme', 'portfolio-badge'],
    commits: 11,
    highlights: [
      'Custom visual banners, live metrics badges, and tech stack categorization'
    ]
  }
];

// In-memory cache for live fetched GitHub repos
let cachedRepos = [...PRELOADED_REPOSITORIES];
let lastFetchTime = 0;
let liveCommitCountsCache = { ...VERIFIED_COMMIT_COUNTS };

/**
 * Fetches the exact live commit count for a specific repository.
 * Uses the GitHub pagination header link for 1-request resolution.
 * @param {string} repoName
 * @returns {Promise<{ count: number, isLive: boolean }>}
 */
export async function getRepoCommitCount(repoName) {
  const cleanName = repoName.trim();
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${cleanName}/commits?per_page=1`, {
      headers: getGitHubHeaders()
    });

    if (res.ok) {
      const link = res.headers.get('link');
      if (link && link.includes('rel="last"')) {
        const parts = link.split(',');
        const lastPart = parts.find((p) => p.includes('rel="last"'));
        if (lastPart) {
          const match = lastPart.match(/[?&]page=(\d+)/);
          if (match) {
            const count = parseInt(match[1], 10);
            liveCommitCountsCache[cleanName] = count;
            return { count, isLive: true };
          }
        }
      }
      const data = await res.json();
      const count = Array.isArray(data) ? data.length : 1;
      liveCommitCountsCache[cleanName] = count;
      return { count, isLive: true };
    }
  } catch (e) {
    console.warn(`Could not live-fetch commits for ${cleanName}, using verified records.`);
  }

  // Fallback to verified local counts
  const fallback = VERIFIED_COMMIT_COUNTS[cleanName] || 2;
  return { count: fallback, isLive: false };
}

/**
 * Calculates total commits across all repositories dynamically.
 * @returns {Promise<{ total: number, breakdown: Record<string, number> }>}
 */
export async function getTotalCommitsAcrossAllRepos() {
  const repos = await getLiveRepositories();
  let total = 0;
  const breakdown = {};

  for (const repo of repos) {
    const count = liveCommitCountsCache[repo.name] || VERIFIED_COMMIT_COUNTS[repo.name] || repo.commits || 2;
    breakdown[repo.name] = count;
    total += count;
  }

  return { total, breakdown };
}

/**
 * Fetches the latest live repositories directly from GitHub API.
 * Automatically falls back to PRELOADED_REPOSITORIES if rate-limited or offline.
 */
export async function getLiveRepositories() {
  const now = Date.now();
  if (cachedRepos.length > 0 && now - lastFetchTime < 15 * 60 * 1000) {
    return cachedRepos;
  }

  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
      headers: getGitHubHeaders()
    });

    if (!res.ok) {
      console.warn('GitHub API returned status:', res.status, '- using preloaded repository database');
      return cachedRepos;
    }

    const liveData = await res.json();
    if (!Array.isArray(liveData)) return cachedRepos;

    // Merge live data with preloaded rich descriptions and commits
    const merged = liveData.map((live) => {
      const existing = PRELOADED_REPOSITORIES.find(
        (p) => p.name.toLowerCase() === live.name.toLowerCase()
      );

      const commits = liveCommitCountsCache[live.name] || VERIFIED_COMMIT_COUNTS[live.name] || (existing ? existing.commits : 2);

      return {
        name: live.name,
        displayName: existing ? existing.displayName : live.name,
        description: live.description || (existing ? existing.description : 'Repository created by Navaneethanrs'),
        language: live.language || (existing ? existing.language : 'Various'),
        url: live.html_url,
        stars: live.stargazers_count,
        forks: live.forks_count,
        commits,
        topics: live.topics && live.topics.length > 0 ? live.topics : (existing ? existing.topics : []),
        highlights: existing ? existing.highlights : ['Open-source codebase on GitHub'],
        updatedAt: live.updated_at
      };
    });

    cachedRepos = merged;
    lastFetchTime = now;
    return merged;
  } catch (err) {
    console.error('Failed to fetch live GitHub repos, falling back:', err);
    return cachedRepos;
  }
}

/**
 * Searches all repositories by query across name, description, language, and topics.
 * @param {string} query
 */
export async function searchRepositories(query) {
  const repos = await getLiveRepositories();
  const clean = query.toLowerCase().trim();

  // If asking for all repos
  if (clean.includes('all') || clean.includes('list') || clean.includes('how many repos') || clean.includes('all repositories')) {
    return {
      all: repos,
      totalCount: repos.length,
      matched: repos
    };
  }

  // Exact or fuzzy search
  const matched = repos.filter((r) => {
    const nameMatch = r.name.toLowerCase().includes(clean) || r.displayName.toLowerCase().includes(clean);
    const descMatch = r.description && r.description.toLowerCase().includes(clean);
    const langMatch = r.language && r.language.toLowerCase().includes(clean);
    const topicMatch = r.topics && r.topics.some((t) => t.toLowerCase().includes(clean));

    return nameMatch || descMatch || langMatch || topicMatch;
  });

  return {
    matched,
    totalCount: repos.length,
    all: repos
  };
}

/**
 * Generates a real-time structured summary of all GitHub repositories and metrics
 * for ingestion into the AI system prompt.
 */
export async function getLiveGitHubSummary() {
  const repos = await getLiveRepositories();
  const { total } = await getTotalCommitsAcrossAllRepos();
  return {
    username: GITHUB_USERNAME,
    profileUrl: `https://github.com/${GITHUB_USERNAME}`,
    totalRepositories: repos.length,
    totalCommits: total,
    repositories: repos.map((r) => ({
      name: r.displayName || r.name,
      repo: r.name,
      description: r.description || '',
      language: r.language || 'Various',
      url: r.url || `https://github.com/${GITHUB_USERNAME}/${r.name}`,
      commits: liveCommitCountsCache[r.name] || VERIFIED_COMMIT_COUNTS[r.name] || r.commits || 2,
      topics: r.topics || [],
      highlights: r.highlights || []
    }))
  };
}

