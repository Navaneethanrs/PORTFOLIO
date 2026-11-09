// Live Intelligent AI Service for Navaneethan Sankar's Portfolio Chatbot
// Direct integration with Google Gemini AI API (Gemini 1.5 Flash / 2.0 Flash)
// Dynamically synchronizes with Navaneethan's live GitHub (all 19 repos) and complete LinkedIn profile.

import {
  PRELOADED_REPOSITORIES,
  getRepoCommitCount,
  getTotalCommitsAcrossAllRepos,
  getLiveRepositories,
  getLiveGitHubSummary,
  VERIFIED_COMMIT_COUNTS,
  GITHUB_USERNAME,
} from './githubService.js';
import { getAllConnections, searchConnection } from './linkedinService.js';
import { LINKEDIN_PROFILE, getLinkedInProfileMarkdown } from '../data/linkedinProfileData.js';
import { CERTIFICATES_DATA, PERSONAL_INFO } from '../data/chatbotKnowledge.js';

/**
 * Returns current Gemini API Key from environment or localStorage.
 */
export function getActiveGeminiApiKey() {
  const envKey = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY;
  if (envKey && typeof envKey === 'string' && envKey.trim().length > 10) {
    return envKey.trim();
  }
  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = window.localStorage.getItem('portfolio_gemini_key');
    if (saved && typeof saved === 'string' && saved.trim().length > 10) {
      return saved.trim();
    }
  }
  return '';
}

/**
 * Saves a Gemini API Key to localStorage.
 */
export function saveGeminiApiKey(key) {
  if (typeof window !== 'undefined' && window.localStorage) {
    if (key && key.trim()) {
      window.localStorage.setItem('portfolio_gemini_key', key.trim());
      return true;
    } else {
      window.localStorage.removeItem('portfolio_gemini_key');
      return true;
    }
  }
  return false;
}

/**
 * Dynamically builds the system persona prompt with real-time GitHub and LinkedIn facts.
 */
