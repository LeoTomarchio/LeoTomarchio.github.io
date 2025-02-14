import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

interface Skill {
  name: string;
  category: string;
  color?: string;
  link?: string;
}

interface SkillsSectionProps {
  title?: string;
}

const SkillsSection = ({ title = "Technical Skills" }: SkillsSectionProps) => {
  const [skills, setSkills] = useState<Record<string, Skill[]>>({});

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const response = await fetch("/src/data/skills.txt");
        const text = await response.text();
        const lines = text.split("\n");

        const parsedSkills: Record<string, Skill[]> = {};
        let currentCategory = "";

        lines.forEach((line) => {
          // Skip empty lines and comments
          if (!line.trim() || line.startsWith("#")) return;

          // Check if this is a category header
          if (line.startsWith("[")) {
            currentCategory = line.slice(1, -1);
            parsedSkills[currentCategory] = [];
            return;
          }

          // Parse skill entries
          if (currentCategory && line.includes("|")) {
            const [name, category, color, link] = line
              .split("|")
              .map((s) => s.trim());
            parsedSkills[currentCategory].push({
              name,
              category,
              color,
              link: link === "#" ? undefined : link,
            });
          }
        });

        setSkills(parsedSkills);
      } catch (error) {
        console.error("Error loading skills:", error);
      }
    };

    loadSkills();
  }, []);

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">{title}</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                <div className="flex items-center gap-6 mb-4">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {category}
                  </h3>
                  <div className="h-px bg-border flex-grow" />
                </div>
                <div className="pl-4 border-l-2 border-border group-hover:border-primary/50 transition-colors duration-300">
                  <div className="flex flex-wrap gap-2 items-center">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: skillIndex * 0.05,
                        }}
                      >
                        {skill.link ? (
                          <a
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Badge
                              variant="secondary"
                              className={`
                                ${skill.color || "bg-primary"}
                                text-white
                                transition-all
                                duration-300
                                cursor-pointer
                                text-sm
                                font-medium
                                shadow-sm
                                hover:shadow
                                hover:scale-105
                                hover:opacity-90
                              `}
                            >
                              {skill.name}
                            </Badge>
                          </a>
                        ) : (
                          <Badge
                            variant="secondary"
                            className={`
                              ${skill.color || "bg-primary"}
                              text-white
                              transition-all
                              duration-300
                              cursor-default
                              text-sm
                              font-medium
                              shadow-sm
                              hover:shadow
                              hover:scale-105
                              hover:opacity-90
                            `}
                          >
                            {skill.name}
                          </Badge>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
