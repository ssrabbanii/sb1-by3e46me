import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/lib/cart/cart-store';
import { CartItem } from './cart-item';

export function CartList() {
  const items = useCartStore((state) => state.items);

  return (
    <ScrollArea className="h-[300px]">
      {items.map((item) => (
        <div key={item.id}>
          <CartItem item={item} />
          <Separator />
        </div>
      ))}
    </ScrollArea>
  );
}