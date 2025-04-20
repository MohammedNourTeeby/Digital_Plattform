import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react'; // أضف هذا الاستيراد

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'منصة التداول',
  description: 'منصة تداول العملات الرقمية',
};

// أضف تعريف الأنواع هنا
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}