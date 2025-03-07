import React from "react";
import StrategicAreas from "../home/StrategicAreas";
import StrategicObjectives from "../home/StrategicObjectives";
import StrategicAreasDetail from "../home/StrategicAreasDetail";

const Strategy = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Strategy</h1>

        <div className="prose max-w-none mb-12">
          <p className="text-lg">
            The CA-Hub Kenya has developed a comprehensive strategy to promote
            and scale Conservation Agriculture across Kenya. Our approach is
            built on clear strategic areas, objectives, and detailed
            implementation plans.
          </p>
        </div>

        <StrategicAreas />
        <StrategicObjectives />
        <StrategicAreasDetail />
      </div>
    </div>
  );
};

export default Strategy;
