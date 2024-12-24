import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does delivery usually take?',
    answer: 'Delivery times typically range from 20-45 minutes depending on your location and the restaurant. You can track your order in real-time through our app.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and digital wallets including PayPal. Cash payments are not accepted for hygiene and safety reasons.',
  },
  {
    question: 'How does the food bank contribution work?',
    answer: '10% of every order value is automatically contributed to our partner food banks. You can track the impact of your contributions in the ByteBank section.',
  },
  {
    question: 'Can I schedule an order for later?',
    answer: 'Yes! You can schedule orders up to 7 days in advance. Simply select your preferred delivery date and time during checkout.',
  },
  {
    question: 'What if there is an issue with my order?',
    answer: 'Our customer support team is available 24/7. You can report any issues through the app or contact us directly, and we will make it right.',
  },
];

export function FAQ() {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about ordering with BudgetBites
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}