import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function HomePage() {
  return (
    <div className="w-full">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}