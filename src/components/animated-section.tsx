"use client";

import { motion } from "motion/react";
import { type ReactNode, useEffect, useState } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export default function AnimatedSection({
    children,
    className,
    delay = 0,
    direction = "up", // Defaults to "up" to keep your existing animations working!
}: AnimatedSectionProps) {
    // State to track if the screen is desktop-sized
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        // Function to check screen width
        const checkScreenSize = () => {
            // 768px is standard for tablets and up. Change to 1024 if you only want PCs.
            setIsDesktop(window.innerWidth >= 768);
        };

        // Check initially
        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener("resize", checkScreenSize);

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Define the starting positions for each direction
    const directions = {
        up: { y: 40, x: 0, opacity: 0 },
        down: { y: -40, x: 0, opacity: 0 },
        left: { x: 40, y: 0, opacity: 0 },   // Starts 40px to the right, moves left
        right: { x: -40, y: 0, opacity: 0 }, // Starts 40px to the left, moves right
        none: { x: 0, y: 0, opacity: 0 },
    };

    return (
        <motion.section
            className={className}
            // If on desktop, use the animation directions. If mobile, render at final position.
            initial={isDesktop ? directions[direction] : { opacity: 1, x: 0, y: 0 }}
            whileInView={isDesktop ? { opacity: 1, x: 0, y: 0 } : undefined}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.7,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.section>
    );
}