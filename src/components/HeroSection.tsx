import React from "react";
import ThreeDAerospaceModel from "./ThreeDAerospaceModel";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

const HeroSection = ({
  title = "Leandro Tomarchio",
  subtitle = "Avionics Lead at Toronto Metropolitan Aero Design",
  backgroundColor = "#000000",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden">
      {/* 3D Model Background */}
      <div className="absolute inset-0 z-0">
        <ThreeDAerospaceModel backgroundColor={backgroundColor} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="container mx-auto h-full flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">{subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
