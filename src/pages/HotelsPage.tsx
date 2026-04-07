import { useState } from "react";
import { Star, MapPin } from "lucide-react";
import { BAKU_HOTELS, HOTEL_TIERS, BakuHotel } from "@/data/bakuData";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HotelsPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const { t } = useLanguage();

  const filtered = BAKU_HOTELS.filter(h =>
    (filter === "all" || h.tier === filter) &&
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-[1100px] mx-auto px-6 pt-8 pb-16">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold">{t("baku.hotels.title")}</h1>
        <p className="text-muted-foreground text-sm mt-1">{t("baku.hotels.topCount", { count: BAKU_HOTELS.length })}</p>
      </div>

      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder={t("baku.hotels.search")}
        className="w-full max-w-[400px] mb-5 px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50"
      />

      <div className="flex gap-2 flex-wrap mb-6">
        {Object.entries(HOTEL_TIERS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${
              filter === key ? "bg-primary/10 border-primary text-primary" : "bg-secondary border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {key === "all" ? t("baku.hotels.tier.all") : t(`hotel.tier.${key}`)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map(hotel => (
          <HotelCard key={hotel.name} hotel={hotel} />
        ))}
      </div>
      {filtered.length === 0 && <p className="text-center text-muted-foreground py-10">{t("common.notFoundResults")}</p>}
    </div>
  );
}

function HotelCard({ hotel }: { hotel: BakuHotel }) {
  const { t } = useLanguage();
  const tierColors: Record<string, string> = { luxury: "hsl(var(--primary))", mid: "hsl(var(--blue))", budget: "hsl(var(--green))", economy: "hsl(var(--muted-foreground))" };
  const tierLabels: Record<string, string> = {
    luxury: t("hotel.tier.luxury"),
    mid: t("hotel.tier.mid"),
    budget: t("hotel.tier.budget"),
    economy: t("hotel.tier.economy"),
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 transition-all hover:shadow-xl group">
      <div className="h-1" style={{ background: tierColors[hotel.tier] }} />
      <div className="relative h-[160px] overflow-hidden">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold" style={{ background: "rgba(0,0,0,0.7)" }}>
          <Star size={10} className="text-primary fill-primary" /> {hotel.rating}
        </div>
      </div>
      <div className="p-3.5">
        <div className="font-bold text-sm mb-0.5">{hotel.name}</div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
          <MapPin size={10} /> {hotel.address}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-primary">{hotel.priceRange}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">{tierLabels[hotel.tier]}</span>
        </div>
      </div>
    </div>
  );
}
