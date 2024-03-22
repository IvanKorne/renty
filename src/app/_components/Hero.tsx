import React from "react";
import Image from "next/image";
import hero from "../../../public/hero.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-20" id="home">
      <div>
        <h1 className="text-4xl font-bold md:text-[60px] leading-[3rem] md:leading-[4rem] ">
          Premium Car Rentals in your Area!
        </h1>
        <h2 className="text-lg font-semibold md:text-xl text-gray-500 md:mt-8 mt-6">
          Book your selected car, pay for driving only!{" "}
          <span className="block"> Get your car today!</span>
        </h2>
        <button className="text-gray-100 mt-6 bg-blue-500 hover:bg-blue-600 transition shadow-sm px-4 py-2 rounded-full font-semibold">
          Explore Cars
        </button>
      </div>

      <Image
        src={hero}
        alt="hero"
        height={400}
        width={575}
        quality={95}
        className="object-cover "
      />
    </div>
  );
};

export default Hero;
