import React from 'react';

const About = () => {
  return (
    <section id="about" className="max-w-[900px] mx-auto py-24 px-6 sm:px-12">
      <div className="flex items-center mb-10">
        <h2 className="text-lightest-slate text-2xl sm:text-3xl font-bold font-mono mr-4">
          <span className="text-green text-xl mr-2">01.</span>
          About Me
        </h2>
        <div className="h-[1px] bg-lightest-navy flex-grow max-w-[300px]"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 text-slate text-lg leading-relaxed space-y-4">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an <span className="text-green">advertising agency</span>, a <span className="text-green">start-up</span>, a <span className="text-green">huge corporation</span>, and a <span className="text-green">student-led design studio</span>.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
            <li className="flex items-center before:content-['▹'] before:text-green before:mr-2">JavaScript (ES6+)</li>
            <li className="flex items-center before:content-['▹'] before:text-green before:mr-2">TypeScript</li>
            <li className="flex items-center before:content-['▹'] before:text-green before:mr-2">React</li>
            <li className="flex items-center before:content-['▹'] before:text-green before:mr-2">Eleventy</li>
            <li className="flex items-center before:content-['▹'] before:text-green before:mr-2">Node.js</li>
            <li className="flex items-center before:content-['▹'] before:text-green before:mr-2">WordPress</li>
          </ul>
        </div>
        
        <div className="md:col-span-1">
          <div className="relative group w-full max-w-[300px] mx-auto">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-green rounded transition-transform group-hover:translate-x-[-10px] group-hover:translate-y-[-10px]"></div>
            <div className="relative bg-green rounded overflow-hidden h-[300px] w-full">
               <div className="w-full h-full bg-slate-500 mix-blend-multiply opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
