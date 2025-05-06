// IntroAnimation.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const IntroAnimation = ({ onFinish }) => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setAnimationComplete(true);
        const exitTimer = setTimeout(onFinish, 900);
        return () => clearTimeout(exitTimer);
        }, 3200);

        return () => clearTimeout(timer);
    }, [onFinish]);

    const wordVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08 + 0.3,
            type: "spring",
            damping: 12,
            stiffness: 100
        }
        }),
        exit: { opacity: 0, y: -20, transition: { duration: 0.7, ease: "easeInOut" } }
    };

    const letters = [
        ...'AtNarrativ'.split('').map((letter, i) => ({ letter, key: `char-${i}` }))
    ];

    return (
        <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black pointer-events-none"
        initial="hidden"
        animate={animationComplete ? "exit" : "visible"}
        variants={{
            hidden: { opacity: 1 },
            exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }
        }}
        >
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap overflow-hidden">
            {letters.map((char, i) => (
                <motion.span
                key={char.key}
                custom={i}
                variants={wordVariants}
                className={`text-white text-5xl md:text-7xl font-${i >= 2 ? 'bold' : 'light'}`}
                >
                {char.letter}
                </motion.span>
            ))}
            </div>

            <motion.div
            className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ delay: 1.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.p
            className="text-gray-400 text-sm md:text-base mt-6 tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{
                opacity: animationComplete ? 0 : 1,
                y: animationComplete ? 10 : 0
            }}
            transition={{ delay: 2.2, duration: 0.6 }}
            >
            Shaping Digital Narratives
            </motion.p>
        </div>
        </motion.div>
    );
};

export default IntroAnimation;
