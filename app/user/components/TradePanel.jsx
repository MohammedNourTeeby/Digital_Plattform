"use client";
import { FiPlus, FiMinus, FiSettings, FiBarChart, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FaExpand } from 'react-icons/fa';

const TradePanel = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border-t border-gray-700 shadow-2xl"
    >
      <div className="max-w-2xl mx-auto p-4">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2 text-gray-400">
            <FiSettings className="hover:text-blue-400 cursor-pointer transition-colors text-xl" />
            <FiBarChart className="hover:text-green-400 cursor-pointer transition-colors text-xl" />
            <FaExpand className="hover:text-purple-400 cursor-pointer transition-colors text-xl" />
          </div>
          
          <h3 className="text-base font-semibold text-gray-200">المجلة الصفقة</h3>
          
          <div className="flex gap-3">
            <button className="bg-gray-700 hover:bg-gray-600 rounded-full p-1.5 transition-all">
              <FiPlus className="text-green-400 text-lg" />
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 rounded-full p-1.5 transition-all">
              <FiMinus className="text-red-400 text-lg" />
            </button>
          </div>
        </div>

        {/* Horizontal Main Section */}
        <div className="grid grid-cols-4 gap-4">
          {/* Duration Field (Left) */}
          <button className="bg-gray-800 rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700/80 transition">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm text-gray-400">00:05</span>
              <div className="flex gap-1">
                <FiArrowUp className="text-green-400 text-sm" />
                <FiArrowDown className="text-red-400 text-sm" />
              </div>
            </div>
            <span className="text-xs text-gray-400">مدة الصفقة</span>
          </button>

          {/* Buy Indicator */}
          <div className="bg-gray-800 rounded-xl p-3 flex flex-col">
            <div className="relative w-full h-10">
              <div className="absolute inset-0 bg-green-500 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '81%' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-end pr-3">
                <FiArrowUp className="text-green-500 text-xl z-10" />
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-gray-400">شراء</span>
              <span className="text-sm text-green-500">81%</span>
            </div>
          </div>

          {/* Sell Indicator */}
          <div className="bg-gray-800 rounded-xl p-3 flex flex-col">
            <div className="relative w-full h-10">
              <div className="absolute inset-0 bg-red-500 rounded-full overflow-hidden">
                <div className="h-full bg-red-500" style={{ width: '81%' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-end pr-3">
                <FiArrowDown className="text-red-500 text-xl z-10" />
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-gray-400">بيع</span>
              <span className="text-sm text-red-500">81%</span>
            </div>
          </div>

          {/* Investment Field (Right) */}
          <button className="bg-gray-800 rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700/80 transition">
            <div className="mb-1">
              <span className="text-sm text-gray-400">$50</span>
            </div>
            <span className="text-xs text-gray-400">الاستثمار</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TradePanel;