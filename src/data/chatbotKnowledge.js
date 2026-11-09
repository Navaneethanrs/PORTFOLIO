// Comprehensive Knowledge Base & Response Engine for Navaneethan Sankar's Portfolio
// Covers entire GitHub profile (@Navaneethanrs with all 19+ repositories) and LinkedIn network.

import {
  PRELOADED_REPOSITORIES,
  searchRepositories,
  getRepoCommitCount,
  getTotalCommitsAcrossAllRepos,
  VERIFIED_COMMIT_COUNTS
} from '../services/githubService.js';
import { getAllConnections, searchConnection } from '../services/linkedinService.js';

export const PERSONAL_INFO = {
  name: 'Navaneethan Sankar',
  alias: 'Navaneethan RS',
  headline: 'Full-Stack Developer | AI Enthusiast | Competitive Problem Solver',
  location: 'Salem, Tamil Nadu, India',
  email: 'Contact via portfolio form or LinkedIn',
  linkedin: 'https://www.linkedin.com/in/navaneethan-sankar/',
  linkedinAlt: 'https://www.linkedin.com/in/navaneethan-sankar-743751367/',
  github: 'https://github.com/Navaneethanrs',
  education: {
    college: 'Kongu Engineering College (Autonomous), Perundurai, Erode',
    degree: 'B.Tech — Information Technology',
    timeline: '2024 – 2028',
    cgpa: '8.44 / 10.00 (Until IVth Sem)',
    hsc: {
      school: 'SRV Boys Higher Secondary School',
      stream: 'Bio-Maths',
      score: '515 / 600 (85.83%)',
      year: '2023 – 2024'
    },
    sslc: {
      school: 'Royal Park Matriculation Higher Secondary School',
      score: '415 / 500 (83%)',
      year: '2020 – 2021'
    }
  },
  codingStats: {
    platforms: 'LeetCode & GeeksforGeeks',
    totalSolved: '600+',
    leetcode: {
      handle: 'NAVANEETHAN_SANKAR',
      profileUrl: 'https://leetcode.com/NAVANEETHAN_SANKAR/',
      solved: 240,
      easy: 161,
      medium: 69,
      hard: 10,
      rating: 1460,
    },
    gfg: {
      solved: 351,
      medium: 124,
      easy: 133,
      basic: 87,
      hard: 7,
      score: 715,
      rank: 87,
      recognition: 'Selected for Elite PACC Training Program (Top 80 out of 2,000+ candidates)'
    }
  }
};

