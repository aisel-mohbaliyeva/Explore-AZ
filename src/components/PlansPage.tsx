import { useState } from "react";
import { X, MapPin, Utensils, Hotel, Crown, Calendar, Wallet } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface DayPlan {
  day: number;
  title: string;
  places: { name: string; type: "place" | "mosque" | "nature" | "museum" }[];
  restaurants: { name: string; level: "luxury" | "medium" | "budget" }[];
  hotels: { name: string; level: "luxury" | "medium" | "budget" }[];
}

interface TripPlan {
  days: number;
  price: string;
  dailyPlans: DayPlan[];
}

const TRIP_PLANS: TripPlan[] = [
  {
    days: 3,
    price: "29 AZN",
    dailyPlans: [
      {
        day: 1,
        title: "Bakı",
        places: [
          { name: "Qız Qalası", type: "museum" },
          { name: "Şirvanşahlar Sarayı", type: "museum" },
          { name: "Bakı Bulvarı", type: "place" },
          { name: "Heydər Əliyev Mərkəzi", type: "museum" },
        ],
        restaurants: [
          { name: "Chinar Restaurant", level: "luxury" },
          { name: "Sky Grill", level: "luxury" },
          { name: "Dolma Restaurant", level: "medium" },
          { name: "Naxçıvan Restaurant", level: "medium" },
          { name: "Bir-İki Dönər", level: "budget" },
          { name: "Köz Kebab", level: "budget" },
        ],
        hotels: [
          { name: "Four Seasons Baku", level: "luxury" },
          { name: "Midtown Hotel", level: "medium" },
          { name: "Old City Inn", level: "budget" },
        ],
      },
      {
        day: 2,
        title: "Şamaxı → Qəbələ",
        places: [
          { name: "Şamaxı Cümə Məscidi", type: "mosque" },
          { name: "Gülüstan Qalası", type: "museum" },
          { name: "Şamaxı Safari Park", type: "nature" },
          { name: "Nohur Gölü", type: "nature" },
          { name: "Tufandağ", type: "nature" },
          { name: "Yeddi Gözəl Şəlaləsi", type: "nature" },
        ],
        restaurants: [
          { name: "Qafqaz Riverside Restaurant", level: "luxury" },
          { name: "Qəbələ Garden Restaurant", level: "medium" },
          { name: "Qəbələ Cafe", level: "budget" },
        ],
        hotels: [
          { name: "Qafqaz Tufandağ Resort", level: "luxury" },
          { name: "Qəbələ Garden Hotel", level: "medium" },
          { name: "Qəbələ Hostel", level: "budget" },
        ],
      },
      {
        day: 3,
        title: "Şəki → Bakı",
        places: [
          { name: "Şəki Xan Sarayı", type: "museum" },
          { name: "Şəki Karvansaray", type: "museum" },
          { name: "Kiş Alban Kilsəsi", type: "museum" },
        ],
        restaurants: [
          { name: "Şəki Palace Restaurant", level: "luxury" },
          { name: "Çələbi Xan Restaurant", level: "medium" },
          { name: "Qaqarin Cafe", level: "budget" },
        ],
        hotels: [],
      },
    ],
  },
  {
    days: 5,
    price: "49 AZN",
    dailyPlans: [
      {
        day: 1,
        title: "Bakı şəhər turu",
        places: [
          { name: "İçərişəhər", type: "museum" },
          { name: "Bakı Bulvarı", type: "place" },
          { name: "Alov Qüllələri", type: "place" },
        ],
        restaurants: [
          { name: "Firuze Restaurant", level: "luxury" },
          { name: "Art Garden", level: "medium" },
          { name: "Suzanna Cafe", level: "budget" },
        ],
        hotels: [
          { name: "Four Seasons Baku", level: "luxury" },
          { name: "Boulevard Hotel", level: "medium" },
          { name: "Sahil Hostel", level: "budget" },
        ],
      },
      {
        day: 2,
        title: "Qobustan → Atəşgah → Yanardağ",
        places: [
          { name: "Qobustan Qoruğu", type: "museum" },
          { name: "Atəşgah Məbədi", type: "museum" },
          { name: "Yanardağ", type: "nature" },
        ],
        restaurants: [
          { name: "Şirvanşah Muzey Restaurant", level: "luxury" },
          { name: "Sumqayıt Sahil", level: "medium" },
          { name: "Qobustan Cafe", level: "budget" },
        ],
        hotels: [],
      },
      {
        day: 3,
        title: "Şamaxı → Lahıc",
        places: [
          { name: "Şamaxı Cümə Məscidi", type: "mosque" },
          { name: "Lahıc qəsəbəsi", type: "place" },
          { name: "Lahıc Misgərlik Mərkəzi", type: "museum" },
        ],
        restaurants: [
          { name: "Lahıc Evi", level: "medium" },
          { name: "Dağ Çayxanası", level: "budget" },
        ],
        hotels: [
          { name: "Lahıc Inn", level: "medium" },
          { name: "Lahıc Guest House", level: "budget" },
        ],
      },
      {
        day: 4,
        title: "Qəbələ",
        places: [
          { name: "Tufandağ", type: "nature" },
          { name: "Nohur Gölü", type: "nature" },
          { name: "Yeddi Gözəl Şəlaləsi", type: "nature" },
        ],
        restaurants: [
          { name: "Qafqaz Riverside", level: "luxury" },
          { name: "Qəbələ Garden", level: "medium" },
          { name: "Meşə Cafe", level: "budget" },
        ],
        hotels: [
          { name: "Qafqaz Tufandağ Resort", level: "luxury" },
          { name: "Qəbələ Garden Hotel", level: "medium" },
          { name: "Dağ Evi", level: "budget" },
        ],
      },
      {
        day: 5,
        title: "Şəki",
        places: [
          { name: "Şəki Xan Sarayı", type: "museum" },
          { name: "Şəki Karvansaray", type: "museum" },
          { name: "Şəki Bazarı", type: "place" },
        ],
        restaurants: [
          { name: "Şəki Palace Restaurant", level: "luxury" },
          { name: "Çələbi Xan", level: "medium" },
          { name: "Piti Evi", level: "budget" },
        ],
        hotels: [],
      },
    ],
  },
  {
    days: 7,
    price: "79 AZN",
    dailyPlans: [
      {
        day: 1,
        title: "Bakı şəhər turu",
        places: [
          { name: "İçərişəhər", type: "museum" },
          { name: "Qız Qalası", type: "museum" },
          { name: "Şirvanşahlar Sarayı", type: "museum" },
        ],
        restaurants: [
          { name: "Nargiz Restaurant", level: "luxury" },
          { name: "Qaynana", level: "medium" },
          { name: "Şəhriyar Cafe", level: "budget" },
        ],
        hotels: [
          { name: "Fairmont Baku", level: "luxury" },
          { name: "Park Inn", level: "medium" },
          { name: "Baku Backpackers", level: "budget" },
        ],
      },
      {
        day: 2,
        title: "Bakı modern yerlər",
        places: [
          { name: "Alov Qüllələri", type: "place" },
          { name: "Heydər Əliyev Mərkəzi", type: "museum" },
          { name: "Dənizə baxan park", type: "nature" },
        ],
        restaurants: [
          { name: "Scalini", level: "luxury" },
          { name: "Paul's", level: "medium" },
          { name: "28 Mall Food Court", level: "budget" },
        ],
        hotels: [],
      },
      {
        day: 3,
        title: "Qobustan + Abşeron",
        places: [
          { name: "Qobustan Qoruğu", type: "museum" },
          { name: "Palçıq Vulkanları", type: "nature" },
          { name: "Atəşgah", type: "museum" },
          { name: "Yanardağ", type: "nature" },
        ],
        restaurants: [
          { name: "Sahil Restaurant", level: "medium" },
          { name: "Mərdəkan Cafe", level: "budget" },
        ],
        hotels: [],
      },
      {
        day: 4,
        title: "Şamaxı + Lahıc",
        places: [
          { name: "Şamaxı Cümə Məscidi", type: "mosque" },
          { name: "Yeddi Günbəz", type: "museum" },
          { name: "Lahıc qəsəbəsi", type: "place" },
        ],
        restaurants: [
          { name: "Lahıc Evi", level: "medium" },
          { name: "Dağ Çayxanası", level: "budget" },
        ],
        hotels: [
          { name: "Lahıc Inn", level: "medium" },
          { name: "Lahıc Guest House", level: "budget" },
        ],
      },
      {
        day: 5,
        title: "Qəbələ",
        places: [
          { name: "Tufandağ", type: "nature" },
          { name: "Nohur Gölü", type: "nature" },
          { name: "Yeddi Gözəl Şəlaləsi", type: "nature" },
          { name: "Qəbələ Land", type: "place" },
        ],
        restaurants: [
          { name: "Qafqaz Riverside", level: "luxury" },
          { name: "Qəbələ Garden", level: "medium" },
          { name: "Meşə Kafe", level: "budget" },
        ],
        hotels: [
          { name: "Qafqaz Resort", level: "luxury" },
          { name: "Qəbələ Garden Hotel", level: "medium" },
          { name: "Mountain Hostel", level: "budget" },
        ],
      },
      {
        day: 6,
        title: "Şəki",
        places: [
          { name: "Şəki Xan Sarayı", type: "museum" },
          { name: "Şəki Karvansaray", type: "museum" },
          { name: "Kiş Kilsəsi", type: "museum" },
          { name: "Şəki Bazarı", type: "place" },
        ],
        restaurants: [
          { name: "Şəki Palace", level: "luxury" },
          { name: "Çələbi Xan", level: "medium" },
          { name: "Piti Evi", level: "budget" },
        ],
        hotels: [
          { name: "Şəki Palace Hotel", level: "luxury" },
          { name: "Karvansaray Hotel", level: "medium" },
          { name: "Şəki Hostel", level: "budget" },
        ],
      },
      {
        day: 7,
        title: "Quba + Qusar",
        places: [
          { name: "Şahdağ", type: "nature" },
          { name: "Qəçrəş meşəsi", type: "nature" },
          { name: "Qırmızı Qəsəbə", type: "place" },
          { name: "Afurca Şəlaləsi", type: "nature" },
        ],
        restaurants: [
          { name: "Şahdağ Resort Restaurant", level: "luxury" },
          { name: "Quba Palace", level: "medium" },
          { name: "Dağ Kafe", level: "budget" },
        ],
        hotels: [],
      },
    ],
  },
];

