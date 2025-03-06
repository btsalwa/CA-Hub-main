import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const videos = [
  {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
    title: "CA Implementation Guide",
    description:
      "Step-by-step guide on implementing Conservation Agriculture principles for smallholder farmers.",
    date: "March 2023",
  },
  {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
    title: "Farmer Success Story: John Mwangi",
    description:
      "John shares his experience transitioning to Conservation Agriculture and the benefits he has seen.",
    date: "February 2023",
  },
  {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
    title: "CA Hub Kenya Annual Symposium Highlights",
    description:
      "Key moments and insights from our annual gathering of Conservation Agriculture practitioners.",
    date: "December 2022",
  },
  {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
    title: "Mechanization Options for CA",
    description:
      "Overview of appropriate mechanization solutions for different scales of Conservation Agriculture implementation.",
    date: "November 2022",
  },
];

const VideoGallery = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Video Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={16 / 9} className="mb-4">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full rounded-md"
                    allowFullScreen
                  />
                </AspectRatio>
                <p className="text-gray-700 mb-2">{video.description}</p>
                <p className="text-sm text-gray-500">{video.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
