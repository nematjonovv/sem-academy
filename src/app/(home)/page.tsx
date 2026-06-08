import CountdownTimer from "@/src/components/CountDownTimer";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="hidden md:block">
        <CountdownTimer />
      </div>
    </div>
  );
}
