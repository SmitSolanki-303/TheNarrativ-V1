import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video would go here */}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10"></div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 z-5">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/10 blur-3xl"></div>
                <div className="absolute bottom-1/2 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-pink-500/20 to-red-500/10 blur-3xl"></div>
            </div>
            
            {/* Hero content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center"
                >
                    <h1 className="text-white font-mono text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter">
                        <span className="inline-block">At Narrativ</span>
                    </h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto font-light"
                    >
                        We craft compelling digital experiences that tell your story
                    </motion.p>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12"
                >
                    <a 
                        href="#services" 
                        className="px-8 py-3 border border-white/40 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full group flex items-center"
                    >
                        Explore Our Work
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </div>
            
            {/* Scroll indicator */}
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center"
                >
                    <span className="text-white/50 text-sm mb-2">Scroll</span>
                    <div className="w-px h-16 bg-gradient-to-b from-white/80 to-transparent"></div>
                </motion.div>
            </div> */}
        </div>
    )
}

export default HeroSection
