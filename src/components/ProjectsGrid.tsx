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

interface ProjectsGridProps {
  projects?: Project[];
}

const ProjectsGrid = ({ projects = defaultProjects }: ProjectsGridProps) => {
  return (
    <section className="w-full bg-background py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "BattleBot Gearbox",
    description:
      "Outlined customer problem statement, developed CAD models for gears, bearings, and axles, and created technical drawings for assembly.",
    imageUrl: "./images/unnamed.png",
    details:
      "Designed a custom gearbox assembly for a combat robot, focusing on durability and power transmission efficiency. The design features precision-engineered gears, robust bearings, and reinforced mounting plates to withstand high-impact scenarios.",
    challenges: [
      "Optimizing gear ratios for maximum torque while maintaining speed",
      "Designing for impact resistance and structural integrity",
      "Ensuring proper bearing alignment and support",
      "Creating maintenance-friendly assembly design",
    ],
    outcomes: [
      "Successfully implemented dual-shaft design for redundancy",
      "Achieved 50% weight reduction compared to initial design",
      "Integrated quick-release mechanism for rapid maintenance",
      "Passed high-torque stress testing simulations",
    ],
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
      "Created MATLAB script for Boeing 747 flight dynamics, implemented in Simulink, and integrated with FlightGear for simulation.",
    imageUrl: "./images/unnamed (1).png",
    details:
      "Developed a comprehensive flight simulation system using MATLAB and Simulink, integrating with FlightGear for visual feedback. The system models complete Boeing 747 flight dynamics with multiple control inputs and environmental factors.",
    challenges: [
      "Implementing complex aerodynamic equations in Simulink",
      "Integrating multiple control systems for realistic flight behavior",
      "Establishing real-time data communication with FlightGear",
      "Optimizing simulation performance for smooth operation",
    ],
    outcomes: [
      "Successfully modeled complete aircraft dynamics",
      "Achieved real-time simulation with visual feedback",
      "Created modular system for easy modification of flight parameters",
      "Integrated environmental factors for realistic simulation",
    ],
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
      "Created CAD models and technical drawings for launch pad assembly using SolidWorks, used for machining and construction.",
    imageUrl:
      "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80",
    technologies: [
      { name: "SolidWorks", color: "bg-green-600" },
      { name: "Technical Drawing", color: "bg-red-500" },
      { name: "Manufacturing", color: "bg-yellow-500" },
    ],
    link: "#",
  },
];

export default ProjectsGrid;
