import Navbar from "@/components/Navbar";
import Link from "next/link";
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
        <div className="bg-white px-6 pb-12 text-center"><Link href="/products" className="inline-block rounded-full border-2 border-red-700 px-7 py-3 font-semibold text-red-800">Explore all bulk products and specifications</Link></div>
        <WhyChoose />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}