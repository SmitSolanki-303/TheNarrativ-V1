// Cursor.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const position = useRef({ x: 0, y: 0 });

    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let animationFrame;

        const updatePosition = (event) => {
        position.current = { x: event.clientX, y: event.clientY };
        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(() => {
            setCursorPos(position.current);
        });
        };

        const updateCursorType = () => {
        const hovered = document.querySelectorAll(":hover");
        const isClickable = Array.from(hovered).some(el =>
            ["a", "button", "input", "textarea", "select"].includes(el.tagName.toLowerCase()) ||
            el.classList.contains("cursor-pointer")
        );
        const isHoveringSpecial = Array.from(hovered).some(el =>
            el.classList.contains("cursor-hover")
        );

        setIsPointer(isClickable);
        setIsHover(isHoveringSpecial);
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
        className="fixed top-0 left-0 w-5 h-5 rounded-full bg-white bg-opacity-30 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
            x: cursorPos.x,
            y: cursorPos.y,
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
