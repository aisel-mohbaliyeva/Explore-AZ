import { useState } from "react";
import { City, TYPE_COLORS, TYPE_ICONS } from "@/data/cities";

interface PlansPageProps {
  cities: City[];
  onCitySelect: (city: City) => void;
}

export default function PlansPage({ cities, onCitySelect }: PlansPageProps) {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [planDays, setPlanDays] = useState(3);
  const [currentDay, setCurrentDay] = useState(0);
  const activePlan = selectedCity.plans.find((p) => p.days === planDays);

  return (
    <div className="max-w-[1100px] mx-auto px-6 pt-8 pb-16">
      <div className="mb-7">
        <div className="text-xs font-semibold tracking-[2px] text-primary uppercase mb-2">Fərdi Planlar</div>
        <h2 className="text-3xl font-extrabold tracking-tight">Səyahət Planını Seç</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-5 items-start">
        {/* City selector */}
        <div className="rounded-2xl border border-border overflow-hidden" style={{ background: "#111827" }}>
          <div className="px-4 py-3.5 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">Şəhər Seç</div>
          {cities.map((city) => (
            <div
              key={city.city}
              onClick={() => { setSelectedCity(city); setCurrentDay(0); }}
              className="px-4 py-3.5 cursor-pointer border-b border-border/50 transition-all"
              style={{
                background: selectedCity.city === city.city ? "rgba(232,168,56,0.06)" : "transparent",
                borderLeft: selectedCity.city === city.city ? "3px solid hsl(var(--primary))" : "3px solid transparent",
              }}
            >
              <div className={`font-semibold text-sm ${selectedCity.city === city.city ? "text-primary" : "text-foreground"}`}>{city.city}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{city.region}</div>
            </div>
          ))}
        </div>

        {/* Plan content */}
        <div>
          <div className="rounded-2xl border border-border p-5 mb-4" style={{ background: "#111827" }}>
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <div>
                <div className="font-bold text-lg">{selectedCity.city}</div>
                <div className="text-xs text-muted-foreground">{selectedCity.tagline}</div>
              </div>
              <div className="flex gap-2">
                {[3, 5, 7].map((d) => (
                  <button
                    key={d}
                    onClick={() => { setPlanDays(d); setCurrentDay(0); }}
                    className={`rounded-xl px-3.5 py-2 cursor-pointer font-semibold text-sm transition-all border-2 ${
                      planDays === d
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-secondary border-transparent text-muted-foreground"
                    }`}
                  >
                    {d} Gün<br />
                    <span className="text-[10px] font-normal">{selectedCity.plans.find((p) => p.days === d)?.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Day tabs */}
            <div className="flex gap-1.5 flex-wrap">
              {activePlan?.dailyPlans.map((day, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentDay(i)}
                  className={`rounded-lg px-3.5 py-1.5 cursor-pointer font-semibold text-sm transition-all border-none ${
                    currentDay === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {day.day}. Gün
                </button>
              ))}
            </div>
          </div>

          {/* Day plan card */}
          {activePlan && activePlan.dailyPlans[currentDay] && (
            <div className="animate-fade-in rounded-2xl border border-border overflow-hidden" style={{ background: "#111827" }}>
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${selectedCity.heroColor}, hsl(var(--primary)))` }} />
              <div className="p-5">
                <div className="font-bold text-base mb-4">
                  📅 {activePlan.dailyPlans[currentDay].day}. Gün Planı
                </div>
                {activePlan.dailyPlans[currentDay].activities.map((act, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 p-4 rounded-xl mb-2.5 border border-border/50"
                    style={{ background: "hsl(var(--navy))" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                      style={{ background: `${TYPE_COLORS[act.type] || "#52C77C"}20` }}
                    >
                      {TYPE_ICONS[act.type] || "🎯"}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{act.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 capitalize">{act.type}</div>
                    </div>
                    <div
                      className="rounded-lg px-2.5 py-1 text-xs font-semibold"
                      style={{
                        background: `${TYPE_COLORS[act.type] || "#52C77C"}15`,
                        border: `1px solid ${TYPE_COLORS[act.type] || "#52C77C"}30`,
                        color: TYPE_COLORS[act.type] || "#52C77C",
                      }}
                    >
                      {act.price}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5 flex items-center justify-between">
                <button
                  onClick={() => onCitySelect(selectedCity)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium cursor-pointer border border-border bg-secondary text-foreground/80 hover:bg-secondary/80 transition-colors"
                >
                  🗺 Xəritədə Gör
                </button>
                <button
                  onClick={() => alert(`✅ ${selectedCity.city} ${planDays}-günlük planı alındı!`)}
                  className="rounded-xl px-5 py-2.5 text-sm font-bold cursor-pointer border-none"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold-light)))",
                    color: "hsl(var(--primary-foreground))",
                  }}
                >
                  💳 Planı Al · {activePlan.price}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
