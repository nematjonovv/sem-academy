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
          className="fixed inset-0 z-9999 bg-black/80 flex items-center justify-center py-10 overflow-hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative h-screen flex justify-center items-center rounded-2xl overflow-hidden"
          >
            <img src={cert.image} className="object-contain" alt={`${cert.name} - ${cert.level} ${cert.grade}`} />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default CertCard;