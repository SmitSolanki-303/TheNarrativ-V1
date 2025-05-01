import React from 'react'

const Footer = () => {

    // Navigation - Menu Item
    const navItems = [
        { name: 'Work', href: '#work' },
        { name: 'Vision', href: '#vision' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <footer className='bg-black text-white overflow-hidden'>
            {/* Main Content */}
            <div className='relative z-10 pt-40 pb-20'>
                
                {/* CTA Action */}
                <div className='max-container mb-32'>

                    <div className='overflow-hidden mb-8'>
                        <h2 className='headline-2'>
                            Let's create your digital
                        </h2>

                        <h2 className='headline-2'> 
                            narrative together
                        </h2>
                    </div>

                    <div
                        className='flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-10 md:items-center mt-16'
                    >
                        <a
                            href='#contact'
                            className='mono-uppercase inline-flex items-center space-x-8 group:'
                        >
                            <span className='realtive py-3 px-7 border border-white group-hover:bg-white group-hover:text-black transition-all duration-300'>
                                Start a project
                            </span>
                            <span className='w-8 h-[1px] bg-white/30 inline-block transform group-hover:w-12 transition-all duration-300' />
                        </a>

                        <span className='mono-uppercase text-white/40'>
                            hello@narrativ.studio
                        </span>
                    </div>
                </div>

                {/* Footer INFO Section */}
                <div className='max-container'>
                    <div className='h-[1px] w-full bg-white/10 mb-16' />

                    <div className='grid grid-cols-1  md:grid-cols-12 gap-10 md:gap-0'>
                        {/* Logo & Description */}
                        <div className='md:col-span-4'>
                            <div>
                                <a
                                    href='#'
                                    className='font-mono text-xl tracking-tight inline-block '
                                >
                                    narrativ

                                    <div
                                        className='absolute bottom-0 left-0 h-[1px] w-0 bg-white'
                                    />
                                </a>
                                <p className='text-white/50 max-w-xs'>
                                    A design studio crafting compelling digital narratives through 
                                    design, technology, and strategic thinking.
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div
                            className='md:col-span-4 md:col-start-7'
                        >
                            <div>
                                <span className='mono-uppercase text-white/30 mb-6 block'>Navigation</span>
                                <nav 
                                    className='grid grid-cols-2 gap-y-4 gap-x-8'
                                >
                                    {navItems.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className='body-medium inline-block relative group'
                                        >
                                            {item.name}

                                            <div 
                                                className='absolute bottom-0 left-0 h-[1px] w-0 bg-white'
                                            />
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Social Link */}
                        <div className="md:col-span-2 md:col-start-11">
                            <div
                                // initial={{ opacity: 0, y: 20 }}
                                // animate={isInView ? { opacity: 1, y: 0 } : {}}
                                // transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                <span className="mono-uppercase text-white/30 mb-6 block">Social</span>
                                <div className="flex flex-col space-y-4">
                                <a href="#" className="mono-uppercase text-white/50 hover:text-white transition-colors">Twitter</a>
                                <a href="#" className="mono-uppercase text-white/50 hover:text-white transition-colors">Instagram</a>
                                <a href="#" className="mono-uppercase text-white/50 hover:text-white transition-colors">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    ) 
}


export default Footer
