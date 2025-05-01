import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import noiseBackground from "../../assets/noise-background.avif";

const ServiceSection = () => {
  const [expandedService, setExpandedService] = useState("001");

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? "" : id);
  };

  const services = [
    {
      id: "001",
      number: "001",
      title: "Web design and development",
      description: "Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.",
      imageSrc: "/placeholder.svg?height=120&width=200",
      categories: [
        { name: "Packaging design" },
        { name: "Logo design" },
        { name: "Rebranding" },
        { name: "Typography" },
        { name: "Guidelines" },
        { name: "Visual identity" },
      ],
    },
    {
      id: "002",
      number: "002",
      title: "Social media marketing",
      description: "Strategic social media campaigns to boost engagement, brand awareness, and customer loyalty.",
      imageSrc: "/placeholder.svg?height=120&width=200",
      categories: [
        { name: "Content creation" },
        { name: "Community management" },
        { name: "Paid advertising" },
        { name: "Analytics" },
      ],
    },
    {
      id: "003",
      number: "003",
      title: "SEO and content marketing",
      description: "Data-driven SEO strategies and compelling content to improve visibility and drive organic traffic.",
      imageSrc: "/placeholder.svg?height=120&width=200",
      categories: [
        { name: "Keyword research" },
        { name: "Content strategy" },
        { name: "On-page SEO" },
        { name: "Technical SEO" },
        { name: "Link building" },
      ],
    },
    {
      id: "004",
      number: "004",
      title: "Branding and identity",
      description: "Comprehensive branding solutions that capture your essence and resonate with your target audience.",
      imageSrc: "/placeholder.svg?height=120&width=200",
      categories: [
        { name: "Brand strategy" },
        { name: "Visual identity" },
        { name: "Brand guidelines" },
        { name: "Logo design" },
        { name: "Brand messaging" },
      ],
    },
  ];

  return (
    <div className="w-full text-white min-h-screen px-12 py-16 relative">
      {/* Black noise background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={noiseBackground} 
          alt="Black noise background" 
          className="absolute inset-0 object-cover w-full h-full z-0"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <span className="text-black text-xs">i</span>
            </div>
            <span className="font-medium">What we do</span>
          </div>

          <h1 className="text-8xl font-bold tracking-tight">
            Services<span className="text-8xl">.</span>
            {/* <span className="text-gray-500 text-5xl ml-4">(4)</span> */}
          </h1>
        </div>

        {/* Services accordion */}
        <div className="space-y-8">
          {services.map((service) => (
            <div key={service.id} className="border-t border-gray-800 py-6">
              <div className="flex justify-between items-center">
                <div className="text-gray-500 w-20">{`(${service.number})`}</div>

                <button
                  className="flex-1 text-left text-2xl md:text-3xl font-semibold py-2"
                  onClick={() => toggleService(service.id)}
                >
                  {service.title}
                </button>

                <button
                  onClick={() => toggleService(service.id)}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center"
                >
                  {expandedService === service.id ? <Minus size={18} /> : <Plus size={18} />}
                </button>
              </div>

              {expandedService === service.id && (
                <div className="grid md:grid-cols-[1fr_2fr] gap-8 mt-6">
                  <div className="h-48 rounded-md overflow-hidden relative">
                    <img
                      src={service.imageSrc || "/placeholder.svg"}
                      alt={service.title}
                      // fill={true}
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-400 text-lg">{service.description}</p>

                    <div>
                      <p className="text-gray-500 mb-3">Categories</p>
                      <div className="flex flex-wrap gap-2">
                        {service.categories.map((category, index) => (
                          <span key={index} className="px-4 py-2 rounded-full border border-gray-700 text-sm">
                            {category.name}
                          </span>
                        ))}
                        {service.categories.length > 5 && (
                          <span className="px-4 py-2 rounded-full border border-gray-700 text-sm">6+</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;