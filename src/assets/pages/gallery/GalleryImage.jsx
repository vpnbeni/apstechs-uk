import React from "react";

const images = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
  "/assets/gallery/5.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/8.jpg",
  "/assets/gallery/9.jpg",
  "/assets/gallery/10.jpg",
];

const Gallery = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
