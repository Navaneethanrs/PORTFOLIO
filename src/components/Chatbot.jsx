import React, { useState, useEffect, useRef } from 'react';
import {
  checkContentViolation,
  getBlockStatus,
  blockUserForViolation,
  clearUserBlock,
} from '../utils/moderation';
import {
  generateChatbotResponse,
  PERSONAL_INFO,
  PROJECTS_DATA,
  CERTIFICATES_DATA,
} from '../data/chatbotKnowledge';
import {
  generateLiveAIResponse,
  getActiveGeminiApiKey,
  saveGeminiApiKey,
} from '../services/aiService';
import {
  parseLinkedInCsv,
  getAllConnections,
} from '../services/linkedinService';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `👋 Hello! I'm **Navaneethan's AI Assistant**.\n\nHow can I help you today? Feel free to ask about my projects, technical skills, certificates, hackathons, or how to reach out!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCertificateModal, setSelectedCertificateModal] = useState(null);

  // Moderation & 2-Minute Lockout State
  const [isBlocked, setIsBlocked] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [blockReason, setBlockReason] = useState('');

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // 1. Check lockout status on initial load and keep countdown synchronized
  useEffect(() => {
    const checkLockout = () => {
      const status = getBlockStatus();
      if (status.isBlocked) {
        setIsBlocked(true);
        setRemainingSeconds(Math.ceil(status.remainingMs / 1000));
        setBlockReason(status.reason);
      } else {
        if (isBlocked) {
          setIsBlocked(false);
          setRemainingSeconds(0);
          setBlockReason('');
        }
      }
    };

    checkLockout();

    const interval = setInterval(() => {
      const status = getBlockStatus();
      if (status.isBlocked) {
        setIsBlocked(true);
        setRemainingSeconds(Math.ceil(status.remainingMs / 1000));
        setBlockReason(status.reason);
      } else {
        setIsBlocked(false);
        setRemainingSeconds(0);
        setBlockReason('');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isBlocked]);

  // 2. Auto-scroll on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isBlocked) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, isBlocked]);

  // Trigger 2-minute lockout on violation
  const handleViolationTrigger = (reason) => {
    blockUserForViolation(reason);
    setIsBlocked(true);
    setRemainingSeconds(120);
    setBlockReason(reason);

    const alertMessage = {
      id: `violation-${Date.now()}`,
      sender: 'system',
      text: `⛔ **ACCESS TERMINATED FOR 2 MINUTES**\n\nYour message violated community safety standards (${reason}). Inappropriate words, 18+ content, and prohibited language are strictly forbidden.\n\nYou have been suspended for **2 minutes**. This restriction persists across page refreshes and tab reloads.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, alertMessage]);
    setInputMessage('');
  };

  // Handle sending a message
  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    // Check if user is currently blocked
    const lockStatus = getBlockStatus();
    if (lockStatus.isBlocked) {
      setIsBlocked(true);
      setRemainingSeconds(Math.ceil(lockStatus.remainingMs / 1000));
      return;
    }

    // Check for 18+, abusive, or illegal sentence violations
    const violation = checkContentViolation(text);
    if (violation.isViolation) {
      handleViolationTrigger(violation.reason);
      return;
    }

    // Check if the user pasted a LinkedIn CSV directly into the chat
    if (text.includes('First Name') && text.includes('Company') && (text.includes('Position') || text.includes('URL'))) {
      const parsed = parseLinkedInCsv(text);
      if (parsed.length > 0) {
        setConnectionsCount(parsed.length);
        setMessages((prev) => [
          ...prev,
          {
            id: `user-${Date.now()}`,
            sender: 'user',
            text: `[Imported ${parsed.length} LinkedIn Connections Data]`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
          {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: `### 🎉 Synced ${parsed.length} LinkedIn Connections!\n\nAll ${parsed.length} connections are now stored in AI memory. You can ask **"Who is [Person Name]?"** about anyone in this network, and I will accurately tell you their role, company, and relation to Navaneethan Sankar!`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          }
        ]);
        setInputMessage('');
        return;
      }
    }

    // Check if the user is providing a Gemini API Key via chat
    if (text.startsWith('/key ') || text.startsWith('AIzaSy')) {
      const keyToSave = text.startsWith('/key ') ? text.replace('/key ', '').trim() : text.trim();
      if (keyToSave.length > 20) {
        saveGeminiApiKey(keyToSave);
        setIsGeminiActive(true);
        setApiKeyInput(keyToSave);
        setMessages((prev) => [
          ...prev,
          {
            id: `user-${Date.now()}`,
            sender: 'user',
            text: `[Provided Gemini API Key]`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
          {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: `### 🟢 Google Gemini AI Activated!\n\nYour Gemini API key has been successfully configured. I am now fully powered by live Google Gemini with dynamic real-time context on Navaneethan's 19 GitHub repositories, verified commit counts, and complete LinkedIn credentials.\n\nAsk me any question!`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          }
        ]);
        setInputMessage('');
        return;
      }
    }

    // Add User Message
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Call Live AI Engine asynchronously
    try {
      const response = await generateLiveAIResponse(text, messages);

      setTimeout(() => {
        const botMsg = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: response.text,
          projectCard: response.projectCard,
          certificateCard: response.certificateCard,
          certificateList: response.certificateList,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 400);
    } catch (err) {
      console.error('Error generating response:', err);
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatCountdown = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Helper to render markdown links, bold text, bullet points
  const renderFormattedText = (content) => {
    if (!content) return null;
    const lines = content.split('\n');

    return (
      <div className="space-y-1.5 text-sm leading-relaxed">
        {lines.map((line, idx) => {
          if (!line.trim()) return <div key={idx} className="h-1.5" />;

          // Header 3
          if (line.startsWith('### ')) {
            return (
              <h4 key={idx} className="font-extrabold text-base text-neutral-900 mt-2 mb-1">
                {line.replace('### ', '')}
              </h4>
            );
          }

          // Bullet point
          const isBullet = line.startsWith('• ') || line.startsWith('- ') || line.startsWith('* ');
          const formattedLine = line.replace(/^[•\-*]\s+/, '');
          const parts = parseMarkdownTokens(formattedLine);

          if (isBullet) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-1">
                <span className="text-amber-600 font-bold leading-none mt-1">•</span>
                <span className="flex-1">{parts}</span>
              </div>
            );
          }

          return <p key={idx}>{parts}</p>;
        })}
      </div>
    );
  };

  // Parse **bold**, `code`, and [text](url)
  const parseMarkdownTokens = (text) => {
    const tokenRegex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g;
    const pieces = text.split(tokenRegex);

    return pieces.map((piece, i) => {
      if (piece.startsWith('**') && piece.endsWith('**')) {
        return (
          <strong key={i} className="font-bold text-neutral-900">
            {piece.slice(2, -2)}
          </strong>
        );
      }
      if (piece.startsWith('`') && piece.endsWith('`')) {
        return (
          <code key={i} className="px-1.5 py-0.5 rounded bg-neutral-200/80 text-neutral-800 text-xs font-mono">
            {piece.slice(1, -1)}
          </code>
        );
      }
      const linkMatch = piece.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        return (
          <a
            key={i}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 font-medium inline-flex items-center gap-0.5"
          >
            {linkMatch[1]}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 inline">
              <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06 1.06l7.5-7.5V9.5a.75.75 0 001.5 0v-6a.75.75 0 00-.75-.75h-6a.75.75 0 000 1.5h3.187l-7.497 7.503z" clipRule="evenodd" />
            </svg>
          </a>
        );
      }
      return piece;
    });
  };

  return (
    <>
      {/* Floating Chat Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle portfolio assistant"
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-neutral-900 via-neutral-800 to-black text-white shadow-2xl hover:shadow-black/50 border-2 border-amber-400/30 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="relative flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 text-amber-300 group-hover:rotate-12 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a.75.75 0 0 1-.772-.942l.532-2.127C3.398 16.34 2.25 14.28 2.25 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black" />
            </div>
          )}
        </button>
      </div>

      {/* Main Chatbot Window */}
      {isOpen && (
        <div
          className={`fixed bottom-24 right-4 md:right-6 z-50 flex flex-col bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden transition-all duration-300 ${
            isExpanded
              ? 'w-[95vw] md:w-[720px] h-[86vh] max-h-[850px]'
              : 'w-[92vw] sm:w-[440px] md:w-[480px] h-[600px] max-h-[82vh]'
          }`}
          style={{ animation: 'slideUp 0.25s cubic-bezier(0.16,1,0.3,1)' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-black text-white p-3.5 md:p-4 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-amber-400 text-black font-black flex items-center justify-center text-base shadow-md">
                  NS
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-neutral-900" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold tracking-tight text-white">Navaneethan's AI</h3>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-neutral-300">
                  Portfolio AI Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-neutral-300">
              {/* Expand / Shrink */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title={isExpanded ? 'Shrink' : 'Expand'}
              >
                {isExpanded ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                )}
              </button>

              {/* Reset Chat */}
              <button
                onClick={() => {
                  setMessages([
                    {
                      id: `welcome-${Date.now()}`,
                      sender: 'bot',
                      text: `Chat reset! Ask me anything about Navaneethan Sankar's 19 GitHub repositories, certificates, collaborators, or 255 LinkedIn connections.`,
                      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    },
                  ]);
                }}
                className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Clear Chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </button>

              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Blockout Banner when locked */}
          {isBlocked && (
            <div className="bg-rose-600 text-white p-3 flex items-center justify-between shadow-md shrink-0 border-b border-rose-700">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-white animate-ping" />
                <div>
                  <p className="text-xs font-black uppercase tracking-wider">Access Suspended (Policy Violation)</p>
                  <p className="text-[11px] text-rose-100 font-medium">Unlocks in {formatCountdown(remainingSeconds)}</p>
                </div>
              </div>
              <div className="px-2.5 py-1 bg-black/30 rounded-lg font-mono font-bold text-sm tracking-widest">
                {formatCountdown(remainingSeconds)}
              </div>
            </div>
          )}

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50/70">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {/* System Violation Message */}
                {msg.sender === 'system' ? (
                  <div className="w-full bg-rose-50 border-2 border-rose-300 rounded-2xl p-4 text-rose-900 text-xs shadow-sm">
                    {renderFormattedText(msg.text)}
                  </div>
                ) : (
                  <div
                    className={`max-w-[88%] rounded-2xl p-3.5 shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-neutral-900 text-white rounded-tr-xs'
                        : 'bg-white text-neutral-800 border border-neutral-200/80 rounded-tl-xs'
                    }`}
                  >
                    {renderFormattedText(msg.text)}

                    {/* Interactive Project Card */}
                    {msg.projectCard && (
                      <div className="mt-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">
                            {msg.projectCard.category} · {msg.projectCard.year}
                          </span>
                          {msg.projectCard.award && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                              {msg.projectCard.award}
                            </span>
                          )}
                        </div>

                        <h4 className="font-bold text-sm text-neutral-900 mb-1">{msg.projectCard.title}</h4>
                        <p className="text-xs text-neutral-600 mb-2 leading-relaxed">{msg.projectCard.summary}</p>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {msg.projectCard.techStack.map((tech, i) => (
                            <span key={i} className="text-[10px] bg-white border border-neutral-200 px-2 py-0.5 rounded-full font-medium text-neutral-700">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-200">
                          {msg.projectCard.github && (
                            <a
                              href={msg.projectCard.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold bg-neutral-900 text-white px-3 py-1.5 rounded-lg hover:bg-neutral-800 transition-colors inline-flex items-center gap-1.5"
                            >
                              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                              </svg>
                              View GitHub Repo
                            </a>
                          )}

                          {msg.projectCard.liveUrl && (
                            <a
                              href={msg.projectCard.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold bg-amber-500 text-black px-3 py-1.5 rounded-lg hover:bg-amber-400 transition-colors inline-flex items-center gap-1.5"
                            >
                              Live Demo ↗
                            </a>
                          )}

                          <button
                            onClick={() => handleSendMessage(`Who worked along with you in ${msg.projectCard.title}?`)}
                            className="text-xs font-medium text-neutral-600 hover:text-neutral-900 underline px-2 py-1 cursor-pointer"
                          >
                            Who worked on this?
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Interactive Certificate Card */}
                    {msg.certificateCard && (
                      <div className="mt-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                        {msg.certificateCard.image && (
                          <div className="relative mb-2.5 rounded-lg overflow-hidden border border-neutral-300 group">
                            <img
                              src={msg.certificateCard.image}
                              alt={msg.certificateCard.title}
                              className="w-full h-36 object-cover object-top hover:scale-105 transition-transform duration-300 cursor-pointer"
                              onClick={() => setSelectedCertificateModal(msg.certificateCard)}
                            />
                            <div
                              onClick={() => setSelectedCertificateModal(msg.certificateCard)}
                              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold cursor-pointer"
                            >
                              Click to view full certificate
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
                            {msg.certificateCard.badge}
                          </span>
                          <span className="text-[10px] text-neutral-500">{msg.certificateCard.date}</span>
                        </div>

                        <h4 className="font-bold text-sm text-neutral-900 mb-1">{msg.certificateCard.title}</h4>
                        <p className="text-xs text-neutral-600 mb-2">{msg.certificateCard.issuer}</p>

                        {msg.certificateCard.credentialId && (
                          <p className="text-[11px] font-mono text-neutral-500 mb-3">
                            Credential ID: <span className="font-semibold text-neutral-800">{msg.certificateCard.credentialId}</span>
                          </p>
                        )}

                        <div className="flex items-center gap-2">
                          {msg.certificateCard.image && (
                            <button
                              onClick={() => setSelectedCertificateModal(msg.certificateCard)}
                              className="text-xs font-bold bg-neutral-900 text-white px-3 py-1.5 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
                            >
                              Preview Certificate 🔍
                            </button>
                          )}

                          {msg.certificateCard.downloadUrl && (
                            <a
                              href={msg.certificateCard.downloadUrl}
                              download
                              className="text-xs font-bold bg-amber-500 text-black px-3 py-1.5 rounded-lg hover:bg-amber-400 transition-colors inline-flex items-center gap-1"
                            >
                              Download 📥
                            </a>
                          )}

                          {msg.certificateCard.linkedinUrl && (
                            <a
                              href={msg.certificateCard.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-medium text-blue-600 hover:text-blue-800 underline"
                            >
                              Verify on LinkedIn
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Certificate List */}
                    {msg.certificateList && (
                      <div className="mt-3 space-y-2">
                        {msg.certificateList.map((cert) => (
                          <div
                            key={cert.id}
                            className="p-2.5 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-between gap-3"
                          >
                            <div className="flex items-center gap-3">
                              {cert.image ? (
                                <img
                                  src={cert.image}
                                  alt={cert.title}
                                  className="w-12 h-10 object-cover rounded border border-neutral-300 cursor-pointer"
                                  onClick={() => setSelectedCertificateModal(cert)}
                                />
                              ) : (
                                <div className="w-12 h-10 rounded bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-600">
                                  Cert
                                </div>
                              )}
                              <div>
                                <h5 className="font-bold text-xs text-neutral-900 line-clamp-1">{cert.title}</h5>
                                <p className="text-[10px] text-neutral-500">{cert.issuer}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              {cert.image && (
                                <button
                                  onClick={() => setSelectedCertificateModal(cert)}
                                  className="px-2 py-1 text-[11px] font-bold bg-neutral-900 text-white rounded hover:bg-neutral-800 cursor-pointer"
                                >
                                  View
                                </button>
                              )}
                              {cert.downloadUrl && (
                                <a
                                  href={cert.downloadUrl}
                                  download
                                  className="px-2 py-1 text-[11px] font-bold bg-amber-500 text-black rounded hover:bg-amber-400"
                                >
                                  Download
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="text-[10px] text-neutral-400 mt-1 text-right">{msg.timestamp}</div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 p-3 bg-white border border-neutral-200 rounded-2xl w-24">
                <span className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse delay-150" />
                <span className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse delay-300" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-neutral-200 shrink-0">
            {isBlocked ? (
              <div className="w-full py-3 px-4 bg-rose-50 border border-rose-300 rounded-2xl text-center">
                <p className="text-xs font-black text-rose-800 uppercase tracking-wider mb-1">
                  Input Blocked for {formatCountdown(remainingSeconds)}
                </p>
                <p className="text-[11px] text-rose-600">
                  Suspended due to 18+ or inappropriate language. Access will be automatically restored once time expires.
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about projects, skills, certificates, experience..."
                  className="flex-1 bg-neutral-100 text-neutral-900 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all placeholder:text-neutral-400"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim()}
                  className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                  title="Send Message"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M3.105 2.289a.75.75 0 0 0-.826.95l1.414 4.925A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.896 28.896 0 0 0 15.293-7.154.75.75 0 0 0 0-1.115A28.897 28.897 0 0 0 3.105 2.289Z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Certificate Lightbox Modal */}
      {selectedCertificateModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setSelectedCertificateModal(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'slideUp 0.25s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div className="p-4 bg-neutral-900 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-400">
                  {selectedCertificateModal.badge}
                </span>
                <h3 className="text-sm md:text-base font-bold">{selectedCertificateModal.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCertificateModal(null)}
                className="p-1.5 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 bg-neutral-100 flex items-center justify-center max-h-[60vh] overflow-auto">
              {selectedCertificateModal.image ? (
                <img
                  src={selectedCertificateModal.image}
                  alt={selectedCertificateModal.title}
                  className="max-h-[55vh] object-contain rounded-xl shadow-md border border-neutral-300"
                />
              ) : (
                <div className="p-8 text-center text-neutral-500">No preview image available.</div>
              )}
            </div>

            <div className="p-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <p className="text-xs text-neutral-600 font-medium">{selectedCertificateModal.issuer}</p>
                {selectedCertificateModal.credentialId && (
                  <p className="text-xs font-mono text-neutral-500">ID: {selectedCertificateModal.credentialId}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                {selectedCertificateModal.downloadUrl && (
                  <a
                    href={selectedCertificateModal.downloadUrl}
                    download
                    className="px-4 py-2 bg-neutral-900 text-white text-xs font-bold rounded-xl hover:bg-neutral-800 transition-colors inline-flex items-center gap-1.5"
                  >
                    Download Certificate
                  </a>
                )}
                <button
                  onClick={() => setSelectedCertificateModal(null)}
                  className="px-4 py-2 bg-neutral-200 text-neutral-800 text-xs font-bold rounded-xl hover:bg-neutral-300 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
