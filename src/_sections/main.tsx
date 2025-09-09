'use client'

import { MagicCard } from "../components/magicui/magic-card"
import Experience from "./experience"
import Hero from "./hero"
import Skill from "./skill"

export default function Main() {
    return (
        <div className='flex flex-col gap-20 dark:bg-[#101A36]'>
            <MagicCard gradientColor={"#D9D9D955"}>
                <Hero />
                <Skill />
                <Experience />
            </MagicCard>
        </div>
    )
}
