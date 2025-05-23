// app/user/account/layout.jsx
'use client';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

export default function AccountLayout({ children }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">إدارة الحساب</h1>
      
      <Tabs defaultValue="profile">
        <TabsList className="mb-6">
          <TabsTrigger value="profile" asChild>
            <Link href="/user/account/profile">الملف الشخصي</Link>
          </TabsTrigger>
          <TabsTrigger value="kyc" asChild>
            <Link href="/user/account/kyc">التحقق KYC</Link>
          </TabsTrigger>
          <TabsTrigger value="security" asChild>
            <Link href="/user/account/security">الأمان</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}