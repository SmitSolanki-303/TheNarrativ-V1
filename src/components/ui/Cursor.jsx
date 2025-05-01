import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        const updatePosition = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
        };

        const updateCursorType = () => {
        const hoveredElements = document.querySelectorAll(":hover");
        const isHoveringClickable = Array.from(hoveredElements).some((element) => {
            const tagName = element.tagName.toLowerCase();
            return (
            ["a", "button", "input", "textarea", "select"].includes(tagName) ||
            element.classList.contains("cursor-pointer") 
            );
        });

        const isHoveringHoverElement = Array.from(hoveredElements).some((element) => {
            return element.classList.contains("cursor-hover");
        });

        // console.log("Hovering", isHoveringHoverElement);
        

        setIsHover(isHoveringHoverElement);
        setIsPointer(isHoveringClickable);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        document.addEventListener("mousemove", updatePosition);
        document.addEventListener("mousemove", updateCursorType);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
        document.removeEventListener("mousemove", updatePosition);
        document.removeEventListener("mousemove", updateCursorType);
        document.removeEventListener("mouseenter", handleMouseEnter);
        document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full bg-white bg-opacity-30 pointer-events-none z-50 mix-blend-difference"
        animate={{
            x: position.x,
            y: position.y,
            scale: isHover ? 7 : isPointer ? 2.5 : 1,
            opacity: isVisible ? 1 : 0,
        }}
        transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.5,
        }}
        />
    );
};

export default Cursor;
