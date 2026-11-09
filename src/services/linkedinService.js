// LinkedIn 255 Connections Search & Ecosystem Analysis Engine for Navaneethan Sankar
// Supports searching connections by First Name, Last Name, Company, Title, or Full Name.
// Allows live CSV / JSON import and localStorage synchronization.

const LOCAL_STORAGE_CONNECTIONS_KEY = 'portfolio_linkedin_connections_data';

// Pre-seeded verified connection categories from Kongu Engineering College (KEC), Hackathons, and Tech Network
export const INITIAL_CONNECTIONS = [
  {
    fullName: "Dr. K. S. Navaneethan",
    firstName: "Navaneethan",
    lastName: "K. S.",
    position: "Assistant Professor & NSS Program Officer",
    company: "Kongu Engineering College (KEC)",
    category: "Faculty / Academic Mentor",
    details: "Senior faculty member and NSS coordinator at Kongu Engineering College."
  },
  {
    fullName: "Head of Department (IT)",
    firstName: "HOD",
    lastName: "IT Department",
    position: "Professor & Head of Information Technology",
    company: "Kongu Engineering College",
    category: "Department Leadership",
    details: "Department head overseeing B.Tech Information Technology curriculum and student technical innovations."
  },
  {
    fullName: "MediRoute Hackathon Teammate 1",
    firstName: "MediRoute",
    lastName: "Teammate",
    position: "IoT & Hardware Simulation Collaborator",
    company: "Kongu Engineering College",
    category: "Hackathon Teammate",
    details: "Co-developer on the MediRoute smart ambulance green corridor project (Won 1st Place across 3 hackathons)."
  },
  {
    fullName: "CivicConnect SIH Team Member",
    firstName: "CivicConnect",
    lastName: "Collaborator",
    position: "Student Developer",
    company: "Kongu Engineering College",
    category: "Smart India Hackathon 2025 Pre-Finalist",
    details: "Collaborator on CivicConnect for SIH 2025 Central Government round (Top 53 / 300 nationwide)."
  },
  {
    fullName: "MADC Club Core Member",
    firstName: "MADC",
    lastName: "Peer",
    position: "Mobile Application Developer",
    company: "Mobile App Development Club (MADC)",
    category: "Club Peer",
    details: "Collaborates on Flutter, Android/iOS, and React Three Fiber club software projects."
  },
  {
    fullName: "GFG Elite PACC Peer",
    firstName: "GFG",
    lastName: "Peer",
    position: "Competitive Programmer",
    company: "GeeksforGeeks Elite Batch",
    category: "Competitive Coding Network",
    details: "Fellow member selected in the Top 80 out of 2,000+ candidates for advanced DSA and system design training."
  }
];

/**
 * Loads all connections from localStorage or falls back to INITIAL_CONNECTIONS.
 * @returns {Array} List of connections
 */
export function getAllConnections() {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(LOCAL_STORAGE_CONNECTIONS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    }
  } catch (e) {
    console.error('Error reading connections from localStorage:', e);
  }
  return INITIAL_CONNECTIONS;
}

export function saveConnections(connections) {
  try {
    if (typeof window !== 'undefined' && window.localStorage && Array.isArray(connections)) {
      window.localStorage.setItem(LOCAL_STORAGE_CONNECTIONS_KEY, JSON.stringify(connections));
      return true;
    }
  } catch (e) {
    console.error('Error saving connections to localStorage:', e);
  }
  return false;
}

/**
 * Parses LinkedIn Connections CSV text (exported from LinkedIn Settings > Data Privacy).
 * Standard LinkedIn CSV header: "First Name,Last Name,URL,Email Address,Company,Position,Connected On"
 * @param {string} csvText
 * @returns {Array} Parsed connections
 */
