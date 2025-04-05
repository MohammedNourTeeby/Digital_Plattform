import AccountHeader from '@/components/AccountHeader'
export default function AccountLayout({ children }) {
    return (
      <div className="flex flex-col min-h-screen">
        {/* الهيدر الثابت */}
        <AccountHeader />
        
        {/* المحتوى المتغير */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    );
  }