import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}