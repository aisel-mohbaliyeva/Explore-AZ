import { useRef, useState } from "react";
import { City, STATIC_CITIES, latLngToXY } from "@/data/cities";

interface AzerbaijanMapProps {
  filteredCities: City[];
  selectedCity: City | null;
  hoveredCity: City | null;
  onCityClick: (city: City) => void;
  onCityHover: (city: City | null) => void;
}

export default function AzerbaijanMap({
  filteredCities,
  selectedCity,
  hoveredCity,
  onCityClick,
  onCityHover,
}: AzerbaijanMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  return (
    <div
      ref={mapRef}
      className="relative overflow-hidden rounded-2xl border border-border shadow-2xl"
      style={{ background: "#0A1020" }}
    >
      <svg
        viewBox="0 0 774 612"
        className="block w-full"
        onMouseLeave={() => onCityHover(null)}
      >
        <defs>
          <radialGradient id="mapGrad" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#141D30" />
            <stop offset="100%" stopColor="#0A1020" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="774" height="612" fill="url(#mapGrad)" />

        {/* Real Azerbaijan SVG map */}
        <image
          href="/azerbaijan-map.svg"
          x="0" y="0"
          width="774" height="612"
        />

        {/* Static city dots */}
        {STATIC_CITIES.map((c) => (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r="2" fill="rgba(180,200,240,0.5)" />
            <text x={c.x + 4} y={c.y + 3} fill="rgba(180,200,240,0.4)" fontSize="6" fontFamily="Sora">{c.name}</text>
          </g>
        ))}

        {/* Clickable city markers */}
        {filteredCities.map((city) => {
          const { x, y } = latLngToXY(city.lat, city.lng);
          const isHovered = hoveredCity?.city === city.city;
          const isSelected = selectedCity?.city === city.city;
          return (
            <g
              key={city.city}
              className="cursor-pointer"
              transform={`translate(${x}, ${y})`}
              onClick={() => onCityClick(city)}
              onMouseEnter={(e) => {
                onCityHover(city);
                const rect = mapRef.current?.getBoundingClientRect();
                if (rect) setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseMove={(e) => {
                const rect = mapRef.current?.getBoundingClientRect();
                if (rect) setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
            >
              <circle
                r={isHovered || isSelected ? 18 : 14}
                fill="transparent"
                stroke={isSelected ? "#E8A838" : "rgba(232,168,56,0.2)"}
                strokeWidth="1"
                className={isHovered ? "pulse-animation" : ""}
              />
              <circle
                r={isHovered || isSelected ? 11 : 8}
                fill={isSelected ? "#E8A838" : city.heroColor}
                opacity={isHovered ? 1 : 0.85}
                filter="url(#glow)"
              />
              <circle r="2.5" fill={isSelected ? "#0B0F1A" : "rgba(255,255,255,0.9)"} />
              <text
                y="22" textAnchor="middle"
                fill={isSelected ? "#E8A838" : "rgba(255,255,255,0.7)"}
                fontSize="9" fontFamily="Sora"
                fontWeight={isSelected ? "700" : "500"}
              >
                {city.city}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoveredCity && (
        <div
          className="absolute pointer-events-none z-10 rounded-xl border border-border/30 p-3 backdrop-blur-xl"
          style={{
            left: tooltipPos.x + 12,
            top: tooltipPos.y - 60,
            background: "rgba(20,28,46,0.97)",
            minWidth: 180,
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <div className="font-bold text-sm mb-1">{hoveredCity.city}</div>
          <div className="text-xs text-muted-foreground mb-1.5">{hoveredCity.tagline}</div>
          <div className="flex gap-2.5 text-xs">
            <span className="text-primary">🏛 {hoveredCity.touristPlaces.length} yer</span>
            <span className="text-green">🍽 {hoveredCity.restaurants.length} restoran</span>
            <span className="text-blue">🏨 {hoveredCity.hotels.length} otel</span>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 rounded-xl border border-border p-3 text-xs text-muted-foreground" style={{ background: "rgba(11,15,26,0.88)" }}>
        <div className="mb-2 font-bold text-foreground text-sm">🗺 Azərbaycan Xəritəsi</div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm" style={{ background: "rgba(60,120,200,0.3)", border: "1px solid rgba(100,160,240,0.55)" }} /><span>Azərbaycan rayonları</span></div>
          <div className="mt-1 text-foreground/80">⭕ Rəngli marker → klikləyin</div>
        </div>
      </div>
    </div>
  );
}
