import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'منصة التداول',
  description: 'منصة تداول العملات الرقمية',
};

export default function RootLayout({ children }) {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  const leftWidth = leftCollapsed ? '64px' : '256px';
  const rightWidth = rightCollapsed ? '64px' : '256px';

  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <div className="flex h-screen">
          {/* الشريط الجانبي الأيسر */}
          <LeftSidebar 
            isCollapsed={leftCollapsed} 
            toggleCollapse={() => setLeftCollapsed(!leftCollapsed)}
            width={leftWidth}
          />

          {/* المحتوى الرئيسي */}
          <main 
            className="flex-1 p-4 overflow-y-auto transition-all"
            style={{
              marginLeft: leftWidth,
              marginRight: rightWidth
            }}
          >
            {children}
          </main>

          {/* الشريط الجانبي الأيمن */}
          <RightSidebar 
            isCollapsed={rightCollapsed} 
            toggleCollapse={() => setRightCollapsed(!rightCollapsed)}
            width={rightWidth}
          />
        </div>
      </body>
    </html>
  );
}