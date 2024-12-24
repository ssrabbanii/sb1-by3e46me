import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useCartStore } from "@/lib/cart/cart-store";
import type { FoodItem } from "@/lib/types";

interface ProductActionsProps {
  product: FoodItem;
}

export function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart`);
  };

  return (
    <div className="bg-white p-6 rounded-lg space-y-4">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>
      <Button 
        className="w-full bg-green-600 hover:bg-green-700"
        size="lg"
        onClick={handleAddToCart}
      >
        Add to Cart - ${(product.price * quantity).toFixed(2)}
      </Button>
    </div>
  );
}