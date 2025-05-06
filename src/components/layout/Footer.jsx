import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    // Navigation - Menu Items
    const navItems = [
        { name: 'Work', href: '#work' },
        { name: 'Vision', href: '#vision' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
    
    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemFade = (delay = 0) => ({
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay,
            },
        },
    });

    return (
        <footer className="w-full text-white relative overflow-hidden" id="footer">
            {/* Black noise background */}
            {/* <div className="absolute inset-0 z-0 bg-black"> */}
                {/* Animated grain effect */}
                {/* <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'5\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                }}></div> */}
            {/* </div> */}

            {/* Main Content */}
            <div className="relative z-10 px-6 md:px-12 pt-40 pb-20">
                
                {/* CTA Section */}
                <div className="max-w-7xl mx-auto mb-32">
                    <motion.div 
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="overflow-hidden mb-8"
                    >
                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2">
                            Let's create your digital
                        </h2>

                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> 
                            narrative together<span className="text-white">.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}              
                        className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 md:items-center mt-16"
                    >
                        <a
                            href="#contact"
                            className="group flex items-center space-x-8 hover:-translate-y-1 transition-all duration-300"
                        >
                            <span className="relative py-3 px-7 border border-white/40 backdrop-blur-md bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300 font-medium tracking-wide">
                                Start a project
                            </span>
                            <span className="w-8 h-[1px] bg-white/30 inline-block transform group-hover:w-12 transition-all duration-300" />
                        </a>

                        <span className="text-white/40 font-mono uppercase tracking-wider">
                            hello@narrativ.studio
                        </span>
                    </motion.div>
                </div>

                {/* Footer Info Section */}
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100%" }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="h-[1px] w-full bg-white/10 mb-16" 
                    />

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0"
                    >
                        {/* Logo & Description */}
                        <motion.div 
                            variants={fadeInUp}
                            className="md:col-span-4"
                        >
                            <div>
                                <a
                                    href="#"
                                    className="font-mono text-xl tracking-tight inline-block group relative"
                                >
                                    narrativ
                                    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                                </a>
                                <p className="text-white/50 max-w-xs mt-4">
                                    A design studio crafting compelling digital narratives through 
                                    design, technology, and strategic thinking.
                                </p>
                            </div>
                        </motion.div>

                        {/* Navigation */}
                        <motion.div
                            variants={fadeInUp}
                            className="md:col-span-4 md:col-start-7"
                        >
                            <div>
                                <span className="uppercase tracking-wider text-white/30 mb-6 block font-mono text-sm">Navigation</span>
                                <nav className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    {navItems.map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href={item.href}
                                            className="inline-block relative group"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {item.name}
                                            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                                        </motion.a>
                                    ))}
                                </nav>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div 
                            variants={fadeInUp}
                            className="md:col-span-2 md:col-start-11"
                        >
                            <div>
                                <span className="uppercase tracking-wider text-white/30 mb-6 block font-mono text-sm">Social</span>
                                <div className="flex flex-col space-y-4">
                                    <motion.a 
                                        href="#" 
                                        className="uppercase text-white/50 hover:text-white transition-colors font-mono text-sm"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Twitter
                                    </motion.a>
                                    <motion.a 
                                        href="#" 
                                        className="uppercase text-white/50 hover:text-white transition-colors font-mono text-sm"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Instagram
                                    </motion.a>
                                    <motion.a 
                                        href="#" 
                                        className="uppercase text-white/50 hover:text-white transition-colors font-mono text-sm"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        LinkedIn
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;