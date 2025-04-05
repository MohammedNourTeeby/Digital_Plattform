import { auditLogs } from '@/data/auditLogs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function AuditLogsTable() {
  return (
    <div className="bg-white rounded-xl shadow">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-6">سجلات المراجعة الأمنية</h3>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>التاريخ</TableHead>
              <TableHead>النشاط</TableHead>
              <TableHead>المستخدم</TableHead>
              <TableHead>التفاصيل</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.timestamp}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell className="max-w-[300px] truncate">
                  {log.details}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}