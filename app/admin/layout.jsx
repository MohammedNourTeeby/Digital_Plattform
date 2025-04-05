import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8 mr-64">{children}</main>
    </div>
  );
}