import CountdownTimer from "@/src/components/CountDownTimer";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Stats from "@/src/components/Stats";

export default function Home() {
  return (
    <div className="bg-(--secondary-neutral)">
      <Header />
      <Hero />
      <div className="hidden md:block">
        <CountdownTimer />
      </div>
      <Stats />
    </div>
  );
}
