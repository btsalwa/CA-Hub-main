import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const membershipCategories = [
  {
    category: "County and National Governments",
    members: [
      "Ministry of Agriculture, Livestock and Fisheries",
      "Ministry of Environment & Forestry",
      "Council of Governors (CoG) Agricultural Committee",
      "County Line departments",
    ],
    roles: [
      "Official endorsement/ commitment",
      "Policy Alignment to CA agenda",
      "Building Capacity",
      "Resource mobilization",
    ],
  },
  {
    category: "Research and Academia",
    members: [
      "NARS: KALRO, KEFRI",
      "International Research Organizations",
      "Universities e.g. Egerton",
      "Agricultural related Institution",
    ],
    roles: [
      "Creation of knowledge/ evidence",
      "Capacity building through training",
      "CA Curriculum development",
      "Package & disseminate research findings",
    ],
  },
  {
    category: "Private Sector",
    members: [
      "Inputs providers",
      "Mechanization providers",
      "Off takers",
      "Service providers",
    ],
    roles: [
      "Develop tailored products",
      "Provide markets to farm produce",
      "Provide inputs to farmers",
      "Business development",
    ],
  },
  {
    category: "Implementing Agencies",
    members: [
      "NGO (International & Local)",
      "CBOs, FBOs",
      "Government extension system",
    ],
    roles: [
      "Capacity building",
      "Service delivery",
      "Linkages",
      "Evidence generations",
    ],
  },
  {
    category: "Farmer and Farmer Organizations",
    members: [
      "Producer/Farmer associations",
      "Cooperatives",
      "Farmer groups",
      "Individual farmer",
    ],
    roles: [
      "Farmer-to-farmer learning platform",
      "Capacity building",
      "Dissemination of innovations/knowledge interface",
    ],
  },
];

const MembershipCategories = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Categories of Membership</h2>
        <p className="text-lg mb-8">
          The potential category of members and their roles includes:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {membershipCategories.map((category, index) => (
            <Card key={index} className="bg-white">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-700">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Potential Members</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {category.members.map((member, idx) => (
                      <li key={idx} className="text-gray-600">
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Roles</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {category.roles.map((role, idx) => (
                      <li key={idx} className="text-gray-600">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipCategories;
