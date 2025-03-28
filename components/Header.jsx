// components/Header.tsx
"use client";
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = ({ toggleLeftSidebar, toggleRightSidebar, isLeftOpen, isRightOpen }) => {
  return (
    <motion.header
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-slate-800/80 backdrop-blur-md border-b border-slate-700"
    >
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLeftSidebar}
            className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white hover:scale-105 transition-all"
          >
            {isLeftOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
          <h1 className="logo-hb">HB+</h1>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleRightSidebar}
            className="p-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white hover:scale-105 transition-all"
          >
            {isRightOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;