import Header from "./components/Header";
import StarField from "./components/StarField";
import ScrollReveal from "./components/ScrollReveal";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-fx" />
      <div className="grid-fx" />
      <StarField />
      <ScrollReveal />

      <Header />
      <Hero />
      <About />
      <ProjectsSection />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
