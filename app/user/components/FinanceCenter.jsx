"use client";
import { FiDollarSign, FiActivity, FiZap, FiSmile } from 'react-icons/fi';
import { motion } from 'framer-motion';

const FinanceCenter = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
    

      {/* Balance Buttons Row */}
      <div className="flex grid-cols-[1fr_1fr_auto] gap-3 ">
        {/* Real Balance */}
        <button className="bg-gray-700/50 rounded-xl p-3 border border-gray-600 hover:border-blue-500 transition-all">
          <div className="flex flex-col items-center">
            <FiDollarSign className="text-green-400 text-xl mb-1" />
            <span className="text-xs text-gray-300 mb-1">الرصيد الحقيقي</span>
            <span className="text-sm font-bold text-green-400">$0.00</span>
          </div>
        </button>

        {/* Financial Resources */}
        <button className="bg-gray-700/50 rounded-xl p-3 border border-gray-600 hover:border-purple-500 transition-all">
          <div className="flex flex-col items-center">
            <FiActivity className="text-purple-400 text-xl mb-1" />
            <span className="text-xs text-gray-300 mb-1">الموارد المالية</span>
            <span className="text-sm font-bold text-purple-400">$5,000</span>
          </div>
        </button>

        {/* Battle Icon */}
        <button className="bg-gray-700/70 rounded-full p-2 border border-gray-600 hover:bg-gray-600 transition-all">
          <FiZap className="text-yellow-400 text-base" />
        </button>
      </div>

      {/* Smarly Button */}
      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl py-3 mt-3 flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-600 transition-all">
        <FiSmile className="text-white text-lg" />
        <span className="text-sm text-white font-medium">Smarty</span>
      </button>
    </motion.div>
  );
};

export default FinanceCenter;