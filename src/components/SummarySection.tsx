import React from "react";
import { motion } from "framer-motion";

const SummarySection = () => {
  return (
    <section className="w-full py-8 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Summary</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Passionate Aerospace Engineering student at Toronto Metropolitan
              University, specializing in avionics systems and propulsion
              technology. Experienced in flight control systems, structural
              design, and aerodynamic analysis.
            </p>
            <p className="text-lg text-muted-foreground">
              Currently leading avionics development for competition aircraft
              and contributing to innovative propulsion research. Skilled in CAD
              design, flight simulation, and practical aerospace manufacturing
              techniques.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummarySection;
