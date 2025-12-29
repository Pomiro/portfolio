import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-6 sm:px-12 fixed w-full top-0 z-50 bg-navy/90 backdrop-blur-sm shadow-lg transition-all">
      <a href="#" className="text-green font-mono font-bold text-xl border-2 border-green rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-green-tint cursor-pointer">
        B
      </a>

      <div className="hidden md:flex items-center gap-8">
        <ol className="flex gap-8 font-mono text-xs text-lightest-slate">
          <li className="hover:text-green cursor-pointer"><span className="text-green mr-1">01.</span><a href="#about">About</a></li>
          <li className="hover:text-green cursor-pointer"><span className="text-green mr-1">02.</span><a href="#jobs">Experience</a></li>
          <li className="hover:text-green cursor-pointer"><span className="text-green mr-1">03.</span><a href="#work">Work</a></li>
          <li className="hover:text-green cursor-pointer"><span className="text-green mr-1">04.</span><a href="#contact">Contact</a></li>
        </ol>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          className="text-green border border-green rounded px-4 py-2 text-xs font-mono hover:bg-green-tint transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
