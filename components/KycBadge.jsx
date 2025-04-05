export default function KycBadge({ status }) {
    const statusColors = {
      'مكتمل': 'bg-green-100 text-green-800',
      'قيد المراجعة': 'bg-yellow-100 text-yellow-800',
      'غير مكتمل': 'bg-red-100 text-red-800'
    };
  
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
        {status}
      </span>
    );
  }