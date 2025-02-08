import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Badge } from "./ui/badge";

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    imageUrl: string;
    technologies: { name: string; color: string }[];
    details?: string;
    challenges?: string[];
    outcomes?: string[];
  };
}

export function ProjectDialog({
  isOpen,
  onClose,
  project,
}: ProjectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover rounded-md"
          />

          <div className="space-y-2">
            <h4 className="font-semibold">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`${tech.color || "bg-secondary"}`}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>

          {project.details && (
            <div className="space-y-2">
              <h4 className="font-semibold">Project Details</h4>
              <p className="text-sm text-muted-foreground">{project.details}</p>
            </div>
          )}

          {project.challenges && (
            <div className="space-y-2">
              <h4 className="font-semibold">Key Challenges</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {project.outcomes && (
            <div className="space-y-2">
              <h4 className="font-semibold">Outcomes</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {project.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
