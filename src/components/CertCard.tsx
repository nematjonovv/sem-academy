"use client";

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Certificate } from "../data/certificates";

function CertCard({ cert }: { cert: Certificate }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="shrink-0 w-72 h-48 rounded-2xl overflow-hidden border border-gray-200 relative cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Image
          src={cert.image}
          alt={`${cert.name} - ${cert.level} ${cert.grade}`}
          fill
          className="object-cover"
          sizes="288px"
        />
      </div>

      {open && createPortal(
        <div
          className="fixed inset-0 z-9999 bg-black/80 flex items-center justify-center py-10"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-2xl h-screen w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={cert.image}
              alt={`${cert.name} - ${cert.level} ${cert.grade}`}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default CertCard;