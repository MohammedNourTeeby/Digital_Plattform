export default function NotificationItem({ notification }) {
    return (
      <div className={`p-4 rounded-lg ${
        notification.unread ? 'bg-blue-50 border-l-4 border-blue-500' : 'bg-white'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`w-2 h-2 mt-2 rounded-full ${
            notification.unread ? 'bg-blue-500' : 'bg-gray-300'
          }`} />
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h4 className="font-medium">{notification.title}</h4>
              <span className="text-sm text-gray-500">{notification.time}</span>
            </div>
            <p className="text-gray-600 mt-1">{notification.message}</p>
            
            {notification.type === 'alert' && (
              <button className="mt-2 text-blue-600 hover:text-blue-800">
                عرض التفاصيل
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }