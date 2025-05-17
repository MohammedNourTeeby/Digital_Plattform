"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import TradingInterface from './TradingInterface/page';



export default function UserDashboard() {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col p-3">
     <div className="h-screen w-full flex flex-col">
  <TradingInterface />
</div>
      </div>
  )
}