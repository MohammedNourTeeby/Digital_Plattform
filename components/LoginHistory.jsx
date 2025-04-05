export default function LoginHistory() {
    const logins = [
      { date: '2024-03-20 14:30', device: 'iPhone 13', location: 'الرياض', status: 'ناجح' },
      { date: '2024-03-19 09:15', device: 'Chrome - Windows', location: 'جدة', status: 'فشل' }
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4">سجل الدخول</h3>
        <div className="space-y-3">
          {logins.map((login, i) => (
            <div key={i} className="flex items-center justify-between p-3 border rounded">
              <div>
                <p className="font-medium">{login.date}</p>
                <p className="text-sm text-gray-500">{login.device}</p>
              </div>
              <div className="text-right">
                <p>{login.location}</p>
                <span className={`text-sm ${
                  login.status === 'ناجح' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {login.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }