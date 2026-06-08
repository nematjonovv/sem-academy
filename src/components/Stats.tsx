import { Users, Star, PlayCircle, BookOpen, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Star,
  PlayCircle,
  BookOpen,
};

const stats = [
  { icon: "Users", value: "500+", label: "O'quvchilar" },
  { icon: "Star", value: "2 yil", label: "Tajriba (yil)" },
  { icon: "PlayCircle", value: "100+", label: "Video darslar" },
  { icon: "BookOpen", value: "50+", label: "Materiallar" },
];

export default function Stats() {
  return (
    <div className="w-full bg-(--neutral) mt-40 md:mt-10 py-10">
      <div className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon, value, label }, index) => {
            const Icon = iconMap[icon];
            const color = index % 2 === 0 ? "text-(--primary)" : "text-(--secondary)";
            return (
              <div
                key={label}
                className="flex flex-col items-center gap-2 bg-gray-50 rounded-2xl px-6 py-9 border-(--secondary) border"
              >
                <Icon className={`w-8 h-8 ${color}`} strokeWidth={1.5} />
                <span className={`font-bold text-xl font-jakarta ${color}`}>
                  {value}
                </span>
                <span className="text-gray-700 text-sm font-jakarta">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}