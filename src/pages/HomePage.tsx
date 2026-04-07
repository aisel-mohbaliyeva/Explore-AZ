import { MapPin, Building2, UtensilsCrossed, ShoppingBag, Home, Star } from "lucide-react";
import { BAKU_PLACES, BAKU_HOTELS, BAKU_RESTAURANTS } from "@/data/bakuData";
import { useLanguage } from "@/contexts/LanguageContext";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();

  const NAV_ITEMS = [
    { key: "places", label: t("baku.home.nav.places"), icon: MapPin, emoji: "📍", count: 30, color: "hsl(var(--primary))" },
    { key: "hotels", label: t("baku.home.nav.hotels"), icon: Building2, emoji: "🏨", count: 20, color: "hsl(var(--blue))" },
    { key: "restaurants", label: t("baku.home.nav.restaurants"), icon: UtensilsCrossed, emoji: "🍽", count: 30, color: "hsl(var(--green))" },
    { key: "shopping", label: t("baku.home.nav.shopping"), icon: ShoppingBag, emoji: "🛍", count: 13, color: "hsl(var(--red))" },
    { key: "rent", label: t("baku.home.nav.rent"), icon: Home, emoji: "🏠", count: 6, color: "#9b87f5" },
  ];

  const popularPlaces = BAKU_PLACES.filter(p => p.rating >= 4.7).slice(0, 6);
  const topRestaurants = BAKU_RESTAURANTS.filter(r => r.rating >= 4.7).slice(0, 6);
  const topHotels = BAKU_HOTELS.filter(h => h.rating >= 4.7).slice(0, 4);

  return (
    <div className="max-w-[1100px] mx-auto px-6 pt-8 pb-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🇦🇿</div>
        <h1 className="text-[clamp(32px,6vw,52px)] font-extrabold tracking-tight leading-tight mb-3">
          {t("baku.home.title").split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-primary">{t("baku.home.title").split(" ").slice(-1)}</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-[500px] mx-auto">
          {t("baku.home.subtitle")}
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-14">
        {NAV_ITEMS.map(item => (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className="group flex flex-col items-center gap-2.5 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            <span className="text-3xl">{item.emoji}</span>
            <span className="font-bold text-sm">{item.label}</span>
            <span className="text-xs text-muted-foreground">{t("baku.home.nav.choices", { count: item.count })}</span>
          </button>
        ))}
      </div>

      {/* Popular Places */}
      <Section title={t("baku.home.popularPlaces.title")} subtitle={t("baku.home.popularPlaces.subtitle")} onSeeAll={() => onNavigate("places")}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {popularPlaces.map(place => (
            <ItemCard key={place.name} image={place.image} title={place.name} subtitle={place.address} rating={place.rating} badge={place.price} />
          ))}
        </div>
      </Section>

      {/* Top Restaurants */}
      <Section title={t("baku.home.topRestaurants.title")} subtitle={t("baku.home.topRestaurants.subtitle")} onSeeAll={() => onNavigate("restaurants")}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topRestaurants.map(r => (
            <ItemCard key={r.name} image={r.image} title={r.name} subtitle={`${r.cuisine} · ${r.address}`} rating={r.rating} badge={r.priceRange} />
          ))}
        </div>
      </Section>

      {/* Best Hotels */}
      <Section title={t("baku.home.bestHotels.title")} subtitle={t("baku.home.bestHotels.subtitle")} onSeeAll={() => onNavigate("hotels")}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {topHotels.map(h => (
            <ItemCard key={h.name} image={h.image} title={h.name} subtitle={h.address} rating={h.rating} badge={h.priceRange} />
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, subtitle, onSeeAll, children }: { title: string; subtitle: string; onSeeAll: () => void; children: React.ReactNode }) {
  const { t } = useLanguage();
  return (
    <div className="mb-12">
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="text-xl font-extrabold">{title}</h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <button onClick={onSeeAll} className="text-sm text-primary font-semibold hover:underline cursor-pointer">
          {t("baku.home.seeAll")}
        </button>
      </div>
      {children}
    </div>
  );
}

function ItemCard({ image, title, subtitle, rating, badge }: { image: string; title: string; subtitle: string; rating: number; badge: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 transition-all hover:shadow-xl cursor-pointer group">
      <div className="relative h-[160px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold" style={{ background: "rgba(0,0,0,0.7)" }}>
          <Star size={10} className="text-primary fill-primary" /> {rating}
        </div>
      </div>
      <div className="p-3.5">
        <div className="font-bold text-sm mb-0.5 truncate">{title}</div>
        <div className="text-xs text-muted-foreground truncate mb-2">{subtitle}</div>
        <div className="text-xs font-semibold text-primary">{badge}</div>
      </div>
    </div>
  );
}
