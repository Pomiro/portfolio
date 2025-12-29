import React from 'react';

const projects = [
  {
    title: "Halcyon Theme",
    description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    github: "#",
    external: "#",
    imageColor: "bg-cyan-900" 
  },
  {
    title: "Spotify Profile",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information of each track. Create and save new playlists of recommended tracks based on your existing tastes.",
    tech: ["React", "Express", "Spotify API", "Heroku", "Styled Components"],
    github: "#",
    external: "#",
    imageColor: "bg-green-900"
  },
  {
    title: "Build v4",
    description: "A simple, yet powerful static site generator. Designed to be minimal and fast, allowing you to focus on your content. Built with Rust and Handlebars.",
    tech: ["Rust", "Handlebars", "Markdown", "CLI"],
    github: "#",
    external: "#",
    imageColor: "bg-purple-900"
  }
];

const Work = () => {
  return (
    <section id="work" className="max-w-[1000px] mx-auto py-24 px-6 sm:px-12">
      <div className="flex items-center mb-10">
        <h2 className="text-lightest-slate text-2xl sm:text-3xl font-bold font-mono mr-4">
          <span className="text-green text-xl mr-2">03.</span>
          Some Things I’ve Built
        </h2>
        <div className="h-[1px] bg-lightest-navy flex-grow max-w-[300px]"></div>
      </div>

      <div className="space-y-24">
        {projects.map((project, i) => (
          <div key={i} className={`relative grid grid-cols-12 items-center gap-2`}>
            {/* Image Side */}
            <div className={`col-span-12 md:col-span-7 h-full relative ${i % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'} row-start-1`}>
               <div className="w-full h-full min-h-[300px] bg-light-navy rounded overflow-hidden relative group shadow-xl">
                  <div className={`absolute inset-0 ${project.imageColor} mix-blend-multiply opacity-70 group-hover:bg-transparent transition-all duration-300`}></div>
                  {/* Placeholder for project image - would normally be next/image */}
                  <div className="w-full h-full bg-slate-700 opacity-20"></div> 
               </div>
            </div>

            {/* Content Side */}
            <div className={`col-span-12 md:col-span-7 z-10 ${i % 2 === 0 ? 'md:col-start-6 text-right' : 'md:col-start-1 text-left'} row-start-1 pointer-events-none`}>
              <p className="font-mono text-green text-sm mb-2">Featured Project</p>
              <h3 className="text-lightest-slate text-2xl font-bold mb-5 pointer-events-auto">
                <a href={project.external} className="hover:text-green">{project.title}</a>
              </h3>
              
              <div className="bg-light-navy text-slate p-6 rounded shadow-xl text-lg pointer-events-auto hover:shadow-2xl transition-shadow">
                <p>{project.description}</p>
              </div>

              <ul className={`flex flex-wrap text-slate font-mono text-xs mt-6 gap-3 pointer-events-auto ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                {project.tech.map((t, idx) => <li key={idx}>{t}</li>)}
              </ul>

              <div className={`flex items-center mt-5 gap-4 pointer-events-auto ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <a href={project.github} className="text-slate hover:text-green">
                  {/* Github Icon SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href={project.external} className="text-slate hover:text-green">
                  {/* External Icon SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
