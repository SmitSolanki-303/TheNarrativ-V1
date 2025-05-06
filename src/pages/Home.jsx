import React, { useEffect, useRef } from 'react'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/section/HeroSection'
import ServiceSection from '../components/section/ServiceSection'
import Faq from '../components/section/Faq'
import Menu from '../components/section/Menu'
import OurSolutions from '../components/section/OurSolutions'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Vision from '../components/section/Vision'

gsap.registerPlugin(ScrollTrigger)


const Home = () => {

    const lenisRef = useRef()

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: 'true',
            smoothTouch: 'false',
            touchMultiplier: 2
        })
    
        lenisRef.current.on('scroll',ScrollTrigger.update)
    
        gsap.ticker.add((time) => {
            lenisRef.current?.raf(time * 1000)
        })
    
        gsap.ticker.lagSmoothing(0)
    
        return () => {
            lenisRef.current?.destroy()
            gsap.ticker.remove(lenisRef.current?.raf)
        }
    }, [])


    return (
        <div lenis={lenisRef} className='overflow-hidden'>
            <Menu/>
            <div className='min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden cursor-none'>
                <HeroSection/>
                <ServiceSection/>
                <OurSolutions/>
                <Faq/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
