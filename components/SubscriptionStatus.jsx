export default function SubscriptionStatus({ subscription }) {
    const statusColors = {
      active: 'bg-green-100 text-green-800',
      expired: 'bg-gray-100 text-gray-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };
  
    return (
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold">{subscription.planName}</h3>
          <p className="text-gray-500">تاريخ البدء: {subscription.startDate}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div>
            <p className="text-right">المبلغ المستثمر</p>
            <p className="font-bold">{subscription.amount} {subscription.currency}</p>
          </div>
          
          <span className={`px-3 py-1 rounded-full ${statusColors[subscription.status]}`}>
            {subscription.status === 'active' ? 'نشط' : 
             subscription.status === 'expired' ? 'منتهي' : 'معلق'}
          </span>
        </div>
      </div>
    );
  }