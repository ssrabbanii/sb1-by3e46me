import { OrderListItem } from './order-list-item';
import { EmptyState } from './empty-state';
import type { Order } from '@/lib/orders/types';

interface OrderListProps {
  orders: Order[];
  title: string;
}

export function OrderList({ orders, title }: OrderListProps) {
  if (orders.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <OrderListItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}