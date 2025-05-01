import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 px-4 md:px-12 my-40">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        {/* Static heading replacing SectionHeading component */}
                        <div className="flex flex-col items-center">
                            <span className="text-sm uppercase tracking-wider font-medium mb-2">
                                Questions & Answers
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold">
                                Frequently Asked Questions
                            </h2>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="space-y-6"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="border-b border-gray-400 pb-6"
                            >
                                <button
                                    className="w-full text-left flex justify-between items-center"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="font-serif text-xl md:text-2xl">{faq.question}</h3>
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </motion.svg>
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
                                            <p className="text-gray-700 mt-4">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Faq;