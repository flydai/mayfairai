
import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ title, value, subValue, icon: Icon }) => (
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="bg-white/10 rounded-lg p-6 backdrop-blur-lg"
  >
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <Icon className="h-5 w-5 text-white/60" />
    </div>
    <div className="flex items-baseline">
      <span className="text-3xl font-bold text-white">{value}</span>
      <span className="ml-2 text-sm text-white/60">{subValue}</span>
    </div>
  </motion.div>
);

export default StatCard;
