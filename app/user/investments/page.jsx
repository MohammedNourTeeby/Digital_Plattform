import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

export default function InvestmentsLayout({ children }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">الاستثمارات والاشتراكات</h1>
      
      <Tabs defaultValue="plans">
        <TabsList className="mb-6">
          <TabsTrigger value="plans">
            <Link href="/user/investments/plans">الخطط المتاحة</Link>
          </TabsTrigger>
          <TabsTrigger value="subscriptions">
            <Link href="/user/investments/subscriptions">اشتراكاتي</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {children}
    </div>
  );
}