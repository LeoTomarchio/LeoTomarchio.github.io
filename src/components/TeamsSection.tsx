import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import { TeamDialog } from "./TeamDialog";

interface Role {
  title: string;
  period: string;
  location: string;
  achievements: string[];
  skills?: { name: string; color: string }[];
  images?: { url: string; caption: string }[];
}

interface Team {
  id: string;
  name: string;
  roles: Role[];
  imageUrl?: string;
}

const TeamsSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  return (
    <>
      {selectedTeam && (
        <TeamDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          team={selectedTeam}
        />
      )}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leading aerospace engineering initiatives across multiple teams
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teams.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-full cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg"
                  onClick={() => {
                    setSelectedTeam(team);
                    setIsDialogOpen(true);
                  }}
                >
                  <CardHeader className="p-0">
                    {team.imageUrl && (
                      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                        <img
                          src={team.imageUrl}
                          alt={team.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 pb-2">
                      <CardTitle className="text-xl">{team.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-2 border-primary/20 pl-4">
                        <p className="font-medium text-sm">
                          {team.roles[0].title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {team.roles[0].period}
                        </p>
                        {team.roles[0].skills && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {team.roles[0].skills.map((skill, idx) => (
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
                      </div>
                    </div>
                    <p className="text-sm text-primary hover:text-primary/80 mt-4">
                      View full experience →
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const teams: Team[] = [
  {
    id: "1",
    name: "Toronto Metropolitan Aero Design",
    imageUrl: "/images/teams/toronto-metropolitan-aero-design/logo.png",
    roles: [
      {
        title: "Avionics Lead",
        period: "October 2024 – Present",
        location: "Toronto, ON",
        achievements: [
          "Oversaw a team of five to design the competition avionics suite.",
          "Developed and prototyped a PX4 tilt-rotor tricopter for competition.",
        ],
        skills: [
          { name: "PX4", color: "bg-blue-500" },
          { name: "Avionics", color: "bg-purple-500" },
          { name: "Team Leadership", color: "bg-red-500" },
          { name: "Drone Design", color: "bg-green-500" },
        ],
        images: [
          {
            url: "/images/teams/toronto-metropolitan-aero-design/image1.jpg",
            caption: "Avionics System Development",
          },
          {
            url: "/images/teams/toronto-metropolitan-aero-design/image2.jpg",
            caption: "Flight Controller Testing",
          },
          {
            url: "/images/teams/toronto-metropolitan-aero-design/image3.jpg",
            caption: "Drone Assembly and Integration",
          },
        ],
      },
      {
        title: "PADA Avionics Junior Lead",
        period: "May 2024 – October 2024",
        location: "Toronto, ON",
        achievements: [
          "Integrated competition PADA avionics and created a successful test bed.",
          "Programmed flight controllers with ArduPilot, INAV and PX4, planned missions in QGroundControl, Mission Planner and INAV.",
          "Assisted internal team competition members with avionics configuration and testing.",
        ],
        skills: [
          { name: "ArduPilot", color: "bg-blue-500" },
          { name: "INAV", color: "bg-green-500" },
          { name: "QGroundControl", color: "bg-purple-500" },
          { name: "Mission Planning", color: "bg-orange-500" },
        ],
      },
      {
        title: "Rapid Prototyping Member",
        period: "October 2023 – May 2024",
        location: "Toronto, ON",
        achievements: [
          "Manufactured and assembled the fuselage of competition plane.",
          "Experimentally calculated center of gravity of plane using nose as datum.",
          "Manufactured kevlar and carbon fiber composites using wet layup and vacuum bagging techniques.",
        ],
        skills: [
          { name: "Manufacturing", color: "bg-yellow-500" },
          { name: "Composites", color: "bg-blue-500" },
          { name: "Assembly", color: "bg-green-500" },
          { name: "Testing", color: "bg-purple-500" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Metropolitan Aerospace Combustion Hub",
    imageUrl: "/images/teams/metropolitan-aerospace-combustion-hub/logo.png",
    roles: [
      {
        title: "Structures Lead",
        period: "October 2024 – Present",
        location: "Toronto, ON",
        achievements: [
          "Directed a team of five to create cylinder inverter and ground station equipment.",
          "Collaborated with other leads to design and manufacture static aero-structure.",
        ],
        skills: [
          { name: "Team Leadership", color: "bg-red-500" },
          { name: "Structural Design", color: "bg-blue-500" },
          { name: "Manufacturing", color: "bg-yellow-500" },
          { name: "Collaboration", color: "bg-green-500" },
        ],
        images: [
          {
            url: "/images/teams/metropolitan-aerospace-combustion-hub/image1.jpg",
            caption: "Structural Design Process",
          },
          {
            url: "/images/teams/metropolitan-aerospace-combustion-hub/image2.jpg",
            caption: "Manufacturing and Assembly",
          },
          {
            url: "/images/teams/metropolitan-aerospace-combustion-hub/image3.jpg",
            caption: "Testing and Validation",
          },
        ],
      },
      {
        title: "Propulsion, Structures and Manufacturing Member",
        period: "March 2024 – October 2024",
        location: "Toronto, ON",
        achievements: [
          "Developed technical drawings for liquid propellant rocket engine injectors using SolidWorks.",
          "Utilized the Parker O-Ring Handbook to select industry standard seals and size design.",
          "Manufactured nitrous and ethanol tanks using lathe and mill.",
          "Worked with AN fittings for fluid connections and hydro-static tested tanks to ensure seal.",
        ],
        skills: [
          { name: "SolidWorks", color: "bg-blue-500" },
          { name: "Technical Drawing", color: "bg-purple-500" },
          { name: "Manufacturing", color: "bg-yellow-500" },
          { name: "Testing", color: "bg-green-500" },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Metropolitan Aerospace Rocketry Society",
    imageUrl: "/images/teams/metropolitan-aerospace-rocketry-society/logo.png",
    roles: [
      {
        title: "Rocket Team and Research Division Member",
        period: "October 2023 – June 2024",
        location: "Toronto, ON",
        images: [
          {
            url: "/images/teams/metropolitan-aerospace-rocketry-society/image1.jpg",
            caption: "Model Rocket Design and Simulation",
          },
          {
            url: "/images/teams/metropolitan-aerospace-rocketry-society/image2.jpg",
            caption: "CFD Analysis in Ansys Fluent",
          },
          {
            url: "/images/teams/metropolitan-aerospace-rocketry-society/image3.jpg",
            caption: "Rocket Launch and Testing",
          },
        ],
        achievements: [
          "Designed model rocket in OpenRocket to simulate multiple nosecones, fins and motors to optimize mach number, apogee and stability.",
          "Created SolidWorks models to simulate in Ansys Fluent to calculate mach, pressure, drag and lift gradients.",
          "Manufactured and flew a model rocket, attaining an apogee of 619 meters.",
        ],
        skills: [
          { name: "OpenRocket", color: "bg-blue-500" },
          { name: "SolidWorks", color: "bg-green-500" },
          { name: "Ansys Fluent", color: "bg-purple-500" },
          { name: "CFD", color: "bg-orange-500" },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Toronto Metropolitan Launch Initiative",
    imageUrl: "/images/teams/toronto-metropolitan-launch-initiative/logo.png",
    roles: [
      {
        title: "Junior Glider Competition Team Member",
        period: "November 2023 – April 2024",
        location: "Toronto, ON",
        images: [
          {
            url: "/images/teams/toronto-metropolitan-launch-initiative/image1.jpg",
            caption: "Airfoil Analysis and Design",
          },
          {
            url: "/images/teams/toronto-metropolitan-launch-initiative/image2.jpg",
            caption: "3D Printing and Assembly",
          },
          {
            url: "/images/teams/toronto-metropolitan-launch-initiative/image.png",
            caption: "Competition Flight Testing",
          },
        ],
        achievements: [
          "Computed Cd, Cl and pressure distribution for Clark Y airfoil using XFOIL and XFLR5.",
          "Modelled tapered wing ribs using CATIA V5 Generative Shape Design to create laser-cutting files.",
          "Compared multiple Drela glider airfoils graphically with Cm v. Alpha and Cl/Cd v. Alpha graphs as metrics.",
          "3D Printed the glider with AeroPLA to reduce weight by 50%.",
          "Won the distance competition with full payload and flew 30% farther than calculated range.",
        ],
        skills: [
          { name: "XFOIL", color: "bg-blue-500" },
          { name: "XFLR5", color: "bg-green-500" },
          { name: "CATIA V5", color: "bg-purple-500" },
          { name: "3D Printing", color: "bg-yellow-500" },
        ],
      },
    ],
  },
];

export default TeamsSection;
