import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Leaf, Droplets, Coins, ThermometerSun, Sprout } from "lucide-react";

const benefits = [
  {
    title: "Improved Soil Health",
    description:
      "Enhances soil structure, increases organic matter, and promotes beneficial soil organisms.",
    icon: Leaf,
  },
  {
    title: "Water Conservation",
    description:
      "Improves water infiltration and retention, reducing runoff and making more water available to crops.",
    icon: Droplets,
  },
  {
    title: "Economic Benefits",
    description:
      "Reduces production costs through decreased labor, fuel, and machinery requirements.",
    icon: Coins,
  },
  {
    title: "Climate Resilience",
    description:
      "Helps farmers adapt to climate change by building more resilient farming systems.",
    icon: ThermometerSun,
  },
  {
    title: "Sustainable Production",
    description:
      "Maintains and improves crop yields while preserving natural resources for future generations.",
    icon: Sprout,
  },
];

const CABenefits = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          Benefits of Conservation Agriculture
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Conservation Agriculture has made a significant contribution to
          increasing food production in areas where smallholder farmers struggle
          to produce food because of frequent droughts, infertile soils and
          labor shortages. Ultimately CA aligns and contributes to Sustainable
          Development Goals: Food security, Environmental Conservation, and
          Biodiversity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-full mr-3">
                    <benefit.icon className="w-6 h-6 text-green-700" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CABenefits;
