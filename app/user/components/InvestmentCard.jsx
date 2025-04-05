export default function InvestmentCard({ data }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-4">الاستثمارات النشطة</h3>
        {data.map(investment => (
          <div key={investment.id} className="mb-4 last:mb-0">
            <div className="flex justify-between">
              <h4 className="font-medium">{investment.plan}</h4>
              <span className="text-blue-600">{investment.amount} {investment.currency}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${(investment.paid/investment.total)*100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>تم دفع {investment.paid}</span>
              <span>متبقي {investment.total - investment.paid}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }