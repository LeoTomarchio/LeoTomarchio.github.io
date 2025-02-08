import React from "react";
import HeroSection from "./HeroSection";
import ProjectsGrid from "./ProjectsGrid";
import SkillsSection from "./SkillsSection";
import TeamsSection from "./TeamsSection";
import { motion } from "framer-motion";

interface HomeProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

const Home = ({
  title = "Leandro Tomarchio",
  subtitle = "Avionics Lead & Aerospace Engineering Professional",
  backgroundColor = "#000000",
}: HomeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full bg-background"
    >
      <HeroSection
        title={title}
        subtitle={subtitle}
        backgroundColor={backgroundColor}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <TeamsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ProjectsGrid />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SkillsSection />
      </motion.div>

      <footer className="w-full py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Aerospace Engineering Portfolio</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;
