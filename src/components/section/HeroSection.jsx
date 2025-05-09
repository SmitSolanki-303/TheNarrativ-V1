import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
    const controls = useAnimation()

    useEffect(() => {
        controls.start({
        opacity: 1,
        transition: { duration: 1.5, ease: "easeOut" },
        })
    }, [controls])

    return (
        <div className="relative w-full h-screen overflow-hidden">


            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10"/>

            {/* Decorative elements */}
            <div className="absolute inset-0 z-5 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/10 blur-3xl"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-500/20 to-red-500/10 blur-3xl"
                ></motion.div>

                {/* Additional decorative elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 2, delay: 1.2 }}
                    className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-purple-400/15 to-pink-400/10 blur-3xl"
                ></motion.div>
            </div>

            {/* Animated lines */}
            <div className="absolute inset-0 z-15 overflow-hidden hidden sm:block">
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="absolute left-[10%] top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
                ></motion.div>
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "70%" }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    className="absolute left-[30%] top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent"
                ></motion.div>
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "90%" }}
                    transition={{ duration: 1.8, delay: 0.9 }}
                    className="absolute right-[20%] top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
                ></motion.div>
            </div>

            {/* Hero content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-8">
                {/* Small indicator with gradient */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 mb-4 sm:mb-8"
                >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <span className="text-black text-xs font-bold">i</span>
                    </div>
                    <span className="font-medium text-white/70">Creative Agency</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center"
                >
                    <h1 className="text-white font-mono text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 tracking-tighter">
                        <span className="inline-block">At Narrativ</span>
                        <span className="text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        .
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-white/80 text-base xs:text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-light px-2"
                    >
                        We craft compelling digital experiences that tell your story
                    </motion.p>
                </motion.div>

                {/* Animated tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-4 sm:mt-6 mb-6 sm:mb-10 px-2"
                >
                    <p className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent text-sm xs:text-base sm:text-lg md:text-xl font-medium text-center">
                        Designs that feel original, on-brand, and truly yours
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-4 sm:mt-8 flex flex-col items-center"
                >
                    <a
                        href="#services"
                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-sm sm:text-base text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 rounded-full group flex items-center shadow-lg shadow-purple-500/20"
                    >   
                        Explore Our Work
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                    {/* <a
                        href="#contact"
                        className="px-6 sm:px-8 py-2.5 sm:py-3 border border-white/20 backdrop-blur-sm bg-white/5 text-white hover:bg-white/10 transition-all duration-300 rounded-full group flex items-center"
                    >
                        Get in Touch
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a> */}
                </motion.div>

                {/* Floating badges */}
                <div className="absolute bottom-16 sm:bottom-24 md:bottom-32 left-4 sm:left-8 md:left-16 z-30 hidden sm:block">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-sm flex items-center"
                    >
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 mr-2"></span>
                        Digital Transformation
                    </motion.div>
                </div>

                <div className="absolute bottom-16 sm:bottom-24 md:bottom-32 right-4 sm:right-8 md:right-16 z-30 hidden sm:block">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-sm flex items-center"
                    >
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 mr-2"></span>
                        Custom Design
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="flex flex-col items-center"
                >
                <span className="text-white/50 text-sm mb-2">Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-purple-500/80 to-transparent"></div>
                <ChevronDown className="text-white/50 w-5 h-5 mt-2 animate-bounce" />
                </motion.div>
            </div> */}
        </div>
    )
}

export default HeroSection
