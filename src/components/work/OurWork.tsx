import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CADefinition from "./CADefinition";
import CABenefits from "./CABenefits";
import StrategicObjectives from "./StrategicObjectives";
import PartnershipProjects from "./PartnershipProjects";
import CollaborativeWork from "./CollaborativeWork";

const OurWork = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Work</h1>

        <div className="prose max-w-none mb-12">
          <p className="text-lg">
            The CA-Hub Kenya promotes and advocates for farmers to transit to
            more resilient, sustainable and resource saving farming practices
            like conservation agriculture to build farmers' resilience and
            enhance food security and nutrition aspects amid climate change
            variabilities and impact.
          </p>
        </div>

        <Tabs defaultValue="ca" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="ca">Conservation Agriculture</TabsTrigger>
            <TabsTrigger value="projects">Partnership Projects</TabsTrigger>
            <TabsTrigger value="collaborative">Collaborative Work</TabsTrigger>
          </TabsList>

          <TabsContent value="ca">
            <CADefinition />
            <CABenefits />
            <StrategicObjectives />
          </TabsContent>

          <TabsContent value="projects">
            <PartnershipProjects />
          </TabsContent>

          <TabsContent value="collaborative">
            <CollaborativeWork />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OurWork;
