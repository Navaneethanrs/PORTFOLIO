import React from 'react';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Branding',
      description: "Unveil your brand's essence through a meticulous blend of imagery, messaging, and strategy. Crafting identities that resonate and endure.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F5EBDD]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'Design',
      description: "Designing experiences that captivate users from the first click. Intuitive interfaces that lead to seamless interactions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F5EBDD]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'Development',
      description: "Translating visions into dynamic digital solutions. From responsive websites to interactive applications, driving innovation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#F5EBDD]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="service" className="w-full min-h-screen bg-white flex flex-col justify-center items-center py-20 md:py-32 px-4 md:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <h2 
          data-aos="fade-up" 
          className="text-black text-3xl md:text-5xl font-bold mb-12 md:mb-16 tracking-tight text-center md:text-left"
        >
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-[#F5EBDD] rounded-[32px] p-8 md:p-10 flex flex-col h-full transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(245,235,221,0.15)] group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center mb-16 md:mb-24 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <div className="mt-auto">
                <span className="text-black/60 text-sm font-semibold tracking-wider mb-2 block">
                  {service.id}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-black/80 text-sm md:text-base leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
