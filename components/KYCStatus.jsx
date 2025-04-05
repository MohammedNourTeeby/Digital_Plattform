export default function KYCStatus({ status }) {
    const statusMap = {
      verified: { text: 'تم التحقق', color: 'bg-green-100 text-green-800' },
      pending: { text: 'قيد المراجعة', color: 'bg-yellow-100 text-yellow-800' },
      unverified: { text: 'غير مُحقق', color: 'bg-red-100 text-red-800' }
    };
  
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-2">حالة التحقق:</h3>
        <span className={`px-3 py-1 rounded-full ${statusMap[status].color}`}>
          {statusMap[status].text}
        </span>
      </div>
    );
  }