import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

interface Technology {
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  technologies?: Technology[];
  link?: string;
}

import { useState } from "react";
import { ProjectDialog } from "./ProjectDialog";

const ProjectCard = ({
  title = "Spacecraft Propulsion System",
  description = "Designed and simulated an advanced propulsion system for deep space missions using computational fluid dynamics.",
  imageUrl = "https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?auto=format&fit=crop&q=80",
  technologies = [
    { name: "CFD", color: "bg-blue-500" },
    { name: "MATLAB", color: "bg-orange-500" },
    { name: "Python", color: "bg-green-500" },
  ],
  link = "#",
}: ProjectCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <ProjectDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        project={{
          title,
          description,
          imageUrl,
          technologies,
          details:
            "Detailed information about the project and its implementation.",
          challenges: [
            "Optimizing performance under specific constraints",
            "Integrating multiple complex systems",
            "Meeting strict technical requirements",
          ],
          outcomes: [
            "Successfully delivered project meeting all specifications",
            "Improved system efficiency by 30%",
            "Implemented innovative solutions to complex problems",
          ],
        }}
      />
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsDialogOpen(true)}
        transition={{ duration: 0.2 }}
        className="w-full bg-card"
      >
        <Card className="h-full overflow-hidden border border-border hover:border-primary/50 transition-colors">
          <CardHeader className="p-0">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-xl mb-4">{title}</CardTitle>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`${tech.color || "bg-secondary"}`}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <a
              href={link}
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Learn more →
            </a>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
};

export default ProjectCard;
