import React from "react";

const strategicAreasDetail = [
  {
    title: "Delivering CA at Scale",
    description:
      "Creating CA Champions and increasing the area under CA as adopted by farmers.",
    color: "bg-green-50",
  },
  {
    title: "Research and Capacity Strengthening",
    description:
      "Developing capacity for innovations and supporting smallholder farmers.",
    color: "bg-green-50",
  },
  {
    title: "Partnerships, Advocacy & Policy",
    description:
      "Mainstreaming and scaling CA to national policies and programmes.",
    color: "bg-green-50",
  },
  {
    title: "Communication and Visibility",
    description:
      "Promoting and communicating the efforts and results of the CA-Kenya Hub.",
    color: "bg-green-50",
  },
  {
    title: "Resource Mobilization/Financing for CA",
    description:
      "Raising resources for the CA hub in its entirety to support initiatives.",
    color: "bg-green-50",
  },
];

const StrategicAreasDetail = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Strategic Areas in Detail</h2>
        <div className="space-y-4">
          {strategicAreasDetail.map((area, index) => (
            <div key={index} className={`p-6 ${area.color} rounded-lg`}>
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategicAreasDetail;
