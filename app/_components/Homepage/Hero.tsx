import Image from "next/image";
import bg from "@/public/bg.png"

function Hero() {
  return (
    <div className="relative h-screen w-full top-0 left-0">
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-primary-3/10 to-primary-5/10 z-30 pointer-events-none" />
      <Image
        src={bg}
        alt="Hero Image"
        fill
        className="object-cover"
        placeholder="blur"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-transparent pointer-events-auto flex flex-col items-center gap-6">
        <h1 className="text-primary-1 text-6xl tracking-wider font-josefineSans text-center">
          Welcome to paradise.
        </h1>
        <button className="cursor-pointer bg-primary-9 text-primary-1 px-6 py-3 font-josefineSans">
          Explore luxury cabins
        </button>
      </div>
    </div>
  );
}

export default Hero;
