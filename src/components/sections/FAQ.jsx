import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/data/faq"
import { trackFaqExpand } from "@/lib/analytics"

export function FAQ() {
  const handleAccordionChange = (value) => {
    if (value) {
      const faq = faqs.find((_, index) => `item-${index}` === value)
      if (faq) {
        trackFaqExpand(faq.question)
      }
    }
  }

  return (
    <section id="faq" className="bg-muted/30 py-20 sm:py-32">
      <Container>
        <SectionHeader
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about ThymeSaver API. Can't find what you're looking for? Contact our support team."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion
            type="single"
            collapsible
            onValueChange={handleAccordionChange}
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}
