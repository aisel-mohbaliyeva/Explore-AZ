import { useState } from "react";
import { City } from "@/data/cities";
import { Star, X, ChevronLeft, ChevronRight, Crown } from "lucide-react";

interface CityModalProps {
  city: City;
  onClose: () => void;
}

type TabKey = "touristPlaces" | "restaurants" | "hotels";

const tabLabels: Record<TabKey, string> = {
  touristPlaces: "🏛 Turistik",
  restaurants: "🍽 Restoranlar",
  hotels: "🏨 Otellər",
};

export default function CityModal({ city, onClose }: CityModalProps) {
  const [modalTab, setModalTab] = useState<TabKey>("touristPlaces");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [planDays, setPlanDays] = useState(3);
  const [showPayment, setShowPayment] = useState(false);

  const currentTabData = (city as any)[modalTab] || [];
  const currentItem = currentTabData[currentSlide];

  const handleGetPlan = (days: number) => {
    setShowPayment(true);
  };

  const activePlanPrice = city.plans.find((p) => p.days === planDays)?.price;

  return (
    <>
      <div
        className="fixed inset-0 z-[150] flex items-center justify-center p-5"
        style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <div
          className="animate-slide-up w-full max-w-[660px] max-h-[90vh] overflow-hidden flex flex-col rounded-3xl border border-border"
          style={{ background: "#111827", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
        >
          {/* Color bar */}
          <div className="h-1.5" style={{ background: city.heroColor }} />

          {/* Header */}
          <div className="px-6 pt-5 flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">{city.city}</h2>
              <div className="text-sm text-muted-foreground mt-0.5">{city.tagline} · {city.region}</div>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg border border-border p-2 cursor-pointer hover:bg-secondary transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tabs */}
          <div className="px-6 pt-4 flex gap-2">
            {(Object.entries(tabLabels) as [TabKey, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => { setModalTab(key); setCurrentSlide(0); }}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  modalTab === key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto px-6 py-4">
            {currentItem && (
              <div className="animate-fade-in">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden mb-4 relative">
                  <img
                    src={currentItem.image}
                    alt={currentItem.name}
                    className="w-full h-[220px] object-cover block"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8" style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}>
                    <div className="font-bold text-lg">{currentItem.name}</div>
                    <div className="text-xs opacity-80 mt-0.5">
                      {currentItem.description || currentItem.cuisine || currentItem.priceRange}
                    </div>
                  </div>
                  {currentTabData.length > 1 && (
                    <div className="absolute top-3 right-3 rounded-full px-2.5 py-1 text-xs" style={{ background: "rgba(0,0,0,0.6)" }}>
                      {currentSlide + 1} / {currentTabData.length}
                    </div>
                  )}
                </div>

                {/* Info badges */}
                <div className="flex gap-2.5 mb-4 flex-wrap">
                  {currentItem.rating && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm border border-primary/20 bg-primary/10">
                      <Star size={12} className="text-primary" />
                      <span className="font-semibold">{currentItem.rating}</span>
                    </div>
                  )}
                  {(currentItem.price || currentItem.priceRange) && (
                    <div className="px-3 py-1.5 rounded-lg text-sm font-semibold border border-green/20 bg-green/10 text-green">
                      💰 {currentItem.price || currentItem.priceRange}
                    </div>
                  )}
                </div>

                {/* Slide nav */}
                {currentTabData.length > 1 && (
                  <div className="flex gap-2 justify-center mb-4 items-center">
                    <button
                      onClick={() => setCurrentSlide((s) => Math.max(0, s - 1))}
                      disabled={currentSlide === 0}
                      className="w-8 h-8 rounded-full border border-border/30 flex items-center justify-center cursor-pointer transition-all hover:bg-secondary disabled:opacity-30"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    {currentTabData.map((_: any, i: number) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className="w-2 h-2 rounded-full border-none cursor-pointer transition-all"
                        style={{ background: i === currentSlide ? "hsl(var(--primary))" : "hsl(var(--navy-lighter))" }}
                      />
                    ))}
                    <button
                      onClick={() => setCurrentSlide((s) => Math.min(currentTabData.length - 1, s + 1))}
                      disabled={currentSlide === currentTabData.length - 1}
                      className="w-8 h-8 rounded-full border border-border/30 flex items-center justify-center cursor-pointer transition-all hover:bg-secondary disabled:opacity-30"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Plan section */}
            <div className="border-t border-border pt-4">
              <div className="flex items-center gap-2 mb-3">
                <Crown size={14} className="text-primary" />
                <span className="font-bold text-sm">Fərdi Plan Seç</span>
                <span className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-2 py-0.5">Premium</span>
              </div>
              <div className="flex gap-2 mb-3">
                {[3, 5, 7].map((d) => (
                  <button
                    key={d}
                    onClick={() => setPlanDays(d)}
                    className={`px-4 py-2.5 rounded-xl border-2 font-semibold text-sm cursor-pointer transition-all ${
                      planDays === d
                        ? "border-primary text-primary bg-primary/10"
                        : "border-border text-muted-foreground hover:border-border/80 hover:text-foreground"
                    }`}
                  >
                    {d} Gün<br />
                    <span className="text-xs font-normal">{city.plans.find((p) => p.days === d)?.price}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => handleGetPlan(planDays)}
                className="w-full py-3.5 rounded-xl font-bold text-sm cursor-pointer transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold-light)))",
                  color: "hsl(var(--primary-foreground))",
                  boxShadow: "0 4px 16px rgba(232,168,56,0.3)",
                }}
              >
                🗓 {planDays}-Günlük Plan Al · {activePlanPrice}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment modal */}
      {showPayment && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
        >
          <div
            className="animate-slide-up w-full max-w-[420px] p-8 rounded-3xl border border-border"
            style={{ background: "#111827", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
          >
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🏆</div>
              <div className="font-extrabold text-xl mb-1.5">Premium Plan</div>
              <div className="text-sm text-muted-foreground">{city.city} · {planDays} Günlük Plan</div>
            </div>
            <div className="rounded-xl p-4 mb-5" style={{ background: "hsl(var(--navy))" }}>
              {[
                { icon: "✅", text: "Günlük aktivlik cədvəli" },
                { icon: "🗺", text: "Xəritədə marşrut" },
                { icon: "💬", text: "Yerli tövsiyələr" },
                { icon: "📞", text: "Müştəri dəstəyi" },
              ].map((item) => (
                <div key={item.text} className="flex gap-2.5 items-center py-1.5 text-sm text-foreground/80">
                  <span>{item.icon}</span><span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-5">
              <span className="text-muted-foreground text-sm">Cəmi:</span>
              <span className="font-extrabold text-2xl text-primary">{activePlanPrice}</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => { setShowPayment(false); alert(`✅ ${planDays}-günlük plan uğurla alındı! ${city.city} macəranıza hazır olun! 🎉`); }}
                className="w-full py-4 rounded-xl font-bold text-base cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold-light)))",
                  color: "hsl(var(--primary-foreground))",
                  border: "none",
                }}
              >
                💳 Ödə & Planı Al
              </button>
              <button
                onClick={() => setShowPayment(false)}
                className="rounded-xl py-3 border border-border text-muted-foreground cursor-pointer text-sm hover:bg-secondary transition-colors"
                style={{ background: "none" }}
              >
                Ləğv et
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
