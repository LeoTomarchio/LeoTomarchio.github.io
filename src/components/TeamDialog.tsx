import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  team: {
    name: string;
    roles: {
      title: string;
      period: string;
      location: string;
      achievements: string[];
      skills?: { name: string; color: string }[];
      images?: { url: string; caption: string }[];
    }[];
  };
}

export function TeamDialog({ isOpen, onClose, team }: ProjectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-2xl">{team.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-8 mt-4">
          {team.roles.map((role, index) => (
            <div
              key={index}
              className="border-l-2 border-primary/20 pl-6 space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-lg">{role.title}</h4>
                  <p className="text-sm text-muted-foreground">{role.period}</p>
                  <p className="text-sm text-muted-foreground">
                    {role.location}
                  </p>
                </div>
                <Badge variant="secondary" className="mt-1">
                  {role.period.includes("Present") ? "Current" : "Past"}
                </Badge>
              </div>

              {role.skills && role.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {role.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className={`${skill.color || "bg-secondary"}`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              )}

              {role.images && role.images.length > 0 && (
                <div className="relative w-full py-6">
                  <Carousel className="w-full">
                    <CarouselContent className="-ml-4">
                      {role.images.map((image, idx) => (
                        <CarouselItem key={idx} className="pl-4 basis-full">
                          <div className="p-1">
                            <div className="overflow-hidden rounded-lg">
                              <div className="relative rounded-lg">
                                <img
                                  src={image.url}
                                  alt={image.caption}
                                  className="w-full h-[400px] object-contain mx-auto"
                                />
                                <p className="text-sm text-muted-foreground mt-2 text-center">
                                  {image.caption}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-4" />
                    <CarouselNext className="-right-4" />
                  </Carousel>
                </div>
              )}

              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                {role.achievements.map((achievement, idx) => (
                  <li key={idx} className="pl-2">
                    <span className="-ml-2">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
