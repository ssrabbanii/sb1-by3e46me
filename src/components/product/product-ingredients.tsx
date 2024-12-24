import { Separator } from "@/components/ui/separator";
import { AlertCircle } from "lucide-react";

interface ProductIngredientsProps {
  ingredients?: string[];
  allergens?: string[];
}

export function ProductIngredients({ ingredients, allergens }: ProductIngredientsProps) {
  return (
    <div className="space-y-6">
      <Separator />
      
      {ingredients && ingredients.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Ingredients</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      {allergens && allergens.length > 0 && (
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-yellow-800 mb-2">
            <AlertCircle className="h-4 w-4" />
            <h3 className="font-semibold">Allergens</h3>
          </div>
          <p className="text-yellow-800">
            Contains: {allergens.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
}