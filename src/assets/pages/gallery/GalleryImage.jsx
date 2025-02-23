import React, { useState } from "react";

const images = [
  "/assets/gallery/1.jpg", "/assets/gallery/2.jpg", "/assets/gallery/3.jpg", "/assets/gallery/4.jpg",
  "/assets/gallery/5.jpg", "/assets/gallery/6.jpg", "/assets/gallery/7.jpg", "/assets/gallery/8.jpg",
  "/assets/gallery/9.jpg", "/assets/gallery/10.jpg", "/assets/gallery/11.jpg", "/assets/gallery/12.jpg",
  "/assets/gallery/14.jpg", "/assets/gallery/15.jpg", "/assets/gallery/16.jpg", "/assets/gallery/17.jpg",
  "/assets/gallery/18.jpg", "/assets/gallery/19.jpg", "/assets/gallery/22.jpg", "/assets/gallery/23.jpg",
  "/assets/gallery/24.jpg", "/assets/gallery/25.jpg", "/assets/gallery/26.jpg", "/assets/gallery/27.jpg",
  "/assets/gallery/28.jpg", "/assets/gallery/29.jpg", "/assets/gallery/30.jpg", "/assets/gallery/31.jpg",
  "/assets/gallery/32.jpg", "/assets/gallery/33.jpg", "/assets/gallery/34.jpg", "/assets/gallery/35.jpg",
  "/assets/gallery/36.jpg", "/assets/gallery/37.jpg", "/assets/gallery/38.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md cursor-pointer" onClick={() => setSelectedImage(src)}>
            <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
