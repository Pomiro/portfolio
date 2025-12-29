import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="max-w-[600px] mx-auto py-24 px-6 sm:px-12 text-center mb-24">
      <p className="text-green font-mono mb-4">04. What’s Next?</p>
      <h2 className="text-lightest-slate text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h2>
      <p className="text-slate text-lg mb-12">
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <a 
        href="mailto:user@example.com" 
        className="text-green border border-green rounded px-8 py-4 text-sm font-mono hover:bg-green-tint transition-colors inline-block"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
