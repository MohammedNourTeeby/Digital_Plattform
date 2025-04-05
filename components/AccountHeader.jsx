'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AccountHeader() {
  const pathname = usePathname();
  
  const links = [
    { href: '/user/account/profile', label: 'الملف الشخصي' },
    { href: '/user/account/security', label: 'الأمان' },
    { href: '/user/account/kyc', label: 'التحقق KYC' }
  ];

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex space-x-4 space-x-reverse">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 border-b-2 ${
                pathname === link.href
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}