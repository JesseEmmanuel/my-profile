"use client";

import { Card, CardContent, CardHeader } from "../components/ui/card";
import { skillCategories } from "../data/skill-categories";
import Lottie from "react-lottie";

export default function Skill() {
  return (
    <div className="w-full bg-white md:flex md:flex-col">
      <div className="flex flex-col gap-4 justify-center items-center"></div>
      <section id="skills" className="py-10 bg-background">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with
              to build modern web applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center items-stretch">
            {skillCategories.map((category, index) => {
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-[400px]"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`mx-auto p-3 rounded-lg bg-muted w-[200px] h-[150px] mb-4`}
                    >
                      <h1 className="text-xl font-bold text-foreground text-center">
                        {category.title}
                      </h1>
                      <Lottie options={category.icon} width={150} />
                    </div>
                    {/* <CardTitle className="text-xl text-left text-foreground">{category.title}</CardTitle> */}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.stacks.map((stack, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 rounded-full ${category.color.replace(
                              "text-",
                              "bg-"
                            )}`}
                          />
                          <div className="flex gap-2 w-full">
                            {stack.icon}
                            <span className="text-muted-foreground text-sm">
                              {stack.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

            <div className="mt-16 text-center">
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Always Learning
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm highly adaptable and committed to learning new
                    technologies efficiently to meet project and business needs.
                    My experience spans from system administration and database
                    management to modern web development frameworks, allowing me
                    to tackle full-stack challenges with confidence.
                  </p>
                </CardContent>
              </Card>
            </div>
        </div>
      </section>
    </div>
  );
}
