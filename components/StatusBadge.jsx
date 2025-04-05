export default function StatusBadge({ status, large = false }) {
    const statusColors = {
      'ناجحة': 'bg-green-100 text-green-800',
      'معلقة': 'bg-yellow-100 text-yellow-800',
      'فاشلة': 'bg-red-100 text-red-800'
    };
  
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full 
        ${statusColors[status]} ${large ? 'text-sm' : 'text-xs'}`}>
        {status}
      </span>
    );
  }