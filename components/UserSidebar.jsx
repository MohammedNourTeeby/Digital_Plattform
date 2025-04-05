"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function UserSidebar() {
  const pathname = usePathname();

  const userLinks = [
    { href: '/user', label: 'الرئيسية' },
    { href: '/user/wallet', label: 'المحفظة' },
    { href: '/user/investments', label: 'الاستثمارات' },
    { href: '/user/trading', label: 'التداول' },
    { href: '/user/reports', label: 'التقارير' },

    { href: '/user/account', label: 'إدارة الحساب' }

  ];

  return (
    <aside className="w-64 fixed right-0 top-0 h-full bg-white shadow-lg p-4">
      <div className="mt-16">
        <h3 className="text-lg font-bold mb-4 text-gray-700">لوحة التحكم</h3>
        {userLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block p-3 rounded-lg mb-2 text-sm ${
              pathname === link.href
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}