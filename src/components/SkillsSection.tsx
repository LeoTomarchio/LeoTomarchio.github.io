import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

interface Skill {
  name: string;
  category: string;
  color?: string;
}

interface SkillsSectionProps {
  skills?: Record<string, Skill[]>;
  title?: string;
}

const SkillsSection = ({
  title = "Technical Skills",
  skills = {
    "Computer-Aided Design (CAD)": [
      { name: "CATIA V5", category: "CAD", color: "bg-blue-500" },
      { name: "SolidWorks", category: "CAD", color: "bg-blue-500" },
      { name: "Ansys DesignModeler", category: "CAD", color: "bg-blue-500" },
      { name: "Onshape", category: "CAD", color: "bg-blue-500" },
      { name: "Inventor", category: "CAD", color: "bg-blue-500" },
      { name: "Fusion 360", category: "CAD", color: "bg-blue-500" },
    ],
    "Engineering Standards": [
      { name: "GD&T", category: "Standards", color: "bg-purple-500" },
      { name: "SAE Standards", category: "Standards", color: "bg-purple-500" },
      { name: "ASME Standards", category: "Standards", color: "bg-purple-500" },
      { name: "AN Standards", category: "Standards", color: "bg-purple-500" },
    ],
    "Analysis & Simulation": [
      { name: "Ansys Fluent", category: "CFD", color: "bg-green-500" },
      { name: "Ansys Meshing", category: "CFD", color: "bg-green-500" },
      { name: "2D/3D Modeling", category: "CFD", color: "bg-green-500" },
      { name: "FEA Theory", category: "Analysis", color: "bg-green-500" },
      { name: "AE8115 FEA", category: "Analysis", color: "bg-green-500" },
    ],
    "Programming & Development": [
      { name: "MATLAB", category: "Programming", color: "bg-orange-500" },
      { name: "Simulink", category: "Programming", color: "bg-orange-500" },
      { name: "Python", category: "Programming", color: "bg-orange-500" },
      { name: "JavaScript", category: "Programming", color: "bg-orange-500" },
      { name: "C", category: "Programming", color: "bg-orange-500" },
      { name: "SQL", category: "Programming", color: "bg-orange-500" },
      { name: "LaTeX", category: "Programming", color: "bg-orange-500" },
    ],
    "Electrical & Hardware": [
      { name: "Quartus", category: "Hardware", color: "bg-yellow-500" },
      { name: "Multisim", category: "Hardware", color: "bg-yellow-500" },
      { name: "VHDL", category: "Hardware", color: "bg-yellow-500" },
      { name: "Verilog", category: "Hardware", color: "bg-yellow-500" },
      { name: "FPGA", category: "Hardware", color: "bg-yellow-500" },
    ],
    "Office & Productivity": [
      { name: "MS Word", category: "Office", color: "bg-red-500" },
      { name: "Excel Macros", category: "Office", color: "bg-red-500" },
      { name: "VBA", category: "Office", color: "bg-red-500" },
      { name: "PowerPoint", category: "Office", color: "bg-red-500" },
    ],
    Languages: [
      {
        name: "English (Native)",
        category: "Language",
        color: "bg-indigo-500",
      },
      {
        name: "French (Upper Intermediate)",
        category: "Language",
        color: "bg-indigo-500",
      },
    ],
  },
}: SkillsSectionProps) => {
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
