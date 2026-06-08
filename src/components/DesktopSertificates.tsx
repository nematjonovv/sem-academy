import Link from "next/link";
import certificates from "../data/certificates";
import CertCard from "./CertCard";
import { ArrowDown } from "lucide-react";

function DesktopSertificates() {
  return (
    <div className="w-full mt-50">
      <div className="container flex justify-between items-center">
        <h2 className="text-2xl md:text-4xl font-jakarta font-extrabold  text-black">
          O'quvchilarning <span className="text-(--primary)">TOPIK</span> natijalari
        </h2>

        <Link href="#" className="text-(--neutral) bg-(--primary) font-vietnam text-sm py-3 px-6 rounded-md hover:bg-(--primary)/90 transition-colors flex ">
          Hoziroq yoziling
        </Link>
      </div>
      <div
        className="overflow-hidden py-10 mt-10 flex flex-col gap-15"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...certificates, ...certificates].map((cert, i) => (
            <CertCard key={`${cert.id}-${i}`} cert={cert} />
          ))}
        </div>
        <div className="flex flex-row-reverse gap-5 w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...certificates, ...certificates].map((cert, i) => (
            <CertCard key={`${cert.id}-${i}`} cert={cert} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DesktopSertificates;