'use client'

import Experience from "./experience"
import Hero from "./hero"
import Skill from "./skill"

export default function Main() {
    return (
        <div className='flex flex-col gap-20 dark:bg-[#101A36]'>
            <Hero />
            <Skill />
            <Experience />
        </div>
    )
}
