"use client";

import { motion } from "framer-motion";

type StepTransitionProps = {
  children: React.ReactNode;
};

export default function StepTransition({
  children,
}: StepTransitionProps) {
  return (
    <motion.div
      key="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}