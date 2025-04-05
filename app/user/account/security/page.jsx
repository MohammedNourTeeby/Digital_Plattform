import TwoFactorAuth from '@/components/TwoFactorAuth';
import LoginHistory from '@/components/LoginHistory';

export default function SecurityPage() {
  return (
    <div className="max-w-2xl space-y-8">
            <h2 className="text-xl font-bold mb-6">إعدادات الأمان</h2>

      <TwoFactorAuth />
      <LoginHistory />
    </div>
  );
}