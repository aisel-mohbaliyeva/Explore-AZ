import { MapPin, TrainFront } from "lucide-react";
import { BAKU_MALLS, BAKU_MARKETS } from "@/data/bakuData";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ShoppingPage() {
  const { t } = useLanguage();
  return (
    <div className="max-w-[1100px] mx-auto px-6 pt-8 pb-16">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold">{t("baku.shopping.title")}</h1>
        <p className="text-muted-foreground text-sm mt-1">{t("baku.shopping.subtitle")}</p>
      </div>

      {/* Malls */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1 h-5 bg-primary rounded" />
          <h2 className="font-bold text-lg">{t("baku.shopping.malls")}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {BAKU_MALLS.map(mall => (
            <div key={mall.name} className="rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 transition-all hover:shadow-xl group">
              <div className="relative h-[140px] overflow-hidden">
                <img src={mall.image} alt={mall.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-3.5">
                <div className="font-bold text-sm mb-1.5">{mall.name}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                  <MapPin size={10} /> {mall.address}
                </div>
                <div className="flex items-center gap-1 text-xs text-primary">
                  <TrainFront size={10} /> {t("baku.shopping.metro")} {mall.nearestMetro}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Markets */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1 h-5 bg-green rounded" />
          <h2 className="font-bold text-lg">{t("baku.shopping.markets")}</h2>
          <span className="text-xs text-muted-foreground">{t("baku.shopping.priceOrder")}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {BAKU_MARKETS.map((market, i) => {
            const tierColors = { premium: "hsl(var(--primary))", standard: "hsl(var(--blue))", budget: "hsl(var(--green))" };
            const tierLabels = {
              premium: t("market.tier.premium"),
              standard: t("market.tier.standard"),
              budget: t("market.tier.budget"),
            };
            return (
              <div key={market.name} className="rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 transition-all hover:shadow-xl group">
                <div className="h-1" style={{ background: tierColors[market.tier] }} />
                <div className="relative h-[120px] overflow-hidden">
                  <img src={market.image} alt={market.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-background/80 flex items-center justify-center text-xs font-bold">{i + 1}</div>
                </div>
                <div className="p-3">
                  <div className="font-bold text-sm mb-1">{market.name}</div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">{tierLabels[market.tier]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
