'use client'

import { Particles } from "../components/magicui/particles"
import Hero from "./hero"
import Skill from "./skill"

export default function Main() {
    return (
        <div className='flex flex-col'>
            <Particles
                className="absolute inset-0 z-0 h-full"
                quantity={100}
                ease={80}
                color='#000000'
                refresh
            />
            <Hero />
            <Skill />
        </div>
    )
}
