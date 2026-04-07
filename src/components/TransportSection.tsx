import { Train, Bus, Car, ShieldAlert, ExternalLink, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TransportSection() {
  const { t } = useLanguage();

  const TRANSPORT_DATA = [
    {
      icon: Train,
      name: t("transport.railway"),
      address: t("transport.railAddress"),
      phone: t("transport.railPhone"),
      description: t("transport.railDesc"),
      destinations: t("transport.railDestinations"),
      website: "https://ady.az",
      websiteLabel: "ady.az",
    },
    {
      icon: Bus,
      name: t("transport.busStation"),
      address: t("transport.busAddress"),
      phone: t("transport.busPhone"),
      description: t("transport.busDesc"),
      destinations: t("transport.busDestinations"),
      website: "https://www.bas.gov.az",
      websiteLabel: "bas.gov.az",
    },
  ];

  const PRICES = [
    { emoji: "🚇", label: t("transport.pricesMetro"), price: "0.60 AZN" },
    { emoji: "🚌", label: t("transport.pricesBus"), price: "0.60 AZN+" },
    { emoji: "🚕", label: t("transport.pricesTaxi"), price: "0.80–1.20 AZN/km" },
    { emoji: "✈️", label: t("transport.pricesAirport"), price: "1.30 AZN" },
    { emoji: "💳", label: t("transport.pricesBakiKart"), price: "2.00 AZN" },
  ];

  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
      <div className="mb-4 sm:mb-5 flex items-center gap-2.5">
        <div className="w-1 h-5 bg-primary rounded" />
        <span className="font-semibold text-sm sm:text-base">{t("transport.title")}</span>
      </div>

      {/* Railways & Bus */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
        {TRANSPORT_DATA.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-border p-4 sm:p-5"
            style={{ background: "hsl(var(--card))" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <item.icon size={18} className="text-primary" />
              <span className="font-bold text-xs sm:text-sm">{item.name}</span>
            </div>
            <div className="text-[11px] sm:text-xs text-muted-foreground mb-1">{item.address}</div>
            <div className="text-[11px] sm:text-xs text-muted-foreground mb-2">{item.phone}</div>
            <div className="text-[11px] sm:text-xs text-foreground/80 leading-relaxed mb-2">{item.description}</div>
            <div className="text-[11px] sm:text-xs rounded-lg p-2 sm:p-2.5 border border-border/50 mb-3" style={{ background: "hsl(var(--secondary))" }}>
              <span className="font-semibold text-primary">{t("transport.directions")} </span>
              <span className="text-foreground/70">{item.destinations}</span>
            </div>
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink size={12} />
              {t("transport.officialSite")} {item.websiteLabel}
            </a>
          </div>
        ))}
      </div>

      {/* Transport Prices */}
      <div className="mt-4 sm:mt-5 rounded-2xl border border-border p-4 sm:p-6" style={{ background: "hsl(var(--card))" }}>
        <div className="flex items-center gap-2 mb-3">
          <CreditCard size={16} className="text-primary" />
          <span className="font-bold text-xs sm:text-sm">{t("contact.prices")}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {PRICES.map((p) => (
            <div key={p.label} className="flex justify-between sm:flex-col sm:items-center sm:text-center text-[11px] sm:text-xs px-3 py-2.5 rounded-lg bg-secondary/40 border border-border/30">
              <span className="text-muted-foreground">{p.emoji} {p.label}</span>
              <span className="font-semibold text-foreground">{p.price}</span>
            </div>
          ))}
        </div>
        <div className="text-[9px] sm:text-[10px] text-muted-foreground/60 pt-2 mt-2 border-t border-border/30">
          {t("contact.pricesNote")}
        </div>
      </div>

      {/* Car Rental */}
      <div className="mt-4 sm:mt-5 rounded-2xl border border-border p-4 sm:p-5" style={{ background: "hsl(var(--card))" }}>
        <div className="flex items-center gap-2 mb-3">
          <Car size={16} className="text-primary" />
          <span className="font-bold text-xs sm:text-sm">{t("transport.carRental")}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <span className="font-bold text-xs sm:text-sm">{t("transport.avisName")}</span>
          <span className="text-[11px] sm:text-xs px-2 py-0.5 rounded-full border border-primary/20 bg-primary/10 text-primary font-semibold w-fit">
            {t("transport.avisPrice")}
          </span>
        </div>
        <div className="text-[11px] sm:text-xs text-foreground/80 leading-relaxed mb-1.5">{t("transport.carDesc")}</div>
        <div className="text-[11px] sm:text-xs text-muted-foreground">🔗 {t("transport.avisSite")}</div>
      </div>

      {/* Disclaimer */}
      <div
        className="mt-4 sm:mt-5 rounded-2xl border border-border/50 p-3 sm:p-4 flex gap-2.5 sm:gap-3 items-start"
        style={{ background: "hsl(var(--destructive) / 0.05)" }}
      >
        <ShieldAlert size={18} className="text-destructive shrink-0 mt-0.5" />
        <div className="text-[11px] sm:text-xs text-foreground/70 leading-relaxed">
          <span className="font-bold text-foreground/90">{t("transport.warning")}</span> {t("transport.warningText")}
        </div>
      </div>
    </div>
  );
}
