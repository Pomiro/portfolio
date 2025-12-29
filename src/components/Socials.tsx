"use client";
import React from 'react';

const Socials = () => {
  return (
    <>
      {/* Left Side - Social Icons */}
      <div className="hidden md:block fixed bottom-0 left-6 lg:left-12 z-10 w-10 text-slate">
        <ul className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-slate after:mx-auto after:mt-6">
          <li className="hover:text-green hover:-translate-y-1 transition-all cursor-pointer">
            <a href="https://github.com" target="_blank" aria-label="GitHub">
               <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </li>
          <li className="hover:text-green hover:-translate-y-1 transition-all cursor-pointer">
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </li>
          <li className="hover:text-green hover:-translate-y-1 transition-all cursor-pointer">
             <a href="https://twitter.com" target="_blank" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter w-5 h-5"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
             </a>
          </li>
          <li className="hover:text-green hover:-translate-y-1 transition-all cursor-pointer">
             <a href="https://linkedin.com" target="_blank" aria-label="Linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
          </li>
        </ul>
      </div>

      {/* Right Side - Email */}
      <div className="hidden md:block fixed bottom-0 right-6 lg:right-12 z-10 w-10 text-slate">
        <div className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-slate after:mx-auto after:mt-6">
          <a href="mailto:user@example.com" className="font-mono text-xs hover:text-green hover:-translate-y-1 transition-all writing-vertical-lr tracking-widest">
            user@example.com
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .writing-vertical-lr {
          writing-mode: vertical-rl;
        }
      `}</style>
    </>
  );
};

export default Socials;
