import { useState } from "react";
import { Star, MapPin, Instagram } from "lucide-react";
import { BAKU_RESTAURANTS, RESTAURANT_CATEGORIES, BakuRestaurant } from "@/data/bakuData";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RestaurantsPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const { t } = useLanguage();

  const filtered = BAKU_RESTAURANTS.filter(r =>
    (filter === "all" || r.category === filter) &&
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-[1100px] mx-auto px-6 pt-8 pb-16">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold">{t("baku.restaurants.title")}</h1>
        <p className="text-muted-foreground text-sm mt-1">{t("baku.restaurants.topCount", { count: BAKU_RESTAURANTS.length })}</p>
      </div>

      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder={t("baku.restaurants.search")}
        className="w-full max-w-[400px] mb-5 px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50"
      />

      <div className="flex gap-2 flex-wrap mb-6">
        {Object.entries(RESTAURANT_CATEGORIES).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${
              filter === key ? "bg-primary/10 border-primary text-primary" : "bg-secondary border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {t(`restaurant.category.${key}`)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(r => (
          <RestaurantCard key={r.name} restaurant={r} />
        ))}
      </div>
      {filtered.length === 0 && <p className="text-center text-muted-foreground py-10">{t("common.notFoundResults")}</p>}
    </div>
  );
}

function RestaurantCard({ restaurant }: { restaurant: BakuRestaurant }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 transition-all hover:shadow-xl group">
      <div className="relative h-[180px] overflow-hidden">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold" style={{ background: "rgba(0,0,0,0.7)" }}>
          <Star size={10} className="text-primary fill-primary" /> {restaurant.rating}
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-8" style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.8))" }}>
          <div className="font-bold text-sm">{restaurant.name}</div>
          <div className="text-xs opacity-80">{restaurant.cuisine}</div>
        </div>
      </div>
      <div className="p-3.5">
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
          <MapPin size={10} /> {restaurant.address}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-primary">💰 {restaurant.priceRange}</span>
          {restaurant.instagram && (
            <a
              href={`https://instagram.com/${restaurant.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={e => e.stopPropagation()}
            >
              <Instagram size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
