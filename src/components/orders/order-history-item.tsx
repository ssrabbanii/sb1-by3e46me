import type { Order } from '@/lib/orders/types';
import { formatPrice } from '@/lib/cart/utils';
import { formatDate } from '@/lib/orders/utils';
import { STATUS_LABELS } from '@/lib/orders/constants';

interface OrderHistoryItemProps {
  order: Order;
}

export function OrderHistoryItem({ order }: OrderHistoryItemProps) {
  return (
    <div className="bg-white rounded-lg p-4 flex justify-between items-center">
      <div>
        <p className="font-medium">Order #{order.id}</p>
        <p className="text-sm text-gray-500">
          {formatDate(order.createdAt)}
        </p>
      </div>
      <div className="text-right">
        <p className="font-medium">${formatPrice(order.total)}</p>
        <p className="text-sm text-gray-500">{STATUS_LABELS[order.status]}</p>
      </div>
    </div>
  );
}