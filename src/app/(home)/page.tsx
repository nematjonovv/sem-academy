import CountdownTimer from "@/src/components/CountDownTimer";
import DesktopSertificates from "@/src/components/DesktopSertificates";
import Faq from "@/src/components/Faq";
import Features from "@/src/components/Features";
import Footer from "@/src/components/Footer";
import Goals from "@/src/components/Goals";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Modules from "@/src/components/Modules";
import Stats from "@/src/components/Stats";
import { Modak } from "next/font/google";

export default function Home() {
  return (
    <div className="bg-(--secondary-neutral)">
      <Header />
      <Hero />
      <div className="hidden md:block">
        <CountdownTimer />
      </div>
      <Stats />
      <Goals />
      <DesktopSertificates />
      <Features />
      <Modules />
      <Faq />
      <Footer />
    </div>
  );
}
