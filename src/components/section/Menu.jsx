import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    
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
                className="fixed top-8 right-8 z-50 w-[80px] text-xs md:text-sm uppercase tracking-widest font-medium text-white hover:text-black transition-colors text-left"
                onClick={toggleMenu}
            >
                {isOpen ? 'CLOSE' : 'MENU'}
            </button>

            {/* Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-black"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={circleVariants}
                        onAnimationComplete={handleAnimationComplete}
                    >
                        {/* Menu content positioned at top */}
                        <div className="absolute top-32 left-6 right-6 md:top-32 md:left-12 md:right-12 z-20">
                            <div className="flex flex-col md:flex-row justify-between max-w-xl">

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
                                            className="mb-6"
                                        >
                                            <a 
                                                href={item.link} 
                                                className="text-white text-2xl md:text-3xl font-bold hover:text-gray-300 transition-colors"
                                            >
                                                {item.title}
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
                                            className="mb-6"
                                        >
                                            <a 
                                                href={item.link} 
                                                className="text-white text-2xl md:text-3xl font-bold hover:text-gray-300 transition-colors text-right"
                                            >
                                                {item.title}
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Background Logo Watermark */}
                        <div className="fixed inset-0 flex items-end justify-center z-10 pointer-events-none">
                            <div className="text-gray-800 text-[24vw] md:text-[20vw] font-bold opacity-30">
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