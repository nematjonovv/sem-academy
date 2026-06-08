import CountdownTimer from "./CountDownTimer";

function Hero() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 pt-25 px-5 h-screen">
      <div className="order-2 md:order-1 flex flex-col justify-center py-2 md:py-5">
        <p className="font-extrabold text-7xl text-center md:text-8xl md:text-start font-jakarta md:static md:mt-0 md:shadow-none md:bg-transparent -mt-24 relative z-10 bg-white/70 backdrop-blur-sm shadow-[0_-20px_40px_20px_rgba(255,255,255,0.7)] pb-4 px-2">
          Koreys tilini
          <span className="text-(--primary)"> o'rganing </span>
        </p>
        <div className="mt-3 flex justify-around md:justify-center md:flex-col md:items-start">
          <div className="md:hidden">  
            <CountdownTimer />
          </div>
          <div className="flex flex-col justify-center md:flex-row  md:gap-5">
            <a href="#contact"
              className="
              text-center
              mt-5 
              bg-(--primary) 
              text-white 
              font-vietnam 
              border-(--primary)              
              border-2
              text-sm
              py-4 
              px-6 
              rounded-md 
              hover:bg-(--primary)/90 
              transition-colors">
              Hoziroq yoziling
            </a>
            <a href="#result"
              className="
              mt-5 
              bg-transparent 
              text-(--tertiary)
              border-(--tertiary)              
              border-2
              font-bold
              font-vietnam 
              text-sm
              py-4 
              px-6 
              rounded-md 
              hover:bg-(--tertiary)/90 
              hover:text-white
              transition-colors">
              Natijalarni ko'rish
            </a>
          </div>
        </div>
      </div>
      <div
        className="
        order-1 
        md:order-2
        bg-cover 
        bg-position-[center_40%]
        md:bg-position-[center_80%]
        bg-no-repeat
        h-95 md:h-auto md:min-h-125
      "
        style={{
          backgroundImage: "url('/hero-bg.png')"
        }}>

      </div>
    </section>
  );
}

export default Hero;