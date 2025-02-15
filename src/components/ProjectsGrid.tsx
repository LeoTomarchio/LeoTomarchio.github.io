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
    title: "Machine Learning Projects",
    description:
      "Developed AI models for aerospace quality control: trained Sci-kit Learn models for data analysis, TensorFlow for defect detection in aerospace components, and YOLOv8 for PCB component validation.",
    imageUrl: "/images/ai-quality.png",
    technologies: [
      { name: "TensorFlow", color: "bg-green-500" },
      { name: "YOLOv8", color: "bg-green-500" },
      { name: "Scikit-Learn", color: "bg-green-500" },
    ],
    link: "#",
  },
  {
    id: "2",
    title: "BattleBot Gearbox",
    description:
      "Designed and developed a cost-effective gearbox for combat robotics, including complete CAD models and technical documentation. Final design achieved 33% cost reduction below client's wholesale budget.",
    imageUrl: "/images/BattleBot.png",
    technologies: [
      { name: "CAD", color: "bg-indigo-500" },
      { name: "Technical Drawing", color: "bg-violet-500" },
      { name: "Design Analysis", color: "bg-blue-500" },
    ],
    link: "#",
  },
  {
    id: "3",
    title: "Flight Simulator",
    description:
      "Developed a Boeing 747 flight simulator using MATLAB for flight dynamics calculations, implemented in Simulink, and integrated with FlightGear for real-time visualization and joystick control.",
    imageUrl: "/images/FlightGear.png",
    technologies: [
      { name: "MATLAB", color: "bg-green-500" },
      { name: "Simulink", color: "bg-green-500" },
      { name: "FlightGear", color: "bg-blue-500" },
    ],
    link: "#",
  },
  {
    id: "4",
    title: "Launch Pad Design",
    description:
      "Designed and manufactured a rocket launch pad for the Metropolitan Aerospace Rocket Society using SolidWorks, creating detailed technical drawings for precision machining and construction.",
    imageUrl: "/images/launchpad.png",
    technologies: [
      { name: "SolidWorks", color: "bg-indigo-500" },
      { name: "Technical Drawing", color: "bg-violet-500" },
      { name: "Manufacturing", color: "bg-yellow-500" },
    ],
    link: "#",
  },
];

export default ProjectsGrid;
