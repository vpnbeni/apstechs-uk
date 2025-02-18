"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Containerised Switchroom",
    thumbnail:
      "/assets/products/PowerDistribution/containerised-switchroom.jpeg" ||
      "/common/placeholder.svg",
    category: {
      name: "Power Distribution",
      color: "bg-blue-100 text-blue-800",
    },
    description:
      "Compact and efficient switchroom solutions for various applications.",
  },
  {
    id: 2,
    title: "Transformer",
    thumbnail:
      "/assets/products/PowerEquipment/transformer.jpeg" ||
      "/common/placeholder.svg",
    category: { name: "Power Equipment", color: "bg-green-100 text-green-800" },
    description: "High-quality transformers for reliable power distribution.",
  },
  {
    id: 3,
    title: "Instrument Transformer",
    thumbnail:
      "/assets/products/Measurement/instrument-transformer.jpeg" ||
      "/common/placeholder.svg",
    category: { name: "Measurement", color: "bg-yellow-100 text-yellow-800" },
    description:
      "Precise measurement transformers for accurate power system monitoring.",
  },
  {
    id: 4,
    title: "Panels",
    thumbnail:
      "/assets/products/ControlSystems/panels.jpeg" ||
      "/common/placeholder.svg",
    category: { name: "Control Systems", color: "bg-red-100 text-red-800" },
    description: "Advanced control panels for efficient power management.",
  },
  {
    id: 5,
    title: "Earthing Material",
    thumbnail:
      "/assets/products/SafetyEquipment/earthing-material.jpeg" ||
      "/common/placeholder.svg",
    category: {
      name: "Safety Equipment",
      color: "bg-purple-100 text-purple-800",
    },
    description: "Reliable earthing materials for enhanced electrical safety.",
  },
  {
    id: 6,
    title: "Cable",
    thumbnail:
      "/assets/products/Connectivity/cable.jpeg" || "/common/placeholder.svg",
    category: { name: "Connectivity", color: "bg-indigo-100 text-indigo-800" },
    description: "High-performance cables for various electrical applications.",
  },
  {
    id: 7,
    title: "Battery Charger",
    thumbnail:
      "/assets/products/PowerSupply/battery-charger.jpeg" ||
      "/common/placeholder.svg",
    category: { name: "Power Supply", color: "bg-pink-100 text-pink-800" },
    description: "Efficient battery chargers for uninterrupted power supply.",
  },
];

function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48">
        <img
          src={product.thumbnail || "/common/placeholder.svg"}
          alt={product.title}
          className="object-cover h-full w-full"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white z-10"
        >
          <Heart
            className={`w-4 h-4 ${
              isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>
      <div className="p-5">
        <div
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${product.category.color}`}
        >
          {product.category.name}
        </div>
        <h3 className="text-gray-900 font-semibold mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter(
          (product) => product.category.name.toLowerCase() === activeTab
        );

  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Tabs */}
          {/* <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "all",
              "power distribution",
              "power equipment",
              "measurement",
              "control systems",
              "safety equipment",
              "connectivity",
              "power supply",
            ].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div> */}

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
