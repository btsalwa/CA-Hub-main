import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import NewsEvents from "./NewsEvents";
import TechnicalResources from "./TechnicalResources";
import Newsletter from "./Newsletter";
import SuccessStories from "./SuccessStories";

const ResourceCenter = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Resource Center</h1>

        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="news">News & Events</TabsTrigger>
            <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
            <TabsTrigger value="success">Success Stories</TabsTrigger>
            <TabsTrigger value="technical">Technical Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <NewsEvents />
          </TabsContent>

          <TabsContent value="newsletter">
            <Newsletter />
          </TabsContent>

          <TabsContent value="success">
            <SuccessStories />
          </TabsContent>

          <TabsContent value="technical">
            <TechnicalResources />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ResourceCenter;
