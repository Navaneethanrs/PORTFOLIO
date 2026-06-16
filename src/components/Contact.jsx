import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-screen bg-white text-black py-20 md:py-32 px-4 md:px-12 lg:px-24 flex flex-col justify-between">
      
      {/* Top Section */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Huge Title */}
        <h1 
          data-aos="fade-up" 
          className="text-6xl md:text-8xl lg:text-[12vw] font-black tracking-tighter mb-16 md:mb-24 leading-none"
        >
          Contact me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Left Column: Info Cards */}
          <div className="md:col-span-4 flex flex-col gap-5" data-aos="fade-right" data-aos-delay="200">
            {/* GitHub Card */}
            <a 
              href="https://github.com/Navaneethanrs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-5 p-5 md:p-6 bg-white hover:bg-neutral-50 rounded-2xl border border-black/10 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 active:scale-[0.97] active:bg-neutral-100 active:shadow-sm group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center transition-colors group-hover:bg-neutral-200">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-black tracking-tight">GitHub</span>
                <span className="text-sm text-neutral-500 font-medium">Navaneethanrs</span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/navaneethan-sankar-743751367/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-5 p-5 md:p-6 bg-white hover:bg-neutral-50 rounded-2xl border border-black/10 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 active:scale-[0.97] active:bg-neutral-100 active:shadow-sm group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center transition-colors group-hover:bg-neutral-200">
                <svg className="w-6 h-6 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-black tracking-tight">LinkedIn</span>
                <span className="text-sm text-neutral-500 font-medium">navaneethan-sankar-743751367</span>
              </div>
            </a>

            {/* Location Card */}
            <a 
              href="https://www.google.com/maps/place/Salem,+Tamil+Nadu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-5 p-5 md:p-6 bg-white hover:bg-neutral-50 rounded-2xl border border-black/10 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 active:scale-[0.97] active:bg-neutral-100 active:shadow-sm group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center transition-colors group-hover:bg-neutral-200">
                <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-black tracking-tight">Location</span>
                <span className="text-sm text-neutral-500 font-medium">Salem, Tamilnadu</span>
              </div>
            </a>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-8 lg:col-span-6 lg:col-start-6" data-aos="fade-left" data-aos-delay="300">
            <form className="flex flex-col gap-8">
              
              {/* Name Field */}
              <div>
                <p className="text-sm font-bold mb-4">Name (required)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="w-full bg-transparent border-b border-black/30 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="w-full bg-transparent border-b border-black/30 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Service Dropdown */}
              <div>
                <p className="text-sm font-bold mb-4">Service</p>
                <select className="w-full bg-transparent border-b border-black/30 py-2 text-sm focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer">
                  <option value="" disabled selected>Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="app">App Development</option>
                </select>
              </div>

              {/* Email Field */}
              <div>
                <p className="text-sm font-bold mb-4">Email (required)</p>
                <input 
                  type="email" 
                  placeholder="hello@example.com" 
                  className="w-full bg-transparent border-b border-black/30 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                  required
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  id="newsletter" 
                  className="w-4 h-4 border-black/30 rounded focus:ring-black cursor-pointer"
                />
                <label htmlFor="newsletter" className="text-sm font-medium text-black/70 cursor-pointer">
                  Sign up for news and updates
                </label>
              </div>

              {/* Project Description */}
              <div>
                <p className="text-sm font-bold mb-4">Project description</p>
                <textarea 
                  rows="3" 
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-black/30 py-2 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button 
                  type="submit" 
                  className="bg-black text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-black/80 transition-colors"
                >
                  Submit
                </button>
              </div>

            </form>
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
            (+91) 93425 12455
          </a>
        </div>

        {/* Small Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-semibold text-black/60">
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div>
              <p>Salem, Tamilnadu</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <p>© 2024 Navaneethan RS</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-black transition-colors">Be</a>
              <a href="#" className="hover:text-black transition-colors">Ig</a>
              <a href="#" className="hover:text-black transition-colors">Li</a>
            </div>
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Contact;
