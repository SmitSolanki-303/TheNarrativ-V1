import React from 'react'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/section/HeroSection'
import ServiceSection from '../components/section/ServiceSection'
import Faq from '../components/section/Faq'
import Menu from '../components/section/Menu'
import OurSolutions from '../components/section/OurSolutions'

const Home = () => {
    return (
        <>
            <Menu/>
            <div className='min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden cursor-none'>
                <HeroSection/>
                <ServiceSection/>
                <OurSolutions/>
                <Faq/>
                <Footer/>
            </div>
        </>
    )
}

export default Home
