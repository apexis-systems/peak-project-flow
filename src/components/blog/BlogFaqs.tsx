import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { BlogFaq } from "@/types/blog";

interface BlogFaqsProps {
  faqs: BlogFaq[];
}

export function BlogFaqs({ faqs }: BlogFaqsProps) {
  if (!faqs.length) return null;

  return (
    <div className="mt-16 border-t border-border/60 pt-12">
      <h2 className="mb-6 font-display text-xl font-bold text-foreground sm:text-2xl">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`blog-faq-${i}`}
            className="rounded-xl border border-border/60 bg-card px-6"
          >
            <AccordionTrigger className="text-left font-display text-sm font-medium hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="font-light leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
