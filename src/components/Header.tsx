"use client"
import Logo from "../ui/Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
function Header() {
  const menuData = [
    {
      name: "Kurslar",
      link: "courses"
    },
    {
      name: "Natijalar",
      link: "results"
    },
    {
      name: "Narxlar",
      link: "pricing"
    },
    {
      name: "FAQ",
      link: "faq"
    },
  ]
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-screen backdrop-blur-md bg-white/70 shadow-sm border-b border-black/10 px-5 z-50">
      <div className="container flex items-center justify-between py-5">
        <Logo />

        <div className="hidden md:flex items-center">
          <nav className="flex items-center gap-5">
            {menuData.map((e, i) => (
              <a key={i} href={`#${e.link}`}
                className="
            relative font-medium text-[#5A403F] font-vietnam text-sm no-underline pb-1
            hover:text-(--primary) transition-colors
            after:content-[''] after:absolute after:bottom-0 after:left-0
            after:w-0 after:h-0.75 after:bg-(--primary)
            after:transition-all after:duration-300 hover:after:w-full">
                {e.name}
              </a>
            ))}
          </nav>
          <a href="#contact"
            className="
        ml-5 bg-(--primary) text-white font-vietnam text-sm
        py-2 px-4 rounded-md hover:bg-(--primary)/90 transition-colors">
            Bog'lanish
          </a>
        </div>

        <button className="md:hidden text-[#5A403F] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="container flex flex-col gap-4 pb-5">
              {menuData.map((e, i) => (
                <a key={i} href={`#${e.link}`}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-[#5A403F] font-vietnam text-sm hover:text-(--primary) transition-colors">
                  {e.name}
                </a>
              ))}
              <a href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-(--primary) text-white font-vietnam text-sm py-2 px-4 rounded-md hover:bg-(--primary)/90 transition-colors text-center">
                Bog'lanish
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;