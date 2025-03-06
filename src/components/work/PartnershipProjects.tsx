import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const projects = [
  {
    name: "ACT – AICCRA Project",
    location: "Muranga, Tharaka Nithi and Makueni",
    partners: "CIAT and County Governments",
    description:
      "Promoting climate-smart agriculture practices including CA to enhance resilience of smallholder farmers.",
  },
  {
    name: "CA and County Governments",
    location: "Muranga, Tharaka Nithi and Makueni",
    partners: "County Governments",
    description:
      "Integrating CA into county agricultural extension services and policies.",
  },
  {
    name: "Sustainable Mechanization for CA",
    location: "Nakuru, Laikipia",
    partners: "FAO, Private Sector",
    description:
      "Developing and promoting appropriate mechanization solutions for CA implementation.",
  },
  {
    name: "CA for Climate Resilience",
    location: "Kitui, Machakos, Makueni",
    partners: "World Renew, Local NGOs",
    description:
      "Building climate resilience through CA practices in semi-arid regions.",
  },
];

const PartnershipProjects = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Partnership Projects</h2>

        <p className="text-lg text-gray-700 mb-8">
          CA Hub Kenya collaborates with various partners to implement projects
          that promote and scale Conservation Agriculture across different
          regions in Kenya.
        </p>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Partners Involved</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>{project.location}</TableCell>
                  <TableCell>{project.partners}</TableCell>
                  <TableCell>{project.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PartnershipProjects;
