import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQSection() {
  const { t } = useLanguage();

  const FAQ_DATA = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
  ];

  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
      <div className="mb-4 sm:mb-5 flex items-center gap-2.5">
        <div className="w-1 h-5 bg-primary rounded" />
        <span className="font-semibold text-sm sm:text-base">{t("faq.title")}</span>
      </div>

      <div className="rounded-2xl border border-border p-3.5 sm:p-5" style={{ background: "hsl(var(--card))" }}>
        <Accordion type="single" collapsible className="w-full">
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-border/50">
              <AccordionTrigger className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[11px] sm:text-xs text-foreground/70 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
