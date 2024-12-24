import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Owner',
    restaurant: 'The Italian Kitchen',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    quote: 'BudgetBites has transformed our business. Our online orders have increased by 45% since joining the platform.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Manager',
    restaurant: 'Sushi Express',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    quote: 'The platform is incredibly easy to use, and the support team is always there when we need them.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Owner',
    restaurant: 'Taco House',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    quote: 'Not only have we increased our revenue, but we are also proud to be part of the ByteBank initiative.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Partners Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join thousands of satisfied restaurant partners on BudgetBites
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">
                  {testimonial.role}, {testimonial.restaurant}
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.quote}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}