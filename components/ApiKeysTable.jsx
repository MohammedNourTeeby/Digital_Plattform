'use client';
import { useState } from 'react';
import { keys } from '@/data/settings';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function ApiKeysTable() {
  const [apiKeys, setApiKeys] = useState(keys);

  const handleRevoke = (keyId) => {
    setApiKeys(keys.filter(key => key.id !== keyId));
  };

  return (
    <div className="bg-white rounded-xl shadow">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">المفاتيح الأمنية</h3>
          <Button variant="outline">إضافة مفتاح جديد</Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>الاسم</TableHead>
              <TableHead>النوع</TableHead>
              <TableHead>تاريخ الإنشاء</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiKeys.map((key) => (
              <TableRow key={key.id}>
                <TableCell>{key.name}</TableCell>
                <TableCell>{key.type}</TableCell>
                <TableCell>{key.createdAt}</TableCell>
                <TableCell>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleRevoke(key.id)}
                  >
                    إلغاء
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}