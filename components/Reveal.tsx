"use client";

import { AnimatePresence, motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
};

export default function Reveal({
  children,
  duration = 0.8,
  delay = 0,
}: RevealProps) {
  return (
  <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
         duration,
         delay,
         ease: "easeOut",
         }}
       >
         {children}
   </motion.div>
  );
}