import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  status: "Completed" | "In Progress" | "Upcoming";
  description?: string;
  link?: string;
}

const certificationLinks: Record<string, string> = {
  "Certified SolidWorks Associate":
    "https://www.solidworks.com/certifications/mechanical-design-cswa-mechanical-design",
  "Basic Operations RPAS":
    "https://tc.canada.ca/en/aviation/drone-safety/learn-rules-you-fly-your-drone/basic-advanced-operations",
  "MATLAB and Simulink Onramp": "https://matlabacademy.mathworks.com/",
  "Compressed Gases Safety":
    "https://www.torontomu.ca/facilities-management-development/environmental-health-safety/laboratory-safety/compressed-gas-cylinders/",
  "Certified Associate in Project Management":
    "https://www.pmi.org/certifications/certified-associate-capm",
};

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      name: "Certified SolidWorks Associate",
      issuer: "Dassault Systemes",
      date: "August 2023",
      status: "Completed",
      description:
        "Certified in the mechanical design, assembly and drawings in SolidWorks.",
      link: certificationLinks["Certified SolidWorks Associate"],
    },
    {
      name: "Basic Operations RPAS",
      issuer: "Transport Canada",
      date: "November 2024",
      status: "Completed",
      description:
        "Certified for basic operations of drones issued by Canadian Aviation Regulations (CAR).",
      link: certificationLinks["Basic Operations RPAS"],
    },
    {
      name: "MATLAB and Simulink Onramp",
      issuer: "MathWorks",
      date: "November 2023",
      status: "Completed",
      description: "Completed the introduction to MATLAB and Simulink.",
      link: certificationLinks["MATLAB and Simulink Onramp"],
    },
    {
      name: "Compressed Gases Safety",
      issuer: "Toronto Metropolitan University",
      date: "February 2024",
      status: "Completed",
      description: "Certified to work with gas cylinders at TMU.",
      link: certificationLinks["Compressed Gases Safety"],
    },
    {
      name: "CAPM",
      issuer: "Project Management Institute",
      date: "December 2023 – Present",
      status: "In Progress",
      description:
        "Certified Associate in Project Management (CAPM) - Demonstrate understanding of the fundamental knowledge, terminology and processes of effective project management.",
      link: certificationLinks["Certified Associate in Project Management"],
    },
  ];

  const getStatusColor = (status: Certification["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 text-white";
      case "In Progress":
        return "bg-blue-500 text-white";
      case "Upcoming":
        return "bg-yellow-500 text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 transition-all duration-200">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <Badge
                      variant="secondary"
                      className={`${getStatusColor(cert.status)} px-3 py-1`}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <p className="text-sm">{cert.date}</p>
                    {cert.description && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {cert.description}
                      </p>
                    )}
                    {cert.link && (
                      <a
                        href={cert.link}
                        className="text-blue-500 hover:text-blue-600 text-sm inline-block mt-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate →
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
