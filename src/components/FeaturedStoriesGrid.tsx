import React from "react";
import StoryCard from "./StoryCard";

interface Story {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

interface FeaturedStoriesGridProps {
  stories?: Story[];
  onStoryClick?: (id: string) => void;
}

const defaultStories: Story[] = [
  {
    id: "1",
    title: "Conservation Agriculture Success in Kenya",
    excerpt:
      "Discover how CA practices have helped Kenyan farmers improve soil health and increase crop yields while reducing environmental impact.",
    imageUrl:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  },
  {
    id: "2",
    title: "Building Climate Resilient Farming",
    excerpt:
      "Learn how Conservation Agriculture is helping farmers adapt to climate change and build more sustainable agricultural systems.",
    imageUrl:
      "https://images.unsplash.com/photo-1463123081488-789f998ac9c4?w=800&q=80",
  },
  {
    id: "3",
    title: "CA Hub Kenya Partnerships",
    excerpt:
      "Explore our successful partnerships and collaborative projects that are advancing Conservation Agriculture across Kenya.",
    imageUrl:
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  },
];

const FeaturedStoriesGrid = ({
  stories = defaultStories,
  onStoryClick = () => {},
}: FeaturedStoriesGridProps) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Featured Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            title={story.title}
            excerpt={story.excerpt}
            imageUrl={story.imageUrl}
            onClick={() => onStoryClick(story.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedStoriesGrid;
