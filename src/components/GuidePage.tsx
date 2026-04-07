import { useState } from "react";
import { User, Check, AlertCircle, Crown, Globe, MessageSquare, Car, Camera, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GuidePage() {
  const [selectedPlan, setSelectedPlan] = useState(5);
  const [showPayment, setShowPayment] = useState(false);
  const { t } = useLanguage();

  const GUIDE_PLANS = [
    { days: 3, price: "250 AZN", emoji: "⚡", label: t("guide.3day"), desc: t("guide.3dayDesc") },
    { days: 5, price: "450 AZN", emoji: "🌟", label: t("guide.5day"), desc: t("guide.5dayDesc") },
    { days: 7, price: "650 AZN", emoji: "👑", label: t("guide.7day"), desc: t("guide.7dayDesc") },
  ];

  const GUIDE_FEATURES = [
    { icon: Globe, text: t("guide.feat1"), desc: t("guide.feat1d") },
    { icon: MessageSquare, text: t("guide.feat2"), desc: t("guide.feat2d") },
    { icon: Car, text: t("guide.feat3"), desc: t("guide.feat3d") },
    { icon: Camera, text: t("guide.feat4"), desc: t("guide.feat4d") },
    { icon: Shield, text: t("guide.feat5"), desc: t("guide.feat5d") },
  ];

  const INCLUDED = [t("guide.inc1"), t("guide.inc2"), t("guide.inc3"), t("guide.inc4"), t("guide.inc5"), t("guide.inc6"), t("guide.inc7"), t("guide.inc8")];

  const activePlan = GUIDE_PLANS.find((p) => p.days === selectedPlan);

  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/10 mb-3 sm:mb-4">
          <User size={14} className="text-primary" />
          <span className="text-xs sm:text-sm font-semibold text-primary">{t("guide.badge")}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 sm:mb-3">
          {t("guide.title1")} <span className="text-primary">{t("guide.title2")}</span> {t("guide.title3")}
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-[600px] mx-auto">{t("guide.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
        {GUIDE_FEATURES.map((feature, idx) => (
          <div key={idx} className="rounded-2xl p-4 sm:p-5 border border-border/40 bg-secondary/30 hover:bg-secondary/50 transition-colors">
            <feature.icon size={20} className="text-primary mb-2 sm:mb-3" />
            <div className="font-bold text-xs sm:text-sm mb-1">{feature.text}</div>
            <div className="text-[11px] sm:text-xs text-muted-foreground">{feature.desc}</div>
          </div>
        ))}
      </div>

      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 mb-4 sm:mb-5">
          <Crown size={18} className="text-primary" />
          <span className="font-bold text-base sm:text-lg">{t("guide.selectPlan")}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {GUIDE_PLANS.map((plan) => {
            const isSelected = selectedPlan === plan.days;
            return (
              <div key={plan.days} onClick={() => setSelectedPlan(plan.days)}
                className="rounded-2xl p-4 sm:p-5 border-2 cursor-pointer transition-all hover:-translate-y-1"
                style={{ background: isSelected ? "hsl(var(--primary) / 0.08)" : "hsl(var(--secondary) / 0.5)", borderColor: isSelected ? "hsl(var(--primary))" : "hsl(var(--border) / 0.4)" }}>
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{plan.emoji}</div>
                <div className="font-bold text-sm sm:text-base mb-1">{plan.label}</div>
                <div className="text-[11px] sm:text-xs text-muted-foreground mb-3 sm:mb-4">{plan.desc}</div>
                <div className="text-xl sm:text-2xl font-extrabold" style={{ color: isSelected ? "hsl(var(--primary))" : undefined }}>{plan.price}</div>
                {plan.days === 5 && <div className="mt-2 sm:mt-3 inline-block text-[10px] bg-green/20 text-green rounded-full px-2 py-1 font-semibold">{t("guide.mostPopular")}</div>}
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-border/40 bg-secondary/20 p-4 sm:p-6 mb-5 sm:mb-6">
        <div className="font-bold text-xs sm:text-sm mb-3 sm:mb-4">{t("guide.included")}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          {INCLUDED.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm"><Check size={14} className="text-green shrink-0" /><span>{item}</span></div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 sm:p-4 mb-5 sm:mb-6 flex items-start gap-2.5 sm:gap-3">
        <AlertCircle size={18} className="text-amber-500 shrink-0 mt-0.5" />
        <div>
          <div className="font-semibold text-xs sm:text-sm text-amber-500 mb-1">{t("guide.paymentTitle")}</div>
          <div className="text-[11px] sm:text-xs text-muted-foreground">{t("guide.paymentText")}</div>
        </div>
      </div>

      <button onClick={() => setShowPayment(true)}
        className="w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0"
        style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold-light)))", color: "hsl(var(--primary-foreground))", boxShadow: "0 4px 20px rgba(232,168,56,0.3)" }}>
        <User size={16} className="inline mr-2 -mt-0.5" />
        {activePlan?.days}-{t("guide.orderBtn")} · {activePlan?.price}
      </button>

      {showPayment && (
        <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-5"
          style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowPayment(false); }}>
          <div className="animate-slide-up w-full sm:max-w-[450px] p-5 sm:p-8 rounded-t-3xl sm:rounded-3xl border border-border"
            style={{ background: "hsl(var(--background))", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>
            <div className="text-center mb-5 sm:mb-6">
              <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">🧑‍💼</div>
              <div className="font-extrabold text-lg sm:text-xl mb-1.5">{t("guide.orderTitle")}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{activePlan?.days} {t("guide.professional")}</div>
            </div>
            <div className="rounded-xl p-3 sm:p-4 mb-4 sm:mb-5 bg-secondary/50">
              {[{ icon: "✅", text: t("guide.fullEscort") }, { icon: "🗣", text: t("guide.translation") }, { icon: "🚗", text: t("guide.together") }, { icon: "📞", text: t("guide.contact247") }].map((item) => (
                <div key={item.text} className="flex gap-2.5 items-center py-1.5 text-xs sm:text-sm text-foreground/80"><span>{item.icon}</span><span>{item.text}</span></div>
              ))}
            </div>
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-2.5 sm:p-3 mb-4 sm:mb-5 flex items-start gap-2">
              <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
              <div className="text-[11px] sm:text-xs text-muted-foreground">{t("guide.payNow")} <strong className="text-foreground">{parseInt(activePlan?.price || "0") / 2} AZN</strong> (50%)</div>
            </div>
            <div className="flex justify-between items-center mb-4 sm:mb-5">
              <span className="text-muted-foreground text-xs sm:text-sm">{t("guide.total")}</span>
              <span className="font-extrabold text-xl sm:text-2xl text-primary">{activePlan?.price}</span>
            </div>
            <div className="flex flex-col gap-2 sm:gap-2.5">
              <button
                onClick={() => {
                  setShowPayment(false);
                  alert(t("guide.orderAccepted", { days: activePlan?.days ?? "" }));
                }}
                className="w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base cursor-pointer"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold-light)))", color: "hsl(var(--primary-foreground))", border: "none" }}>
                {t("guide.placeOrder")}
              </button>
              <button onClick={() => setShowPayment(false)} className="rounded-xl py-2.5 sm:py-3 border border-border text-muted-foreground cursor-pointer text-xs sm:text-sm hover:bg-secondary transition-colors" style={{ background: "none" }}>
                {t("guide.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
