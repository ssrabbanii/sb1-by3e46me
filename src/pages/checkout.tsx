import { useState } from 'react';
import { useCartStore } from '@/lib/cart/cart-store';
import { useOrderStore } from '@/lib/orders/order-store';
import { Button } from '@/components/ui/button';
import { CheckoutForm } from '@/components/checkout/checkout-form';
import { CheckoutSummary } from '@/components/checkout/checkout-summary';
import { PaymentForm } from '@/components/checkout/payment-form';
import { createOrder } from '@/lib/orders/utils';
import type { PaymentMethod } from '@/lib/types';
import { toast } from 'sonner';

export function Checkout() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const { addOrder } = useOrderStore();
  const [step, setStep] = useState<'details' | 'payment'>('details');
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const handleDetailsSubmit = async (details: any) => {
    setOrderDetails(details);
    setStep('payment');
  };

  const handlePaymentSubmit = async (paymentMethod: PaymentMethod) => {
    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const order = createOrder(items, orderDetails);
      addOrder(order);
      clearCart();
      toast.success('Order placed successfully!');
      window.location.href = '/orders';
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Button onClick={() => window.location.href = '/browse'}>
          Browse Food
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          {step === 'details' ? (
            <>
              <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>
              <CheckoutForm onSubmit={handleDetailsSubmit} />
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-4">Payment</h2>
              <PaymentForm onSubmit={handlePaymentSubmit} />
            </>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}