import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const orders = [
  {
    id: '#12345',
    customer: 'John Doe',
    items: ['Margherita Pizza', 'Garlic Bread'],
    total: '$32.50',
    status: 'preparing',
    time: '5 mins ago',
  },
  {
    id: '#12344',
    customer: 'Jane Smith',
    items: ['Pepperoni Pizza', 'Coke'],
    total: '$28.75',
    status: 'ready',
    time: '12 mins ago',
  },
  {
    id: '#12343',
    customer: 'Mike Johnson',
    items: ['Hawaiian Pizza', 'Wings'],
    total: '$45.20',
    status: 'delivered',
    time: '25 mins ago',
  },
];

const statusColors = {
  preparing: 'bg-yellow-100 text-yellow-800',
  ready: 'bg-green-100 text-green-800',
  delivered: 'bg-gray-100 text-gray-800',
};

export function OrdersList() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Recent Orders</h2>
        <Button variant="outline">View All Orders</Button>
      </div>
      
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.items.join(', ')}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Badge className={statusColors[order.status as keyof typeof statusColors]}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.time}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
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