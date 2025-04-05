import SubscriptionStatus from '@/components/SubscriptionStatus';
import PaymentTimeline from '@/components/PaymentTimeline';
import { userSubscriptions } from '../../../../data/userSubscriptions';

export default function SubscriptionsPage() {
  return (
    <div className="space-y-8">
      {userSubscriptions.map(sub => (
        <div key={sub.id} className="bg-white rounded-xl shadow p-6">
          <SubscriptionStatus subscription={sub} />
          <PaymentTimeline payments={sub.payments} />
        </div>
      ))}
    </div>
  );
}