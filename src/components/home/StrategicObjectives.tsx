import React from "react";

const strategicObjectives = [
  {
    number: "1",
    title: "Create CA Champions",
    color: "bg-blue-500",
  },
  {
    number: "2",
    title: "Increase the area under CA as adopted by farmers",
    color: "bg-green-500",
  },
  {
    number: "3",
    title:
      "Enhance the embracing and integration of CA in county policy frameworks",
    color: "bg-yellow-500",
  },
  {
    number: "4",
    title:
      "Raise financing and investment in CA by the public and private sector",
    color: "bg-red-500",
  },
  {
    number: "5",
    title: "Build a vibrant CA community of practice",
    color: "bg-purple-500",
  },
];

const StrategicObjectives = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Strategic Objectives</h2>
        <p className="text-lg mb-8">
          CA Hub-Kenya seeks to achieve its strategic objective through the
          following:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategicObjectives.map((objective, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`${objective.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3`}
                >
                  {objective.number}
                </div>
                <h3 className="text-lg font-semibold">{objective.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategicObjectives;
