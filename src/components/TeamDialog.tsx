import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface TeamDialogProps {
  isOpen: boolean;
  onClose: () => void;
  team: {
    name: string;
    role: string;
    period: string;
    description: string;
    achievements: string[];
    responsibilities?: string[];
    impact?: string[];
    imageUrl?: string;
  };
}

export function TeamDialog({ isOpen, onClose, team }: TeamDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{team.name}</DialogTitle>
          <div className="text-sm text-muted-foreground">
            <p className="font-medium">{team.role}</p>
            <p>{team.period}</p>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {team.imageUrl && (
            <div className="w-full h-48 overflow-hidden rounded-lg">
              <img
                src={team.imageUrl}
                alt={team.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="space-y-2">
            <h4 className="font-semibold">Overview</h4>
            <p className="text-sm text-muted-foreground">{team.description}</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Key Achievements</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              {team.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          {team.responsibilities && (
            <div className="space-y-2">
              <h4 className="font-semibold">Core Responsibilities</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {team.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          )}

          {team.impact && (
            <div className="space-y-2">
              <h4 className="font-semibold">Project Impact</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {team.impact.map((impact, index) => (
                  <li key={index}>{impact}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