export function parseLinkedInCsv(csvText) {
  if (!csvText || typeof csvText !== 'string') return [];

  const lines = csvText.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) return [];

  // Find header line (LinkedIn sometimes has 3-4 explanatory lines at the top)
  let headerIndex = -1;
  for (let i = 0; i < Math.min(10, lines.length); i++) {
    if (lines[i].toLowerCase().includes('first name') && lines[i].toLowerCase().includes('company')) {
      headerIndex = i;
      break;
    }
  }

  if (headerIndex === -1) headerIndex = 0;

  const results = [];
  const headers = parseCsvRow(lines[headerIndex]).map((h) => h.toLowerCase().trim());

  const fnIdx = headers.findIndex((h) => h.includes('first name'));
  const lnIdx = headers.findIndex((h) => h.includes('last name'));
  const compIdx = headers.findIndex((h) => h.includes('company'));
  const posIdx = headers.findIndex((h) => h.includes('position'));
  const urlIdx = headers.findIndex((h) => h.includes('url'));
  const dateIdx = headers.findIndex((h) => h.includes('connected on'));

  for (let i = headerIndex + 1; i < lines.length; i++) {
    const row = parseCsvRow(lines[i]);
    if (!row || row.length < 2) continue;

    const firstName = fnIdx !== -1 && row[fnIdx] ? row[fnIdx].trim() : '';
    const lastName = lnIdx !== -1 && row[lnIdx] ? row[lnIdx].trim() : '';
    const company = compIdx !== -1 && row[compIdx] ? row[compIdx].trim() : 'Confidential';
    const position = posIdx !== -1 && row[posIdx] ? row[posIdx].trim() : 'Professional';
    const profileUrl = urlIdx !== -1 && row[urlIdx] ? row[urlIdx].trim() : '';
    const connectedOn = dateIdx !== -1 && row[dateIdx] ? row[dateIdx].trim() : '';

    if (firstName || lastName) {
      const fullName = `${firstName} ${lastName}`.trim();
      results.push({
        fullName,
        firstName,
        lastName,
        company,
        position,
        profileUrl,
        connectedOn,
        category: determineCategory(position, company)
      });
    }
  }

  if (results.length > 0) {
    saveConnections(results);
  }

  return results;
}

// Simple CSV row parser handling quotes
function parseCsvRow(text) {
  const p = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if (c === ',' && !inQuotes) {
      p.push(cur.replace(/^"|"$/g, '').trim());
      cur = '';
    } else {
      cur += c;
    }
  }
  p.push(cur.replace(/^"|"$/g, '').trim());
  return p;
}

function determineCategory(position = '', company = '') {
  const p = position.toLowerCase();
  const c = company.toLowerCase();

  if (p.includes('professor') || p.includes('faculty') || p.includes('dean') || p.includes('lecturer') || p.includes('hod') || c.includes('college') || c.includes('university') || c.includes('kongu')) {
    return 'Academic / Professor';
  }
  if (p.includes('recruiter') || p.includes('talent') || p.includes('hr') || p.includes('acquisition')) {
    return 'Recruiter / Talent Acquisition';
  }
  if (p.includes('engineer') || p.includes('developer') || p.includes('architect') || p.includes('lead') || p.includes('analyst') || p.includes('intern')) {
    return 'Software Engineer / Developer';
  }
  if (p.includes('student') || p.includes('undergraduate') || p.includes('scholar')) {
    return 'Student / Peer';
  }
  return 'Professional Connection';
}

/**
 * Searches connection by person name, company, or job role.
 * @param {string} query
 */
export function searchConnection(query) {
  if (!query || typeof query !== 'string') return null;

  const clean = query.toLowerCase().trim();
  const connections = getAllConnections();

  // 1. Direct name match
  const directMatches = connections.filter((item) => {
    const full = item.fullName.toLowerCase();
    const first = item.firstName.toLowerCase();
    const last = item.lastName.toLowerCase();
    const comp = item.company ? item.company.toLowerCase() : '';
    const pos = item.position ? item.position.toLowerCase() : '';

    return (
      clean.includes(full) ||
      full.includes(clean) ||
      (first.length > 2 && clean.includes(first)) ||
      (last.length > 2 && clean.includes(last)) ||
      (comp.length > 3 && clean.includes(comp)) ||
      (pos.length > 3 && clean.includes(pos))
    );
  });

  return {
    matched: directMatches,
    totalConnections: connections.length,
    allConnections: connections
  };
}
