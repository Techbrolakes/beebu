import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const options = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <AnimatePresence>
      <div className="bg-[#05082B] min-h-screen flex justify-center items-center text-white">
        <img
          src="/logo.png"
          alt="logo"
          className="w-1/2 lg:w-[15%] animate-spin block "
        />
      </div>
    </AnimatePresence>
  );
};

export default Loader;
