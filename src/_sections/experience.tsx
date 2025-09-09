import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "KodaKollectiv",
      period: "October 2023 - September 2025",
      location: "On-site",
      description: [
        "Built and integrated RESTful APIs using Nest.js, Laravel, and Prisma to support data exchange across applications",
        "Deployed backend applications on AWS (Elastic Beanstalk + RDS), improving system scalability and reliability",
        "Collaborated with frontend developers using React/Next.js, ensuring efficient API integration",
      ],
      technologies: ["Nest.js", "Laravel", "Prisma", "AWS", "React", "Next.js"],
    },
    {
      title: "WordPress Developer",
      company: "Human Incubator Inc.",
      period: "July - September 2023",
      location: "On-site",
      description: [
        "Maintained and enhanced client WordPress sites, fixing performance issues and improving security",
        "Customized themes and plugins, aligning websites with client branding and business needs",
      ],
      technologies: ["WordPress", "PHP", "JavaScript", "CSS"],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2021 - 2022",
      location: "Remote",
      description: [
        "Designed and developed responsive websites for small businesses using WordPress, React, and Laravel",
        "Implemented custom API integrations, boosting client site functionality and user engagement",
      ],
      technologies: ["WordPress", "React", "Laravel", "PHP", "JavaScript"],
    },
    {
      title: "Tech Support/WordPress Developer",
      company: "Govesmart Solutions Inc",
      period: "2021 - 2023",
      location: "On-site",
      description: [
        "Developed and maintained WordPress websites, ensuring cross-browser compatibility and responsive design",
        "Managed social media accounts to increase brand visibility and drive web traffic",
      ],
      technologies: ["WordPress", "PHP", "CSS", "JavaScript", "Social Media Management"],
    },
    {
      title: "Junior Systems Engineer",
      company: "Apollo Technologies Inc.",
      period: "September 2020 - March 2021",
      location: "On-site",
      description: [
        "Configured and maintained Linux servers with high availability setups, supporting enterprise-level systems",
        "Implemented MySQL database synchronization and replication, ensuring data consistency and minimizing downtime",
        "Assisted in troubleshooting and system monitoring, reducing incident response time",
      ],
      technologies: ["Linux", "MySQL", "System Administration", "Database Management"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey showcasing the roles and projects that have shaped my expertise.
          </p>
        </div>

        <div className="space-y-8 overflow-y-scroll scrollbar-mini h-[800px]">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
