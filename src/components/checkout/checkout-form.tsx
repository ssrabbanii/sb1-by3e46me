import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

interface CheckoutFormProps {
  onSubmit: () => Promise<void>;
}

export function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit();
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Delivery Address</Label>
        <Input id="address" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="instructions">Delivery Instructions (Optional)</Label>
        <Input id="instructions" />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-green-600 hover:bg-green-700"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Place Order'}
      </Button>
    </form>
  );
}