import  BalanceSummary  from '@/components/BalanceSummary';
import  TransactionTable from '@/components/TransactionTable';
import { walletBalance} from '../../../data/walletData';
import { transactions } from '../../../data/transactions';

export default function WalletPage() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">المحفظة المالية</h1>
      
      <BalanceSummary data={walletBalance} />
      
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">سجل المعاملات</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-100 rounded">الكل</button>
            <button className="px-4 py-2 bg-gray-100 rounded">إيداع</button>
            <button className="px-4 py-2 bg-gray-100 rounded">سحب</button>
          </div>
        </div>
        <TransactionTable data={transactions} />      </div>
    </div>
  );
}