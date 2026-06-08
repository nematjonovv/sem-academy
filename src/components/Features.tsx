import { Bot, BookCopy, PlayCircle, Award, Headphones, Infinity, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  BookCopy,
  PlayCircle,
  Award,
  Headphones,
  Infinity,
};

function Features() {
  const features = [
    {
      icon: "Bot",
      title: "AI suhbat sherigi",
      description: "Sun'iy intellekt yordamida 24/7 istalgan mavzuda koreyscha suhbatlashish va xatolarni tuzatish imkoniyati.",
    },
    {
      icon: "BookCopy",
      title: "100+ kitoblar",
      description: "Seul Academy eksklyuziv elektron kutubxonasiga doimiy kirish huquqi.",
    },
    {
      icon: "PlayCircle",
      title: "Live darslar",
      description: "Har hafta Zoom orqali jonli savol-javob sessiyalari va yangi mavzular tahlili.",
    },
    {
      icon: "Award",
      title: "Sertifikat",
      description: "Kursni muvaffaqiyatli tamomlaganlik haqida rasmiy Seul Academy diplomi beriladi.",
    },
    {
      icon: "Headphones",
      title: "Curator support",
      description: "Shaxsiy kuratoringiz barcha savollaringizga 15 daqiqa ichida javob beradi.",
    },
    {
      icon: "Infinity",
      title: "Lifetime access",
      description: "Kurs materiallari va barcha yangilanishlar sizda bir umrga qoladi.",
    },
  ];

  return (
    <section id="aboutcourse" className="min-h-screen bg-(--tertiary) flex items-center py-16">
      <div className="container mx-auto px-5">
        <p className="text-white font-extrabold font-jakarta text-4xl mb-10">
          Kursda nimalar bo'ladi?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map(({ icon, title, description }) => {
            const Icon = iconMap[icon];
            return (
              <div
                key={title}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col gap-4"
              >
                <Icon className="w-7 h-7 text-(--primary)" strokeWidth={1.5} />
                <h3 className="text-white font-jakarta font-semibold text-base">
                  {title}
                </h3>
                <p className="text-white/50 font-jakarta text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;