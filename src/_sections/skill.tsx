"use client";

import { Card, CardContent, CardHeader } from "../components/ui/card";
import { skillCategories } from "../data/skill-categories";

export default function Skill() {
  return (
    <div className="w-full md:flex md:flex-col">
      <div className="flex flex-col gap-4 justify-center items-center"></div>
      <section id="skills" className="py-10 bg-background pt-6 sm:pt-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">

          {/* Header section sliding in from the top */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 dark:text-white">
              Tech Stack
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto dark:text-white">
              A curated look at the frontend frameworks and backend architectures I use to transform ideas into seamless digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center items-stretch">
            {skillCategories.map((category) => {

              return (
                <div>
                  <Card
                    className="flex flex-col justify-between h-full hover:shadow-lg dark:shadow-gray-400 transition-all duration-300 hover:-translate-y-1 w-full max-w-[400px] min-w-[300px] border-2 border-[#101A36] dark:border-white rounded-none"
                  >
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`mx-auto p-3 rounded-lg bg-muted mb-4`}
                      >
                        <h1 className="text-xl font-bold text-foreground text-center dark:text-white">
                          {category.title}
                        </h1>
                        <p className="text-sm md:text-md dark:text-white">
                          {category.description}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
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
                              <span className="text-muted-foreground text-sm dark:text-white">
                                {stack.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}