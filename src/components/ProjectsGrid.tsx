import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: { name: string; color: string }[];
  link: string;
}

const ProjectsGrid = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const projects: Project[] = [
  {
    id: "1",
    title: "BattleBot Gearbox",
    description:
      "Custom gearbox design optimized for combat robotics, featuring precision-engineered components and innovative dual-shaft system.",
    imageUrl: "/images/BattleBot.png",
    technologies: [
      { name: "CAD", color: "bg-blue-500" },
      { name: "Technical Drawing", color: "bg-orange-500" },
      { name: "Design Analysis", color: "bg-green-500" },
    ],
    link: "#",
  },
  {
    id: "2",
    title: "Flight Simulator",
    description:
      "Advanced flight dynamics simulation integrating MATLAB, Simulink, and FlightGear for comprehensive Boeing 747 modeling.",
    imageUrl: "/images/FlightGear.png",
    technologies: [
      { name: "MATLAB", color: "bg-purple-500" },
      { name: "Simulink", color: "bg-blue-600" },
      { name: "FlightGear", color: "bg-orange-600" },
    ],
    link: "#",
  },
  {
    id: "3",
    title: "Launch Pad Design",
    description:
      "State-of-the-art launch pad facility designed with SolidWorks, incorporating advanced safety systems and efficient launch protocols.",
    imageUrl: "/images/launchpad.png",
    technologies: [
      { name: "SolidWorks", color: "bg-green-600" },
      { name: "Technical Drawing", color: "bg-red-500" },
      { name: "Manufacturing", color: "bg-yellow-500" },
    ],
    link: "#",
  },
];

export default ProjectsGrid;
