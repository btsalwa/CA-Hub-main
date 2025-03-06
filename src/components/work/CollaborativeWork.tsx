import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const collaborativeWorks = [
  {
    title: "Kenya National Conservation Agriculture Conference",
    date: "April 17-19, 2018",
    location: "Safari Park Hotel, Nairobi",
    partners: "FAO, European Union (EU), Council of Governors (CoG)",
    description:
      "Successfully organized in partnership with FAO, the Kenya Conservation Agriculture Conference brought together key partners including the European Union (EU) and the Council of Governors (CoG). It was after this conference that the Hub gained impetus and started developing the necessary structures to steer the CA agenda in Kenya.",
  },
  {
    title: "CA Training of Trainers Program",
    date: "Ongoing",
    location: "Various Counties",
    partners: "County Governments, KALRO, NGOs",
    description:
      "A collaborative program to build capacity of agricultural extension officers and lead farmers in CA principles and practices.",
  },
  {
    title: "CA Policy Advocacy Workshop",
    date: "September 2022",
    location: "Nairobi",
    partners: "Ministry of Agriculture, County Governments",
    description:
      "Workshop aimed at integrating CA into national and county agricultural policies and frameworks.",
  },
];

const CollaborativeWork = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Collaborative Work</h2>

        <p className="text-lg text-gray-700 mb-8">
          CA Hub Kenya works collaboratively with various stakeholders to
          advance Conservation Agriculture through joint initiatives, events,
          and advocacy efforts.
        </p>

        <div className="space-y-6">
          {collaborativeWorks.map((work, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{work.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date</p>
                    <p className="text-gray-700">{work.date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Location
                    </p>
                    <p className="text-gray-700">{work.location}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Key Partners
                    </p>
                    <p className="text-gray-700">{work.partners}</p>
                  </div>
                </div>
                <p className="text-gray-700">{work.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollaborativeWork;
