import { plans } from '@/data/plans';
import InvestmentPlanTable from '@/components/InvestmentPlanTable';

export default function PlansPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة الخطط الاستثمارية</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          إضافة خطة جديدة
        </button>
      </div>
      
      <InvestmentPlanTable plans={plans} />
    </div>
  );
}