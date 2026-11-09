import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`[Portfolio Message] from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    window.open(`mailto:navaneethanrs106@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-white text-black py-20 md:py-32 px-4 md:px-12 lg:px-24 flex flex-col justify-between">
      
      {/* Top Section */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Title */}
        <h1 
          data-aos="fade-up" 
          className="text-6xl md:text-8xl lg:text-[10vw] font-black tracking-tighter mb-3 leading-none"
        >
          Contact me
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" className="text-sm md:text-base text-neutral-500 mb-12 max-w-xl font-medium">
          Open to software engineering opportunities, technical collaborations, and discussions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Left Column: Direct Profile Cards */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4" data-aos="fade-right" data-aos-delay="200">
            {/* GitHub Card */}
            <a 
              href="https://github.com/Navaneethanrs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-5 bg-white hover:bg-neutral-50 rounded-2xl border border-black/10 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center transition-colors group-hover:bg-neutral-200 shrink-0">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-black tracking-tight">GitHub</span>
                <span className="text-xs text-neutral-500 font-medium truncate">github.com/Navaneethanrs</span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/navaneethan-sankar/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-5 bg-white hover:bg-neutral-50 rounded-2xl border border-black/10 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center transition-colors group-hover:bg-sky-100 shrink-0">
                <svg className="w-6 h-6 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-black tracking-tight">LinkedIn</span>
                <span className="text-xs text-neutral-500 font-medium truncate">linkedin.com/in/navaneethan-sankar</span>
              </div>
            </a>

            {/* LeetCode Card */}
            <a 
              href="https://leetcode.com/u/NAVANEETHAN_SANKAR/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-5 bg-white hover:bg-neutral-50 rounded-2xl border border-black/10 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center transition-colors group-hover:bg-amber-100 shrink-0">
                <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.157L14.444.438A1.374 1.374 0 0 0 13.483 0zm4.277 8.086a1.376 1.376 0 0 0-.973.402l-3.682 3.682a1.378 1.378 0 0 0 1.95 1.948l3.682-3.682a1.377 1.377 0 0 0-.977-2.35z"/>
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-black tracking-tight">LeetCode</span>
                <span className="text-xs text-neutral-500 font-medium truncate">leetcode.com/u/NAVANEETHAN_SANKAR</span>
              </div>
            </a>

            {/* Resume Download Card */}
            <a 
              href="/Navaneethan_RS_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-5 bg-neutral-900 text-white rounded-2xl transition-all duration-200 hover:bg-black hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center transition-colors group-hover:bg-white/20 shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-white tracking-tight">Curriculum Vitae</span>
                <span className="text-xs text-neutral-300 font-medium truncate">Download Resume</span>
              </div>
            </a>
          </div>

          {/* Right Column: Clean Modern Form matching reference design */}
          <div className="md:col-span-7 lg:col-span-7 lg:col-start-6" data-aos="fade-left" data-aos-delay="300">
            <div className="bg-white rounded-[28px] p-6 sm:p-8 md:p-9 border border-black/10 shadow-[0_4px_25px_rgba(0,0,0,0.04)]">
              <form onSubmit={handleSubmit} className="flex flex-col">
                
                {/* Row 1: NAME & EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-neutral-500 uppercase mb-2">
                      NAME
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      className="w-full bg-[#f8f9fa] hover:bg-[#f1f3f5] focus:bg-white border border-transparent focus:border-neutral-300 rounded-2xl px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-neutral-500 uppercase mb-2">
                      EMAIL
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com" 
                      className="w-full bg-[#f8f9fa] hover:bg-[#f1f3f5] focus:bg-white border border-transparent focus:border-neutral-300 rounded-2xl px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: MESSAGE */}
                <div className="mb-6">
                  <label className="block text-[11px] font-bold tracking-wider text-neutral-500 uppercase mb-2">
                    MESSAGE
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5" 
                    placeholder="Tell me about the opportunity or idea..."
                    className="w-full bg-[#f8f9fa] hover:bg-[#f1f3f5] focus:bg-white border border-transparent focus:border-neutral-300 rounded-2xl px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none"
                    required
                  />
                </div>

                {/* Row 3: Send Message Button */}
                <button 
                  type="submit" 
                  className="w-full bg-[#0c1222] hover:bg-black text-white text-sm font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 transition-all duration-200 hover:shadow-lg active:scale-[0.99] cursor-pointer"
                >
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>

                {isSubmitted && (
                  <p className="mt-3 text-xs text-center text-emerald-600 font-bold flex items-center justify-center gap-1.5 animate-fade-in">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Email client launched!
                  </p>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full max-w-7xl mx-auto mt-24 md:mt-32 pt-12 border-t border-black/10">
        
        {/* Large Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <a href="mailto:navaneethanrs106@gmail.com" className="text-2xl md:text-4xl lg:text-5xl font-bold hover:opacity-70 transition-opacity tracking-tight">
            navaneethanrs106@gmail.com
          </a>
          <a href="tel:+919342512455" className="text-2xl md:text-4xl lg:text-5xl font-bold hover:opacity-70 transition-opacity tracking-tight">
            +91 93425 12455
          </a>
        </div>

        {/* Small Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-semibold text-black/60">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div>
              <p>Salem, Tamil Nadu, India &bull; Kongu Engineering College</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <p>&copy; {new Date().getFullYear()} Navaneethan RS</p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Navaneethanrs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-black transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/navaneethan-sankar/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://leetcode.com/u/NAVANEETHAN_SANKAR/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-black transition-colors"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Contact;
