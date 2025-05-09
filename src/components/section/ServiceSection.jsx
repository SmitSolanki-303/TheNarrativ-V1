import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        <div className="w-full text-white min-h-screen px-6 md:px-12 py-16 relative" id="services">
                {/* Black noise background */}
                <div className="absolute inset-0 z-0 bg-black">
                    {/* Animated grain effect */}
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'5\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                    }}></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/5 blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-500/10 to-red-500/5 blur-3xl"></div>
                </div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header section */}
                    <div className="mb-20">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-8"
                        >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <span className="text-black text-xs font-bold">I</span>
                            </div>
                            <span className="font-medium text-white/70">What we do</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-bold tracking-tight"
                        >
                            Services<span className="text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">.</span>
                        </motion.h1>
                    </div>

                    {/* Services accordion */}
                    <div className="space-y-4">
                        {services.map((service, idx) => (
                            <motion.div 
                                key={service.id} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="border-t border-white/10 py-8 hover:bg-white/5 transition-colors rounded-lg px-4"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="text-purple-400 font-mono w-20">{`(${service.number})`}</div>

                                    <button
                                        className="flex-1 text-left text-2xl md:text-3xl font-semibold py-2"
                                        onClick={() => toggleService(service.id)}
                                    >
                                        {service.title}
                                    </button>

                                    <button
                                        onClick={() => toggleService(service.id)}
                                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                                    >
                                        {expandedService === service.id ? <Minus size={18} /> : <Plus size={18} />}
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {expandedService === service.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="grid md:grid-cols-[1fr_2fr] gap-8 mt-8">
                                                <div className="h-64 rounded-lg overflow-hidden relative group">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                                    <img
                                                        src={service.imageSrc || "/placeholder.svg"}
                                                        alt={service.title}
                                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>

                                                <div className="space-y-6">
                                                    <p className="text-white/80 text-lg leading-relaxed">{service.description}</p>

                                                    <div>
                                                        <p className="text-purple-400 mb-3 uppercase tracking-wider text-sm">Categories</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {service.categories.map((category, index) => (
                                                                <span 
                                                                    key={index} 
                                                                    className="px-4 py-2 rounded-full border border-white/20 text-sm bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer"
                                                                >
                                                                    {category.name}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default ServiceSection;