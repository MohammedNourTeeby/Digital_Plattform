export default function BalanceCard({ data }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500 mb-2">رصيد المحفظة</h3>
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold">{data.total.toLocaleString()}</span>
          <span className="text-gray-500">{data.currency}</span>
        </div>
        <div className="flex justify-between mt-4 text-sm">
          <div>
            <p className="text-gray-500">الودائع</p>
            <p className="font-medium">{data.deposits.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-500">الأرباح</p>
            <p className="font-medium text-green-600">+{data.profits.toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
  }