"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
function Modules() {
  const modules = [
    {
      id: "01",
      title: "Hangeul va Tovushlar",
      meta: "1–2-hafta · 8 ta dars · Alifbo, talaffuz, bo'g'in",
      darslar: [
        "Unli va undosh harflar",
        "Bo'g'in tuzilishi (받침)",
        "Qattiq undoshlar",
        "Tovush o'zgarishi qoidalari",
        "Talaffuz klinikasi (live)",
      ],
      materiallar: [
        "Hangeul yozish cheat sheet",
        "Audio talaffuz kartochkalari",
        "Kundalik so'z kartochka boti",
      ],
      natija: [
        "Koreys alifbosini o'qiysiz",
        "To'g'ri talaffuz qilasiz",
        "Istalgan so'zni o'qiy olasiz",
      ],
    },
    {
      id: "02",
      title: "Asosiy Grammatika",
      meta: "3–5-hafta · 14 ta dars · Fe'llar, qo'shimchalar, zamonlar",
      darslar: [
        "Gap tuzilishi (SOV tartib)",
        "Hozirgi, o'tgan, kelasi zamon",
        "이/가, 은/는, 을/를",
        "Sifatlar, sonlar, vaqt",
        "Shart va istak gaplari",
      ],
      materiallar: [
        "Grammatika jadvallari (PDF)",
        "AI suhbat sherigi bot",
        "K-drama kliplari darslar",
      ],
      natija: [
        "Koreys gaplarini tuza olasiz",
        "O'zini tanishtira olasiz",
        "Kundalik suhbat qila olasiz",
      ],
    },
    {
      id: "03",
      title: "Leksika va Suhbat",
      meta: "6–7-hafta · 10 ta dars · 500+ so'z, real dialoglar",
      darslar: [
        "Oziq-ovqat, transport, maktab",
        "His-tuyg'ular va tavsif",
        "Imkoniyat va istak iboralari",
        "Real dialoglar",
        "Haftalik mini-challenge",
      ],
      materiallar: [
        "500+ so'z lug'at ro'yxati",
        "Dialog yozish shablonlari",
        "Study buddy topshiriqlari",
      ],
      natija: [
        "300–500 ta faol so'z",
        "Kundalik muloqot qilasiz",
        "Suhbatda ishonch hosil bo'ladi",
      ],
    },
    {
      id: "04",
      title: "TOPIK 1 Tayyorgarligi",
      meta: "8-hafta · 8 ta dars · Imtihon strategiyasi, mock test",
      darslar: [
        "TOPIK format va strategiya",
        "듣기 (tinglash) mashqlari",
        "읽기 (o'qish) mashqlari",
        "To'liq mock imtihon",
        "Xato tahlili va yakuniy live",
      ],
      materiallar: [
        "TOPIK 1 past yil testlar",
        "Mock natija tahlili (VIP)",
        "Koreya univ. ariza qo'llanma",
      ],
      natija: [
        "TOPIK 1 ga to'liq tayyorsiz",
        "Imtihon strategiyasini bilasiz",
        "Koreya universitetiga ariza bera olasiz",
      ],
    },
  ];
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <section className="py-16 min-h-screen flex flex-col justify-center container mx-auto px-5">
      <h2 className="font-jakarta font-extrabold text-black text-3xl  mb-10 flex items-center">
        4 ta modul <span className="w-2 h-2 inline-block bg-black rounded-full mx-3"></span> <span className="text-(--primary)">40+ dars</span> <span className="w-2 h-2 inline-block bg-black rounded-full mx-3"></span> 3 oy
      </h2>

      <div className="flex flex-col gap-4">
        {modules.map(({ id, title, meta, darslar, materiallar, natija }) => {
          const isOpen = openId === id;
          return (
            <div
              key={id}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-(--primary) font-jakarta font-bold text-lg">
                    {id}
                  </span>
                  <span className="font-jakarta font-medium text-gray-800 text-base">
                    {title}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>



              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="overflow-hidden px-6 pb-6 pt-6 border-t border-gray-200">
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <p className="text-xs font-jakarta font-semibold text-gray-400 tracking-widest uppercase mb-4">
                            Darslar
                          </p>
                          <ul className="flex flex-col gap-3">
                            {darslar.map((d) => (
                              <li key={d} className="flex items-start gap-2 text-sm font-jakarta text-gray-700">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-(--primary) shrink-0" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-jakarta font-semibold text-gray-400 tracking-widest uppercase mb-4">
                            Materiallar
                          </p>
                          <ul className="flex flex-col gap-3">
                            {materiallar.map((m) => (
                              <li key={m} className="flex items-start gap-2 text-sm font-jakarta text-gray-700">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-(--secondary) shrink-0" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-jakarta font-semibold text-gray-400 tracking-widest uppercase mb-4">
                            Natija
                          </p>
                          <ul className="flex flex-col gap-3">
                            {natija.map((n) => (
                              <li key={n} className="flex items-start gap-2 text-sm font-jakarta text-gray-700">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                {n}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default Modules;