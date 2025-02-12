import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { EducationDialog } from "./EducationDialog";

const EducationSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const specializations = [
    { name: "Avionics", color: "bg-blue-500" },
    { name: "Flight Control Systems", color: "bg-green-500" },
    { name: "Propulsion", color: "bg-purple-500" },
    { name: "Aerodynamics", color: "bg-orange-500" },
  ];

  return (
    <>
      <EducationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      <section className="w-full py-8 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12">Education</h2>
            <Card
              className="max-w-3xl mx-auto overflow-hidden cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg"
              onClick={() => setIsDialogOpen(true)}
            >
              <div className="p-8 flex justify-center items-center bg-background/50 border-b border-border">
                <img
                  src="/images/education/tmu-logo.jpg"
                  alt="Toronto Metropolitan University"
                  className="h-24 w-auto"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Toronto Metropolitan University
                </h3>
                <p className="text-lg text-muted-foreground mb-2">
                  Bachelor of Engineering - Aerospace Engineering
                </p>
                <p className="text-muted-foreground mb-4">2022 - 2026</p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {specializations.map((spec, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className={`${spec.color} text-white`}
                    >
                      {spec.name}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-primary hover:text-primary/80 mt-6">
                  Click to view program details →
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EducationSection;
