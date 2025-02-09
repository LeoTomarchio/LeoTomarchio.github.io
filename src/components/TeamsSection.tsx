import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { TeamDialog } from "./TeamDialog";

interface Role {
  title: string;
  period: string;
  location: string;
  achievements: string[];
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                      {team.roles.slice(0, 2).map((role, idx) => (
                        <div
                          key={idx}
                          className="border-l-2 border-primary/20 pl-4"
                        >
                          <p className="font-medium text-sm">{role.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {role.period}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            {role.location}
                          </p>
                          <ul className="text-sm text-muted-foreground list-disc list-inside">
                            {role.achievements
                              .slice(0, 2)
                              .map((achievement, i) => (
                                <li key={i} className="line-clamp-1">
                                  {achievement}
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
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
    imageUrl:
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2946&auto=format&fit=crop",
    roles: [
      {
        title: "Avionics Lead",
        period: "October 2024 – Present",
        location: "Toronto, ON",
        achievements: [
          "Oversaw a team of five to design the competition avionics suite.",
          "Developed and prototyped a PX4 tilt-rotor tricopter for competition.",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1534551767192-78b8dd45b51b",
            caption: "Avionics System Development",
          },
          {
            url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
            caption: "Flight Controller Testing",
          },
          {
            url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
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
      },
    ],
  },
  {
    id: "2",
    name: "Metropolitan Aerospace Combustion Hub",
    imageUrl:
      "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2944&auto=format&fit=crop",
    roles: [
      {
        title: "Structures Lead",
        period: "October 2024 – Present",
        location: "Toronto, ON",
        achievements: [
          "Directed a team of five to create cylinder inverter and ground station equipment.",
          "Collaborated with other leads to design and manufacture static aero-structure.",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0",
            caption: "Structural Design Process",
          },
          {
            url: "https://images.unsplash.com/photo-1581093458896-9f3c3250a8b1",
            caption: "Manufacturing and Assembly",
          },
          {
            url: "https://images.unsplash.com/photo-1581093458999-9f3c3250a8b2",
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
      },
    ],
  },
  {
    id: "3",
    name: "Metropolitan Aerospace Rocketry Society",
    imageUrl:
      "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=2940&auto=format&fit=crop",
    roles: [
      {
        title: "Rocket Team and Research Division Member",
        period: "October 2023 – June 2024",
        location: "Toronto, ON",
        images: [
          {
            url: "https://images.unsplash.com/photo-1517976487492-5750f3195933",
            caption: "Model Rocket Design and Simulation",
          },
          {
            url: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2",
            caption: "CFD Analysis in Ansys Fluent",
          },
          {
            url: "https://images.unsplash.com/photo-1516850228053-a807778c4e0f",
            caption: "Rocket Launch and Testing",
          },
        ],
        achievements: [
          "Designed model rocket in OpenRocket to simulate multiple nosecones, fins and motors to optimize mach number, apogee and stability.",
          "Created SolidWorks models to simulate in Ansys Fluent to calculate mach, pressure, drag and lift gradients.",
          "Manufactured and flew a model rocket, attaining an apogee of 619 meters.",
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Toronto Metropolitan Launch Initiative",
    imageUrl:
      "https://images.unsplash.com/photo-1534996858221-380b92700493?q=80&w=2431&auto=format&fit=crop",
    roles: [
      {
        title: "Junior Glider Competition Team Member",
        period: "November 2023 – April 2024",
        location: "Toronto, ON",
        images: [
          {
            url: "https://images.unsplash.com/photo-1531965410828-5266b35a0c54",
            caption: "Airfoil Analysis and Design",
          },
          {
            url: "https://images.unsplash.com/photo-1579364046732-c21c2177730d",
            caption: "3D Printing and Assembly",
          },
          {
            url: "https://images.unsplash.com/photo-1572205338190-f89d2611dd49",
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
      },
    ],
  },
];

export default TeamsSection;
