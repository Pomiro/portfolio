"use client";
import React, { useState } from 'react';

const jobs = [
  {
    title: "Engineer",
    company: "Upstatement",
    range: "May 2018 - Present",
    url: "https://www.upstatement.com/",
    duties: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
    ]
  },
  {
    title: "Studio Developer",
    company: "Scout",
    range: "Jan 2018 - April 2018",
    url: "https://web.northeastern.edu/scout/",
    duties: [
      "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating in the Northeastern Sherman Center for Engineering Entrepreneurship",
      "Interfaced with clients on a weekly basis, providing technological expertise"
    ]
  },
  {
    title: "Apple Genius",
    company: "Apple",
    range: "Jul 2017 - Oct 2017",
    url: "https://www.apple.com/",
    duties: [
      "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
      "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party APIs",
      "Architected and implemented the front-end of Apple Music's embeddable web player widget"
    ]
  }
];

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <section id="jobs" className="max-w-[700px] mx-auto py-24 px-6 sm:px-12">
      <div className="flex items-center mb-10">
        <h2 className="text-lightest-slate text-2xl sm:text-3xl font-bold font-mono mr-4">
          <span className="text-green text-xl mr-2">02.</span>
          Where I’ve Worked
        </h2>
        <div className="h-[1px] bg-lightest-navy flex-grow max-w-[300px]"></div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5">
        {/* Tab List */}
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-visible border-b-2 sm:border-b-0 sm:border-l-2 border-lightest-navy min-w-max">
          {jobs.map((job, i) => (
            <button
              key={i}
              onClick={() => setActiveTabId(i)}
              className={`px-5 py-3 text-left font-mono text-sm sm:text-xs transition-colors border-b-2 sm:border-b-0 sm:border-l-2 -mb-[2px] sm:-mb-0 sm:-ml-[2px] ${
                activeTabId === i
                  ? 'text-green border-green bg-light-navy'
                  : 'text-slate border-transparent hover:bg-light-navy hover:text-green'
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-2">
          <h3 className="text-lightest-slate text-xl font-bold">
            {jobs[activeTabId].title} <span className="text-green">@ <a href={jobs[activeTabId].url} className="hover:underline">{jobs[activeTabId].company}</a></span>
          </h3>
          <p className="text-slate font-mono text-xs mb-5 mt-1">{jobs[activeTabId].range}</p>
          <ul className="space-y-4">
            {jobs[activeTabId].duties.map((duty, i) => (
              <li key={i} className="flex items-start text-slate text-lg relative pl-8 before:content-['▹'] before:text-green before:absolute before:left-0 before:top-1">
                {duty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
