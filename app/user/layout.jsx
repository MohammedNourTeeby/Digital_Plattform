import UserSidebar from '@/components/UserSidebar';

export default function UserLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <UserSidebar />
      <main className="flex-1 p-8 mr-64">{children}</main>
    </div>
  );
}