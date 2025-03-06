import React from "react";
import {
  Network,
  BookOpen,
  LucideFileText,
  Users,
  BarChart3,
} from "lucide-react";

const strategicAreas = [
  {
    title: "Network / Partnership building",
    description: "Building strong partnerships for sustainable agriculture",
    icon: Network,
    color: "bg-orange-100",
    textColor: "text-orange-700",
  },
  {
    title: "Knowledge & Information Exchange",
    description: "Sharing best practices and innovations",
    icon: BookOpen,
    color: "bg-yellow-100",
    textColor: "text-yellow-700",
  },
  {
    title: "Policy Advocacy & Lobbying",
    description: "Influencing policy for sustainable agriculture",
    icon: LucideFileText,
    color: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    title: "Institutional Development",
    description: "Strengthening organizational capacity",
    icon: Users,
    color: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    title: "Capacity Building",
    description: "Enhancing skills and knowledge",
    icon: BarChart3,
    color: "bg-purple-100",
    textColor: "text-purple-700",
  },
];

const StrategicAreas = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Hub Strategic Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategicAreas.map((area, index) => (
            <div
              key={index}
              className={`p-6 ${area.color} rounded-lg shadow-sm`}
            >
              <div className="flex items-center mb-3">
                <area.icon className={`w-6 h-6 mr-2 ${area.textColor}`} />
                <h3 className={`text-xl font-semibold ${area.textColor}`}>
                  {area.title}
                </h3>
              </div>
              <p className="text-gray-700">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-blue-50 p-8 rounded-lg mt-12">
          <h2 className="text-2xl font-bold mb-4">Our Goal</h2>
          <p className="text-xl">
            Promotion + Adoption + Upscaling + Practice
            <br />
            of Conservation Agriculture in Kenya
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategicAreas;
