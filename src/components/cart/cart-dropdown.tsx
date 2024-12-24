import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/lib/cart/cart-store';
import { CartList } from './cart-list';
import { CartTotal } from './cart-total';

export function CartDropdown() {
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const totalItems = getTotalItems();

  if (totalItems === 0) {
    return (
      <Button variant="ghost" className="relative">
        <ShoppingCart className="h-5 w-5" />
        <span className="sr-only">Shopping cart</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-green-600 text-white text-xs flex items-center justify-center">
            {totalItems}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="p-4">
          <h3 className="font-semibold mb-2">Shopping Cart</h3>
          <CartList />
          <CartTotal />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}