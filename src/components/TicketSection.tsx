import { Ticket, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TicketSection() {
  const { t } = useLanguage();

  const TICKET_CATEGORIES = [
    { emoji: "🎭", name: t("tickets.theater"), description: t("tickets.theaterDesc") },
    { emoji: "🎵", name: t("tickets.concerts"), description: t("tickets.concertsDesc") },
    { emoji: "⚽", name: t("tickets.sports"), description: t("tickets.sportsDesc") },
    { emoji: "🎪", name: t("tickets.festivals"), description: t("tickets.festivalsDesc") },
  ];

  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
      <div className="mb-4 sm:mb-5 flex items-center gap-2.5">
        <div className="w-1 h-5 bg-primary rounded" />
        <span className="font-semibold text-sm sm:text-base">{t("tickets.title")}</span>
      </div>

      <div
        className="rounded-2xl border border-border p-4 sm:p-6"
        style={{ background: "hsl(var(--card))" }}
      >
        <div className="flex items-start gap-2.5 sm:gap-3 mb-4 sm:mb-5">
          <Ticket size={20} className="text-primary shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-xs sm:text-sm mb-1">{t("tickets.question")}</div>
            <div className="text-[11px] sm:text-xs text-foreground/70 leading-relaxed">{t("tickets.answer")}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-4 sm:mb-5">
          {TICKET_CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="rounded-xl p-2.5 sm:p-3 border border-border/40 bg-secondary/30"
            >
              <div className="text-lg sm:text-xl mb-1 sm:mb-1.5">{cat.emoji}</div>
              <div className="font-bold text-[11px] sm:text-xs mb-0.5 sm:mb-1">{cat.name}</div>
              <div className="text-[9px] sm:text-[10px] text-muted-foreground leading-relaxed">{cat.description}</div>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-3 sm:p-4 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5"
          style={{ background: "hsl(var(--primary) / 0.05)" }}
        >
          <div>
            <div className="font-bold text-xs sm:text-sm">iTicket.az</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground">{t("tickets.iticketDesc")}</div>
          </div>
          <a
            href="https://iticket.az"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-[11px] sm:text-xs font-semibold text-primary-foreground shrink-0"
            style={{ background: "hsl(var(--primary))" }}
          >
            <ExternalLink size={12} />
            {t("tickets.goToSite")}
          </a>
        </div>
      </div>
    </div>
  );
}
