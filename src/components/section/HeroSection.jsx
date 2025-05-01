import React from 'react'
import bgVideo from '../../assets/SecondBgVideo.mp4'

const HeroSection = () => {
    return (
        <div className='relative w-full h-screen overflow-hidden'>
            {/* <video autoPlay muted loop playsInline className='absolute top-0 left-0 w-full h-screen object-cover object-center'>
                <source src={bgVideo} type='video/mp4' />
            </video> */}

            <div className='relative z-10 flex items-end justify-center h-full pb-16'>
                <h1 className='text-white font-mono text-3xl sm:text-5xl md:text-7xl lg:text-9xl cursor-hover'>
                    <span>At Narrativ</span>
                </h1>
            </div>
        </div>
    )
}

export default HeroSection
