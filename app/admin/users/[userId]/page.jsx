"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { users } from '@/data/users';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import KycBadge from '@/components/KycBadge';

export default function page() {
  const params = useParams();
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // استخراج params بشكل غير متزامن
    const fetchParams = async () => {
      const resolvedParams = await params;
      setUserId(resolvedParams.userId);
    };
    fetchParams();
  }, [params]);

  useEffect(() => {
    if (userId) {
      const foundUser = users.find(u => u.id === Number(userId));
      setUser(foundUser);
      setLoading(false);
    }
  }, [userId]);

  if (loading) {
    return <div className="p-6">جاري التحميل...</div>;
  }

  if (!user) {
    return <div className="p-6">المستخدم غير موجود</div>;
  }


  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <KycBadge status={user.kyc} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">البريد الإلكتروني: {user.email}</p>
            <p className="text-gray-600">تاريخ التسجيل: {user.joined}</p>
          </div>
          <div>
            <p className="text-gray-600">الرصيد الحالي: ${user.balance.toLocaleString()}</p>
            <p className="text-gray-600">الدور الحالي: {user.role}</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid grid-cols-2 w-64 mb-4">
          <TabsTrigger value="transactions">المعاملات</TabsTrigger>
          <TabsTrigger value="investments">الاستثمارات</TabsTrigger>
        </TabsList>
        
        <TabsContent value="transactions">
          <div className="bg-white rounded-lg shadow p-6">
            {user.transactions.map((tran, i) => (
              <div key={i} className="border-b py-2">
                <p>{tran.type} - ${tran.amount} - {tran.date}</p>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="investments">
          <div className="bg-white rounded-lg shadow p-6">
            {user.investments.map((inv, i) => (
              <div key={i} className="border-b py-2">
                <p>{inv.plan} - ${inv.amount} - بدء: {inv.start}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}