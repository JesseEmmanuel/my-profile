'use client'

import { useEffect } from "react"
import { MagicCard } from "../components/magicui/magic-card"
import Experience from "./experience"
import { Footer } from "./footer"
import Hero from "./hero"
import Skill from "./skill"

export default function Main() {
    useEffect(() => {
        document.documentElement.classList.add("dark")
    }, [])
    return (
        <div className='flex flex-col gap-20 dark:bg-[#101A36] p-4'>
            <MagicCard gradientColor={"#D9D9D955"}>
                <Hero />
                <Skill />
                <Experience />
                <Footer />
            </MagicCard>
        </div>
    )
}
