import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { getSuccessStories } from "../../lib/api";

const SuccessStories = () => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Load data from API
    setStories(getSuccessStories());
  }, []);

  const openStoryDialog = (story) => {
    setSelectedStory(story);
    setIsDialogOpen(true);
  };

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Success Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card key={story.id} className="overflow-hidden">
              <div>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle>{story.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">{story.farmer}</span> •{" "}
                    {story.location}
                  </p>
                </div>
                <p className="text-gray-700">{story.summary}</p>
                <button
                  className="text-green-700 font-medium mt-4 hover:underline"
                  onClick={() => openStoryDialog(story)}
                >
                  Read full story
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Full Story Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          {selectedStory && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedStory.title}</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <AspectRatio ratio={16 / 9} className="mb-4">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.title}
                    className="object-cover w-full h-full rounded-md"
                  />
                </AspectRatio>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">{selectedStory.farmer}</span>{" "}
                    • {selectedStory.location}
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 font-medium">
                    {selectedStory.summary}
                  </p>
                  {selectedStory.fullStory ? (
                    <p className="text-gray-700">{selectedStory.fullStory}</p>
                  ) : (
                    <p className="text-gray-700">
                      {selectedStory.farmer} has been practicing Conservation
                      Agriculture since 2019. The transition to CA practices has
                      led to significant improvements in soil health, water
                      retention, and overall farm productivity. Despite initial
                      challenges with implementing new techniques, the long-term
                      benefits have been substantial. Through consistent
                      application of the three CA principles - minimal soil
                      disturbance, permanent soil cover, and crop rotation -{" "}
                      {selectedStory.farmer} has created a more sustainable and
                      resilient farming system that can better withstand climate
                      variability. The success of this approach has inspired
                      other farmers in {selectedStory.location}
                      to adopt similar practices, creating a growing community
                      of CA practitioners in the region.
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SuccessStories;