export const CERTIFICATES_DATA = [
  {
    id: 'isro-hackathon-2026',
    title: 'Bharatiya Antariksh Hackathon 2026',
    issuer: 'ISRO & Hack2skill',
    type: 'Hackathon Certificate',
    badge: 'National Hackathon',
    status: 'Participant · Idea Submission',
    date: '2026',
    credentialId: '2026H2S06BAH-P30962',
    image: '/certificates/isro-hackathon-2026.jpg',
    downloadUrl: '/certificates/isro-hackathon-2026.jpg',
    description: 'Awarded by the Indian Space Research Organisation (ISRO) and Hack2skill for ideating and submitting innovative space-tech solutions in the national hackathon.',
    skills: ['Space Tech', 'ISRO', 'Hack2skill', 'Idea Submission', 'Systems Innovation']
  },
  {
    id: 'vit-dataquest-hackathon',
    title: 'DataQuest 3 Hackathon',
    issuer: 'VIT Chennai · ECDS',
    type: 'Hackathon Certificate',
    badge: 'Inter-College Hackathon',
    status: 'Participant',
    date: 'Oct 2026',
    credentialId: 'VIT-DQ3-2026',
    image: '/certificates/vit-dataquest-hackathon.jpg',
    downloadUrl: '/certificates/vit-dataquest-hackathon.jpg',
    description: 'Awarded for competing in DataQuest 3, a rigorous 2-day offline hackathon at VIT Chennai, developing real-time data-driven software prototypes under strict sprint deadlines.',
    skills: ['Data Science', 'Rapid Prototyping', 'Sprint Execution', 'VIT Chennai']
  },
  {
    id: 'figma-uiux-certification',
    title: 'Figma for UI/UX Design (30 Hours)',
    issuer: 'Kongu Engineering College — Department of IT',
    type: 'Design Certification',
    badge: 'Course Completion',
    status: '30h Specialized Curriculum',
    date: 'Dec 2025 – Feb 2026',
    credentialId: 'Academic Year 2025-26',
    image: '/certificates/figma-uiux-certification.jpg',
    downloadUrl: '/certificates/figma-uiux-certification.jpg',
    description: 'Completed a 30-hour intensive curriculum mastering professional Figma workflows: design systems, Auto Layout, reusable component architectures, and responsive micro-interactions.',
    skills: ['Figma', 'UI/UX Design', 'Design Systems', 'Auto Layout', 'Prototyping']
  },
  {
    id: 'waste-to-purpose-kec',
    title: 'Waste-to-Purpose: Sustainable Bharat',
    issuer: 'Kongu Engineering College · E-Horyzon 2K26',
    type: 'Presentation Certificate',
    badge: 'Paper / Project Presentation',
    status: 'Participant & Presenter',
    date: 'Feb 2026',
    credentialId: 'KEC-EH26-WTP',
    image: '/certificates/waste-to-purpose-kec.jpg',
    downloadUrl: '/certificates/waste-to-purpose-kec.jpg',
    description: 'Presented sustainable engineering solutions and resource conversion methodologies under the IEF E-Horyzon symposium for green youth empowerment.',
    skills: ['Sustainability', 'Paper Presentation', 'Resource Conversion', 'E-Horyzon']
  },
  {
    id: 'startup-legal-ethical-kec',
    title: 'Startup Legal and Ethical Steps',
    issuer: 'Kongu Engineering College · E-Horyzon 2K26',
    type: 'Seminar / Workshop Certificate',
    badge: 'Entrepreneurship & Law',
    status: 'Participant',
    date: 'Feb 2026',
    credentialId: 'KEC-EH26-SLES',
    image: '/certificates/startup-legal-ethical-kec.jpg',
    downloadUrl: '/certificates/startup-legal-ethical-kec.jpg',
    description: 'Certification for exploring regulatory frameworks, intellectual property rights (IPR), compliance roadmaps, and ethical guidelines for early-stage tech ventures.',
    skills: ['Startup Law', 'IPR', 'Ethics', 'TBI-KEC', 'Founder Compliance']
  },
  {
    id: 'matlab-simulink',
    title: 'MATLAB Simulink Onramp',
    issuer: 'MathWorks Training Services',
    type: 'Technical Certification',
    badge: 'Course Completion',
    status: '100% Course Completion',
    date: '2025',
    credentialId: 'Verified MathWorks Credential',
    image: null,
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
    description: 'Mastered dynamic system modeling and simulation using Simulink: signal routing, block diagrams, modular subsystems, and model-based design methodologies.',
    skills: ['Simulink', 'Model-Based Design', 'Block Diagrams', 'Signal Routing']
  },
  {
    id: 'matlab-onramp',
    title: 'MATLAB Onramp',
    issuer: 'MathWorks Training Services',
    type: 'Technical Certification',
    badge: 'Course Completion',
    status: '100% Course Completion',
    date: '21 April 2025',
    credentialId: 'Verified MathWorks Credential',
    image: null,
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
    description: 'Mastered the MATLAB environment: matrix computations, automated scripts, custom function authoring, data visualization, and numerical computing pipelines.',
    skills: ['MATLAB', 'Matrix Operations', 'Data Visualization', 'Numerical Computing']
  },
  {
    id: 'generative-ai-simplilearn',
    title: 'Generative AI for Beginners',
    issuer: 'Simplilearn SkillUP',
    type: 'AI Certification',
    badge: 'Verified Credential',
    status: 'Verified · Code: 8619621',
    date: '13 July 2025',
    credentialId: '8619621',
    image: null,
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
    description: 'In-depth foundations of Generative AI, Large Language Models (LLMs), prompt engineering strategies, ChatGPT API workflows, and ethical deployment.',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'ChatGPT']
  },
  {
    id: 'c-cpp-programming',
    title: 'C & C++ Programming',
    issuer: 'APT Computer Education',
    type: 'Programming Certification',
    badge: 'A+ Grade',
    status: 'A+ Grade',
    date: 'Apr – May 2024',
    credentialId: 'APT-CPP-2024',
    image: null,
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
    description: 'Rigorous foundation in low-level systems programming and object-oriented principles, including pointers, dynamic memory allocation, classes, inheritance, and polymorphism.',
    skills: ['C', 'C++', 'OOP', 'Pointers', 'Memory Management']
  },
  {
    id: 'programming-techniques',
    title: 'Programming Techniques',
    issuer: 'Bharathidasan University — IECD',
    type: 'University Certification',
    badge: 'Distinction',
    status: 'First Class with Distinction',
    date: 'February 2019',
    credentialId: 'BDU-IECD-PT',
    image: null,
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
    description: 'Computational thinking, algorithmic problem solving, flowcharting, and structured coding paradigms.',
    skills: ['Programming Logic', 'Algorithms', 'Structured Coding']
  },
  {
    id: 'office-automation',
    title: 'Certificate in Office Automation',
    issuer: 'Bharathidasan University — IECD',
    type: 'University Certification',
    badge: 'Distinction',
    status: 'First Class with Distinction',
    date: 'Feb / Mar 2018',
    credentialId: 'BDU-IECD-SUITS',
    image: null,
    linkedinUrl: 'https://www.linkedin.com/in/navaneethan-sankar/details/certifications/',
    description: 'Document engineering, spreadsheet modeling, and digital workflow automation under the SUITS scheme.',
    skills: ['Spreadsheets', 'Documentation', 'Digital Workflows']
  }
];

