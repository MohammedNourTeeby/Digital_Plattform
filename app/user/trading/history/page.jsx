import TradeHistory from '@/components/TradeHistory';
import { tradeHistory } from '@/data';

export default function TradeHistoryPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">سجل الصفقات</h1>
      
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <TradeHistory data={tradeHistory} />
      </div>
    </div>
  );
}