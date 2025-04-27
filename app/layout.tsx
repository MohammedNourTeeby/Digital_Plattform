'use client'
import './globals.css';
import { Inter } from 'next/font/google';
import LeftSidebar from '@/app/user/components/LeftSidebar';
import RightSidebar from '@/app/user/components/RightSidbar';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [leftCollapsed, setLeftCollapsed] = useState(true);
  const [rightCollapsed, setRightCollapsed] = useState(true);

  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <div className="flex h-screen">
          <LeftSidebar 
            isCollapsed={leftCollapsed} 
            toggleCollapse={() => setLeftCollapsed(!leftCollapsed)} 
          />
          
          <main className="flex-1 p-4 overflow-y-auto relative">
            {children}
          </main>
          
          <RightSidebar
            isCollapsed={rightCollapsed}
            toggleCollapse={() => setRightCollapsed(!rightCollapsed)}
          />
        </div>
      </body>
    </html>
  );
}