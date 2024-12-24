import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PaymentMethod } from '@/lib/types';

interface PaymentFormProps {
  onSubmit: (paymentMethod: PaymentMethod) => Promise<void>;
}

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit_card');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(paymentMethod);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>
            Choose your preferred payment method
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={paymentMethod}
            onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit_card" id="credit_card" />
              <Label htmlFor="credit_card">Credit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="debit_card" id="debit_card" />
              <Label htmlFor="debit_card">Debit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
          </RadioGroup>

          {(paymentMethod === 'credit_card' || paymentMethod === 'debit_card') && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card_number">Card Number</Label>
                <Input
                  id="card_number"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" required />
                </div>
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={loading}
          >
            {loading ? 'Processing Payment...' : 'Pay Now'}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}