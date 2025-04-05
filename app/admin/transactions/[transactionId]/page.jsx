import { transactions } from '@/data/transactions';
import TransactionTimeline from '@/components/TransactionTimeline';
import StatusBadge from '@/components/StatusBadge';
import { getBlockchainData } from '@/data/blockchain';

export default function TransactionDetail({ params }) {
  const tx = transactions.find(t => t.id === params.transactionId);
  const blockchainData = getBlockchainData(tx.txHash);

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2">تفاصيل المعاملة #{tx.id}</h2>
            <StatusBadge status={tx.status} large />
          </div>
          <div className="text-sm text-gray-500">
            <p>TX Hash: {tx.txHash}</p>
            <p>Confirmations: {blockchainData.confirmations}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-500 mb-2">المرسل</h3>
            <p className="font-medium">{tx.from}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-500 mb-2">المستلم</h3>
            <p className="font-medium">{tx.to}</p>
          </div>
        </div>

        <TransactionTimeline tx={tx} />
      </div>
    </div>
  );
}