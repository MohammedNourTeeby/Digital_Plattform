"use client"
import FinanceCenter from './components/FinanceCenter';
import TradePanel from './components/TradePanel';

import { motion } from 'framer-motion';

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center  p-4">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" max-w-1xl top-0"
      >
        <FinanceCenter />
      </motion.div>
      <TradePanel />

      {/* باقي المحتوى */}
    </div>
  )
}