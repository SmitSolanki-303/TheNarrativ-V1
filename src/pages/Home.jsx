import React, { Suspense, lazy, useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Lazy Loading the Components
const Menu = React.lazy(() => import('../components/section/Menu'));
const HeroSection = React.lazy(() => import('../components/section/HeroSection'));
const ServiceSection = React.lazy(() => import('../components/section/ServiceSection'));
const OurSolutions = React.lazy(() => import('../components/section/OurSolutions'));
const Faq = React.lazy(() => import('../components/section/Faq'));
const Footer = React.lazy(() => import('../components/layout/Footer'));


const Home = () => {

    const lenisRef = useRef()

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
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
            <Suspense fallback={null}>
                <Menu />
            </Suspense>

            <div className='min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden cursor-none'>
                <Suspense fallback={null}>
                    <HeroSection />
                </Suspense>
                <Suspense fallback={null}>
                    <ServiceSection />
                </Suspense>
                <Suspense fallback={null}>
                    <OurSolutions />
                </Suspense>
                <Suspense fallback={null}>
                    <Faq />
                </Suspense>
                <Suspense fallback={null}>
                    <Footer />
                </Suspense>
            </div>
        </div>
    )
}

export default Home
