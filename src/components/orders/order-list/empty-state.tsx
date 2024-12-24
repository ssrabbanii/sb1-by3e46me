import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <ShoppingBag className="h-6 w-6 text-gray-400" />
      </div>
      <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
      <p className="text-gray-500 mb-4">
        When you place orders, they will appear here
      </p>
      <Button onClick={() => window.location.href = '/browse'}>
        Browse Food
      </Button>
    </div>
  );
}