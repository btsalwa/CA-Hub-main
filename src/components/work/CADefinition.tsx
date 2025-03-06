import React from "react";

const CADefinition = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Conservation Agriculture</h2>

        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700 mb-4">
            Conservation Agriculture (CA) is a concept that combines profitable
            agricultural production with environmental concerns and
            sustainability. It is an approach to managing agro-ecosystems for
            improved and sustained productivity, increased profits and food
            security while preserving and enhancing the resource base and the
            environment.
          </p>

          <p className="text-gray-700 mb-4">
            It is characterized by three linked principles of continuous minimum
            mechanical soil disturbance, permanent organic soil cover and
            diversification of crop species grown in sequences or associations.
            These principles are universally applicable to all agricultural
            landscapes and land uses with locally adapted practices.
          </p>

          <p className="text-gray-700">
            CA is used in most of the world's high-performing food production
            systems to strengthen soil structure and fertility, improve water
            retention and bring farmers savings in cost and labor for comparable
            yields. Unique to CA is that it holds tremendous potential for all
            sizes of farms and agroecological systems, including those of
            smallholder farmers who are food insecure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              The Three Principles of CA
            </h3>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Minimal Soil Disturbance:</span>{" "}
                Practicing minimum soil disturbance through direct planting of
                crop seeds (no-till farming).
              </li>
              <li>
                <span className="font-semibold">Permanent Soil Cover:</span>{" "}
                Maintaining a permanent soil cover by using crop residues and
                cover crops.
              </li>
              <li>
                <span className="font-semibold">
                  Crop Rotation/Association:
                </span>{" "}
                Practicing crop rotation/association with more than two crop
                species.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80"
              alt="Minimal soil disturbance"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1592982537447-6e202fe64811?w=600&q=80"
              alt="Permanent soil cover"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=600&q=80"
              alt="Crop rotation"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&q=80"
              alt="Conservation agriculture field"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CADefinition;
