import React from "react";
import PhotoCarousel from "./PhotoCarousel";
import FeaturedStoriesGrid from "./FeaturedStoriesGrid";
import HeroSection from "./home/HeroSection";
import StrategicAreas from "./home/StrategicAreas";
import VisionMission from "./about/VisionMission";
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
    <div className="w-auto bg-white">
      <main>
        <HeroSection />

        <div className="max-w-[1200px] mx-auto px-4 py-12">
          <div className="mb-12">
            <h2 className="text-center text-3xl font-bold mb-4">Who We Are</h2>
            <hr />
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
        <VisionMission />

        <CoreValues />
        {/* <StrategicAreas />
        <StrategicObjectives />
        <StrategicAreasDetail /> */}

        <FeaturedStoriesGrid onStoryClick={onStoryClick} />
      </main>
    </div>
  );
};

export default Home;
