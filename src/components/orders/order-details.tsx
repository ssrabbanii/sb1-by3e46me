import type { Order } from '@/lib/orders/types';
import { formatPrice } from '@/lib/cart/utils';
import { formatTime } from '@/lib/orders/utils';

interface OrderDetailsProps {
  order: Order;
}

export function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-medium mb-2">Order Details</h3>
        <div className="space-y-2 text-sm">
          <p>Order #{order.id}</p>
          <p>Total: ${formatPrice(order.total)}</p>
          <p>Delivery to: {order.deliveryAddress}</p>
          <p>
            Estimated delivery:{' '}
            {formatTime(order.estimatedDeliveryTime)}
          </p>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-2">Items</h3>
        <div className="space-y-2 text-sm">
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.quantity}x {item.name}
              </span>
              <span>${formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}