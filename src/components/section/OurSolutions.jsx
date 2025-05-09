import React, { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CustomDesign from '../../assets/custom-design.jpg'
import DigitalTransformation from '../../assets/digital-transformation.jpg'
import ScalableSolution from '../../assets/scalable-solution.jpg'

const OurSolutions = () => {
    const solutions = [
        {
            title: "Custom Design",
            description1: "We don't do generic. Our custom designs are crafted to match your brand's unique identity and leave a lasting impact.",
            description2: "Designs that feel original, on-brand, and truly yours",
            image: CustomDesign,
        },
        {
            title: "Digital Transformation",
            description1: "We don't just build websites; we create digital experiences that transform your business.",
            description2: "Tailored digital solutions that fit your needs.",
            image: DigitalTransformation,
        },
        {
            title: "Scalable Solutions",
            description1: "Our solutions are designed to grow with you, ensuring that your website remains fast and efficient as your business expands.",
            description2: "Built to scale and adapt as you grow.",
            image: ScalableSolution,
        },
    ];

    return (
        <div className="w-full text-white min-h-screen px-6 md:px-12 py-16 relative" id="solutions">
            {/* Black noise background */}
            {/* <div className="absolute inset-0 z-0 bg-black"> */}
                {/* Animated grain effect */}
                {/* <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'5\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                }}></div> */}
            {/* </div> */}

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
                            <span className="text-black text-xs font-bold">II</span>
                        </div>
                        <span className="font-medium text-white/70">How we deliver</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-bold tracking-tight"
                    >
                        Our Solutions<span className="text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">.</span>
                    </motion.h1>
                </div>

                <div className="flex flex-col gap-20 md:gap-32">
                    {solutions.map((solution, index) => (
                        <SolutionItems key={index} solution={solution} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const SolutionItems = ({ solution, index }) => {
    const isEven = index % 2 === 0;

    // For image
    const [imageRef, imageInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const imageControls = useAnimation();

    // For content
    const [contentRef, contentInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const contentControls = useAnimation();

    useEffect(() => {
        if (imageInView) {
            imageControls.start("visible");
        }
        if (contentInView) {
            contentControls.start("visible");
        }
    }, [imageControls, contentControls, imageInView, contentInView]);

    const imageVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            x: isEven ? 50 : -50,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            x: isEven ? -50 : 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className={`flex flex-col gap-20 md:gap-32 md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center`}>
            <motion.div
                ref={imageRef}
                className="flex flex-col gap-4 w-full md:w-1/2"
                initial="hidden"
                animate={imageControls}
                variants={imageVariants}
            >
                {/* rounded-2xl bg-white/ */}
                <div className="w-full h-full bg-black backdrop-blur-sm  overflow-hidden shadow-xl group">
                    <motion.div
                        whileInView={{ y: [0, -20] }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        <img
                            src={solution.image}
                            alt={solution.title}
                            className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                        />
                    </motion.div>
                </div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-semibold tracking-tight text-white/95 md:mb-4 md:mt-6 w-fit relative after:block after:h-[2px] after:bg-gradient-to-r after:from-purple-400 after:to-transparent after:mt-2"
                >
                    {solution.title}
                </motion.h2>
            </motion.div>

            <motion.div
                ref={contentRef}
                className="flex-1 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight w-full md:w-1/2"
                initial="hidden"
                animate={contentControls}
                variants={contentVariants}
            >
                <motion.p
                    className="mb-8 text-white/80"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {solution.description1}
                </motion.p>
                <motion.p
                    className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {solution.description2}
                </motion.p>
            </motion.div>
        </div>
    );
};

export default OurSolutions;