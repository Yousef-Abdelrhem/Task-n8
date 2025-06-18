// app/Components/main/main.tsx
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    // md:h-[70vh]
    <div
      className="
        relative w-full h-screen flex items-center justify-center 
        overflow-hidden text-white text-center rounded-3xl
      "
    >
      {/* Background Image */}
      <Image
        src="/hero.png" // Using the hero.jpg you provided
        alt="A futuristic world map with connection points."
        layout="fill"
        objectFit="cover"
        quality={85} // Adjust quality for performance
        className="z-10"
      />

      {/* This image simulates the blue overlay from your design. */}
      {/* Make sure you have blueBg.png in your /public folder. */}
      <Image
        src="/blueBg.png"
        alt="Blue overlay"
        layout="fill"
        objectFit="cover"
        className="z-20 opacity-80"
      />
      <p className="absolute z-30 top-10 left-0 md:text-[1.5rem] font-medium md:top-6 md:left-6  sm:top-4 sm:left-4 sm:text-sm">
        Privacy Policy
      </p>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center justify-center p-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50 blur-[50px]">
          <Image
            src="redPoint.svg"
            alt="A decorative red glowing element"
            width={300}
            height={300}
            className="md:w-[200px] md:h-[200px]"
          />
        </div>
        <h1 className="text-4xl font-semibold mb-4 tracking-[2px] md:text-3xl sm:text-2xl">
          <span className="absolute text-[1.5rem] left-30 -top-3 text-left">
            THE
          </span>
          TRAVLAB LEGAL
        </h1>
        <p className="text-lg max-w-[600px] leading-relaxed md:text-base md:max-w-[500px] sm:text-sm sm:max-w-[90%]">
          The information provided here is for Travlab customers and users who
          have questions about our terms, policies, intellectual property, and
          compliance.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