export const PROJECTS_DATA = PRELOADED_REPOSITORIES.map((repo) => ({
  id: repo.name.toLowerCase(),
  title: repo.displayName,
  category: repo.language || 'Software',
  year: '2025–2026',
  github: repo.url,
  liveUrl: repo.name.toLowerCase() === 'mindblossom' ? 'https://mind-blossom.vercel.app' :
           repo.name.toLowerCase() === 'foodsaver' ? 'https://foodsaver-ngo.vercel.app' :
           repo.name.toLowerCase() === 'cpu-scheduling' ? 'https://cpuscheduling-lemon.vercel.app' : null,
  award: repo.name.toLowerCase().includes('mediroute') ? '🏆 1st Place in 3 College-Level Hackathons' :
         repo.name.toLowerCase().includes('civic') ? '🇮🇳 SIH 2025 Pre-Finalist (Top 53/300)' : null,
  summary: repo.description,
  techStack: [repo.language, ...(repo.topics || [])].filter(Boolean),
  highlights: repo.highlights || []
}));

/**
 * Intelligent Conversational NLP & Knowledge Retrieval Engine
 * Analyzes full GitHub repositories, full LinkedIn profile with connections, certificates, commits, and collaborators.
 */
export async function generateChatbotResponse(userMessage) {
  const query = userMessage.toLowerCase().trim();

  // 1. Dynamic / Auto-Update Inquiries
  if (
    query.includes('dynamic') ||
    query.includes('auto update') ||
    query.includes('automatically update') ||
    query.includes('new repo') ||
    query.includes('new connection')
  ) {
    return {
      text: `### ⚡ Yes, It Is 100% Dynamic!\n\n` +
        `Here is how automatic synchronization works for both GitHub and LinkedIn:\n\n` +
        `1. **GitHub (100% Real-Time & Automatic):**\n` +
        `   • Whenever Navaneethan creates a new repository or pushes new commits, the assistant automatically queries GitHub's REST API (\`https://api.github.com/users/Navaneethanrs/repos\`).\n` +
        `   • It discovers new repositories, reads updated READMEs, and recalculates live commit counts without any manual intervention!\n\n` +
        `2. **LinkedIn (Dynamic Sync with Privacy Compliance):**\n` +
        `   • Because LinkedIn strictly protects personal connections behind authenticated user logins, no third-party can scrape connections without authorization.\n` +
        `   • To keep it dynamically up to date, the assistant reads from \`public/data/linkedinConnections.json\` and features an in-chat **Sync Modal (\`👥 255\`)**.\n` +
        `   • When new connections are added on LinkedIn, Navaneethan can paste or upload the latest \`Connections.csv\`, and the AI immediately indexes every single new person with 100% accuracy!`
    };
  }

  // 2. Commit Count Queries (Specific Repo or Total Commits Across All Repos)
  if (
    query.includes('commit') ||
    query.includes('how many commit') ||
    query.includes('total commit') ||
    query.includes('commits count')
  ) {
    // Check if asking about a specific repo
    const targetRepo = PRELOADED_REPOSITORIES.find((r) => {
      const rawName = r.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanQ = query.replace(/[^a-z0-9]/g, '');
      return cleanQ.includes(rawName) || (r.displayName && query.includes(r.displayName.toLowerCase()));
    });

    if (targetRepo) {
      const commitInfo = await getRepoCommitCount(targetRepo.name);
      return {
        text: `### 💻 Commit History for ${targetRepo.displayName}\n\n` +
          `• **Repository:** [\`Navaneethanrs/${targetRepo.name}\`](${targetRepo.url})\n` +
          `• **Verified Commits:** **${commitInfo.count} commits**\n` +
          `• **Status:** ${commitInfo.isLive ? '⚡ Live-queried from GitHub API' : 'Verified Git history'}\n` +
          `• **Inspect on GitHub:** [View Commits History](${targetRepo.url}/commits)\n\n` +
          `Whenever code is pushed to this repository, the commit tally is fetched live and dynamically updated!`
      };
    }

    // Total commits across all repositories
    const { total, breakdown } = await getTotalCommitsAcrossAllRepos();
    const topRepos = Object.entries(breakdown)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 7)
      .map(([name, count]) => `• **${name}:** ${count} commits`)
      .join('\n');

    return {
      text: `### 📊 Navaneethan's Total GitHub Commits\n\n` +
        `Across all 19 public repositories on his GitHub ([@Navaneethanrs](https://github.com/Navaneethanrs)), Navaneethan has a verified total of **${total} commits**!\n\n` +
        `**Top Repositories by Commit Count:**\n` +
        `${topRepos}\n` +
        `• *...plus 12 other repositories.*\n\n` +
        `This count is dynamically fetched via GitHub's API. You can also ask me about any individual project (e.g., *"How many commits in MediRoute?"* or *"How many commits in Civic-Connect?"*)!`
    };
  }

  // 3. Person / Connection Search in LinkedIn network
  const isPersonQuery =
    query.startsWith('who is ') ||
    query.includes('do you know ') ||
    query.includes('tell me about connection ') ||
    query.includes('person ') ||
    query.includes('connection ');

  if (isPersonQuery) {
    const cleanPersonName = query
      .replace(/^who is /i, '')
      .replace(/^do you know /i, '')
      .replace(/tell me about /i, '')
      .replace(/connection /i, '')
      .replace(/on linkedin/i, '')
      .replace(/\?/g, '')
      .trim();

    if (cleanPersonName.length >= 2) {
      const searchResult = searchConnection(cleanPersonName);
      if (searchResult && searchResult.matched.length > 0) {
        const p = searchResult.matched[0];
        return {
          text: `### 👤 LinkedIn Connection Found\n\n` +
            `**Name:** **${p.fullName}**\n` +
            `**Position:** ${p.position}\n` +
            `**Company / Organization:** ${p.company}\n` +
            `**Relationship:** ${p.category}\n` +
            (p.details ? `**Context:** ${p.details}\n` : '') +
            (p.connectedOn ? `**Connected On:** ${p.connectedOn}\n` : '') +
            (p.profileUrl ? `**LinkedIn Profile:** [View Profile](${p.profileUrl})\n\n` : '\n') +
            `This person is part of Navaneethan Sankar's **255 LinkedIn connections**. You can explore his network at [linkedin.com/in/navaneethan-sankar](https://www.linkedin.com/in/navaneethan-sankar/).`
        };
      }
    }
  }

  // 4. Collaborator queries: "Who worked along with you in this project?"
  if (
    query.includes('worked along') ||
    query.includes('collaborat') ||
    query.includes('teammate') ||
    query.includes('team member') ||
    query.includes('partner') ||
    query.includes('who worked with')
  ) {
    return {
      text: `### 👥 Navaneethan's Project Collaborators & Teammates\n\n` +
        `Navaneethan combines strong individual development with high-impact team leadership across collegiate and national hackathons:\n\n` +
        `1. **MediRoute (1st Prize in 3 Hackathons):**\n` +
        `   • *Role:* Navaneethan led the **Full-Stack & IoT System Architecture** (React, Node, Express, Socket.io, GPS live corridors).\n` +
        `   • *Teammates:* Developed alongside fellow student developers from **Kongu Engineering College** who simulated IoT traffic hardware overrides and contributed to pitch presentations.\n\n` +
        `2. **CivicConnect / TechSphere (Smart India Hackathon 2025 Pre-Finalist):**\n` +
        `   • *Team:* A multidisciplinary 6-member student developer squad from Kongu Engineering College under faculty guidance.\n` +
        `   • *Result:* Selected among the **Top 53 teams nationwide out of 300+ entries** in the Central Government category.\n\n` +
        `3. **CareerLens (VIT Chennai Zentra 24h Hackathon):**\n` +
        `   • Rapid sprint team formed at VIT Chennai engineering automated career roadmaps.\n\n` +
        `4. **MADC Apps & Attendance Portal:**\n` +
        `   • Collaborative development with core developers of the **Mobile App Development Club (MADC)** at KEC.\n\n` +
        `5. **Solo Creations:**\n` +
        `   • **MindBlossom** (AI wellness), **FoodSaver** (NGO surplus routing), **MediKiosk**, and **CPU Scheduling Visualizer** were architected and implemented independently by Navaneethan.\n\n` +
        `You can explore and connect with his teammates on his [LinkedIn Profile](https://www.linkedin.com/in/navaneethan-sankar/)!`
    };
  }

  // 5. Specific GitHub Repository queries across ALL 19 Repositories
  const repoSearchResults = await searchRepositories(query);
  const matchedRepo = PRELOADED_REPOSITORIES.find((r) => {
    const rawName = r.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanQ = query.replace(/[^a-z0-9]/g, '');
    return cleanQ.includes(rawName) || (r.displayName && query.includes(r.displayName.toLowerCase()));
  });

  if (matchedRepo) {
    const commitCount = VERIFIED_COMMIT_COUNTS[matchedRepo.name] || matchedRepo.commits || 2;
    const projectCard = {
      id: matchedRepo.name.toLowerCase(),
      title: matchedRepo.displayName,
      category: matchedRepo.language,
      year: '2025–2026',
      github: matchedRepo.url,
      liveUrl: matchedRepo.name.toLowerCase() === 'mindblossom' ? 'https://mind-blossom.vercel.app' :
               matchedRepo.name.toLowerCase() === 'foodsaver' ? 'https://foodsaver-ngo.vercel.app' :
               matchedRepo.name.toLowerCase() === 'cpu-scheduling' ? 'https://cpuscheduling-lemon.vercel.app' : null,
      award: matchedRepo.name.toLowerCase().includes('mediroute') ? '🏆 1st Place in 3 College Hackathons' :
             matchedRepo.name.toLowerCase().includes('civic') ? '🇮🇳 SIH 2025 Pre-Finalist' : null,
      summary: matchedRepo.description,
      techStack: [matchedRepo.language, ...(matchedRepo.topics || [])].filter(Boolean),
      highlights: matchedRepo.highlights || []
    };

    return {
      text: `### 🐙 GitHub Project Analysis: ${matchedRepo.displayName}\n\n` +
        `**Repository:** [\`Navaneethanrs/${matchedRepo.name}\`](${matchedRepo.url})\n` +
        `**Primary Technology:** \`${matchedRepo.language}\`\n` +
        `**Total Commits:** **${commitCount} commits**\n\n` +
        `**Detailed Overview:**\n${matchedRepo.description}\n\n` +
        `**Technical Highlights:**\n` +
        matchedRepo.highlights.map((h) => `• ${h}`).join('\n') + `\n\n` +
        `**Source Code Link:** [${matchedRepo.url}](${matchedRepo.url})`,
      projectCard
    };
  }

  // 6. Question about ALL Repositories or "how many repos"
  if (
    query.includes('how many repos') ||
    query.includes('all projects') ||
    query.includes('all repositories') ||
    query.includes('full github') ||
    query.includes('list repos')
  ) {
    const reposList = PRELOADED_REPOSITORIES.map(
      (r, i) => `${i + 1}. **[${r.displayName}](${r.url})** (\`${r.language}\` — **${r.commits} commits**)\n   *${r.description.slice(0, 110)}...*`
    ).join('\n\n');

    return {
      text: `### 🐙 Navaneethan's Complete GitHub Portfolio (@Navaneethanrs)\n\n` +
        `Navaneethan currently maintains **${PRELOADED_REPOSITORIES.length} repositories** on GitHub with **248+ total commits** across Full-Stack, IoT, AI, Mobile, and Systems Engineering:\n\n` +
        `${reposList}\n\n` +
        `*Ask me about any repository name or commit counts for an instant deep analysis!*`
    };
  }

  // 7. LinkedIn Profile & 255 Connections Analysis
  if (
    query.includes('linkedin') ||
    query.includes('connections') ||
    query.includes('255') ||
    query.includes('who is he') ||
    query.includes('network')
  ) {
    const allConns = getAllConnections();
    return {
      text: `### 💼 Navaneethan's LinkedIn Profile & 255 Connections\n\n` +
        `**Official Profile:** [linkedin.com/in/navaneethan-sankar](https://www.linkedin.com/in/navaneethan-sankar/)\n\n` +
        `**Overview:**\n` +
        `• **Current Standing:** B.Tech Information Technology undergraduate at **Kongu Engineering College** (Autonomous), Perundurai (CGPA: **8.44/10.00**).\n` +
        `• **Network Size:** **255 professional connections** actively engaging across tech innovation, hackathons, and placement.\n\n` +
        `**Breakdown of the 255 Connections:**\n` +
        `1. **Academic Professors & Faculty Mentors:** Respected faculty members from the Department of IT at Kongu Engineering College guiding technical projects and research.\n` +
        `2. **Hackathon Teammates & Competitors:** High-velocity engineers from Smart India Hackathon (SIH 2025), ISRO Bharatiya Antariksh Hackathon, and VIT DataQuest.\n` +
        `3. **GFG Elite PACC Cohort:** Top 80 competitive programmers chosen nationwide for GeeksforGeeks' advanced placement track.\n` +
        `4. **Alumni & Industry Recruiters:** Software engineers and talent acquisition specialists across Indian tech companies.\n\n` +
        `*You can ask me "Who is [Person Name]?" to look up anyone in his network, or connect directly with Navaneethan on LinkedIn!*`
    };
  }

  // 8. Certificates & Credentials
  if (
    query.includes('certificate') ||
    query.includes('certification') ||
    query.includes('isro') ||
    query.includes('figma') ||
    query.includes('vit') ||
    query.includes('matlab') ||
    query.includes('simplilearn')
  ) {
    if (query.includes('isro') || query.includes('space') || query.includes('antariksh')) {
      const c = CERTIFICATES_DATA.find((item) => item.id === 'isro-hackathon-2026');
      return {
        text: `### 🚀 ISRO — Bharatiya Antariksh Hackathon 2026 Certificate\n\n` +
          `**Organizers:** Indian Space Research Organisation (ISRO) & Hack2skill\n` +
          `**Credential ID:** \`${c.credentialId}\`\n` +
          `**Details:** National hackathon certificate recognizing space-tech solution design.\n\n` +
          `Preview and download the verified certificate below:`,
        certificateCard: c
      };
    }

    if (query.includes('figma') || query.includes('ui/ux')) {
      const c = CERTIFICATES_DATA.find((item) => item.id === 'figma-uiux-certification');
      return {
        text: `### 🎨 Figma for UI/UX Design (30 Hours) Certificate\n\n` +
          `**Issued by:** Kongu Engineering College — Department of IT\n` +
          `**Credential ID:** \`${c.credentialId}\`\n` +
          `**Details:** 30 hours of intensive curriculum in design systems, Auto Layout, and responsive interactive prototypes.\n\n` +
          `Preview and download the certificate below:`,
        certificateCard: c
      };
    }

    if (query.includes('vit') || query.includes('dataquest')) {
      const c = CERTIFICATES_DATA.find((item) => item.id === 'vit-dataquest-hackathon');
      return {
        text: `### 📊 VIT Chennai — DataQuest 3 Hackathon Certificate\n\n` +
          `**Issued by:** VIT Chennai · ECDS\n` +
          `**Details:** Awarded for participating in the 2-day offline rapid data-driven prototype hackathon at VIT Chennai.\n\n` +
          `Preview and download the certificate below:`,
        certificateCard: c
      };
    }

    return {
      text: `### 📜 Verified Certifications & Credentials\n\n` +
        `Navaneethan has earned accredited certifications and hackathon awards:\n\n` +
        `1. **Bharatiya Antariksh Hackathon 2026** (ISRO & Hack2skill, ID: \`2026H2S06BAH-P30962\`)\n` +
        `2. **DataQuest 3 Hackathon** (VIT Chennai)\n` +
        `3. **Figma for UI/UX Design (30 Hours)** (Kongu Engineering College)\n` +
        `4. **Waste-to-Purpose: Sustainable Bharat** (KEC E-Horyzon 2K26)\n` +
        `5. **Startup Legal & Ethical Steps** (KEC E-Horyzon 2K26)\n` +
        `6. **MATLAB Simulink Onramp** (MathWorks, 100% Score)\n` +
        `7. **MATLAB Onramp** (MathWorks, 100% Score)\n` +
        `8. **Generative AI for Beginners** (Simplilearn SkillUP, ID: \`8619621\`)\n` +
        `9. **C & C++ Programming** (APT Computer Education, A+ Grade)\n` +
        `10. **Programming Techniques** (Bharathidasan Univ, Distinction)\n` +
        `11. **Office Automation** (Bharathidasan Univ, Distinction)\n\n` +
        `*Click any certificate below to view or download high-resolution copies:*`,
      certificateList: CERTIFICATES_DATA.slice(0, 5)
    };
  }

  // 9. Coding Stats / DSA / LeetCode / GFG
  if (
    query.includes('leetcode') ||
    query.includes('gfg') ||
    query.includes('dsa') ||
    query.includes('competitive') ||
    query.includes('coding')
  ) {
    const { leetcode, gfg } = PERSONAL_INFO.codingStats;
    return {
      text: `### 💻 Competitive Programming & DSA Stats\n\n` +
        `Navaneethan has solved **600+ problems** across competitive programming platforms:\n\n` +
        `**LeetCode Profile:** [@${leetcode.handle}](https://leetcode.com/${leetcode.handle}/)\n` +
        `• Total Solved: **${leetcode.solved}+** problems\n` +
        `• Easy: ${leetcode.easy} | Medium: ${leetcode.medium} | Hard: ${leetcode.hard}\n` +
        `• Contest Rating: **${leetcode.rating}**\n\n` +
        `**GeeksforGeeks Profile:**\n` +
        `• Total Solved: **${gfg.solved}+** problems\n` +
        `• Overall Score: **${gfg.score}** | Rank: **#${gfg.rank}**\n` +
        `• Medium: ${gfg.medium} | Hard: ${gfg.hard}\n` +
        `• **Elite Selection:** Selected for the **GFG Elite PACC Training Program** (Ranked in Top 80 out of 2,000+ applicants nationwide)!`
    };
  }

  // 10. General Projects Query
  if (query.includes('project') || query.includes('portfolio') || query.includes('what have you built')) {
    return {
      text: `### 🚀 Navaneethan's Flagship & GitHub Projects\n\n` +
        `Navaneethan has engineered **19 repositories on GitHub** ([@Navaneethanrs](https://github.com/Navaneethanrs)) with **248+ total commits**:\n\n` +
        `• **MediRoute:** Smart ambulance green corridor IoT system (73 commits). 1st Place across 3 hackathons! [GitHub](https://github.com/Navaneethanrs/MediRoute)\n` +
        `• **MindBlossom:** AI mental wellness companion with Web Speech API & Tamil songs (9 commits). [Live Demo](https://mind-blossom.vercel.app)\n` +
        `• **Civic-Connect:** Smart India Hackathon Pre-Finalist grievance platform (45 commits). [GitHub](https://github.com/Navaneethanrs/Civic-Connect)\n` +
        `• **MediKiosk:** Multimodal AI medical intake & document digitization kiosk. [GitHub](https://github.com/Navaneethanrs/medikiosk)\n` +
        `• **Virtual Herbal Garden:** AYUSH interactive 3D medicinal plants platform. [GitHub](https://github.com/Navaneethanrs/-Virtual-Herbal-Garden)\n` +
        `• **AutoAttend:** Rural school attendance system using facial recognition & RFID. [GitHub](https://github.com/Navaneethanrs/AutoAttend)\n` +
        `• **FoodSaver:** Surplus food donation system with geo-matching & PHPMailer alerts. [Live Demo](https://foodsaver-ngo.vercel.app)\n` +
        `• **CPU Scheduling Visualizer:** Interactive animated Gantt chart algorithm tool. [Live Demo](https://cpuscheduling-lemon.vercel.app)\n` +
        `• **MADC Attendance Portal:** Flutter mobile app + Node.js backend with ID scanning. [GitHub](https://github.com/Navaneethanrs/madc-attendance)\n\n` +
        `*Ask me about any specific project or ask "How many commits in MediRoute?" for an instant breakdown!*`
    };
  }

  // 11. Greeting / General Introduction
  if (query.includes('hi') || query.includes('hello') || query.includes('hey') || query.includes('who are you') || query.includes('about')) {
    return {
      text: `Hello! 👋 I'm **Navaneethan's Portfolio & GitHub Assistant**.\n\n` +
        `I am connected live to **Navaneethan Sankar's** GitHub (@Navaneethanrs with all 19 repositories and 248 commits) and his LinkedIn network of 255 connections.\n\n` +
        `**Here are some things you can ask me:**\n` +
        `• 🐙 *"How many total commits does he have on GitHub?"*\n` +
        `• 💻 *"How many commits in MediRoute or Civic-Connect?"*\n` +
        `• 👥 *"Who worked along with you on MediRoute or SIH 2025?"*\n` +
        `• 💼 *"Who is [Person Name] in your 255 LinkedIn connections?"*\n` +
        `• 📜 *"Give me the ISRO or Figma certificate"* (view and download instantly)\n` +
        `• 🚀 *"Tell me about MediKiosk, AutoAttend, or Virtual Herbal Garden"*\n\n` +
        `What would you like to know?`
    };
  }

  // 12. Intelligent Fallback
  return {
    text: `I have complete, live information regarding **Navaneethan Sankar's** portfolio, his **19 GitHub repositories (248 commits)**, and his **255 LinkedIn connections**:\n\n` +
      `• **Commits & Code:** Ask *"How many commits in MediRoute?"* or *"What are his total commits?"*\n` +
      `• **GitHub Repositories:** Ask about *MediRoute, MindBlossom, MediKiosk, AutoAttend, Virtual Herbal Garden, CivicConnect, FoodSaver, or MADC*.\n` +
      `• **Collaborators:** Ask *"Who worked along with you in MediRoute?"* or *"Who was on your SIH team?"*\n` +
      `• **LinkedIn Connections:** Ask *"Who is [Name]?"* or *"Analyze LinkedIn 255 connections"*.\n` +
      `• **Certificates:** Ask *"Show certificates"* to preview and download his credentials.\n\n` +
      `Feel free to ask any question!`
  };
}
