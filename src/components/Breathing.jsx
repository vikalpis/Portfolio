import { motion } from "framer-motion";
import { FaCode, FaReact, FaGithub, FaJs, FaDatabase, FaHtml5 } from "react-icons/fa";
import { Github, Linkedin, Twitter } from "lucide-react";
import { FaJ } from "react-icons/fa6";

export default function BreathingBackground() {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      animate={{
        scale: [1, 1.03, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Base background color */}
      <div className="w-full h-full bg-black opacity-100" />

      {/* Icons or shapes */}
      <div className="absolute inset-0 flex flex-col gap-20  text-white/45 text-6xl">
        <FaCode className="animate-pulse-slow m-52 ml-36" />
        <FaReact className="animate-pulse-slow delay-300 ml-40" />
        <FaGithub className="animate-pulse-slow delay-700 mt-80 ml-28" />
      </div>

      <div className="absolute inset-0 flex justify-end gap-20  text-white/45 text-6xl">
        <FaHtml5 className="animate-pulse-slow m-52 ml-36" />
        <FaJs className="animate-pulse-slow delay-300 ml-40" />
        <FaDatabase className="animate-pulse-slow delay-700 mt-80 ml-28" />
      </div>

      <div className="absolute inset-0 flex items-end-safe justify-end mb-20 gap-20  text-white/45 text-6xl">
        <FaHtml5 className="animate-pulse-slow m-52 ml-36" />
        <FaJs className="animate-pulse-slow delay-300 ml-40 mb-24" />
        <FaDatabase className="animate-pulse-slow delay-700 mb-96 ml-28" />
      </div>
    </motion.div>
  );
}
