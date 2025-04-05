import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import ExportButton from '@/components/ExportButton'; // تأكد من المسار الصحيح


export default function ReportsDashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">التقارير والتحليلات</h1>
        <div className="flex gap-4">
          <ExportButton format="excel" />
          <ExportButton format="pdf" />
        </div>
      </div>

      <Tabs defaultValue="financial">
        <TabsList className="mb-6">
          <TabsTrigger value="financial">
            <Link href="/admin/reports/financial">الأداء المالي</Link>
          </TabsTrigger>
          <TabsTrigger value="investments">
            <Link href="/admin/reports/investments">الاستثمارات</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}