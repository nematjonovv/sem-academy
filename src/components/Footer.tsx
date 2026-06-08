import { Globe, PlayCircle, AtSign,  } from "lucide-react";
import Logo from "../ui/Logo";

const socials = [
  { icon: Globe, href: "#" },
  { icon: PlayCircle, href: "#" },
  { icon: AtSign, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-(--tertiary) py-16">
      <div className="container mx-auto px-5 flex flex-col items-center gap-8">
        <h1 className="text-2xl font-extrabold font-jakarta text-(--primary)">
          SF Pro
          <span className="text-white pl-2">
            Academy
          </span>
        </h1>
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}