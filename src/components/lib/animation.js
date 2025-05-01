export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const fadeInRight = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const textReveal = {
    hidden: { 
        clipPath: "inset(0 100% 0 0)" 
    },
        visible: { 
        clipPath: "inset(0 0 0 0)",
        transition: {
            duration: 1,
            ease: [0.77, 0, 0.175, 1]
        }
    }
};
