import { Card } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 5000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 6890 },
  { name: 'Sat', revenue: 8390 },
  { name: 'Sun', revenue: 7490 },
];

export function RevenueChart() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Revenue Overview</h3>
          <p className="text-sm text-gray-500">Last 7 days</p>
        </div>
        
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#666' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#666' }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                contentStyle={{ background: '#fff', border: '1px solid #f0f0f0' }}
                formatter={(value) => [`$${value}`, 'Revenue']}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#16a34a"
                strokeWidth={2}
                dot={{ fill: '#16a34a' }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}