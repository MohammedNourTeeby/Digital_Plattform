import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">منصة التداول</h1>
        <div className="flex gap-4">
          <Link href="/admin" className="hover:text-blue-400 transition-colors">
            لوحة المدير
          </Link>
          <Link href="/user" className="hover:text-blue-400 transition-colors">
            لوحة المستخدم
          </Link>
        </div>
      </nav>
    </header>
  );
}