import React, { useState } from 'react';
import { Plus, Minus } from 'phosphor-react';
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    
    const faqs = [
        {
            question: "What makes narrativ different from other agencies?",
            answer: "At narrativ, we focus on the story first. Our unique blend of design expertise, technological prowess, and strategic thinking allows us to create cohesive digital narratives that authentically represent your brand. We don't just build websites or create designs; we craft experiences that tell your story in a compelling way."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on scope and complexity. A typical branding project might take 4-6 weeks, while a comprehensive website with custom features could take 8-12 weeks. During our initial consultation, we'll provide a detailed timeline specific to your project's needs."
        },
        {
            question: "Do you work with clients internationally?",
            answer: "Yes, we work with clients globally. Our digital-first approach allows us to collaborate effectively across time zones. We use various tools to maintain clear communication and ensure project progress regardless of geographic location."
        },
        {
            question: "What is your pricing structure?",
            answer: "We offer both project-based and retainer pricing models. Each quote is customized based on your specific requirements, timeline, and the complexity of the work involved. We believe in transparent pricing and will provide a detailed breakdown in our proposal."
        },
        {
            question: "How do we get started working together?",
            answer: "The first step is to reach out through our contact form. We'll schedule an initial consultation to discuss your project, goals, and requirements. After this conversation, we'll prepare a custom proposal outlining our approach, timeline, and investment. Once approved, we'll kick off with a discovery session and begin the journey of crafting your digital narrative."
        }
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
        <section id="faq" className="py-20 px-6 md:px-12 my-20 md:my-40 relative">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/5 blur-3xl"></div>
            </div>
            
            <div className="container mx-auto relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm uppercase tracking-wider font-medium mb-2 text-purple-400">
                            Questions & Answers
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2">
                            Frequently Asked Questions
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={itemFade(index * 0.1)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                className="border-b border-white/10 pb-6"
                            >
                                <button
                                    className="w-full text-left flex justify-between items-center"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="text-xl md:text-2xl font-medium">{faq.question}</h3>
                                    <motion.div
                                        className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center"
                                        animate={{ 
                                            backgroundColor: activeIndex === index ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0)'
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                        </motion.div>
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-white/70 mt-4 leading-relaxed">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;