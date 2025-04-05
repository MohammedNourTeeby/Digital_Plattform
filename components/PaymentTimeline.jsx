export default function PaymentTimeline({ payments }) {
  return (
    <div>
      <h4 className="font-semibold mb-4">جدول الدفعات</h4>
      <div className="space-y-3">
        {payments.map((payment, index) => (
          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">الدفعة {index + 1}</p>
              <p className="text-sm text-gray-500">{payment.date}</p>
            </div>
            <div className="text-right">
              <p className="font-bold">{payment.amount} {payment.currency}</p>
              <span className={`text-sm ${
                payment.status === 'paid' ? 'text-green-600' : 
                payment.status === 'pending' ? 'text-yellow-600' : 'text-gray-500'
              }`}>
                {payment.status === 'paid' ? 'تم الدفع' : 
                 payment.status === 'pending' ? 'قيد الانتظار' : 'قادم'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}