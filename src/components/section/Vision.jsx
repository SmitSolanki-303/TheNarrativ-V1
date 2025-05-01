import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "../lib/animation";
import SectionHeading from '../common/SectionHeading';


const Vision = () => {

    const imageHoverEffect = {
        rest: { scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
        hover: { scale: 1.05, transition: { duration: 0.5, ease: "easeInOut" } }
    };

    return (
        <section id="vision" className="py-20 px-4 md:px-12 my-[10vh]">
            <div className="container mx-auto">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-12 md:gap-24 items-center"
                >
                <motion.div variants={staggerContainer}>
                    <SectionHeading
                    label="Our Vision"
                    title="Creating meaningful connections through digital storytelling"
                    alignment="left"
                    />
                    <motion.p variants={fadeInUp} className="text-lg mb-6">
                    We believe that every brand has a unique story waiting to be told. Our mission is to help uncover these narratives and present them to the world in a way that resonates with audiences and drives meaningful engagement.
                    </motion.p>
                    <motion.p variants={fadeInUp} className="text-lg mb-10">
                    In a digital landscape saturated with content, authenticity and innovative storytelling are key differentiators. Our approach combines strategic thinking, creative design, and technological expertise to craft experiences that stand out and leave lasting impressions.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-white text-black font-medium tracking-wider uppercase text-sm transition-all hover:bg-gray-800 hover:text-white"
                    >
                        Work with us
                    </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={fadeIn}
                    className="grid grid-cols-2 gap-4 md:gap-8 aspect-square"
                >
                    <motion.div
                    initial="rest"
                    whileHover="hover"
                    variants={imageHoverEffect}
                    className="overflow-hidden rounded-sm"
                    >
                    <img
                        src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Creative workspace"
                        className="w-full h-full object-cover"
                    />
                    </motion.div>
                    <motion.div
                    initial="rest"
                    whileHover="hover"
                    variants={imageHoverEffect}
                    className="overflow-hidden rounded-sm translate-y-10"
                    >
                    <img
                        src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Design process"
                        className="w-full h-full object-cover"
                    />
                    </motion.div>
                    <motion.div
                    initial="rest"
                    whileHover="hover"
                    variants={imageHoverEffect}
                    className="overflow-hidden rounded-sm -translate-y-10"
                    >
                    <img
                        src="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Tech development"
                        className="w-full h-full object-cover"
                    />
                    </motion.div>
                    <motion.div
                    initial="rest"
                    whileHover="hover"
                    variants={imageHoverEffect}
                    className="overflow-hidden rounded-sm"
                    >
                    <img
                        src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Workspace environment"
                        className="w-full h-full object-cover"
                    />
                    </motion.div>
                </motion.div>
                </motion.div>
            </div>
            </section>
        );
}

export default Vision
