import React from "react";
import { Button } from "../ui/button";

const SymposiumHero = () => {
  return (
    <div className="relative w-full bg-green-800 text-white py-16">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Conservation Agriculture: Profitable, Sustainable and Resilient
          Farming with Conservation Agriculture in Kenya
        </h1>
        <p className="text-xl mb-6">
          12 March 2025 | Pride Inn Azure, Nairobi, Kenya
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-green-800 hover:bg-gray-100"
        >
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default SymposiumHero;
