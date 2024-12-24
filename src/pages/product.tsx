import { useEffect, useState } from 'react';
import { ProductGallery } from '@/components/product/product-gallery';
import { ProductInfo } from '@/components/product/product-info';
import { RelatedProducts } from '@/components/product/related-products';
import { mockFoodItems } from '@/lib/mock-data';
import type { FoodItem } from '@/lib/types';
import { Button } from '@/components/ui/button';

export function Product() {
  const [product, setProduct] = useState<FoodItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // In a real app, fetch from API based on ID from URL params
        const id = new URLSearchParams(window.location.search).get('id');
        const item = mockFoodItems.find(item => item.id === Number(id));
        
        if (!item) {
          throw new Error('Product not found');
        }

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setProduct({
          ...item,
          description: "Made with fresh ingredients, this dish represents the perfect blend of traditional recipes and modern culinary techniques. Each bite delivers a harmonious combination of flavors that will satisfy your cravings.",
          ingredients: ["Fresh tomatoes", "Mozzarella", "Basil", "Extra virgin olive oil", "Sea salt"],
          allergens: ["Dairy", "Gluten"],
          preparationTime: "20-25 minutes",
          images: [
            item.image,
            'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
          ],
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 bg-gray-200 rounded"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">
          {error || 'Product not found'}
        </h2>
        <Button onClick={() => window.location.href = '/browse'}>
          Back to Browse
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="grid lg:grid-cols-2 gap-8">
        <ProductGallery images={product.images || [product.image]} />
        <ProductInfo product={product} />
      </div>
      <RelatedProducts 
        currentProductId={product.id} 
        cuisine={product.cuisines[0]} 
      />
    </div>
  );
}