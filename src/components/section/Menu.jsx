"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Disc3, Radio, Music, Users, Home, Info, Mail, Upload } from "lucide-react"

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [hoveredItem, setHoveredItem] = useState(null)

    const menuItems = [
        { title: "Home", link: "/", icon: <Home className="w-5 h-5" /> },
        { title: "About", link: "/about", icon: <Info className="w-5 h-5" /> },
        { title: "Artists", link: "/artists", icon: <Users className="w-5 h-5" /> },
        { title: "Releases", link: "/releases", icon: <Disc3 className="w-5 h-5" /> },
        { title: "Playlists", link: "/playlists", icon: <Music className="w-5 h-5" /> },
        { title: "Radio", link: "/radio", icon: <Radio className="w-5 h-5" /> },
        { title: "Contact", link: "/contact", icon: <Mail className="w-5 h-5" /> },
        { title: "Demo Drop", link: "/demo-drop", icon: <Upload className="w-5 h-5" /> },
    ]

    // Handle body scroll lock when menu is open
    useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = "hidden"
        } else {
        document.body.style.overflow = "unset"
        }

        return () => {
        document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const toggleMenu = () => {
        if (!isAnimating) {
        setIsAnimating(true)
        setIsOpen(!isOpen)
        }
    }

    const handleAnimationComplete = () => {
        setIsAnimating(false)
    }

    // Enhanced menu animation variants
    const menuBackgroundVariants = {
        closed: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
        },
        open: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
        },
    }

    // Overlay circle animation
    const circleVariants = {
        closed: {
        clipPath: "circle(0% at calc(100% - 3rem) 3rem)",
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 0.5,
        },
        },
        open: {
        clipPath: "circle(150% at calc(100% - 3rem) 3rem)",
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 0.5,
        },
        },
    }

    // Menu items animation variants
    const menuItemVariants = {
        closed: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.2,
        },
        },
        open: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3 + index * 0.07,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
        }),
    }

    // Button animation variants
    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 },
    }

    return (
        <>
        {/* Fixed Menu Button */}
        <div className="hidden sm:block">
            <motion.button
                className={`fixed top-8 right-8 z-50 px-5 py-2.5 text-sm uppercase tracking-widest font-medium rounded-full transition-all duration-300 flex items-center group  ${
                isOpen
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-black/20 text-white hover:bg-black/30 backdrop-blur-md border border-white/10"
                }`}
                onClick={toggleMenu}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
            >
                <span className="relative transition-colors">{isOpen ? "CLOSE" : "MENU"}</span>
            </motion.button>
        </div>

        {/* Full Screen Menu */}
        <AnimatePresence>
            {isOpen && (
            <>
                {/* Background layer */}
                <motion.div
                className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuBackgroundVariants}
                />

                {/* Animated overlay */}
                <motion.div
                className="fixed inset-0 z-40 bg-gradient-to-br from-purple-900/90 to-black/95 backdrop-blur-md"
                initial="closed"
                animate="open"
                exit="closed"
                variants={circleVariants}
                onAnimationComplete={handleAnimationComplete}
                >
                {/* Noise texture */}
                <div
                    className="absolute inset-0 opacity-20 mix-blend-soft-light"
                    style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                    }}
                />

                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Animated gradient orbs */}
                    <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 0.6,
                        scale: 1,
                        y: [0, -20, 0],
                        transition: {
                        opacity: { duration: 1, delay: 0.3 },
                        scale: { duration: 1, delay: 0.3 },
                        y: { repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut" },
                        },
                    }}
                    className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/20 blur-3xl"
                    />
                    <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 0.6,
                        scale: 1,
                        y: [0, 20, 0],
                        transition: {
                        opacity: { duration: 1, delay: 0.5 },
                        scale: { duration: 1, delay: 0.5 },
                        y: { repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" },
                        },
                    }}
                    className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-pink-500/30 to-red-500/20 blur-3xl"
                    />

                    {/* Animated lines */}
                    <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "100%", opacity: 0.3 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="absolute left-[15%] top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
                    />
                    <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "70%", opacity: 0.3 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    className="absolute left-[85%] top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/50 to-transparent"
                    />
                </div>

                {/* Menu content */}
                <div className="absolute inset-0 z-20 flex items-center justify-center px-6 py-20 overflow-auto">
                    <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-20">
                        {/* Left Column */}
                        <div className="flex-1">
                        {menuItems.slice(0, 4).map((item, index) => (
                            <motion.div
                            key={index}
                            custom={index}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuItemVariants}
                            className="mb-8 md:mb-12"
                            onMouseEnter={() => setHoveredItem(index)}
                            onMouseLeave={() => setHoveredItem(null)}
                            >
                            <a
                                href={item.link}
                                className="text-white text-3xl md:text-5xl font-bold relative group flex items-center"
                            >
                                <span className="relative overflow-hidden">
                                <span className="inline-block">{item.title}</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-[2px]"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{
                                    scaleX: hoveredItem === index ? 1 : 0,
                                    background: "linear-gradient(to right, #8B5CF6, #EC4899, transparent)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                </span>

                                <motion.span
                                className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                animate={{
                                    x: hoveredItem === index ? [0, 5, 0] : 0,
                                    transition: {
                                    repeat: hoveredItem === index ? Number.POSITIVE_INFINITY : 0,
                                    duration: 1,
                                    },
                                }}
                                >
                                <ArrowUpRight className="w-6 h-6 text-purple-400" />
                                </motion.span>

                                <motion.span
                                className="absolute -left-10 opacity-0 group-hover:opacity-70 transition-opacity"
                                initial={{ x: -5, opacity: 0 }}
                                animate={{
                                    x: hoveredItem === index ? 0 : -5,
                                    opacity: hoveredItem === index ? 0.7 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                >
                                {item.icon}
                                </motion.span>
                            </a>

                            {hoveredItem === index && (
                                <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 0.7, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mt-2 text-white/60 text-sm md:text-base pl-0"
                                >
                                Explore our {item.title.toLowerCase()} section
                                </motion.div>
                            )}
                            </motion.div>
                        ))}
                        </div>

                        {/* Right Column */}
                        <div className="flex-1">
                        {menuItems.slice(4).map((item, index) => (
                            <motion.div
                            key={index + 4}
                            custom={index + 4}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuItemVariants}
                            className="mb-8 md:mb-12 text-right"
                            onMouseEnter={() => setHoveredItem(index + 4)}
                            onMouseLeave={() => setHoveredItem(null)}
                            >
                            <a
                                href={item.link}
                                className="text-white text-3xl md:text-5xl font-bold relative group flex items-center justify-end"
                            >
                                <motion.span
                                className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                animate={{
                                    x: hoveredItem === index + 4 ? [0, -5, 0] : 0,
                                    transition: {
                                    repeat: hoveredItem === index + 4 ? Number.POSITIVE_INFINITY : 0,
                                    duration: 1,
                                    },
                                }}
                                >
                                <ArrowUpRight className="w-6 h-6 text-pink-400" />
                                </motion.span>

                                <span className="relative overflow-hidden">
                                <span className="inline-block">{item.title}</span>
                                <motion.span
                                    className="absolute bottom-0 right-0 w-full h-[2px]"
                                    initial={{ scaleX: 0, originX: 1 }}
                                    animate={{
                                    scaleX: hoveredItem === index + 4 ? 1 : 0,
                                    background: "linear-gradient(to left, #8B5CF6, #EC4899, transparent)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                </span>

                                <motion.span
                                className="absolute -right-10 opacity-0 group-hover:opacity-70 transition-opacity"
                                initial={{ x: 5, opacity: 0 }}
                                animate={{
                                    x: hoveredItem === index + 4 ? 0 : 5,
                                    opacity: hoveredItem === index + 4 ? 0.7 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                >
                                {item.icon}
                                </motion.span>
                            </a>

                            {hoveredItem === index + 4 && (
                                <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 0.7, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="mt-2 text-white/60 text-sm md:text-base pr-0"
                                >
                                Discover our {item.title.toLowerCase()} section
                                </motion.div>
                            )}
                            </motion.div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>

                {/* Background Logo Watermark */}
                <motion.div
                    className="fixed inset-0 flex items-end justify-center z-10 pointer-events-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 bg-clip-text text-transparent text-[24vw] md:text-[20vw] font-bold mb-8">
                    narrativ.
                    </div>
                </motion.div>

                {/* Social media links */}
                <motion.div
                    className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 z-30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    {["Instagram", "Twitter", "LinkedIn"].map((social, index) => (
                    <motion.a
                        key={social}
                        href={`#${social.toLowerCase()}`}
                        className="text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {social}
                    </motion.a>
                    ))}
                </motion.div>
                </motion.div>
            </>
            )}
        </AnimatePresence>
        </>
    )
}

export default Menu
