import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

interface StoryCardProps {
  title?: string;
  excerpt?: string;
  imageUrl?: string;
  onClick?: () => void;
}

const StoryCard = ({
  title = "Sustainable Farming Practices",
  excerpt = "Discover how modern agricultural techniques are helping farmers reduce environmental impact while maintaining high yields.",
  imageUrl = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  onClick = () => {},
}: StoryCardProps) => {
  return (
    <Card
      className="w-[380px] h-[400px] bg-white cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={onClick}
    >
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full rounded-t-lg"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-4">
          {excerpt}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
