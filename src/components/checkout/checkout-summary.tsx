import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/lib/cart/cart-store';
import { formatPrice } from '@/lib/cart/utils';

const DELIVERY_FEE = 2.99;

export function CheckoutSummary() {
  const { items, getTotalPrice } = useCartStore();
  const subtotal = getTotalPrice();
  const total = subtotal + DELIVERY_FEE;

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">
                {item.quantity} x ${formatPrice(item.price)}
              </p>
            </div>
            <p className="font-medium">
              ${formatPrice(item.quantity * item.price)}
            </p>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between font-semibold">
          <span>Subtotal</span>
          <span>${formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Delivery Fee</span>
          <span>${formatPrice(DELIVERY_FEE)}</span>
        </div>
        <Separator />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}