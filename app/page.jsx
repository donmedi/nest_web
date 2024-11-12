import About from "@/components/About";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Hero from "@/components/Hero";
import Image from "next/image";
import FAQ from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Download />
      <Footer />
    </div>
  );
}
