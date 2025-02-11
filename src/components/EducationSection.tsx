import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const EducationSection = () => {
  return (
    <section className="w-full pb-0 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Education</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-2">
                Toronto Metropolitan University
              </h3>
              <p className="text-lg text-muted-foreground mb-2">
                Bachelor of Engineering - Aerospace Engineering
              </p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <img
                  src="https://www.torontomu.ca/content/dam/brand/global/images/logos/tmu-logo.svg"
                  alt="Toronto Metropolitan University"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-muted-foreground mb-4">2022 - 2026</p>
              <p className="text-muted-foreground">
                BEng - Specialization in Avionics and Flight Control Systems
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
