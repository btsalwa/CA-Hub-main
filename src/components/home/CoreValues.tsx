import React from "react";
import { Users, Handshake, Target, Heart } from "lucide-react";

const coreValues = [
  {
    title: "Farmer and community centered",
    description:
      "Producers are the core of agriculture, food and nutrition security hence are at the core of our work",
    icon: Users,
  },
  {
    title: "Partnership driven",
    description: "CA work is driven by broad partnerships of all stakeholders",
    icon: Handshake,
  },
  {
    title: "Impact oriented",
    description:
      "We seek to deliver sustainable impact at scale to millions of households",
    icon: Target,
  },
  {
    title: "Inclusivity",
    description:
      "We seek to ensure equitable benefit to all actors in the CA value chain",
    icon: Heart,
  },
];

const CoreValues = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <value.icon className="w-8 h-8 text-green-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
