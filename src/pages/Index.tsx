import { useState } from "react";
import { City, CITIES, TOURISM_CATEGORIES } from "@/data/cities";
import AzerbaijanMap from "@/components/AzerbaijanMap";
import CityModal from "@/components/CityModal";
import PlansPage from "@/components/PlansPage";
import GuidePage from "@/components/GuidePage";
import CurrencyConverter from "@/components/CurrencyConverter";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import TransportSection from "@/components/TransportSection";
import FAQSection from "@/components/FAQSection";
import TicketSection from "@/components/TicketSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import { useLanguage } from "@/contexts/LanguageContext";

type Page = "map" | "plans" | "guide";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);
  const [page, setPage] = useState<Page>("map");
  const { t } = useLanguage();

  const NAV_ITEMS: { key: Page; label: string }[] = [
    { key: "map", label: t("nav.map") },
    { key: "plans", label: t("nav.plans") },
    { key: "guide", label: t("nav.guide") },
  ];

  const openCity = (city: City) => {
    setSelectedCity(city);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-sora">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(232,168,56,0.06) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-36 -left-36 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(74,144,217,0.06) 0%, transparent 70%)" }} />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-3 sm:px-4 h-14 border-b border-border/20" style={{ background: "rgba(11,15,26,0.85)", backdropFilter: "blur(16px)" }}>
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-sm sm:text-base" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold-light)))" }}>🇦🇿</div>
          <span className="font-extrabold text-sm sm:text-base tracking-tight hidden sm:block">Explore <span className="text-primary">AZ</span></span>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex gap-0.5">
          {NAV_ITEMS.map(item => (
            <button
              key={item.key}
              onClick={() => setPage(item.key)}
              className={`px-2 sm:px-2.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium cursor-pointer transition-all border-none whitespace-nowrap ${
                page === item.key ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground"
              }`}
              style={{ background: page === item.key ? undefined : "none" }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LanguageSwitcher />
        </div>
      </nav>

      <div className="pt-14 relative z-10">
        {page === "map" && (
          <div>
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-3 sm:pb-4">
              <div className="text-[10px] sm:text-xs font-semibold tracking-[2px] text-primary uppercase mb-1.5 sm:mb-2">{t("hero.subtitle")}</div>
              <h1 className="text-[clamp(24px,5vw,44px)] font-extrabold leading-tight tracking-tight">
                {t("hero.title1")}<br /><span className="text-primary">{t("hero.title2")}</span>
              </h1>
            </div>

            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 pb-6 sm:pb-8 flex flex-col lg:flex-row gap-4 sm:gap-5 items-start">
              <div className="flex-1 min-w-0 w-full">
                <AzerbaijanMap
                  filteredCities={CITIES}
                  selectedCity={selectedCity}
                  hoveredCity={hoveredCity}
                  onCityClick={openCity}
                  onCityHover={setHoveredCity}
                />
              </div>
              <div className="flex flex-col w-full lg:w-[260px] lg:shrink-0 gap-3 sm:gap-4" style={{ alignSelf: "stretch" }}>
                <CurrencyConverter />
                {/* Ad Placeholder Banner */}
                <div
                  className="flex-1 rounded-2xl border border-dashed border-primary/30 p-4 sm:p-5 flex flex-col items-center justify-center text-center relative"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--card) / 0.9))" }}
                >
                  <div className="absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                    {t("ad.badge")}
                  </div>
                  <div className="text-3xl mb-3 opacity-60">📢</div>
                  <div className="font-bold text-xs sm:text-sm text-foreground/80 mb-2">
                    {t("ad.placeholder")}
                  </div>
                  <div className="text-[11px] text-foreground/50 leading-relaxed mb-4">
                    {t("ad.placeholderDesc")}
                  </div>
                  <div className="w-full rounded-xl border border-border/40 p-3 space-y-1.5" style={{ background: "hsl(var(--secondary) / 0.5)" }}>
                    <div className="text-[10px] font-semibold text-primary">{t("ad.contactTitle")}</div>
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-foreground/70">
                      <span>📧</span> ads@exploreaz.com
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-foreground/70">
                      <span>📞</span> +994 50 123 45 67
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tourism Categories */}
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
              <div className="mb-4 sm:mb-5 flex items-center gap-2.5">
                <div className="w-1 h-5 bg-primary rounded" />
                <span className="font-semibold text-sm sm:text-base">{t("tourism.categories")}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {Object.entries(TOURISM_CATEGORIES).map(([key, category]) => (
                  <div
                    key={key}
                    className="rounded-2xl p-3 sm:p-4 border border-border/40 bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="font-bold text-xs sm:text-sm mb-2">{category.label}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {category.cities.map((cityName) => {
                        const cityData = CITIES.find(c => c.city === cityName);
                        return cityData ? (
                          <button
                            key={cityName}
                            onClick={() => openCity(cityData)}
                            className="text-[11px] sm:text-xs px-2 py-1 rounded-lg bg-background/50 hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer border border-border/30"
                          >
                            {cityName}
                          </button>
                        ) : (
                          <span key={cityName} className="text-[11px] sm:text-xs px-2 py-1 rounded-lg bg-background/50 text-muted-foreground">
                            {cityName}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Main tourist cities as cards */}
              <div className="mb-4 sm:mb-5 flex items-center gap-2.5">
                <div className="w-1 h-5 bg-primary rounded" />
                <span className="font-semibold text-sm sm:text-base">{t("tourism.mainCities")}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3.5 mb-6 sm:mb-8">
                {(() => {
                  const mainCityNames = ["Bakı", ...Object.values(TOURISM_CATEGORIES).flatMap(c => c.cities)];
                  return CITIES
                    .filter(city => mainCityNames.includes(city.city))
                    .map((city) => (
                      <div
                        key={city.city}
                        onClick={() => openCity(city)}
                        className="rounded-xl sm:rounded-2xl overflow-hidden border cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl"
                        style={{
                          background: "hsl(var(--card))",
                          borderColor: selectedCity?.city === city.city ? "hsl(var(--primary))" : "hsl(var(--border))",
                        }}
                      >
                        <div className="h-1 sm:h-1.5" style={{ background: city.heroColor }} />
                        <div className="p-2.5 sm:p-3.5">
                          <div className="font-bold text-sm sm:text-base mb-0.5">{city.city}</div>
                          <div className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-2.5 line-clamp-2">{city.tagline}</div>
                          <div className="flex gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                            <span className="text-primary">🏛 {city.touristPlaces.length}</span>
                            <span style={{ color: "hsl(var(--green))" }}>🍽 {city.restaurants.length}</span>
                            <span style={{ color: "hsl(var(--blue))" }}>🏨 {city.hotels.length}</span>
                          </div>
                        </div>
                      </div>
                    ));
                })()}
              </div>
            </div>

            <TransportSection />
            <TicketSection />
            <FAQSection />
            <ContactSection />
          </div>
        )}

        {page === "plans" && <PlansPage />}
        {page === "guide" && <GuidePage />}
      </div>

      {selectedCity && (
        <CityModal city={selectedCity} onClose={() => setSelectedCity(null)} />
      )}
      <ScrollToTop />
    </div>
  );
};

export default Index;
