import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-24 pt-24 sm:pt-0">
      <h1 className="text-green font-mono text-sm sm:text-base mb-5 ml-1">Hi, my name is</h1>
      <h2 className="text-lightest-slate text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-none">
        Brittany Chiang.
      </h2>
      <h3 className="text-slate text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-none">
        I build things for the web.
      </h3>
      <p className="text-slate max-w-[540px] text-lg mb-12 leading-relaxed">
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <span className="text-green">Upstatement</span>.
      </p>
      <a 
        href="#work" 
        className="text-green border border-green rounded px-7 py-4 text-sm font-mono hover:bg-green-tint transition-colors w-max"
      >
        Check out my course!
      </a>
    </section>
  );
};

export default Hero;
