import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Toggle background style based on scroll position
      setScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#service' },
    { name: 'Experience', href: '#experience' },
    { name: 'Project', href: '#project' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out flex justify-center px-4 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[150%] opacity-0'
        } ${scrolled ? 'py-4' : 'py-6 md:py-8'}`}
      >
        <div 
          className={`flex items-center justify-between md:justify-center w-full md:w-auto px-6 md:px-10 py-3 md:py-4 transition-all duration-300 ${
            scrolled || isMenuOpen
              ? 'bg-white/90 backdrop-blur-md shadow-lg rounded-full border border-black/5' 
              : 'bg-white/80 backdrop-blur-md shadow-lg rounded-full border border-black/5'
          }`}
        >
          {/* Mobile Logo / Brand (Visible only on mobile for alignment) */}
          <div className="md:hidden font-bold text-black tracking-widest text-sm">
            NAVANEETHAN
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 md:gap-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="text-black text-[13px] font-medium tracking-widest uppercase hover:text-black/50 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button (Hamburger to X) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none z-50 relative"
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-black rounded-full absolute transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
            <span className={`block w-6 h-0.5 bg-black rounded-full absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-black rounded-full absolute transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <li 
              key={index} 
              style={{ transitionDelay: `${index * 50 + 100}ms` }} 
              className={`transition-all duration-500 transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <a 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-black text-3xl font-bold tracking-widest uppercase hover:text-black/50 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
