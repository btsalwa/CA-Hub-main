import React from "react";

const CADefinition = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What is Conservation Agriculture?
            </h2>
            <p className="text-lg mb-4">
              Conservation Agriculture (CA) is a concept that combines
              profitable agricultural production with environmental concerns and
              sustainability. It is characterized by three linked principles:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Continuous minimum mechanical soil disturbance</li>
              <li>Permanent organic soil cover</li>
              <li>
                Diversification of crop species grown in sequences or
                associations
              </li>
            </ul>
            <p className="text-lg">
              Unique to CA is that it holds tremendous potential for all sizes
              of farms and agro-ecological systems, including those of
              smallholder farmers who are food insecure.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1592982537447-6e202fe64811?w=600&q=80"
              alt="Sustainable farming practices"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=600&q=80"
              alt="Climate smart agriculture"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&q=80"
              alt="Soil conservation techniques"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80"
              alt="Sustainable crop rotation"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CADefinition;