export async function buildDynamicPersonaPrompt() {
  let liveGitHubData;
  try {
    liveGitHubData = await getLiveGitHubSummary();
  } catch (e) {
    liveGitHubData = {
      username: GITHUB_USERNAME,
      profileUrl: `https://github.com/${GITHUB_USERNAME}`,
      totalRepositories: 19,
      totalCommits: 248,
      repositories: PRELOADED_REPOSITORIES,
    };
  }

  const linkedInMd = getLinkedInProfileMarkdown();

  return `
You are the authentic AI digital twin of Navaneethan Sankar (Navaneethan RS) on his personal developer portfolio.
Always converse in the first-person ("I", "me", "my", "we").
You are NOT a scripted bot or a generic assistant. You have full awareness of my whole technical journey, all 19 GitHub repositories, full commit counts, and complete LinkedIn profile.
Be warm, enthusiastic, articulate, and honest. Never give rigid robotic templates or refuse to answer. Answer naturally and in depth.

==============================================
COMPLETE VERIFIED REAL-TIME DATA (GITHUB & LINKEDIN):
==============================================

IDENTITY & PROFILE:
- Full Name: Navaneethan Sankar (Navaneethan RS)
- Headline: Full-Stack Developer | AI Enthusiast | Competitive Problem Solver | B.Tech IT Student at Kongu Engineering College
- Location: Salem, Tamil Nadu, India
- Portfolio: https://github.com/Navaneethanrs/PORTFOLIO
- GitHub: https://github.com/Navaneethanrs
- LinkedIn: https://www.linkedin.com/in/navaneethan-sankar/
- Connections: 255+ professional connections

ACADEMIC BACKGROUND:
- College: Kongu Engineering College (Autonomous), Perundurai, Erode (Batch 2024–2028)
- Degree: B.Tech in Information Technology
- Current CGPA: 8.44 / 10.00 (Up to Semester IV)
- Schooling: 
  * Class XII (HSC Bio-Maths): SRV Boys Higher Secondary School, Rasipuram (515/600 = 85.83%)
  * Class X (SSLC): Royal Park Matriculation Higher Secondary School, Salem (415/500 = 83.00%)

COMPETITIVE PROGRAMMING (600+ SOLVED):
- Total Problems Solved: 600+ across LeetCode & GeeksforGeeks
- LeetCode: @NAVANEETHAN_SANKAR (240+ Solved: 161 Easy, 69 Medium, 10 Hard | Contest Rating: 1460)
- GeeksforGeeks: 351+ Solved (133 Easy, 124 Medium, 87 Basic, 7 Hard | Score: 715 | Global Rank: #87)
- Honors: Selected for GFG Elite PACC Program (Top 80 out of 2,000+ applicants nationwide)

GITHUB ECOSYSTEM (TOTAL REPOSITORIES: ${liveGitHubData.totalRepositories}, TOTAL VERIFIED COMMITS: ${liveGitHubData.totalCommits}):
${liveGitHubData.repositories
  .map(
    (r, i) => `${i + 1}. **${r.name}** (${r.repo})
   - Commits: ${r.commits}
   - Tech: ${r.language}
   - URL: ${r.url}
   - Summary: ${r.description}
   - Highlights: ${r.highlights && r.highlights.length ? r.highlights.join('; ') : 'Open-source project on GitHub'}`
  )
  .join('\n')}

FLAGSHIP WORKS SUMMARY:
1. **MediRoute** (73 commits): Smart ambulance traffic control & emergency green corridor platform. Won 1st Prize in 3 collegiate hackathons. Uses real-time GPS telemetry, IoT automated signal controllers, and Socket.io dashboards.
2. **Civic-Connect / TechSphere** (45 commits): Smart India Hackathon (SIH 2025) Pre-Finalist (Top 53 out of 300 nationwide). Citizen grievance redressal with geotagged photo reporting and automated municipal routing.
3. **MindBlossom** (9 commits): AI mental wellness platform with speech-to-text, mood detection, and curated Tamil music therapy.
4. **FOODSAVER** (6 commits): Surplus food recovery platform connecting donors with nearby NGOs with PHPMailer automated dispatch.
5. **Cpu-Scheduling** (6 commits): Interactive animated Gantt chart visualizer for FCFS, SJF, Round Robin & Priority CPU algorithms.
6. **AutoAttend** (2 commits): Rural schools attendance system with facial recognition and RFID.
7. **MediKiosk** (2 commits): Multimodal AI medical intake & document digitization kiosk.
8. **MADC Portal & App** (21 + 2 commits): 3D web platform with React Three Fiber and Flutter mobile app for Mobile App Development Club.

LINKEDIN EXPERIENCE & CREDENTIALS:
${linkedInMd}

CONVERSATION INSTRUCTIONS:
1. Always respond in the first person ("I built MediRoute...", "In my college at Kongu Engineering College...", "Across my 19 GitHub repositories...").
2. Answer ANY type of question the user asks about my works, projects, commits, tech stack, hackathon victories, college, schooling, or career.
3. If they ask generally "what works have you done" or "show your projects", provide a well-organized, impressive overview of key projects with technologies and GitHub links.
4. If they ask about specific repositories or commit counts, provide exact real-time data.
5. Keep answers engaging, natural, concise yet thorough, and format code, repo names, and links cleanly in Markdown.
`.trim();
}

/**
 * Generates an AI response using Google Gemini API if a key is present,
 * or our enhanced contextual dialogue engine.
 */
export async function generateLiveAIResponse(userMessage, conversationHistory = []) {
  const apiKey = getActiveGeminiApiKey();

  // Try live Google Gemini API
  if (apiKey) {
    try {
      const systemPrompt = await buildDynamicPersonaPrompt();

      const formattedContents = [
        ...conversationHistory.slice(-8).map((m) => ({
          role: m.sender === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }],
        })),
        { role: 'user', parts: [{ text: userMessage }] },
      ];

      // High-performance live Gemini models
      const models = ['gemini-3.5-flash-lite', 'gemini-3.5-flash', 'gemini-flash-latest'];

      for (const model of models) {
        try {
          const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                systemInstruction: { parts: [{ text: systemPrompt }] },
                contents: formattedContents,
                generationConfig: {
                  temperature: 0.7,
                  maxOutputTokens: 800,
                },
              }),
            }
          );

          if (res.ok) {
            const data = await res.json();
            const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (candidate && candidate.trim()) {
              return { text: candidate.trim() };
            }
          } else {
            const errData = await res.json().catch(() => ({}));
            console.warn(`Gemini API [${model}] error:`, res.status, errData);
          }
        } catch (innerErr) {
          console.warn(`Attempt with ${model} failed:`, innerErr);
        }
      }
    } catch (e) {
      console.warn('Gemini API call failed, falling back to local engine:', e);
    }
  }

  // Fallback to our Comprehensive Contextual Dialogue Engine
  return generateContextualDialogue(userMessage);
}

