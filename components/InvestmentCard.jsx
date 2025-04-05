export default function InvestmentCard({ investment }) {
    return (
      <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{investment.plan}</h3>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
            {investment.profit}% ربح
          </span>
        </div>
        <div className="mt-4 space-y-2">
          <p className="flex justify-between">
            <span className="text-gray-500">المبلغ:</span>
            <span className="font-medium">${investment.amount.toLocaleString()}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">المدة:</span>
            <span className="font-medium">{investment.duration}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">تاريخ البدء:</span>
            <span className="font-medium">{investment.start}</span>
          </p>
        </div>
      </div>
    );
  }