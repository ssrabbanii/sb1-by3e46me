import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import type { CartItem as CartItemType } from '@/lib/cart/types';
import { useCartStore } from '@/lib/cart/cart-store';
import { formatPrice } from '@/lib/cart/utils';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="py-4">
      <div className="flex gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-16 w-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h4 className="font-medium">{item.name}</h4>
          <p className="text-sm text-gray-500">{item.restaurant}</p>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">${formatPrice(item.price * item.quantity)}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-red-500"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}