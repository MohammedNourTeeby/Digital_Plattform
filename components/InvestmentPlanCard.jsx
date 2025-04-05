export default function InvestmentPlanCard({ plan }) {
    return (
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="text-xl font-bold text-center mb-2">{plan.name}</h3>
          <p className="text-gray-500 text-center">{plan.description}</p>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex justify-between">
            <span>العائد الشهري:</span>
            <span className="font-bold text-green-600">{plan.monthlyReturn}%</span>
          </div>
          
          <div className="flex justify-between">
            <span>مدة الخطة:</span>
            <span>{plan.duration} أشهر</span>
          </div>
          
          <div className="flex justify-between">
            <span>الحد الأدنى:</span>
            <span>{plan.minAmount} {plan.currency}</span>
          </div>
          
          <div className="pt-4">
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              اشترك الآن
            </button>
          </div>
        </div>
      </div>
    );
  }