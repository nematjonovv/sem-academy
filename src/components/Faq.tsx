"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);
  const faqs = [
    {
      question: "Kurs qancha davom etadi?",
      answer: "Kurs 8 hafta davom etadi. Har hafta 2–3 ta dars bo'lib, jami 40+ ta video dars mavjud. O'z sur'atingizda o'rganishingiz mumkin — barcha materiallar lifetime access bilan beriladi.",
    },
    {
      question: "Koreys tilini umuman bilmasam ham bo'ladimi?",
      answer: "Ha, kurs mutlaq boshlang'ichlar uchun mo'ljallangan. Birinchi moduldan boshlab Hangeul alifbosini noldan o'rgatamiz. Hech qanday oldindan bilim talab qilinmaydi.",
    },
    {
      question: "To'lovni bo'lib to'lash mumkinmi?",
      answer: "Ha, barcha tariflar uchun 2 yoki 3 qismga bo'lib to'lash imkoniyati mavjud. To'lov usullari: Payme, Click, Uzcard va Mastercard.",
    },
    {
      question: "Kursni tugatgandan keyin sertifikat beriladi?",
      answer: "Ha, kursni muvaffaqiyatli tugatgan har bir o'quvchiga Seul Academy rasmiy diplomi beriladi. Bundan tashqari, TOPIK 1 tayyorgarlik moduli orqali xalqaro sertifikatga ham tayyorlanasiz.",
    },
  ];

  return (
    <section className="py-16 container mx-auto px-5">
      <h2 className="font-jakarta font-extrabold text-black text-3xl  mb-10 flex items-center">
        Tez-tez so'raladigan savollar
      </h2>

      <div className="flex flex-col gap-4">
        {faqs.map(({ question, answer }, i) => {
          const isOpen = openId === i;
          return (
            <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenId(isOpen ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-jakarta font-medium text-gray-800 text-base">
                  {question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 font-jakarta text-gray-500 text-sm leading-relaxed border-t border-gray-200 pt-4">
                      {answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;