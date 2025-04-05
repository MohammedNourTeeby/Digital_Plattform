"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { href: '/admin', label: 'النظرة العامة' }, // تغيير هنا
    { href: '/admin/users', label: 'إدارة المستخدمين' }, // تم الإضافة
    { href: '/admin/plans', label: 'خطط الاستثمار' }, // تم الإضافة
    { href: '/admin/transactions', label: 'المعاملات' },
    { href: '/admin/trading', label: 'تحليل التداول' },
    { href: '/admin/reports', label: 'التقارير' },
    { href: '/admin/settings', label: 'الإعدادات' }



  ];

  return (
    <aside className="w-64 fixed right-0 top-0 h-full bg-white shadow-lg p-4">
      <div className="mt-16">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block p-3 rounded-lg mb-2 ${
              pathname === link.href
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}