import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

interface Team {
  name: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

interface TeamsSectionProps {
  teams?: Team[];
}

import { useState } from "react";
import { TeamDialog } from "./TeamDialog";

const TeamsSection = ({ teams = defaultTeams }: TeamsSectionProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<any>(null);

  return (
    <>
      {selectedTeam && (
        <TeamDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          team={selectedTeam}
        />
      )}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground">
              Professional experience in aerospace engineering and leadership
              roles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Team Images */}
            <div className="col-span-full flex justify-center gap-4 mb-8">
              <img
                src="https://images.unsplash.com/photo-1679679008383-6f778fe07828?auto=format&fit=crop&q=80&w=200&h=200"
                alt="Team 1"
                className="w-48 h-48 rounded-lg object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1679679008383-6f778fe07828?auto=format&fit=crop&q=80&w=200&h=200"
                alt="Team 2"
                className="w-48 h-48 rounded-lg object-cover"
              />
            </div>
            {teams.map((team, index) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-full cursor-pointer transition-colors hover:border-primary/50"
                  onClick={() => {
                    const teamWithExtras = {
                      ...team,
                      imageUrl:
                        index === 0
                          ? "./images/unnamed.png"
                          : index === 1
                            ? "./images/unnamed (1).png"
                            : undefined,
                      responsibilities: [
                        "Led technical planning and execution",
                        "Managed team resources and timeline",
                        "Coordinated with other departments",
                      ],
                      impact: [
                        "Improved team efficiency and delivery time",
                        "Enhanced project quality and reliability",
                        "Strengthened cross-team collaboration",
                      ],
                    };
                    setSelectedTeam(teamWithExtras);
                    setIsDialogOpen(true);
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{team.name}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium">{team.role}</p>
                      <p>{team.period}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Click to view details
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

const defaultTeams: Team[] = [
  {
    name: "Toronto Metropolitan Aero Design",
    role: "PADA Avionics Junior Lead → Avionics Lead",
    period: "May 2024 - Present",
    description:
      "Progressive leadership roles in avionics engineering for the competition team.",
    achievements: [
      "Led PADA avionics integration and test bed development",
      "Programmed flight controllers using industry-standard tools",
      "Promoted to Avionics Lead, managing team of five",
    ],
  },
  {
    name: "Metropolitan Aerospace Combustion Hub",
    role: "Team Member → Structures Lead",
    period: "March 2024 - Present",
    description:
      "Progressive roles in structural engineering and manufacturing.",
    achievements: [
      "Developed technical drawings for rocket engine components",
      "Manufactured critical propulsion system components",
      "Promoted to Structures Lead, directing team of five",
    ],
  },
  {
    name: "Metropolitan Aerospace Rocketry Society",
    role: "Rocket Team and Research Division Member",
    period: "October 2023 - June 2024",
    description: "Member of the rocket design and research team.",
    achievements: [
      "Designed and optimized model rocket using OpenRocket",
      "Performed CFD analysis using Ansys Fluent",
      "Built and launched rocket achieving 619m apogee",
    ],
  },
  {
    name: "Toronto Metropolitan Launch Initiative",
    role: "Senior Glider Competition Team Member",
    period: "November 2023 - April 2024",
    description: "Senior member of the glider competition team.",
    achievements: [
      "Performed airfoil analysis using XFOIL and XFLR5",
      "Optimized glider design using CATIA V5",
      "Won distance competition, exceeding calculated range by 30%",
    ],
  },
];

export default TeamsSection;
