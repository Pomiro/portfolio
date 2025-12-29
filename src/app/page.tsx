import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Socials />
      <main className="bg-navy min-h-screen text-slate">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <footer className="text-center p-6 text-slate text-xs font-mono mb-4">
        <a href="https://github.com/bchiang7/v4" className="hover:text-green transition-colors">
          Designed by Brittany Chiang & Built by User
        </a>
      </footer>
    </>
  );
}
