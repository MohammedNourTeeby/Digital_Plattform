export default function TransactionTimeline({ tx }) {
    const steps = [
      { status: 'مبدئة', time: tx.date },
      { status: 'قيد المعالجة', time: '2024-03-15 14:35:00' },
      { status: 'مؤكدة', time: '2024-03-15 14:45:00' }
    ];
  
    return (
      <div className="border-l-2 border-gray-200 pl-4 relative">
        {steps.map((step, index) => (
          <div key={index} className="mb-6 relative">
            <div className={`absolute w-3 h-3 rounded-full -left-[9px] ${index <= 1 ? 'bg-blue-500' : 'bg-gray-300'}`} />
            <div className="ml-4">
              <h4 className="font-medium">{step.status}</h4>
              <p className="text-sm text-gray-500">{step.time}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }