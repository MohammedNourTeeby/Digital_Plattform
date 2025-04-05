import NotificationItem from '@/components/NotificationItem';
import { notifications } from '../../../../data/notificationsData';

export default function NotificationsPage() {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">الإشعارات غير المقروءة</h2>
          <button className="text-blue-600 hover:text-blue-800">تعيين الكل كمقروء</button>
        </div>
        
        <div className="space-y-4">
          {notifications.map(notification => (
            <NotificationItem 
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      </div>
    </div>
  );
}