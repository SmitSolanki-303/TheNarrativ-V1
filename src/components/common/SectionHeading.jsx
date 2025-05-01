import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animation"; // Adjust path based on your project

const SectionHeading = ({ label, title, alignment = "left", color = "light" }) => {
    const alignmentClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    };

    const textColor = color === "light" ? "text-white" : "text-black";
    const labelColor = color === "light" ? "text-gray-400" : "text-gray-700";

    return (
        <div className={alignmentClasses[alignment]}>
        <motion.p
            variants={fadeInUp}
            className={`font-mono text-sm uppercase tracking-widest mb-3 ${labelColor}`}
        >
            {label}
        </motion.p>
        <motion.h2
            variants={fadeInUp}
            className={`font-serif text-3xl md:text-5xl leading-tight ${textColor}`}
        >
            {title}
        </motion.h2>
        </div>
    );
};

export default SectionHeading;
