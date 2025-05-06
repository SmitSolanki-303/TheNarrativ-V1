import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const menuItems = [
        { title: 'Home', link: '/' },
        { title: 'About', link: '/about' },
        { title: 'Artists', link: '/artists' },
        { title: 'Releases', link: '/releases' },
        { title: 'Playlists', link: '/playlists' },
        { title: 'Radio', link: '/radio' },
        { title: 'Contact', link: '/contact' },
        { title: 'Demo Drop', link: '/demo-drop' }
    ];
    
    // Handle body scroll lock when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleMenu = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setIsOpen(!isOpen);
        }
    };

    const handleAnimationComplete = () => {
        setIsAnimating(false);
    };

    // Keeping original circle animation variants
    const circleVariants = {
        closed: {
            clipPath: 'circle(0% at 0% 0%)',
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 20,
                duration: 0.5
            }
        },
        open: {
            clipPath: 'circle(150% at 0% 0%)',
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 20,
                duration: 0.5
            }
        }
    };

    // Menu items animation variants
    const menuItemVariants = {
        closed: {
            opacity: 0,
            x: -50,
            transition: {
                duration: 0.2
            }
        },
        open: index => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.3 + index * 0.1,
                duration: 0.4
            }
        })
    };

    return (
        <>
            {/* Fixed Menu Button */}
            <button 
                className="fixed top-8 right-8 z-50 px-4 py-2 text-sm uppercase tracking-widest font-medium bg-transparent hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 flex items-center group"
                onClick={toggleMenu}
            >
                <span className="relative text-white group-hover:text-white/90 transition-colors">
                    {isOpen ? 'CLOSE' : 'MENU'}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
            </button>

            {/* Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={circleVariants}
                        onAnimationComplete={handleAnimationComplete}
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                            <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/10 blur-3xl"></div>
                            <div className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-gradient-to-tr from-pink-500/20 to-red-500/10 blur-3xl"></div>
                        </div>

                        {/* Menu content */}
                        <div className="absolute top-32 left-6 right-6 md:left-12 md:right-12 z-20">
                            <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto">
                                {/* Left Column */}
                                <div>
                                    {menuItems.slice(0, 4).map((item, index) => (
                                        <motion.div
                                            key={index}
                                            custom={index}
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            variants={menuItemVariants}
                                            className="mb-8"
                                        >
                                            <a 
                                                href={item.link} 
                                                className="text-white text-2xl md:text-4xl font-bold relative group"
                                            >
                                                {item.title}
                                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-white to-transparent group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>
                                
                                {/* Right Column */}
                                <div>
                                    {menuItems.slice(4).map((item, index) => (
                                        <motion.div
                                            key={index + 4}
                                            custom={index + 4}
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            variants={menuItemVariants}
                                            className="mb-8 text-right"
                                        >
                                            <a 
                                                href={item.link} 
                                                className="text-white text-2xl md:text-4xl font-bold relative group"
                                            >
                                                {item.title}
                                                <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-gradient-to-l from-white to-transparent group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Background Logo Watermark */}
                        <div className="fixed inset-0 flex items-end justify-center z-10 pointer-events-none">
                            <div className="text-gray-800/20 text-[24vw] md:text-[20vw] font-bold mb-8">
                                narrativ.
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Menu;