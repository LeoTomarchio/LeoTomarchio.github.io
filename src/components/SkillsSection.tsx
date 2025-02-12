import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Skill {
  name: string;
  category: string;
  color?: string;
}

interface SkillsSectionProps {
  skills?: Record<string, Skill[]>;
  title?: string;
  description?: string;
}

const SkillsSection = ({
  skills = {
    "Design & CAD": [
      { name: "SolidWorks", category: "CAD", color: "bg-blue-500" },
      { name: "CATIA V5", category: "CAD", color: "bg-blue-500" },
      { name: "GD&T", category: "Design", color: "bg-blue-500" },
      { name: "Technical Drawing", category: "Design", color: "bg-blue-500" },
      { name: "OpenRocket", category: "Design", color: "bg-blue-500" },
    ],
    "Analysis & Simulation": [
      {
        name: "CFD (Ansys Fluent)",
        category: "Analysis",
        color: "bg-green-500",
      },
      { name: "XFOIL/XFLR5", category: "Analysis", color: "bg-green-500" },
      { name: "FEA", category: "Analysis", color: "bg-green-500" },
      {
        name: "Flight Dynamics",
        category: "Simulation",
        color: "bg-green-500",
      },
      { name: "Aerodynamics", category: "Analysis", color: "bg-green-500" },
    ],
    "Programming & Tools": [
      { name: "MATLAB", category: "Programming", color: "bg-orange-500" },
      { name: "Python", category: "Programming", color: "bg-orange-500" },
      { name: "Simulink", category: "Tools", color: "bg-orange-500" },
      { name: "QGroundControl", category: "Tools", color: "bg-orange-500" },
      { name: "Mission Planner", category: "Tools", color: "bg-orange-500" },
    ],
    "Avionics & Electronics": [
      {
        name: "Flight Controllers",
        category: "Avionics",
        color: "bg-purple-500",
      },
      {
        name: "INAV Configuration",
        category: "Avionics",
        color: "bg-purple-500",
      },
      {
        name: "Electrical Systems",
        category: "Electronics",
        color: "bg-purple-500",
      },
      {
        name: "Avionics Integration",
        category: "Avionics",
        color: "bg-purple-500",
      },
      {
        name: "Test Bed Development",
        category: "Testing",
        color: "bg-purple-500",
      },
    ],
    "Manufacturing & Testing": [
      {
        name: "CNC Machining",
        category: "Manufacturing",
        color: "bg-yellow-500",
      },
      {
        name: "3D Printing",
        category: "Manufacturing",
        color: "bg-yellow-500",
      },
      {
        name: "Lathe & Mill",
        category: "Manufacturing",
        color: "bg-yellow-500",
      },
      {
        name: "Quality Assurance",
        category: "Testing",
        color: "bg-yellow-500",
      },
      {
        name: "High-Pressure Testing",
        category: "Testing",
        color: "bg-yellow-500",
      },
    ],
    "Project Skills": [
      { name: "Team Leadership", category: "Management", color: "bg-red-500" },
      {
        name: "Technical Documentation",
        category: "Documentation",
        color: "bg-red-500",
      },
      { name: "Project Planning", category: "Management", color: "bg-red-500" },
      { name: "Risk Assessment", category: "Management", color: "bg-red-500" },
      { name: "Collaboration", category: "Soft Skills", color: "bg-red-500" },
    ],
  },
  title = "Technical Skills",
  description = "Expertise across aerospace engineering disciplines",
}: SkillsSectionProps) => {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/20 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge
                          variant="secondary"
                          className={`${skill.color || "bg-primary"} text-white hover:opacity-90 transition-opacity cursor-default`}
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
