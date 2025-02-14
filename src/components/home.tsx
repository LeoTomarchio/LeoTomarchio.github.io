import React from "react";
import HeroSection from "./HeroSection";
import SummarySection from "./SummarySection";
import EducationSection from "./EducationSection";
import ProjectsGrid from "./ProjectsGrid";
import SkillsSection from "./SkillsSection";
import TeamsSection from "./TeamsSection";
import CertificationsSection from "./CertificationsSection";
import { motion } from "framer-motion";
import ContactLinks from "./ContactLinks";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full bg-background"
    >
      <Navbar />
      {/* Hero Section */}
      <HeroSection />

      <div className="space-y-0">
        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SummarySection />
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <EducationSection />
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TeamsSection />
        </motion.div>
      </div>

      {/* Projects Section with Gradient Background */}
      <div className="relative bg-gradient-to-b from-background via-background/95 to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ProjectsGrid />
        </motion.div>
      </div>

      {/* Skills Section with Subtle Background */}
      <div className="relative bg-muted/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SkillsSection />
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CertificationsSection />
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <ContactLinks />
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;
