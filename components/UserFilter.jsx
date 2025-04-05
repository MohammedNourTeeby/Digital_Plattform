export default function UserFilter({ searchTerm, onSearchChange, filters, onFilterChange }) {
    const countries = ['السعودية', 'الإمارات', 'مصر', 'الكويت'];
    const investmentPlans = ['الخطة الأساسية', 'الخطة الذهبية', 'الخطة المميزة'];
  
    return (
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">بحث سريع</label>
            <input
              type="text"
              placeholder="بحث بالاسم أو البريد..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700">البلد</label>
            <select
              value={filters.country}
              onChange={(e) => onFilterChange({ ...filters, country: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            >
              <option value="">الكل</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700">حالة التحقق</label>
            <select
              value={filters.kyc}
              onChange={(e) => onFilterChange({ ...filters, kyc: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            >
              <option value="">الكل</option>
              <option value="مكتمل">مكتمل</option>
              <option value="قيد المراجعة">قيد المراجعة</option>
            </select>
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700">الخطة الاستثمارية</label>
            <select
              value={filters.plan}
              onChange={(e) => onFilterChange({ ...filters, plan: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            >
              <option value="">الكل</option>
              {investmentPlans.map((plan) => (
                <option key={plan} value={plan}>{plan}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }