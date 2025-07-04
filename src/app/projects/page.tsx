"use client";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { Card, Card1, Card2 } from "../../components/Card";

function WorkPage() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-20%" });

  useEffect(() => {
    if (isInView) {
      animate(
        ".fade-in",
        { opacity: 1, y: 0 },
        { delay: stagger(0.15), duration: 0.8, ease: "circOut" }
      );
      animate(
        ".card",
        { 
          scale: [0.98, 1],
          opacity: 1,
          filter: ["blur(2px)", "blur(0px)"]
        },
        { delay: stagger(0.25), duration: 0.7, ease: "backOut" }
      );
    }
  }, [isInView, animate]);

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-16 px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Enhanced Header Section */}
        <motion.div 
          className="fade-in opacity-0 translate-y-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4"
            whileHover={{ 
              transform: "translateX(4px)",
              transition: { type: "spring", stiffness: 500 }
            }}
          >
            Projects
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-current opacity-30 mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          
          <motion.p
            className="text-base opacity-80 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Explore my recent work and creative solutions
          </motion.p>
        </motion.div>

        {/* Refined Card Layout */}
        <div className="space-y-16">
          <motion.div
            className="card opacity-0 origin-bottom"
            whileHover={{ 
              y: -6,
              transition: { type: "spring", stiffness: 400, damping: 15 } 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card />
          </motion.div>

          <motion.div
            className="card opacity-0 origin-bottom"
            whileHover={{ 
              y: -6,
              transition: { type: "spring", stiffness: 400, damping: 15 } 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card1 />
          </motion.div>

          <motion.div
            className="card opacity-0 origin-bottom"
            whileHover={{ 
              y: -6,
              transition: { type: "spring", stiffness: 400, damping: 15 } 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card2 />
          </motion.div>
        </div>

        {/* Subtle Motion Elements */}
        <motion.div
          className="absolute -bottom-20 left-0 h-40 w-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div 
            className="absolute bottom-0 left-1/4 w-32 h-32 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default WorkPage;