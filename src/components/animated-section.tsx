"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

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
            initial={directions[direction]}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
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