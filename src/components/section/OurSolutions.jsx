import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
    ]

    return (
        <div className="bg-black text-white min-h-screen p-8 md:p-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial= {{opacity: 0, y: 50}}
                    animate= {{opacity: 1, y: 0}}
                    transition= {{duration: 0.8}}
                    className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 md:mb-16"
                >
                    Our Solutions
                </motion.h1>

                <div className="flex flex-col gap-32">


                    {solutions.map((solution, index) => (
                        <SolutionItems key={index} solution={solution} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const SolutionItems = ({ solution, index }) => {

    const isEven = index % 2 == 0;

    // For image
    const [imageRef, imageInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    })
    const imageControls = useAnimation()

    // For content
    const [contentRef, contentInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    })
    const contentControls = useAnimation()

    useEffect(() => {
        if (imageInView) {
            imageControls.start("visible")
        }
        if (contentInView) {
            contentControls.start("visible")
        }
    }, [imageControls, contentControls, imageInView, contentInView])

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
    }

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
    }

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.5,
            },
        },
    }

    return (

        <div className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}>
            <motion.div
                ref={imageRef}
                className="flex flex-col gap-4 w-full md:w-1/2"
                initial="hidden"
                animate={imageControls}
                variants={imageVariants}
            >
                <div className="w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl ">
                <motion.div
                    whileInView={{ y: [0, -20] }}
                    transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    }}
                >
                    <img
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-700"
                    />
                </motion.div>
                </div>
                <motion.h2 
                    variants={titleVariants} 
                    className="text-4xl md:text-5xl font-semibold tracking-tight text-white/95 md:mb-4 md:mt-6 w-fit relative after:block after:h-[2px] after:bg-gradient-to-r after:from-white/30 after:to-transparent after:mt-2"
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
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    {solution.description1}
                </motion.p>
                <motion.p
                    className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    {solution.description2}
                </motion.p>
            </motion.div>
            </div>
    )
}

export default OurSolutions