/**
 * Comprehensive Contextual Dialogue Engine.
 * Understands all variations of user queries (works, projects, repos, hackathons, skills, commits, LinkedIn, etc.)
 * and returns rich, exact, real-time responses.
 */
export async function generateContextualDialogue(userMessage) {
  const raw = userMessage.trim();
  const q = raw.toLowerCase();

  // 1. Commit queries
  if (q.includes('commit')) {
    const matched = PRELOADED_REPOSITORIES.find((r) => {
      const cleanName = r.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanQ = q.replace(/[^a-z0-9]/g, '');
      return cleanQ.includes(cleanName) || (r.displayName && q.includes(r.displayName.toLowerCase()));
    });

    if (matched) {
      const commitInfo = await getRepoCommitCount(matched.name);
      return {
        text: `For **${matched.displayName}**, I have made **${commitInfo.count} verified commits** on the default branch. You can inspect the complete commit history and code diffs directly on [GitHub here](${matched.url}/commits). This count is synchronized in real time with GitHub!`,
      };
    }

    const { total } = await getTotalCommitsAcrossAllRepos();
    return {
      text: `Across all 19 of my public repositories on GitHub, I have a total of **${total} verified commits**! My most active repos by commit count are **MediRoute** (73 commits), **Civic-Connect** (45 commits), **Madathon-** (23 commits), and **PORTFOLIO** (22 commits). Every time I push code, this count updates dynamically.`,
    };
  }

  // 2. Specific project inquiry
  const matchedProject = PRELOADED_REPOSITORIES.find((r) => {
    const cleanName = r.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanQ = q.replace(/[^a-z0-9]/g, '');
    return cleanQ.includes(cleanName) || (r.displayName && q.includes(r.displayName.toLowerCase()));
  });

  if (matchedProject && !q.includes('what are all') && !q.includes('list all') && !q.includes('all works') && !q.includes('all project')) {
    const count = VERIFIED_COMMIT_COUNTS[matchedProject.name] || matchedProject.commits || 2;
    return {
      text: `**${matchedProject.displayName}** is built with **${matchedProject.language}** and currently has **${count} commits** on GitHub.\n\n${matchedProject.description}\n\n**Key Highlights:**\n${matchedProject.highlights.map((h) => `• ${h}`).join('\n')}\n\nYou can explore the source code directly on [GitHub here](${matchedProject.url})!`,
    };
  }

  // 3. Works / Projects / What have you done queries (Matches "WORKS", "WHAT ARE ALL WORKS RYT NAVANEETHAN HAS DONE", "PROJECTS", etc.)
  if (
    q === 'works' ||
    q === 'work' ||
    q === 'projects' ||
    q.includes('work') ||
    q.includes('project') ||
    q.includes('done') ||
    q.includes('built') ||
    q.includes('made') ||
    q.includes('created') ||
    q.includes('repo') ||
    q.includes('portfolio') ||
    q.includes('developed')
  ) {
    const repos = await getLiveRepositories();
    const { total } = await getTotalCommitsAcrossAllRepos();

    return {
      text: `Here is a complete breakdown of my works! I have authored **${repos.length} public repositories** with **${total} verified commits** on GitHub ([@Navaneethanrs](https://github.com/Navaneethanrs)):

### 🏆 1. Flagship Innovations & Hackathon Winners
• **[MediRoute](https://github.com/Navaneethanrs/MediRoute)** (73 commits) — **Won 1st Place in 3 Inter-College Hackathons!** Smart ambulance traffic control & emergency green-corridor system with real-time GPS telemetry, IoT signal controllers, and Socket.io hospital dashboards.
• **[Civic-Connect / TechSphere](https://github.com/Navaneethanrs/Civic-Connect)** (45 commits) — **Smart India Hackathon (SIH 2025) Pre-Finalist (Top 53 / 300 nationwide)**. Citizen grievance redressal platform with geotagged photo reporting and automated municipal officer escalation.
• **[MindBlossom](https://github.com/Navaneethanrs/MindBlossom)** (9 commits) — Anonymous AI mental wellness app featuring speech recognition, emotional sentiment detection, and mood-curated Tamil music therapy.
• **[FOODSAVER](https://github.com/Navaneethanrs/FOODSAVER)** (6 commits) — Surplus food recovery and donation platform geo-matching donors to nearby NGOs with automated transactional PHPMailer alerts.
• **[Cpu-Scheduling](https://github.com/Navaneethanrs/Cpu-Scheduling)** (6 commits) — Interactive animated Gantt chart simulator for FCFS, SJF, Round Robin & Priority operating system scheduling algorithms.

### 💻 2. Healthcare, Utility & Club Systems
• **[MediKiosk](https://github.com/Navaneethanrs/medikiosk)** (2 commits) — Multimodal AI medical intake & OCR document digitization kiosk for outpatient clinics.
• **[AutoAttend](https://github.com/Navaneethanrs/AutoAttend)** (2 commits) — Automated attendance platform tailored for rural schools using facial recognition and RFID.
• **[MADC Web Portal & App](https://github.com/Navaneethanrs/MADC)** (21 + 2 commits) — Interactive 3D web platform using React Three Fiber, plus a Flutter companion app for the Mobile App Development Club.
• **[madc-attendance](https://github.com/Navaneethanrs/madc-attendance)** (2 commits) — Full-stack attendance system with Flutter client and Node.js/MongoDB REST API.
• **[Jarvis](https://github.com/Navaneethanrs/jarvis)** (8 commits) — Voice-controlled personal assistant interface with Web Speech synthesis.
• **[-Virtual-Herbal-Garden](https://github.com/Navaneethanrs/-Virtual-Herbal-Garden)** (2 commits) — Interactive 3D AYUSH medicinal plants showcase platform.
• **[Console HR Management](https://github.com/Navaneethanrs/ConsoleBasedApplication-)** (3 commits) — Pure Java console-based enterprise HR and payroll management system.

Would you like a deep dive into any specific project's architecture, tech stack, or live demo?`,
    };
  }

  // 4. Collaborator / teammate questions
  if (
    q.includes('worked with') ||
    q.includes('worked along') ||
    q.includes('collaborat') ||
    q.includes('teammate') ||
    q.includes('team member') ||
    (q.includes('who worked') && (q.includes('it') || q.includes('project') || q.includes('you')))
  ) {
    return {
      text: `I love working in agile, multidisciplinary sprint teams!
• For **MediRoute**, I led the project as System Architect and Full-Stack Developer alongside my peers from Kongu Engineering College who handled IoT sensor circuit simulations and pitch delivery across three 1st-place victories.
• For **CivicConnect**, I collaborated in a 6-member student developer squad from KEC reaching the Pre-Finals (Top 53 out of 300 nationwide) in Smart India Hackathon 2025.
• Other projects like MindBlossom, FoodSaver, and CPU Scheduling Visualizer were built independently by me.`,
    };
  }

  // 5. Casual greetings & small talk
  if (/^(hi|hello|hey|hola|sup|good morning|good evening|good afternoon|namaste|vanakkam)[\s!.]*$/i.test(q)) {
    const greetings = [
      `Hey there! Great to connect with you. I'm Navaneethan Sankar. What would you like to know about my projects, hackathons, skills, or background?`,
      `Hello! Thanks for visiting my portfolio. I'm happy to chat about what I've built, my 19 GitHub repositories, hackathon wins, or tech stack!`,
      `Hi! Good to meet you. I'm Navaneethan. Feel free to ask me anything about my works, coding journey, or how to collaborate!`,
    ];
    return { text: greetings[Math.floor(Math.random() * greetings.length)] };
  }

  // 6. "How are you" / "What are you doing"
  if (q.includes('how are you') || q.includes('how r u') || q.includes('whats up') || q.includes("what's up")) {
    return {
      text: `I'm doing great, thank you for asking! I've been actively coding, refining my MediRoute emergency corridor platform, and practicing advanced DSA algorithms on LeetCode. How can I help you today?`,
    };
  }

  // 7. "Who are you" / "Tell me about yourself" / "Introduce yourself"
  if (
    /\b(who are you|about yourself|introduce yourself|tell me about you|your background)\b/i.test(q) ||
    (q.includes('about you') && !q.includes('about your project') && !q.includes('about your work'))
  ) {
    return {
      text: `I'm **Navaneethan Sankar** (Navaneethan RS), an Information Technology undergraduate at **Kongu Engineering College** (Batch 2024–2028) with an **8.44 CGPA**. 
I'm a full-stack developer passionate about building scalable web and mobile software with React, Node.js, and Flutter, integrated with IoT and AI. 
I won 1st Place across 3 inter-college hackathons with my emergency ambulance corridor platform **MediRoute**, reached the Pre-Finals (Top 53 nationwide) in **Smart India Hackathon (SIH 2025)**, and solved over **600 problems** across LeetCode and GeeksforGeeks.`,
    };
  }

  // 8. Hackathon & Achievements
  if (q.includes('hackathon') || q.includes('sih') || q.includes('isro') || q.includes('achievement') || q.includes('award') || q.includes('winner')) {
    return {
      text: `Here are my major hackathon achievements and awards:
1. 🥇 **1st Place in 3 Inter-College Hackathons** — Built **MediRoute**, an emergency ambulance green-corridor system with IoT traffic signal automation and real-time Socket.io dashboards.
2. 🇮🇳 **Smart India Hackathon (SIH 2025) Pre-Finalist** — Selected among the **Top 53 out of 300 teams nationwide** for **CivicConnect**, an automated citizen grievance redressal platform.
3. 🚀 **ISRO Bharatiya Antariksh Hackathon 2026** — Participated and submitted innovative space-tech ideas organized by ISRO & Hack2skill (Credential ID: \`2026H2S06BAH-P30962\`).
4. ⚡ **VIT Chennai DataQuest 3** — Participated in a rigorous 2-day offline sprint at VIT Chennai building data-driven prototypes.
5. 🏆 **GFG Elite PACC Selection** — Selected in the **Top 80 out of 2,000+ applicants nationwide** by GeeksforGeeks for advanced DSA and system design training.`,
    };
  }

  // 9. Technical Skills & Stack
  if (q.includes('skill') || q.includes('tech stack') || q.includes('language') || q.includes('framework') || q.includes('technology') || q.includes('tools')) {
    return {
      text: `Here is my complete technical skill set:
• **Languages:** C, C++, Java, JavaScript (ES6+), Python, Dart, PHP, SQL, HTML5, CSS3
• **Frontend:** React 19, Tailwind CSS v4, Three.js / React Three Fiber, GSAP, AOS, Vite
• **Backend & Real-Time:** Node.js, Express.js, PHP, Socket.io (WebSockets), REST APIs
• **Mobile:** Flutter, Dart (Cross-platform Android & iOS)
• **Databases:** MongoDB, MySQL, Firebase
• **Tools & Platforms:** Git, GitHub, Postman, Figma, Vercel, VS Code
• **Core Competencies:** Data Structures & Algorithms (600+ Solved), IoT Integration, System Design, Generative AI`,
    };
  }

  // 10. LinkedIn and connections questions
  if (q.includes('linkedin') || q.includes('connection') || q.includes('network') || q.startsWith('who is ')) {
    const personName = q
      .replace(/^who is /i, '')
      .replace(/tell me about /i, '')
      .replace(/on linkedin/i, '')
      .replace(/\?/g, '')
      .trim();

    if (personName.length >= 2 && !q.includes('yourself')) {
      const match = searchConnection(personName);
      if (match && match.matched.length > 0) {
        const p = match.matched[0];
        return {
          text: `Yes, **${p.fullName}** is part of my LinkedIn professional network! They are a **${p.position}** at **${p.company}** (${p.category}). You can connect with me directly on [LinkedIn](https://www.linkedin.com/in/navaneethan-sankar/).`,
        };
      }
    }

    return {
      text: `I currently have **255+ professional connections** on [LinkedIn](https://www.linkedin.com/in/navaneethan-sankar/)! My network comprises professors and IT faculty at Kongu Engineering College (like Dr. K. S. Navaneethan), hackathon teammates from SIH and ISRO, competitive programmers from the GFG Elite PACC cohort, and industry professionals. You can also ask me *"Who is [Name]?"* to search anyone in this network!`,
    };
  }

  // 11. Certificates questions
  if (q.includes('certificate') || q.includes('certification')) {
    if (q.includes('isro') || q.includes('space') || q.includes('antariksh')) {
      const c = CERTIFICATES_DATA.find((item) => item.id === 'isro-hackathon-2026');
      return {
        text: `Here is my verified certificate from the national **ISRO Bharatiya Antariksh Hackathon 2026** (ID: \`${c.credentialId}\`) conducted by ISRO & Hack2skill. You can preview or download it right below!`,
        certificateCard: c,
      };
    }
    if (q.includes('figma') || q.includes('ui/ux')) {
      const c = CERTIFICATES_DATA.find((item) => item.id === 'figma-uiux-certification');
      return {
        text: `Here is my 30-hour **Figma UI/UX Design Certification** issued by the Department of IT at Kongu Engineering College:`,
        certificateCard: c,
      };
    }
    if (q.includes('vit') || q.includes('dataquest')) {
      const c = CERTIFICATES_DATA.find((item) => item.id === 'vit-dataquest-hackathon');
      return {
        text: `Here is my certificate from the **VIT Chennai DataQuest 3** hackathon sprint:`,
        certificateCard: c,
      };
    }

    return {
      text: `I hold verified credentials across national hackathons, UI/UX design, and software engineering (including ISRO, VIT Chennai, Figma 30h, Waste-to-Purpose, and MATLAB). Here are preview cards for my certifications:`,
      certificateList: CERTIFICATES_DATA.slice(0, 5),
    };
  }

  // 12. Coding / DSA / LeetCode / GFG questions
  if (q.includes('leetcode') || q.includes('gfg') || q.includes('dsa') || q.includes('coding') || q.includes('problem')) {
    return {
      text: `Competitive problem-solving is a daily routine for me!
• **Total Solved:** 600+ problems across platforms
• **LeetCode:** 240+ problems solved ([@NAVANEETHAN_SANKAR](https://leetcode.com/NAVANEETHAN_SANKAR/)) with a 1460 contest rating (161 Easy, 69 Medium, 10 Hard)
• **GeeksforGeeks:** 351+ problems solved (Score: 715, Global Rank: #87)
• **Honors:** Selected in the **Top 80 out of 2,000+ applicants nationwide** for the GeeksforGeeks Elite PACC training program.`,
    };
  }

  // 13. College / Education questions
  if (q.includes('college') || q.includes('education') || q.includes('cgpa') || q.includes('school') || q.includes('kongu')) {
    return {
      text: `I'm currently pursuing my B.Tech in Information Technology at **Kongu Engineering College** (Autonomous), Perundurai (Batch 2024–2028), where I maintain a **CGPA of 8.44 / 10.00**. Prior to college, I completed Class XII (Bio-Maths) at SRV Boys Higher Secondary School with 85.83% and Class X at Royal Park Matriculation with 83.00%.`,
    };
  }

  // 14. Contact / Hire questions
  if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('reach') || q.includes('message')) {
    return {
      text: `I'd love to connect! You can reach me directly on [LinkedIn](https://www.linkedin.com/in/navaneethan-sankar/), explore my code on [GitHub](https://github.com/Navaneethanrs), or fill out the contact form right at the bottom of this page. I'm always open to discussing software engineering internships, hackathons, or exciting tech projects.`,
    };
  }

  // 15. Intelligent general response
  return {
    text: `I'm Navaneethan Sankar, an IT student at Kongu Engineering College with an 8.44 CGPA and author of 19 open-source repositories on GitHub. 
I specialize in full-stack development (React, Node.js, Flutter, MongoDB), IoT emergency systems (like MediRoute, which won 3 hackathons), and algorithmic problem-solving (600+ problems solved on LeetCode & GFG).

Feel free to ask me anything about:
• **My Works & Projects:** MediRoute, CivicConnect, MindBlossom, FoodSaver, Cpu-Scheduling
• **My 19 GitHub Repositories & 248+ Commits**
• **My 255+ LinkedIn Connections & Experience**
• **Hackathon Victories & Certifications (ISRO, VIT, Figma)**
• **Competitive Programming Stats & Tech Stack**`,
  };
}
