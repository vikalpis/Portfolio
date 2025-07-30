import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon, Twitter } from "lucide-react";
import { FaHashnode, FaTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [hoveredIconIndex, setHoveredIconIndex] = useState(null);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setTimeout(() => setShowNavbar(true), 100);
    }
  }, []);

  const icons = [
    <GithubIcon key="github" onClick={()=>{
      window.open("https://github.com/vikalpis")
    }} />,
    <Twitter key="twitter" onClick={()=>{
      window.open("https://x.com/AnonDev_")
    }} />,
    <LinkedinIcon key="linkedin" onClick={()=>{
      window.open("https://www.linkedin.com/in/vikalp-pandey-303bb0276/")
    }}/>,
    <FaHashnode className="text-xl" key="hashnode" onClick={()=>{
      window.open("https://hashnode.com/@vikalp004")
    }}/>,
  ];

  return (
    <div className="hidden sm:flex justify-center mt-4">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={showNavbar ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setIsNavbarHovered(true)}
        onHoverEnd={() => {
          setIsNavbarHovered(false);
          setHoveredIconIndex(null);
        }}
        className="rounded-full bg-black text-white px-10 py-4 flex gap-16 shadow-2xl"
      >
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            onHoverStart={() => setHoveredIconIndex(index)}
            onHoverEnd={() => setHoveredIconIndex(null)}
            animate={{
              scale:
                hoveredIconIndex === null
                  ? 1
                  : hoveredIconIndex === index
                  ? 1.4
                  : 0.85,
              filter:
                hoveredIconIndex === null
                  ? "blur(0px)"
                  : hoveredIconIndex === index
                  ? "blur(0px)"
                  : "blur(0.5px)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 12,
            }}
            className="cursor-pointer"
          >
            {icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
