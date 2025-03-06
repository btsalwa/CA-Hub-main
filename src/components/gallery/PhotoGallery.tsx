import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
    caption: "Conservation Agriculture Field Implementation",
    location: "Machakos County",
    date: "March 2023",
  },
  {
    url: "https://images.unsplash.com/photo-1592982537447-6e202fe64811",
    caption: "Farmer Training Workshop",
    location: "Nakuru County",
    date: "February 2023",
  },
  {
    url: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1",
    caption: "Soil Conservation Techniques Demonstration",
    location: "Muranga County",
    date: "January 2023",
  },
  {
    url: "https://images.unsplash.com/photo-1589923188900-85dae523342b",
    caption: "CA Hub Kenya Annual Meeting",
    location: "KALRO Kabete, Nairobi",
    date: "December 2022",
  },
  {
    url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
    caption: "Crop Rotation Field Day",
    location: "Tharaka Nithi County",
    date: "November 2022",
  },
  {
    url: "https://images.unsplash.com/photo-1463123081488-789f998ac9c4",
    caption: "Minimum Tillage Equipment Demonstration",
    location: "Uasin Gishu County",
    date: "October 2022",
  },
  {
    url: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad",
    caption: "CA Hub Kenya Steering Committee Meeting",
    location: "Nairobi",
    date: "September 2022",
  },
  {
    url: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae",
    caption: "Women Farmers CA Training",
    location: "Makueni County",
    date: "August 2022",
  },
  {
    url: "https://images.unsplash.com/photo-1560493676-04071c5f467b",
    caption: "Cover Crop Implementation",
    location: "Kitui County",
    date: "July 2022",
  },
];

const PhotoGallery = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Photo Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <AspectRatio ratio={4 / 3}>
                <img
                  src={`${photo.url}?w=600&q=80`}
                  alt={photo.caption}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">
                    {photo.caption}
                  </h3>
                  <div className="flex items-center text-sm">
                    <span className="mr-3">{photo.location}</span>
                    <span>{photo.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
