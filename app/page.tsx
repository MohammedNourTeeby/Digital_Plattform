// app/page.tsx
"use client";
import { useState } from 'react';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import FinancialDashboard from '@/components/FinancialDashboard';

export default function Home() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header
        toggleLeftSidebar={() => setIsLeftOpen(!isLeftOpen)}
        toggleRightSidebar={() => setIsRightOpen(!isRightOpen)}
        isLeftOpen={isLeftOpen}
        isRightOpen={isRightOpen}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar isOpen={isLeftOpen} setIsOpen={setIsLeftOpen} />
        
        <main className="flex-1 overflow-y-auto transition-all duration-300 pt-16">
          <div className="p-4 md:p-6">
            <FinancialDashboard />
          </div>
        </main>

        <RightSidebar isOpen={isRightOpen} setIsOpen={setIsRightOpen} />
      </div>
    </div>
  );
}