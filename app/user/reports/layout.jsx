// app/user/reports/layout.jsx
'use client';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

export default function ReportsLayout({ children }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">التقارير والإشعارات</h1>
      
      <Tabs defaultValue="financial">
        <TabsList className="mb-6">
          <TabsTrigger value="financial" asChild>
            <Link href="/user/reports/financial">التقارير المالية</Link>
          </TabsTrigger>
          <TabsTrigger value="notifications" asChild>
            <Link href="/user/reports/notifications">الإشعارات</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}