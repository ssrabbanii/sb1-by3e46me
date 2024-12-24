import { FoodCard } from "@/components/browse/food-card";
import { mockFoodItems } from "@/lib/mock-data";

interface RelatedProductsProps {
  currentProductId: number;
  cuisine: string;
}

export function RelatedProducts({ currentProductId, cuisine }: RelatedProductsProps) {
  const relatedProducts = mockFoodItems
    .filter(item => 
      item.id !== currentProductId && 
      item.cuisines.includes(cuisine)
    )
    .slice(0, 3);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">You might also like</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((item) => (
          <FoodCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}