import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative w-full bg-green-700 text-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Conservation Agriculture: Profitable, Sustainable and Resilient
            </h1>
            <p className="text-2xl mb-6">
              A farming approach based on three principles: minimal soil
              disturbance, permanent soil cover, and crop rotations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-black text-xl hover:bg-gray-100"
              >
                <a href="/about/profile">Learn More</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-xl text-black hover:bg-green-600"
              >
                <a href="/get-involved">Get Involved</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80"
              alt="Conservation Agriculture Field"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
