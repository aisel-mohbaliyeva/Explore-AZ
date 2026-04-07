import { useRef, useState } from "react";
import { City, CITIES, STATIC_CITIES, TOURISM_CATEGORIES, latLngToXY } from "@/data/cities";
import { useLanguage } from "@/contexts/LanguageContext";

interface AzerbaijanMapProps {
  filteredCities: City[];
  selectedCity: City | null;
  hoveredCity: City | null;
  onCityClick: (city: City) => void;
  onCityHover: (city: City | null) => void;
}

export default function AzerbaijanMap({ filteredCities, selectedCity, hoveredCity, onCityClick, onCityHover }: AzerbaijanMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  return (
    <div ref={mapRef} className="relative overflow-hidden rounded-2xl border border-border shadow-2xl" style={{ background: "#0A1020" }}>
      <svg viewBox="0 0 774 612" className="block w-full" onMouseLeave={() => onCityHover(null)}>
        <defs>
          <radialGradient id="mapGrad" cx="50%" cy="50%" r="70%"><stop offset="0%" stopColor="#141D30" /><stop offset="100%" stopColor="#0A1020" /></radialGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="2.5" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <rect width="774" height="612" fill="url(#mapGrad)" />
        <image href="/azerbaijan-map.svg" x="0" y="0" width="774" height="612" />

        {STATIC_CITIES.map((c) => (
          <g key={c.name}><circle cx={c.x} cy={c.y} r="2" fill="rgba(180,200,240,0.5)" /><text x={c.x + 4} y={c.y + 3} fill="rgba(180,200,240,0.4)" fontSize="6" fontFamily="Sora">{c.name}</text></g>
        ))}

        {(() => {
          const mainCityNames = ["Bakı", ...Object.values(TOURISM_CATEGORIES).flatMap(c => c.cities)];
          const mainCities = filteredCities.filter(c => mainCityNames.includes(c.city));
          const otherCities = filteredCities.filter(c => !mainCityNames.includes(c.city));
          return (
            <>
              {otherCities.map((city) => { const { x, y } = latLngToXY(city.lat, city.lng); return (<g key={city.city}><circle cx={x} cy={y} r="2" fill="rgba(180,200,240,0.5)" /><text x={x + 4} y={y + 3} fill="rgba(180,200,240,0.4)" fontSize="6" fontFamily="Sora">{city.city}</text></g>); })}
              {mainCities.map((city) => {
                const { x, y } = latLngToXY(city.lat, city.lng);
                const isHovered = hoveredCity?.city === city.city;
                const isSelected = selectedCity?.city === city.city;
                const getLabelOffset = (cityName: string) => {
                  if (cityName === "Göygöl") return { x: 0, y: 28 };
                  if (cityName === "Gəncə") return { x: 0, y: -22 };
                  // South edge labels can overflow below the map
                  if (cityName === "Astara") return { x: 0, y: -18 };
                  return { x: 0, y: 22 };
                };
                const labelOffset = getLabelOffset(city.city);
                return (
                  <g key={city.city} className="cursor-pointer" transform={`translate(${x}, ${y})`} onClick={() => onCityClick(city)}
                    onMouseEnter={(e) => { onCityHover(city); const rect = mapRef.current?.getBoundingClientRect(); if (rect) setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top }); }}
                    onMouseMove={(e) => { const rect = mapRef.current?.getBoundingClientRect(); if (rect) setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top }); }}>
                    <circle r={isHovered || isSelected ? 18 : 14} fill="transparent" stroke={isSelected ? "#E8A838" : "rgba(232,168,56,0.2)"} strokeWidth="1" className={isHovered ? "pulse-animation" : ""} />
                    <circle r={isHovered || isSelected ? 11 : 8} fill={isSelected ? "#E8A838" : city.heroColor} opacity={isHovered ? 1 : 0.85} filter="url(#glow)" />
                    <circle r="2.5" fill={isSelected ? "#0B0F1A" : "rgba(255,255,255,0.9)"} />
                    <text x={labelOffset.x} y={labelOffset.y} textAnchor="middle" fill={isSelected ? "#E8A838" : "rgba(255,255,255,0.7)"} fontSize="9" fontFamily="Sora" fontWeight={isSelected ? "700" : "500"}>{city.city}</text>
                  </g>
                );
              })}
            </>
          );
        })()}
      </svg>

      {hoveredCity && (
        <div className="absolute pointer-events-none z-10 rounded-xl border border-border/30 p-2.5 sm:p-3 backdrop-blur-xl hidden sm:block"
          style={{ left: tooltipPos.x + 12, top: tooltipPos.y - 60, background: "rgba(20,28,46,0.97)", minWidth: 160, boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
          <div className="font-bold text-sm mb-1">{hoveredCity.city}</div>
          <div className="text-xs text-muted-foreground mb-1.5">{hoveredCity.tagline}</div>
          <div className="flex gap-2.5 text-xs">
            <span className="text-primary">🏛 {hoveredCity.touristPlaces.length} {t("map.places")}</span>
            <span className="text-green">🍽 {hoveredCity.restaurants.length} {t("map.restaurant")}</span>
            <span className="text-blue">🏨 {hoveredCity.hotels.length} {t("map.hotel")}</span>
          </div>
        </div>
      )}

      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 rounded-lg sm:rounded-xl border border-border p-2 sm:p-3 text-[10px] sm:text-xs text-muted-foreground" style={{ background: "rgba(11,15,26,0.88)" }}>
        <div className="mb-1.5 sm:mb-2 font-bold text-foreground text-xs sm:text-sm">{t("map.title")}</div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm" style={{ background: "rgba(60,120,200,0.3)", border: "1px solid rgba(100,160,240,0.55)" }} /><span>{t("map.regions")}</span></div>
          <div className="mt-0.5 sm:mt-1 text-foreground/80">{t("map.clickMarker")}</div>
        </div>
      </div>
    </div>
  );
}
