import { GraduationCap, MessageSquare, PlaneTakeoff, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  MessageSquare,
  PlaneTakeoff,
};

const goals = [
  {
    icon: "GraduationCap",
    title: "TOPIK imtihonidan o'tish",
    description:
      "Siz koreys tilini bilish darajasini belgilovchi xalqaro sertifikatni qo'lga kiritasiz va Koreyada ta'lim olish imkoniga ega bo'lasiz.",
  },
  {
    icon: "MessageSquare",
    title: "Koreyslar bilan erkin suhbat",
    description:
      "Siz har qanday vaziyatda — sayohatda, ishda yoki o'qishda o'z fikringizni ravon bayon qila olasiz va ularni tushunasiz.",
  },
  {
    icon: "PlaneTakeoff",
    title: "Koreyaga borish",
    description:
      "Vizaga topshirish, suhbatlardan muvaffaqiyatli o'tish va Janubiy Koreyada hayot boshlash uchun barcha bilimlar beriladi.",
  },
];

export default function Goals() {
  return (
    <div className="container mx-auto max-h-screen px-5 py-10">
      <p className="text-3xl font-extrabold font-jakarta text-black mb-10">
        Kursdan nima olasiz
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {goals.map(({ icon, title, description }, index) => {
          const Icon = iconMap[icon];
          const color = index % 2 === 0 ? "text-(--primary)" : "text-(--secondary)";
          const border = index % 2 === 0 ? "border-l-4 border-(--primary)" : "border-l-4 border-(--secondary)";
          return (
            <div
              key={title}
              className={`bg-white rounded-2xl p-6 shadow-sm ${border}`}
            >
              <Icon className={`w-7 h-7 mb-4 ${color}`} strokeWidth={1.5} />
              <h3 className="font-bold font-jakarta text-base text-gray-900 mb-3">
                {title}
              </h3>
              <p className="text-gray-500 text-sm font-jakarta leading-relaxed">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}