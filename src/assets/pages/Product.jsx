import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart } from "lucide-react";

const products = [
  {
    id: "pd-1",
    title: "Containerised Switchroom",
    thumbnail: "/assets/products/PowerDistribution/containerised-switchroom.jpeg",
    description: "Compact and efficient switchroom solutions for various applications.",
    features: [
      "Custom-designed solutions",
      "Factory-tested assemblies",
      "Quick installation",
      "Weather-resistant construction"
    ],
    specifications: {
      dimensions: "10m x 3m x 3m",
      weight: "2.5 tons",
      material: "Steel & Insulated Panels",
      powerCapacity: "Up to 1000 kW"
    },
    applications: [
      "Industrial facilities",
      "Mining operations",
      "Infrastructure projects"
    ],
    price: "$25,000 - $50,000"
  },  
  {
    id: "pe-2",
    title: "Transformer",
    thumbnail: "/assets/products/PowerEquipment/transformer.jpg",
    description: "High-quality transformers for reliable power distribution.",
    features: [
      "High efficiency",
      "Low losses",
      "Custom voltage configurations",
      "Robust insulation"
    ],
    specifications: {
      capacity: "500 kVA - 5000 kVA",
      coolingType: "Oil-cooled / Air-cooled",
      voltageRatio: "11kV / 415V",
      weight: "1 - 5 tons"
    },
    applications: [
      "Power stations",
      "Industrial plants",
      "Renewable energy projects"
    ],
    price: "$10,000 - $100,000"
  },
  {
    id: "me-3",
    title: "Instrument Transformer",
    thumbnail: "/assets/products/Measurement/instrument-transformer.jpeg",
    description: "Precise measurement transformers for accurate power system monitoring.",
    features: [
      "High accuracy class",
      "Compact and lightweight",
      "Primary & secondary insulation",
      "Weatherproof design"
    ],
    specifications: {
      voltageRating: "Up to 36kV",
      accuracyClass: "0.2S / 0.5",
      insulation: "Epoxy resin / Oil-filled",
      frequency: "50/60 Hz"
    },
    applications: [
      "Metering & Protection",
      "Substation automation",
      "Power quality monitoring"
    ],
    price: "$500 - $5,000"
  },
  {
    id: "cs-4",
    title: "Panels",
    thumbnail: "/assets/products/ControlSystems/panels.jpeg",
    description: "Advanced control panels for efficient power management.",
    features: [
      "PLC & SCADA compatibility",
      "Modular design",
      "IP-rated enclosures",
      "Custom configurations"
    ],
    specifications: {
      voltageRange: "240V - 33kV",
      material: "Mild Steel / Aluminum",
      dimensions: "Customizable",
      protection: "IP54 / IP65"
    },
    applications: [
      "Industrial automation",
      "Building management",
      "Renewable energy"
    ],
    price: "$2,000 - $20,000"
  },
  {
    id: "se-5",
    title: "Earthing Material",
    thumbnail: "/assets/products/SafetyEquipment/earthing-material.jpeg",
    description: "Reliable earthing materials for enhanced electrical safety.",
    features: [
      "Corrosion-resistant",
      "High conductivity",
      "Durable & long-lasting",
      "Easy installation"
    ],
    specifications: {
      material: "Copper / Galvanized Steel",
      length: "1m - 3m",
      diameter: "10mm - 50mm",
      resistance: "< 1 ohm"
    },
    applications: [
      "Power plants",
      "Substations",
      "Industrial facilities"
    ],
    price: "$50 - $500"
  },
  {
    id: "cn-6",
    title: "Cable",
    thumbnail: "/assets/products/Connectivity/cable.jpeg",
    description: "High-performance cables for various electrical applications.",
    features: [
      "High insulation resistance",
      "Flame-retardant",
      "UV and moisture-resistant",
      "Flexible & easy to install"
    ],
    specifications: {
      type: "Copper / Aluminum",
      voltageRating: "Up to 33kV",
      insulation: "XLPE / PVC",
      conductorSize: "1.5mm² - 400mm²"
    },
    applications: [
      "Power transmission",
      "Industrial wiring",
      "Renewable energy"
    ],
    price: "$5 - $100 per meter"
  },
  {
    id: "ps-7",
    title: "Battery Charger",
    thumbnail: "/assets/products/PowerSupply/battery-charger.jpeg",
    description: "Efficient battery chargers for uninterrupted power supply.",
    features: [
      "Smart charging technology",
      "Overcharge protection",
      "Multiple voltage options",
      "Compact & lightweight design"
    ],
    specifications: {
      inputVoltage: "110V / 230V",
      outputVoltage: "12V / 24V / 48V",
      chargingCurrent: "10A - 100A",
      efficiency: "Up to 95%"
    },
    applications: [
      "UPS systems",
      "Telecom towers",
      "Industrial backup power"
    ],
    price: "$100 - $2,000"
  }
];

const ProductPage = () => {
  const { productId } = useParams(); // Get productId from URL
  console.log(productId,'productId')
  const product = products.find((p) => p.id === productId); // Find matching product
  const [isLiked, setIsLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-gray-700">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-10 mt-[96px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative w-full h-96">
          <img
            src={product.thumbnail || "/common/placeholder.svg"}
            alt={product.title}
            className="object-cover h-full w-full rounded-lg"
          />
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white z-10"
          >
            <Heart className={`w-6 h-6 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Key Features:</h3>
          <ul className="text-lg text-gray-700 list-disc list-inside space-y-2">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Specifications:</h3>
          <ul className="text-lg text-gray-700 list-disc list-inside space-y-2">
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key} className="capitalize">
                <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value}
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Applications:</h3>
          <ul className="text-lg text-gray-700 list-disc list-inside space-y-2">
            {product.applications.map((application, index) => (
              <li key={index}>{application}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">Price Range:</h3>
          <p className="text-lg text-gray-700">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;