// Comprehensive Moderation and Safety Guard for Navaneethan Sankar's Portfolio Chatbot
// Enforces zero tolerance for 18+, vulgar, abusive, illegal, or hateful content.
// Violators are strictly blocked for 2 minutes (120 seconds), persisted across page refreshes and tab restarts.

const BLOCK_KEY = 'portfolio_chat_lockout_until';
const BLOCK_REASON_KEY = 'portfolio_chat_lockout_reason';
export const BLOCK_DURATION_MS = 2 * 60 * 1000; // 2 minutes (120 seconds)

// High-confidence core abusive and 18+ roots (tested on collapsed alphanumeric strings)
const CORE_KEYWORDS = [
  'fuck',
  'fuk',
  'shit',
  'bitch',
  'asshole',
  'dick',
  'pussy',
  'bastard',
  'whore',
  'slut',
  'cunt',
  'porn',
  'xxx',
  'nsfw',
  'blowjob',
  'orgasm',
  'hentai',
  'milf',
  'boob',
  'vagina',
  'penis',
  'omala',
  'otha',
  'thevidiya',
  'punda',
  'kunji',
  'chutiya',
  'madarchod',
  'behenchod',
  'gandmara',
  'lauda',
  'harami',
];

// Complex regex patterns for dangerous sentences, illegal acts, threats, and context-sensitive words
const BANNED_PATTERNS = [
  // Profanity & Vulgarity with word boundaries
  /\bf+u+c+k+/i,
  /\bs+h+i+t+/i,
  /\bb+i+t+c+h+/i,
  /\ba+s+s+h+o+l+e+/i,
  /\bd+i+c+k+/i,
  /\bp+u+s+s+y+/i,
  /\bc+o+c+k+/i,
  /\bb+a+s+t+a+r+d+/i,
  /\bw+h+o+r+e+/i,
  /\bs+l+u+t+/i,
  /\bc+u+n+t+/i,
  /\bm+o+t+h+e+r+f+u+c+k+/i,
  /\b(have|want|do)\s+sex\b/i,
  /\bsex(ual|y)?\b/i,
  /\bporn(ography)?\b/i,
  /\bnude(s)?\b/i,
  /\bnaked\b/i,
  /\berotic\b/i,

  // Illegal, Violent & Dangerous Sentences / Threat keywords
  /\bkill\s+(you|him|her|them|everyone|myself)\b/i,
  /\bhow\s+to\s+(make|build)\s+a?\s*bomb\b/i,
  /\b(hack|ddos|attack)\s+(government|police|isro|bank|server)\b/i,
  /\b(buy|sell)\s+(drugs|cocaine|heroin|weed|weapons|guns|contraband)\b/i,
  /\bterroris[mt]/i,
  /\bsuicide\b/i,
  /\bchild\s*(abuse|porn|exploitation)\b/i,
  /\brape\b/i,
  /\bmurder\b/i,
  /\bdeath\s*threat\b/i,
  /\bi\s*will\s*(hurt|kill|destroy|shoot)\b/i,
];

// Normalize leetspeak symbols to letters
export const normalizeLeetspeak = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[@]/g, 'a')
    .replace(/[1!|]/g, 'i')
    .replace(/[0]/g, 'o')
    .replace(/[3]/g, 'e')
    .replace(/[$5]/g, 's')
    .replace(/[+]/g, 't');
};

/**
 * Checks whether user input contains prohibited 18+, abusive, or illegal content.
 * @param {string} text - The raw text entered by user.
 * @returns {{ isViolation: boolean, reason?: string }}
 */
export const checkContentViolation = (text) => {
  if (!text || typeof text !== 'string') return { isViolation: false };

  const raw = text.trim();
  const normalized = normalizeLeetspeak(raw);
  const collapsed = normalized.replace(/[^a-z0-9]/g, ''); // all non-alphanumeric removed

  // Layer 1: Check collapsed string against high-confidence root keywords (catches "f u c k", "b.i.t.c.h", etc.)
  for (const keyword of CORE_KEYWORDS) {
    if (collapsed.includes(keyword)) {
      return {
        isViolation: true,
        reason: 'Detected 18+, abusive, or inappropriate language.',
      };
    }
  }

  // Layer 2: Check regex patterns on raw and normalized text
  for (const pattern of BANNED_PATTERNS) {
    if (pattern.test(raw) || pattern.test(normalized)) {
      return {
        isViolation: true,
        reason: 'Detected prohibited sentence, violence, or community violation.',
      };
    }
  }

  return { isViolation: false };
};

/**
 * Checks if the user is currently locked out in localStorage.
 * @returns {{ isBlocked: boolean, remainingMs: number, reason: string }}
 */
export const getBlockStatus = () => {
  try {
    const lockoutUntilStr = localStorage.getItem(BLOCK_KEY);
    if (!lockoutUntilStr) {
      return { isBlocked: false, remainingMs: 0, reason: '' };
    }

    const lockoutUntil = parseInt(lockoutUntilStr, 10);
    const now = Date.now();

    if (isNaN(lockoutUntil) || now >= lockoutUntil) {
      // Lockout expired
      clearUserBlock();
      return { isBlocked: false, remainingMs: 0, reason: '' };
    }

    const remainingMs = lockoutUntil - now;
    const reason = localStorage.getItem(BLOCK_REASON_KEY) || 'Prohibited language / 18+ policy violation';

    return {
      isBlocked: true,
      remainingMs,
      reason,
    };
  } catch (e) {
    console.error('Storage access error in getBlockStatus:', e);
    return { isBlocked: false, remainingMs: 0, reason: '' };
  }
};

/**
 * Strictly blocks user for 2 minutes (120,000 ms), persisting in localStorage.
 * @param {string} reason
 */
export const blockUserForViolation = (reason = 'Inappropriate / 18+ content violation') => {
  try {
    const expiry = Date.now() + BLOCK_DURATION_MS;
    localStorage.setItem(BLOCK_KEY, expiry.toString());
    localStorage.setItem(BLOCK_REASON_KEY, reason);
    return expiry;
  } catch (e) {
    console.error('Failed to save block to localStorage:', e);
    return Date.now() + BLOCK_DURATION_MS;
  }
};

/**
 * Clears the lockout state once time expires.
 */
export const clearUserBlock = () => {
  try {
    localStorage.removeItem(BLOCK_KEY);
    localStorage.removeItem(BLOCK_REASON_KEY);
  } catch (e) {
    console.error('Failed to clear block in localStorage:', e);
  }
};
