"use client";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "../components/animated-section"; // Ensure this path is correct

export default function Projects() {
    const projects = [
        {
            title: "Fluidfocus Mobile App",
            image: "assets/fluidfocus.png",
            description:
                "Working as a backend developer to build Restful API using Laravel for the mobile App. This mobile app assists the user to be productive thus helping them to focus on their work. It is a productivity app that helps the user to focus on their work by blocking distracting apps and websites.",
            links: [
                {
                    label: "Visit BE Repo",
                    href: "https://github.com/JesseEmmanuel/fluid",
                    icon: Github,
                },
                {
                    label: "Visit Site",
                    href: "https://www.fluidfocus.app/",
                    icon: ExternalLink,
                },
            ],
        },
        {
            title: "Build Bubble",
            image: "assets/buildbuubble.png",
            description:
                "Contributed on building a web application for project bidding. Developed Restful API on backend using Laravel and integrated it with the frontend using Nextjs. The application allows contractors to post projects and receive bids from Project Owners.",
            links: [
                {
                    label: "Visit FE Repo",
                    href: "https://github.com/JesseEmmanuel/aec-frontend",
                    icon: Github,
                },
                {
                    label: "Visit BE Repo",
                    href: "https://github.com/JesseEmmanuel/aec-backend",
                    icon: Github,
                },
            ],
        },
        {
            title: "We Are Stellar",
            image: "assets/wearestellar.png",
            description:
                "A web application built for pyramid type businesses. Built this project with React JS on frontend + Laravel on backend. The application allows users to register and login to their account, view their profile, and view their downlines. Users can also view their earnings and withdraw their earnings.",
            links: [
                {
                    label: "Visit FE Repo",
                    href: "https://github.com/JesseEmmanuel/stellarweb",
                    icon: Github,
                },
                {
                    label: "Visit BE Repo",
                    href: "https://github.com/JesseEmmanuel/StellarAPI",
                    icon: Github,
                },
            ],
        },
        {
            title: "Parkfinder (WIP)",
            image: "assets/parkfinder.png",
            description:
                "A startup project aimed at helping users find parking spots in real-time. Built with RILT (React + Inertia + Laravel + Tailwind) stack, it features a user-friendly interface and integrates with MapLibre GL API (for now) for location services.",
            links: [
                {
                    label: "Visit Repo",
                    href: "https://github.com/JesseEmmanuel/park-finder",
                    icon: Github,
                },
            ],
        },
    ];

    return (
        <div className='flex flex-col gap-8 items-center justify-center py-10'>
            <AnimatedSection direction="down" className='flex flex-col gap-2 items-center justify-center text-center px-4'>
                <h2 className="text-2xl sm:text-4xl font-bold text-foreground dark:text-white">
                    Some projects I have worked on
                </h2>
                <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto dark:text-gray-300">
                    Here are a few highlights of my recent work, ranging from robust backend APIs to full-stack applications.
                </p>
            </AnimatedSection>

            <div className="mx-12 lg:mx-24 grid grid-cols-1 gap-6 dark:text-white md:grid-cols-2">
                {projects.map((project, index) => {
                    // Even index (0, 2) slides right (from left), Odd index (1, 3) slides left (from right)
                    const slideDirection = index % 2 === 0 ? "right" : "left";
                    // Slight stagger effect for each card so they pop in one after another
                    const staggerDelay = 0.2 + (index * 0.1);

                    return (
                        <AnimatedSection
                            key={project.title}
                            direction={slideDirection}
                            delay={staggerDelay}
                            className="flex h-full w-full max-w-sm"
                        >
                            <Card className="flex h-full w-full flex-col border pt-0 lg:grayscale lg:hover:grayscale-0 rounded-none transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-400">
                                <div className="absolute inset-0 z-30 aspect-video" />

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="relative z-20 aspect-video w-full object-cover brightness-60 dark:brightness-40"
                                />

                                <CardHeader className="flex flex-col gap-4 p-4">
                                    <CardTitle>{project.title}</CardTitle>

                                    <CardDescription>
                                        <p className="text-sm">
                                            {project.description}
                                        </p>
                                    </CardDescription>
                                </CardHeader>

                                <CardFooter className="mt-auto flex flex-col lg:flex-row gap-4 p-4">
                                    {project.links.map((link) => {
                                        const Icon = link.icon;

                                        return (
                                            <Button
                                                key={link.label}
                                                className="w-full border"
                                                asChild
                                            >
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Icon className="size-4 mr-2" />
                                                    {link.label}
                                                </a>
                                            </Button>
                                        );
                                    })}
                                </CardFooter>
                            </Card>
                        </AnimatedSection>
                    );
                })}
            </div>
        </div>
    )
}