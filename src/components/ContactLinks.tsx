import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const ContactLinks = () => {
  const contacts = [
    {
      icon: <FileText className="h-5 w-5" />,
      label: "Resume",
      href: "/Leandro Tomarchio's Resume.pdf",
      tooltip: "Download Resume",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/leandro-tomarchio/",
      tooltip: "Connect on LinkedIn",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/LeoTomarchio",
      tooltip: "View GitHub Profile",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      onClick: () => {
        navigator.clipboard.writeText("leandrotomarchio@gmail.com");
      },
      tooltip: "Click to copy: leandrotomarchio@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      onClick: () => {
        navigator.clipboard.writeText("416-708-6598");
      },
      tooltip: "Click to copy: 416-708-6598",
    },
  ];

  return (
    <TooltipProvider>
      <div className="flex gap-4 justify-center">
        {contacts.map((contact) => (
          <Tooltip key={contact.label}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
                asChild={!contact.onClick}
                onClick={contact.onClick}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.label === "Phone" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={contact.label}
                  >
                    {contact.icon}
                  </a>
                ) : (
                  contact.icon
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{contact.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default ContactLinks;
