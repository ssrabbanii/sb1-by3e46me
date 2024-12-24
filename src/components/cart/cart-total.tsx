import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/cart/cart-store';
import { formatPrice } from '@/lib/cart/utils';

export function CartTotal() {
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  return (
    <div className="mt-4 space-y-4">
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>${formatPrice(getTotalPrice())}</span>
      </div>
      <Button 
        className="w-full bg-green-600 hover:bg-green-700"
        onClick={() => window.location.href = '/checkout'}
      >
        Proceed to Checkout
      </Button>
    </div>
  );
}