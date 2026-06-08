import certificates from "../data/certificates";
import CertCard from "./CertCard";

function DesktopSertificates() {
  return (
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
  );
}

export default DesktopSertificates;