'use client';
import { useState, useEffect } from 'react';
import { transactions } from '../../../data/transactions';
import TransactionTable from '@/components/TransactionTable';

export default function TransactionsPage() {
  const [filters, setFilters] = useState({
    type: '',
    status: '',
    startDate: '',
    endDate: ''
  });

  const filteredTransactions = transactions.filter(tx => {
    return (
      (!filters.type || tx.type === filters.type) &&
      (!filters.status || tx.status === filters.status) &&
      (!filters.startDate || new Date(tx.date) >= new Date(filters.startDate)) &&
      (!filters.endDate || new Date(tx.date) <= new Date(filters.endDate))
    );
  });

  // محاكاة التحديث الحي من البلوكتشين
  useEffect(() => {
    const interval = setInterval(() => {
      // هنا سيتم استدعاء API للتحديث
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">إدارة المعاملات المالية</h1>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select 
            onChange={(e) => setFilters({...filters, type: e.target.value})}
            className="border rounded p-2"
          >
            <option value="">كل الأنواع</option>
            <option value="إيداع">إيداع</option>
            <option value="سحب">سحب</option>
          </select>
          
          <select 
            onChange={(e) => setFilters({...filters, status: e.target.value})}
            className="border rounded p-2"
          >
            <option value="">كل الحالات</option>
            <option value="ناجحة">ناجحة</option>
            <option value="معلقة">معلقة</option>
          </select>
          
          <input 
            type="date" 
            onChange={(e) => setFilters({...filters, startDate: e.target.value})}
            className="border rounded p-2"
          />
          
          <input 
            type="date" 
            onChange={(e) => setFilters({...filters, endDate: e.target.value})}
            className="border rounded p-2"
          />
        </div>
      </div>

      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}