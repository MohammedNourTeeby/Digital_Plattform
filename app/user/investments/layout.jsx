'use client';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

export default function InvestmentsLayout({ children }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">الاستثمارات والاشتراكات</h1>
      
      <Tabs defaultValue="plans">
        <TabsList className="mb-6">
          <TabsTrigger value="plans" asChild>
            <Link href="/user/investments/plans">الخطط المتاحة</Link>
          </TabsTrigger>
          <TabsTrigger value="subscriptions" asChild>
            <Link href="/user/investments/subscriptions">اشتراكاتي</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}