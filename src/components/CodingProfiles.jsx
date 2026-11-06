import React, { useState, useEffect } from 'react';

const CodingProfiles = () => {
  // Live state with verified fallback values
  const [leetcodeData, setLeetcodeData] = useState({
    totalSolved: 240,
    easySolved: 161,
    mediumSolved: 69,
    hardSolved: 10,
    ranking: 703565,
    rating: 1460,
    isLive: false,
  });

  const [gfgData, setGfgData] = useState({
    totalSolved: 351,
    mediumSolved: 124,
    easySolved: 133,
    basicSolved: 87,
    hardSolved: 7,
    score: 715,
    rank: 87,
    isLive: false,
  });

  // Fetch real-time problem counts on mount
  useEffect(() => {
    let isMounted = true;

    // 1. Fetch live LeetCode stats
    const fetchLeetCode = async () => {
      try {
        const res = await fetch('https://leetcode-api-faisalshohag.vercel.app/NAVANEETHAN_SANKAR');
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && data && typeof data.totalSolved === 'number') {
          setLeetcodeData((prev) => ({
            ...prev,
            totalSolved: data.totalSolved,
            easySolved: data.easySolved ?? prev.easySolved,
            mediumSolved: data.mediumSolved ?? prev.mediumSolved,
            hardSolved: data.hardSolved ?? prev.hardSolved,
            ranking: data.ranking ?? prev.ranking,
            isLive: true,
          }));
        }
      } catch (err) {
        // Fallback already initialized cleanly
      }
    };

    fetchLeetCode();

    return () => {
      isMounted = false;
    };
  }, []);

  const totalProblemsAcrossPlatforms = leetcodeData.totalSolved + gfgData.totalSolved;
  const totalMediumHard =
    leetcodeData.mediumSolved +
    leetcodeData.hardSolved +
    gfgData.mediumSolved +
    gfgData.hardSolved;

  return (
    <section id="coding" className="w-full bg-[#FFFFFF] py-16 md:py-24 px-4 md:px-8 border-t border-black/5">
      <div className="w-full max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div data-aos="fade-up">
            <span className="text-black/50 text-xs font-bold tracking-widest uppercase mb-1.5 block">
              — Problem Solving & Algorithms
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-black">
              Coding Profiles & DSA
            </h2>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-black/60 text-xs md:text-sm font-medium max-w-xs md:text-right leading-relaxed"
          >
            Live synced problem-solving metrics across competitive programming platforms.
          </p>
        </div>

        {/* Compact Stat Overview Pills */}
        <div
          data-aos="fade-up"
          data-aos-delay="120"
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        >
          <div className="p-3.5 rounded-2xl bg-[#F9F9F7] border border-black/6 flex flex-col">
            <span className="text-[10px] font-bold text-black/45 uppercase tracking-wider">Total Solved</span>
            <span className="text-2xl font-black text-black tracking-tight my-0.5">
              {totalProblemsAcrossPlatforms}+
            </span>
            <span className="text-[10px] font-bold text-blue-600">Across Platforms</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#F9F9F7] border border-black/6 flex flex-col">
            <span className="text-[10px] font-bold text-black/45 uppercase tracking-wider">Medium & Hard</span>
            <span className="text-2xl font-black text-black tracking-tight my-0.5">
              {totalMediumHard}
            </span>
            <span className="text-[10px] font-bold text-amber-600">Advanced Logic</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#F9F9F7] border border-black/6 flex flex-col">
            <span className="text-[10px] font-bold text-black/45 uppercase tracking-wider">LeetCode Solved</span>
            <div className="flex items-center gap-1.5 my-0.5">
              <span className="text-2xl font-black text-black tracking-tight">
                {leetcodeData.totalSolved}
              </span>
              {leetcodeData.isLive && (
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Live synced" />
              )}
            </div>
            <span className="text-[10px] font-bold text-orange-600">Rating: {leetcodeData.rating}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#F9F9F7] border border-black/6 flex flex-col">
            <span className="text-[10px] font-bold text-black/45 uppercase tracking-wider">GFG Solved</span>
            <span className="text-2xl font-black text-black tracking-tight my-0.5">
              {gfgData.totalSolved}
            </span>
            <span className="text-[10px] font-bold text-emerald-600">Score: {gfgData.score} • Rank #{gfgData.rank}</span>
          </div>
        </div>

        {/* Balanced Two-Column Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

          {/* 1. LeetCode Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="bg-[#121417] text-white rounded-[24px] p-5 md:p-6 flex flex-col justify-between border border-white/10 shadow-lg relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300"
          >
            {/* Top Accent Strip */}
            <div className="h-1 w-full bg-gradient-to-r from-amber-500 to-orange-500 absolute top-0 left-0" />

            <div>
              {/* Header: Platform Branding & Outbound Link */}
              <div className="flex items-center justify-between gap-3 mb-4 pt-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center p-2 shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-amber-500">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943L15.292 5.69A5.405 5.405 0 0 0 13.483 0Zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-lg font-bold text-white tracking-tight">LeetCode</h3>
                      <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded-full border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Sync</span>
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-white/50">
                      @NAVANEETHAN_SANKAR
                    </p>
                  </div>
                </div>

                <a
                  href="https://leetcode.com/u/NAVANEETHAN_SANKAR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all duration-200"
                  aria-label="View LeetCode Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>

              {/* Main Metric Row */}
              <div className="bg-white/5 rounded-xl p-3.5 mb-4 flex items-center justify-between border border-white/5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block">
                    Problems Solved
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white tracking-tight">
                      {leetcodeData.totalSolved}
                    </span>
                    <span className="text-xs text-white/40 font-medium">/ 4,101</span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Rating: {leetcodeData.rating}
                  </span>
                  <span className="text-[10px] font-semibold text-white/45">
                    Rank #{Number(leetcodeData.ranking).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Sleek Progress Bar Stack */}
              <div className="mb-4">
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden flex mb-2">
                  <div
                    style={{ width: `${(leetcodeData.easySolved / leetcodeData.totalSolved) * 100}%` }}
                    className="h-full bg-emerald-400"
                    title={`Easy: ${leetcodeData.easySolved}`}
                  />
                  <div
                    style={{ width: `${(leetcodeData.mediumSolved / leetcodeData.totalSolved) * 100}%` }}
                    className="h-full bg-amber-400"
                    title={`Medium: ${leetcodeData.mediumSolved}`}
                  />
                  <div
                    style={{ width: `${(leetcodeData.hardSolved / leetcodeData.totalSolved) * 100}%` }}
                    className="h-full bg-rose-400"
                    title={`Hard: ${leetcodeData.hardSolved}`}
                  />
                </div>

                {/* Difficulty Legend */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-white/5 rounded-lg py-1 px-1.5 border border-white/5">
                    <span className="text-[9px] font-bold text-emerald-400 uppercase block">Easy</span>
                    <span className="text-xs font-bold text-white">{leetcodeData.easySolved}</span>
                  </div>
                  <div className="bg-white/5 rounded-lg py-1 px-1.5 border border-white/5">
                    <span className="text-[9px] font-bold text-amber-400 uppercase block">Medium</span>
                    <span className="text-xs font-bold text-white">{leetcodeData.mediumSolved}</span>
                  </div>
                  <div className="bg-white/5 rounded-lg py-1 px-1.5 border border-white/5">
                    <span className="text-[9px] font-bold text-rose-400 uppercase block">Hard</span>
                    <span className="text-xs font-bold text-white">{leetcodeData.hardSolved}</span>
                  </div>
                </div>
              </div>

              {/* Language Chips */}
              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                <span className="text-[10px] text-white/45 font-semibold mr-1">Languages:</span>
                <span className="px-2 py-0.5 rounded-full bg-white/8 text-white/80 text-[10px] font-semibold">
                  C++ (119)
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/8 text-white/80 text-[10px] font-semibold">
                  C (72)
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/8 text-white/80 text-[10px] font-semibold">
                  MySQL (51)
                </span>
              </div>
            </div>

            {/* Bottom Profile Button */}
            <a
              href="https://leetcode.com/u/NAVANEETHAN_SANKAR/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 mt-2"
            >
              <span>Open LeetCode Profile</span>
              <span className="text-sm leading-none">↗</span>
            </a>
          </div>


          {/* 2. GeeksforGeeks Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-[#0C2417] text-white rounded-[24px] p-5 md:p-6 flex flex-col justify-between border border-emerald-500/20 shadow-lg relative overflow-hidden group hover:border-emerald-400/50 transition-all duration-300"
          >
            {/* Top Accent Strip */}
            <div className="h-1 w-full bg-gradient-to-r from-emerald-400 to-green-500 absolute top-0 left-0" />

            <div>
              {/* Header: Platform Branding & Outbound Link */}
              <div className="flex items-center justify-between gap-3 mb-4 pt-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center p-2 shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-emerald-400">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5-4.5-4.5 1.41-1.41L11 14.67l6.09-6.09 1.41 1.41L11 17.5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-lg font-bold text-white tracking-tight">GeeksforGeeks</h3>
                      <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-300 bg-emerald-400/10 px-1.5 py-0.2 rounded-full border border-emerald-400/20">
                        Verified
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-white/50">
                      @navaneethkr9r • Navaneethan RS
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.geeksforgeeks.org/profile/navaneethkr9r?tab=activity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-400 hover:text-black text-white flex items-center justify-center transition-all duration-200"
                  aria-label="View GeeksforGeeks Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>

              {/* Main Metric Row */}
              <div className="bg-white/5 rounded-xl p-3.5 mb-4 flex items-center justify-between border border-white/5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block">
                    Problems Solved
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white tracking-tight">
                      {gfgData.totalSolved}
                    </span>
                    <span className="text-xs text-white/40 font-medium">Problems</span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                    Coding Score: {gfgData.score}
                  </span>
                  <span className="text-[10px] font-semibold text-white/50">
                    Institute Rank #{gfgData.rank}
                  </span>
                </div>
              </div>

              {/* Sleek Progress Bar Stack */}
              <div className="mb-4">
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden flex mb-2">
                  <div
                    style={{ width: `${(gfgData.mediumSolved / gfgData.totalSolved) * 100}%` }}
                    className="h-full bg-amber-400"
                    title={`Medium: ${gfgData.mediumSolved}`}
                  />
                  <div
                    style={{ width: `${(gfgData.easySolved / gfgData.totalSolved) * 100}%` }}
                    className="h-full bg-emerald-400"
                    title={`Easy: ${gfgData.easySolved}`}
                  />
                  <div
                    style={{ width: `${(gfgData.basicSolved / gfgData.totalSolved) * 100}%` }}
                    className="h-full bg-blue-400"
                    title={`Basic: ${gfgData.basicSolved}`}
                  />
                  <div
                    style={{ width: `${(gfgData.hardSolved / gfgData.totalSolved) * 100}%` }}
                    className="h-full bg-rose-400"
                    title={`Hard: ${gfgData.hardSolved}`}
                  />
                </div>

                {/* Difficulty Legend */}
                <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
                  <div className="bg-white/5 rounded-lg py-1 px-1 border border-white/5">
                    <span className="text-[8px] font-bold text-amber-300 uppercase block">Medium</span>
                    <span className="text-xs font-bold text-white">{gfgData.mediumSolved}</span>
                  </div>
                  <div className="bg-white/5 rounded-lg py-1 px-1 border border-white/5">
                    <span className="text-[8px] font-bold text-emerald-300 uppercase block">Easy</span>
                    <span className="text-xs font-bold text-white">{gfgData.easySolved}</span>
                  </div>
                  <div className="bg-white/5 rounded-lg py-1 px-1 border border-white/5">
                    <span className="text-[8px] font-bold text-blue-300 uppercase block">Basic</span>
                    <span className="text-xs font-bold text-white">{gfgData.basicSolved}</span>
                  </div>
                  <div className="bg-white/5 rounded-lg py-1 px-1 border border-white/5">
                    <span className="text-[8px] font-bold text-rose-300 uppercase block">Hard</span>
                    <span className="text-xs font-bold text-white">{gfgData.hardSolved}</span>
                  </div>
                </div>
              </div>

              {/* Special Recognition Chips */}
              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                <span className="text-[10px] text-white/45 font-semibold mr-1">Highlights:</span>
                <span className="px-2 py-0.5 rounded-full bg-white/8 text-emerald-300 text-[10px] font-semibold">
                  GFG Elite PACC (Top 80 / 2k+)
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/8 text-white/80 text-[10px] font-semibold">
                  386 Submissions (2026)
                </span>
              </div>
            </div>

            {/* Bottom Profile Button */}
            <a
              href="https://www.geeksforgeeks.org/profile/navaneethkr9r?tab=activity"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 mt-2"
            >
              <span>Open GeeksforGeeks Profile</span>
              <span className="text-sm leading-none">↗</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;