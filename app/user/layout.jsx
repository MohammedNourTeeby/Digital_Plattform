// Layout.jsx
"use client";
import { useState } from 'react';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidbar';

export default function Layout({ children }) {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  const leftWidth = leftCollapsed ? 80 : 256; // 64*4 (tailwind uses rem)
  const rightWidth = rightCollapsed ? 80 : 256;

  return (
    <div className="relative h-screen">
      <LeftSidebar 
        isCollapsed={leftCollapsed} 
        setIsCollapsed={setLeftCollapsed} 
      />
      
      <RightSidebar 
        isCollapsed={rightCollapsed} 
        setIsCollapsed={setRightCollapsed} 
      />

      <main 
        className="h-full transition-all duration-300 ease-in-out"
        style={{
          marginLeft: `${leftWidth}px`,
          marginRight: `${rightWidth}px`,
        }}
      >
        <div className="p-8 h-full overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}