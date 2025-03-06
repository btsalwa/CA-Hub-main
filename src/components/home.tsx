import React from "react";
import PhotoCarousel from "./PhotoCarousel";
import FeaturedStoriesGrid from "./FeaturedStoriesGrid";
import HeroSection from "./home/HeroSection";
import StrategicAreas from "./home/StrategicAreas";
import CoreValues from "./home/CoreValues";
import StrategicObjectives from "./home/StrategicObjectives";
import CADefinition from "./home/CADefinition";
import StrategicAreasDetail from "./home/StrategicAreasDetail";

interface HomeProps {
  onSearch?: (query: string) => void;
  onJoinClick?: () => void;
  isLoggedIn?: boolean;
  onStoryClick?: (id: string) => void;
}

const Home = ({
  onSearch = () => {},
  onJoinClick = () => {},
  isLoggedIn = false,
  onStoryClick = () => {},
}: HomeProps) => {
  return (
    <div className="w-full bg-white">
      <main>
      <PhotoCarousel
          images={[
            {
              url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
              alt: "Sustainable farming field",
            },
            {
              url: "https://images.unsplash.com/photo-1592982537447-6e202fe64811?w=1200&q=80",
              alt: "Organic crops growing",
            },
            {
              url: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=1200&q=80",
              alt: "Conservation agriculture",
            },
          ]}
          autoplayInterval={5000}
        />
        <HeroSection />

        <div className="max-w-[1200px] mx-auto px-4 py-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Introductory Statement</h2>
            <p className="text-lg text-gray-700">
              Kenya CA-hub is a network/platform of likeminded, multi-sectoral
              stakeholders engaged in advocacy and promotion of conservation
              agriculture and other climate smart practices through Knowledge
              sharing and learning (contextualized training); Research and
              development; and Policy advocacy for adoption and mainstreaming of
              Conservation Agriculture and Climate Smart Agriculture practices.
            </p>
          </div>
        </div>

        
        <CADefinition />
        <CoreValues />
        <StrategicAreas />
        <StrategicObjectives />
        <StrategicAreasDetail />

        
        <FeaturedStoriesGrid onStoryClick={onStoryClick} />
      </main>
    </div>
  );
};

export default Home;
