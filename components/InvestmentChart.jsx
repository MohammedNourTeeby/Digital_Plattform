import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function InvestmentChart({ investments }) {
  const data = investments.map(inv => ({
    name: inv.plan,
    amount: inv.amount,
    profit: inv.amount * (inv.profit / 100)
  }));

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'القيمة']} />
          <Bar dataKey="amount" fill="#3B82F6" name="المبلغ الأساسي" />
          <Bar dataKey="profit" fill="#10B981" name="الأرباح المتوقعة" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}