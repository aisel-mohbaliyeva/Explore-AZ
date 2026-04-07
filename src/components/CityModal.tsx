import { City } from "@/data/cities";
import { X, MapPin, Utensils, Hotel, Star, ExternalLink, Instagram, Globe, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

interface CityModalProps {
  city: City;
  onClose: () => void;
}

const getWikipediaLink = (name: string) => {
  const encoded = encodeURIComponent(name.replace(/ /g, "_"));
  return `https://az.wikipedia.org/wiki/${encoded}`;
};

const MAIN_CITIES = ["Bakı"];

export default function CityModal({ city, onClose }: CityModalProps) {
  const isMainCity = MAIN_CITIES.includes(city.city);
  const { t } = useLanguage();
  const [favoriteCities, setFavoriteCities] = useLocalStorageState<string[]>("exploreaz.favorites", []);
  const isFavorite = favoriteCities.includes(city.city);

  const toggleFavorite = () => {
    setFavoriteCities((prev) => {
      if (prev.includes(city.city)) return prev.filter((c) => c !== city.city);
      return [...prev, city.city];
    });
  };
  
  return (
    <div
      className="fixed inset-0 z-[150] flex items-end sm:items-center justify-center p-0 sm:p-5"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="animate-slide-up w-full sm:max-w-[520px] max-h-[85vh] sm:max-h-[90vh] overflow-hidden flex flex-col rounded-t-3xl sm:rounded-3xl border border-border"
        style={{ background: "hsl(var(--background) / 0.95)", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
      >
        <div className="relative px-4 sm:px-6 py-4 sm:py-5 border-b border-border/40 shrink-0">
          <button onClick={onClose} className="absolute top-3 sm:top-4 right-3 sm:right-4 rounded-full p-2 cursor-pointer transition-colors hover:bg-secondary bg-secondary/50">
            <X size={18} />
          </button>
          <button
            type="button"
            onClick={toggleFavorite}
            title={isFavorite ? t("favorites.remove") : t("favorites.add")}
            className="absolute top-3 sm:top-4 right-12 sm:right-14 rounded-full p-2 cursor-pointer transition-colors hover:bg-secondary bg-secondary/50"
          >
            <Heart size={18} className={isFavorite ? "text-destructive" : "text-muted-foreground"} fill={isFavorite ? "currentColor" : "none"} />
          </button>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">{city.city}</h2>
          <div className="text-xs sm:text-sm text-muted-foreground mt-1">{city.tagline}</div>
          {isMainCity && (
            <a href={getWikipediaLink(city.city)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-xs text-primary hover:underline">
              <ExternalLink size={12} /> {t("modal.readOnWiki")}
            </a>
          )}
        </div>

        <div className="px-4 sm:px-6 py-4 sm:py-5 flex-1 overflow-auto space-y-5 sm:space-y-6">
          {city.touristPlaces.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                <MapPin size={16} className="text-primary" />
                <span className="font-bold text-xs sm:text-sm">{t("modal.touristPlaces")}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">({city.touristPlaces.length})</span>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                {city.touristPlaces.map((place, idx) => (
                  <div key={idx} className="rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-border/40 bg-secondary/30 hover:bg-secondary/60 transition-colors flex items-center justify-between">
                    <span className="text-xs sm:text-sm">{place.name}</span>
                    {isMainCity && (
                      <a href={getWikipediaLink(place.name)} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors" title={t("modal.readOnWiki")}>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {city.restaurants.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                <Utensils size={16} className="text-green" />
                <span className="font-bold text-xs sm:text-sm">{t("modal.restaurants")}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">({city.restaurants.length})</span>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                {city.restaurants.map((restaurant, idx) => (
                  <div key={idx} className="rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-border/40 bg-secondary/30 hover:bg-secondary/60 transition-colors flex items-center justify-between">
                    <span className="text-xs sm:text-sm">{restaurant.name}</span>
                    <div className="flex items-center gap-2">
                      {restaurant.instagram && <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors"><Instagram size={14} /></a>}
                      {restaurant.website && <a href={restaurant.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors"><Globe size={14} /></a>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {city.hotels.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                <Hotel size={16} className="text-blue" />
                <span className="font-bold text-xs sm:text-sm">{t("modal.hotels")}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">({city.hotels.length})</span>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                {city.hotels.map((hotel, idx) => (
                  <div key={idx} className="rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-border/40 bg-secondary/30 hover:bg-secondary/60 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xs sm:text-sm">{hotel.name}</span>
                      <div className="flex items-center gap-1 text-primary"><Star size={12} fill="currentColor" /><span className="text-[10px] sm:text-xs font-semibold">{hotel.rating}</span></div>
                    </div>
                    <div className="flex items-center gap-2">
                      {hotel.instagram && <a href={hotel.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors"><Instagram size={14} /></a>}
                      {hotel.website && <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors"><Globe size={14} /></a>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
