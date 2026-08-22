"use client";

import AnimatedSection from "../components/animated-section";
import {
  ArcTimeline,
  type ArcTimelineItem,
} from "../components/magicui/arc-timeline";

export default function Experience() {
  return (
    <div className="flex flex-col gap-4 py-20 overflow-hidden">

      {/* Header sliding down */}
      <AnimatedSection direction="down" className="flex flex-col items-center px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 text-center dark:text-white">
          Career Milestones
        </h2>
        <p className="text-sm md:text-lg text-muted-foreground max-w-2xl text-center mb-8 dark:text-gray-300">
          A timeline of my professional journey, roles, and the key experiences that have shaped my career as a developer.
        </p>
      </AnimatedSection>

      {/* The entire timeline floating up smoothly */}
      <AnimatedSection direction="up" delay={0.2}>
        <ArcTimeline
          data={TIMELINE}
          defaultActiveStep={{
            time: "September 2025 - July 2026",
            stepIndex: 0,
          }}
          arcConfig={{
            circleWidth: 4500,
            angleBetweenMinorSteps: 0.4,
            lineCountFillBetweenSteps: 8,
            boundaryPlaceholderLinesCount: 50,
          }}
        />
      </AnimatedSection>

    </div>
  );
}

const TIMELINE: ArcTimelineItem[] = [
  {
    time: "September 2020 - March 2021",
    steps: [
      {
        content:
          "Started working at Apollo Technologies as Junior Systems Engineer",
      },
      {
        content:
          "Configured and maintained Linux servers with high availability setups, supporting enterprise-level systems.",
      },
      {
        content:
          "Implemented MySQL database synchronization and replication, ensuring data consistency and minimizing downtime.",
      },
      {
        content:
          "Assisted in troubleshooting and system monitoring, reducing incident response time.",
      },
    ],
  },
  {
    time: "2021 - 2023",
    steps: [
      {
        // icon: <RocketIcon width={20} height={20} />,
        content: "Started working at Govesmart Solutions Inc",
      },
      {
        content: "Started part-time freelancing as Web Developer",
      },
      {
        // icon: <RocketIcon width={20} height={20} />,
        content:
          "Developed and maintained WordPress websites, ensuring cross-browser compatibility and responsive design.",
      },
      {
        // icon: <RocketIcon width={20} height={20} />,
        content:
          "Designed and developed responsive websites for small businesses using WordPress, React, and Laravel.",
      },
      {
        // icon: <RocketIcon width={20} height={20} />,
        content:
          "Managed social media accounts to increase brand visibility and drive web traffic.",
      },
      {
        content:
          "Implemented custom API integrations, boosting client site functionality and user engagement.",
      },
    ],
  },
  {
    time: "July - September, 2023",
    steps: [
      {
        // icon: <RocketIcon width={20} height={20} />,
        content:
          "Started working at Human Incubator Inc. as Wordpress Developer",
      },
      {
        // icon: <RocketIcon width={20} height={20} />,
        content:
          "Maintained and enhanced client WordPress sites, fixing performance issues and improving security.",
      },
      {
        // icon: <RocketIcon width={20} height={20} />,
        content:
          "Customized themes and plugins, aligning websites with client branding and business needs.",
      },
    ],
  },
  {
    time: "October 2023 - September 2025",
    steps: [
      {
        // icon: <RocketIcon width={20} height={20} />,
        content: "Started working at Koda Kollectiv as Software Engineer",
      },
      {
        // icon: <RocketIcon width={20} height={20} />,
        content:
          "Built and integrated RESTful APIs using Nest.js, Laravel, and Prisma to support data exchange across applications.",
      },
      {
        // icon: <RocketIcon width={20} height={20} />,
        content:
          "Deployed backend applications on AWS (Elastic Beanstalk + RDS), improving system scalability and reliability.",
      },
      {
        content:
          "Collaborated with frontend developers using React/Next.js, ensuring efficient API integration",
      },
    ],
  },
  {
    time: "September 2025 - July 2026",
    steps: [
      {
        // icon: <RocketIcon width={20} height={20} />,
        content: "Started working at Tidewrk as Frontend Developer",
      },
      {
        // icon: <RocketIcon width={20} height={20} />,
        content:
          "Maintained and improved client-facing web applications using Next.js and TypeScript.",
      },
      {
        // icon: <RocketIcon width={20} height={20} />,
        content:
          "Collaborated with cross-functional teams in an Agile Scrum environment to deliver features and resolve issues.",
      },
      {
        content:
          "Built and enhanced application features using React Hook Form, Zod, React Query, and shadcn/ui, focusing on form validation, API integration, and intuitive user interfaces.",
      },
      {
        content:
          "Managed source code with Bitbucket, tracked development tasks in Jira, and collaborated with team members through Microsoft Teams",
      },
    ],
  },
];