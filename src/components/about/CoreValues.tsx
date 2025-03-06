import React from "react";

const CoreValues = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Core Values</h2>

        <ul className="list-disc pl-6 space-y-6">
          <li className="text-lg">
            <span className="font-semibold text-green-700">
              Farmer and community centered:
            </span>{" "}
            Producers are the core of agriculture, food and nutrition security
            hence are at the core of our work
          </li>
          <li className="text-lg">
            <span className="font-semibold text-green-700">
              Partnership driven:
            </span>{" "}
            CA work is driven by broad partnerships of all stakeholders:
            government, research, academia, producer groups, private sector,
            civil society, development partners, philanthropists and funding
            partners
          </li>
          <li className="text-lg">
            <span className="font-semibold text-green-700">
              Impact oriented:
            </span>{" "}
            We seek to deliver sustainable impact at scale to millions of
            households and actors along the CA value chain
          </li>
          <li className="text-lg">
            <span className="font-semibold text-green-700">Inclusivity:</span>{" "}
            We seek to ensure equitable benefit to all actors in the CA value
            chain, more so to women and youth
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CoreValues;
