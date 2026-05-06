import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Skills from '@/components/Skills';
import Qualification from '@/components/Qualification';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Skills />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
