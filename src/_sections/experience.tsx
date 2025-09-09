// import { ArcTimeline, ArcTimelineItem } from "@/components/magicui/arc-timeline";
import {
  ArcTimeline,
  type ArcTimelineItem,
} from "../components/magicui/arc-timeline";
// import {
//   RocketIcon,
//   CubeIcon,
//   LockClosedIcon,
//   GlobeIcon,
//   GearIcon,
//   LightningBoltIcon,
//   StarIcon,
//   MagicWandIcon,
// } from "@radix-ui/react-icons";
// import { RocketIcon, } from "lucide-react";

export default function Experience() {
  return (
    <div className="flex flex-col gap-4 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center dark:text-white">
        Career Milestones
      </h2>
      <ArcTimeline
        // className={cn(
        //   "[--step-line-active-color:#888888] dark:[--step-line-active-color:#9780ff]",
        //   "[--step-line-inactive-color:#b1b1b1] dark:[--step-line-inactive-color:#737373]",
        //   "[--placeholder-line-color:#a1a1a1] dark:[--placeholder-line-color:#737373]",
        //   "[--icon-active-color:#555555] dark:[--icon-active-color:#d4d4d4]",
        //   "[--icon-inactive-color:#a3a3a3] dark:[--icon-inactive-color:#a3a3a3]",
        //   "[--time-active-color:#555555] dark:[--time-active-color:#d4d4d4]",
        //   "[--time-inactive-color:#a3a3a3] dark:[--time-inactive-color:#a3a3a3]",
        //   "[--description-color:#555555] dark:[--description-color:#d4d4d4]"
        // )}
        data={TIMELINE}
        defaultActiveStep={{
          time: "September 2020 - March 2021",
          stepIndex: 0,
        }}
        arcConfig={{
          circleWidth: 4500,
          angleBetweenMinorSteps: 0.4,
          lineCountFillBetweenSteps: 8,
          boundaryPlaceholderLinesCount: 50,
        }}
      />
    </div>
  );
}

const TIMELINE: ArcTimelineItem[] = [
  {
    time: "Apollo Technologies (September 2020 - March 2021)",
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
    time: "Govesmart Solutions & Web Developer Freelance (2021 - 2023)",
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
    time: "Human Incubator Inc. (July - September, 2023)",
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
    time: "Koda Kollectiv (October 2023 - September 2025)",
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
];
