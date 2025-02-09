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
      href: "/resume.pdf",
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
      href: "mailto:leandrotomarchio@gmail.com",
      tooltip: "leandrotomarchio@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      href: "tel:416-708-6598",
      tooltip: "416-708-6598",
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
                asChild
              >
                <a
                  href={contact.href}
                  target={
                    contact.label === "Phone" || contact.label === "Email"
                      ? "_self"
                      : "_blank"
                  }
                  rel="noopener noreferrer"
                  aria-label={contact.label}
                >
                  {contact.icon}
                </a>
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
