import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PhotoGallery from "./PhotoGallery";
import VideoGallery from "./VideoGallery";

const Gallery = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Gallery</h1>

        <p className="text-lg text-gray-700 mb-8">
          Explore our collection of photos and videos showcasing Conservation
          Agriculture practices, events, and success stories from across Kenya.
        </p>

        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="photos">
            <PhotoGallery />
          </TabsContent>

          <TabsContent value="videos">
            <VideoGallery />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;