const BUDGET_INFO = {
  luxury: { label: "Luxury", icon: "💎", daily: "250-400 AZN", color: "#E8A838" },
  medium: { label: "Orta", icon: "⭐", daily: "100-180 AZN", color: "#52C77C" },
  budget: { label: "Budget", icon: "💰", daily: "40-80 AZN", color: "#4A9FFF" },
};

export default function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<TripPlan | null>(null);
  const [currentDay, setCurrentDay] = useState(0);
  const { t } = useLanguage();

  const handleSelectPlan = (plan: TripPlan) => {
    setSelectedPlan(plan);
    setCurrentDay(0);
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-16">
      <div className="mb-6 sm:mb-8">
        <div className="text-[10px] sm:text-xs font-semibold tracking-[2px] text-primary uppercase mb-1.5 sm:mb-2">
          {t("plans.subtitle")}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t("plans.title")}</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2">
          {t("plans.desc")}
        </p>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mb-6 sm:mb-8">
        {TRIP_PLANS.map((plan) => (
          <div
            key={plan.days}
            onClick={() => handleSelectPlan(plan)}
            className="rounded-2xl border-2 p-4 sm:p-6 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: "#111827",
              borderColor: selectedPlan?.days === plan.days ? "hsl(var(--primary))" : "hsl(var(--border))",
            }}
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold-light)))" }}
              >
                {plan.days}
              </div>
              <div>
                <div className="font-bold text-lg sm:text-xl">{plan.days} Günlük Plan</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Tam marşrut</div>
              </div>
            </div>
            <div className="text-[11px] sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              {plan.dailyPlans.map((d) => d.title).join(" → ")}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-bold text-primary">{plan.price}</span>
              <span className="text-[10px] sm:text-xs text-muted-foreground">Tam plan</span>
            </div>
          </div>
        ))}
      </div>

      {/* Budget Info */}
      <div className="rounded-2xl border border-border p-4 sm:p-5 mb-6 sm:mb-8" style={{ background: "#111827" }}>
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Wallet size={18} className="text-primary" />
          <span className="font-bold text-sm sm:text-base">💰 Təxmini Gündəlik Büdcə</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {Object.entries(BUDGET_INFO).map(([key, info]) => (
            <div
              key={key}
              className="rounded-xl p-3 sm:p-4 border border-border/50"
              style={{ background: `${info.color}10` }}
            >
              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <span className="text-lg sm:text-xl">{info.icon}</span>
                <span className="font-semibold text-sm" style={{ color: info.color }}>
                  {info.label}
                </span>
              </div>
              <div className="text-base sm:text-lg font-bold">{info.daily}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Plan Modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-[150] flex items-end sm:items-center justify-center p-0 sm:p-5"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedPlan(null);
          }}
        >
          <div
            className="animate-slide-up w-full sm:max-w-[700px] max-h-[90vh] overflow-hidden flex flex-col rounded-t-3xl sm:rounded-3xl border border-border"
            style={{ background: "#111827", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
          >
            <div
              className="h-1.5"
              style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--gold-light)))" }}
            />

            <div className="px-4 sm:px-6 pt-4 sm:pt-5 flex items-start justify-between">
              <div>
                <h2 className="text-lg sm:text-2xl font-extrabold tracking-tight flex items-center gap-2">
                  🇦🇿 {selectedPlan.days} Günlük Azərbaycan Planı
                </h2>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Tam marşrut, restoranlar və otellər daxil
                </div>
              </div>
              <button
                onClick={() => setSelectedPlan(null)}
                className="rounded-lg border border-border p-1.5 sm:p-2 cursor-pointer hover:bg-secondary transition-colors shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Day tabs */}
            <div className="px-4 sm:px-6 pt-3 sm:pt-4 flex gap-1.5 sm:gap-2 overflow-x-auto pb-1">
              {selectedPlan.dailyPlans.map((day, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentDay(i)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                    currentDay === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Calendar size={12} className="inline mr-1 sm:w-3.5 sm:h-3.5" />
                  {day.day}-ci gün
                </button>
              ))}
            </div>

            {/* Day Content */}
            <div className="flex-1 overflow-auto px-4 sm:px-6 py-3 sm:py-4 relative">
              {selectedPlan.dailyPlans[currentDay] && (
                <div className="animate-fade-in">
                  <div className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
                    📅 {selectedPlan.dailyPlans[currentDay].day}-ci gün —{" "}
                    {selectedPlan.dailyPlans[currentDay].title}
                  </div>

                  {/* Places */}
                  <div className="mb-4 sm:mb-5">
                    <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                      <MapPin size={16} className="text-primary" />
                      <span className="font-semibold text-xs sm:text-sm">Gəziləcək Yerlər</span>
                    </div>
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                      style={{
                        filter: currentDay > 0 ? "blur(6px)" : "none",
                        userSelect: currentDay > 0 ? "none" : "auto",
                        pointerEvents: currentDay > 0 ? "none" : "auto",
                      }}
                    >
                      {selectedPlan.dailyPlans[currentDay].places.map((place, i) => (
                        <div
                          key={i}
                          className="rounded-xl p-2.5 sm:p-3 border border-border/50 text-xs sm:text-sm"
                          style={{ background: "hsl(var(--navy))" }}
                        >
                          {place.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Restaurants */}
                  {selectedPlan.dailyPlans[currentDay].restaurants.length > 0 && (
                    <div
                      className="mb-4 sm:mb-5"
                      style={{
                        filter: currentDay > 0 ? "blur(6px)" : "none",
                        userSelect: currentDay > 0 ? "none" : "auto",
                        pointerEvents: currentDay > 0 ? "none" : "auto",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                        <Utensils size={16} className="text-green" />
                        <span className="font-semibold text-xs sm:text-sm">Restoranlar</span>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        {(["luxury", "medium", "budget"] as const).map((level) => {
                          const items = selectedPlan.dailyPlans[currentDay].restaurants.filter(
                            (r) => r.level === level
                          );
                          if (items.length === 0) return null;
                          return (
                            <div key={level} className="flex items-start gap-2">
                              <span className="text-xs sm:text-sm shrink-0" style={{ color: BUDGET_INFO[level].color }}>
                                {BUDGET_INFO[level].icon} {BUDGET_INFO[level].label}:
                              </span>
                              <span className="text-xs sm:text-sm text-muted-foreground">
                                {items.map((r) => r.name).join(", ")}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Hotels */}
                  {selectedPlan.dailyPlans[currentDay].hotels.length > 0 && (
                    <div
                      className="mb-4 sm:mb-5"
                      style={{
                        filter: currentDay > 0 ? "blur(6px)" : "none",
                        userSelect: currentDay > 0 ? "none" : "auto",
                        pointerEvents: currentDay > 0 ? "none" : "auto",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                        <Hotel size={16} className="text-blue" />
                        <span className="font-semibold text-xs sm:text-sm">Otellər</span>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        {(["luxury", "medium", "budget"] as const).map((level) => {
                          const items = selectedPlan.dailyPlans[currentDay].hotels.filter(
                            (h) => h.level === level
                          );
                          if (items.length === 0) return null;
                          return (
                            <div key={level} className="flex items-start gap-2">
                              <span className="text-xs sm:text-sm shrink-0" style={{ color: BUDGET_INFO[level].color }}>
                                {BUDGET_INFO[level].icon} {BUDGET_INFO[level].label}:
                              </span>
                              <span className="text-xs sm:text-sm text-muted-foreground">
                                {items.map((h) => h.name).join(", ")}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Paywall overlay for locked days */}
                  {currentDay > 0 && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 rounded-b-3xl"
                      style={{ background: "rgba(17,24,39,0.85)", backdropFilter: "blur(2px)" }}
                    >
                      <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🔒</div>
                      <div className="text-lg sm:text-xl font-extrabold mb-2">Bu gün kilidlidir</div>
                      <p className="text-xs sm:text-sm text-muted-foreground text-center max-w-[280px] sm:max-w-[300px] mb-4 sm:mb-5 px-4">
                        Tam planı görmək üçün satın alın. Bütün günlər, restoranlar, otellər və büdcə təklifləri daxildir.
                      </p>
                      <button
                        onClick={() => {
                          alert(`✅ ${selectedPlan.days}-günlük Azərbaycan planı uğurla alındı! 🎉`);
                          setSelectedPlan(null);
                        }}
                        className="rounded-xl px-5 sm:px-6 py-2.5 sm:py-3 font-bold text-xs sm:text-sm cursor-pointer"
                        style={{
                          background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold-light)))",
                          color: "hsl(var(--primary-foreground))",
                        }}
                      >
                        <Crown size={14} className="inline mr-2 sm:w-4 sm:h-4" />
                        Kilidi Aç · {selectedPlan.price}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-border flex items-center justify-between">
              <div>
                <div className="text-xs sm:text-sm text-muted-foreground">Tam plan qiyməti</div>
                <div className="text-xl sm:text-2xl font-bold text-primary">{selectedPlan.price}</div>
              </div>
              <button
                onClick={() => {
                  alert(`✅ ${selectedPlan.days}-günlük Azərbaycan planı uğurla alındı! 🎉`);
                  setSelectedPlan(null);
                }}
                className="rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 font-bold text-xs sm:text-sm cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold-light)))",
                  color: "hsl(var(--primary-foreground))",
                }}
              >
                <Crown size={14} className="inline mr-1.5 sm:mr-2 sm:w-4 sm:h-4" />
                Planı Al · {selectedPlan.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
