import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Star } from "lucide-react";
import type { FoodItem } from "@/lib/types";

interface ProductDetailsProps {
  product: FoodItem;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-500">{product.restaurant}</p>
          </div>
          <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="font-medium">{product.rating}</span>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          {product.cuisines.map((cuisine) => (
            <Badge key={cuisine} variant="secondary">
              {cuisine}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <p className="text-gray-600">{product.description}</p>
        
        <div className="flex items-center text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          <span>Preparation time: {product.preparationTime}</span>
        </div>
      </div>
    </div>
  );
}