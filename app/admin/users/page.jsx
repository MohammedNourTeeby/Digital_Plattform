'use client';
import { useState } from 'react';
import { users } from '../../../data/users';
import UserTable from '@/components/UserTable';
import UserFilter from '@/components/UserFilter';

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    role: '',
    startDate: '',
    endDate: ''
  });

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.includes(searchTerm) || user.email.includes(searchTerm);
    const matchesStatus = !filters.status || user.status === filters.status;
    const matchesRole = !filters.role || user.role === filters.role;
    const matchesDate = (
      (!filters.startDate || new Date(user.joined) >= new Date(filters.startDate)) &&
      (!filters.endDate || new Date(user.joined) <= new Date(filters.endDate))
    );
    return matchesSearch && matchesStatus && matchesRole && matchesDate;
  });

  const handleRoleChange = (userId, newRole) => {
    // هنا سيتم تحديث البيانات عبر API في التطبيق الحقيقي
    console.log(`تغيير دور المستخدم ${userId} إلى ${newRole}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">إدارة المستخدمين</h1>
      
      <UserFilter 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filters={filters}
        onFilterChange={setFilters}
      />
      
      <div className="mt-6">
        <UserTable 
          users={filteredUsers} 
          onRoleChange={handleRoleChange}
        />
      </div>
    </div>
  );
}