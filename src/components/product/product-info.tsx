import { ProductDetails } from "./product-details";
import { ProductIngredients } from "./product-ingredients";
import { ProductActions } from "./product-actions";
import type { FoodItem } from "@/lib/types";

interface ProductInfoProps {
  product: FoodItem;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      <ProductDetails product={product} />
      <ProductIngredients 
        ingredients={product.ingredients}
        allergens={product.allergens}
      />
      <ProductActions product={product} />
    </div>
  );
}