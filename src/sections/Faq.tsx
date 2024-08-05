import React from 'react';
import { Plus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {faqItems} from "../components/constants"
interface FAQItem {
  question: string;
  answer: string;
}

const FAQGridItem: React.FC<{ item: FAQItem; value: string }> = ({ item, value }) => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value={value} className="border-none">
      <AccordionTrigger className="flex justify-between p-4 text-left font-medium text-sm bg-[#f8f9ff] hover:bg-[#e8e9ff] rounded-lg transition-all duration-300 hover:no-underline">
        {item.question}
        <Plus className="h-4 w-4 shrink-0 text-blue-600 transition-transform duration-200" />
      </AccordionTrigger>
      <AccordionContent className="mt-2 p-4 text-sm bg-white rounded-lg shadow-inner">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const FAQ: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-semibold text-blue-600">Questions in mind?</h2>
        <h3 className="text-xl text-gray-600">Read our FAQ</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {faqItems.map((item, index) => (
          <FAQGridItem
            key={index}
            item={item}
            value={`item-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;