import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-night text-white">
      <div className="fixed inset-0 -z-20 bg-aurora" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(120deg,rgba(5,8,22,.96),rgba(8,13,34,.88),rgba(5,8,22,.96))]" />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
