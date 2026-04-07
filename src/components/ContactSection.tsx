import { Mail, MessageSquare, MapPin, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const RULES = [
    { key: "stay" },
    { key: "entry" },
    { key: "prohibitions" },
    { key: "drugs" },
    { key: "karabakh" },
    { key: "currency" },
    { key: "photo" },
    { key: "alcohol" },
    { key: "respect" },
    { key: "registration" },
  ];

  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
      <div className="mb-4 sm:mb-5 flex items-center gap-2.5">
        <div className="w-1 h-5 bg-primary rounded" />
        <span className="font-semibold text-sm sm:text-base">{t("contact.title")}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
        {/* Contact Form */}
        <div
          className="rounded-2xl border border-border p-4 sm:p-6"
          style={{ background: "hsl(var(--card))" }}
        >
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <MessageSquare size={16} className="text-primary" />
            <span className="font-bold text-xs sm:text-sm">{t("contact.formTitle")}</span>
          </div>

          {submitted ? (
            <div className="rounded-xl p-5 sm:p-6 text-center border border-primary/20" style={{ background: "hsl(var(--primary) / 0.05)" }}>
              <div className="text-2xl mb-2">✅</div>
              <div className="font-bold text-xs sm:text-sm">{t("contact.sent")}</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground mt-1">{t("contact.sentSub")}</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
              <div>
                <label className="text-[11px] sm:text-xs font-semibold text-foreground/80 mb-1 block">{t("contact.name")}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder={t("contact.namePlaceholder")}
                  maxLength={100}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm bg-secondary border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-[11px] sm:text-xs font-semibold text-foreground/80 mb-1 block">{t("contact.email")}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder={t("contact.emailPlaceholder")}
                  maxLength={255}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm bg-secondary border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-[11px] sm:text-xs font-semibold text-foreground/80 mb-1 block">{t("contact.message")}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder={t("contact.messagePlaceholder")}
                  maxLength={1000}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm bg-secondary border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-primary-foreground transition-colors cursor-pointer border-none"
                style={{ background: "hsl(var(--primary))" }}
              >
                {t("contact.send")}
              </button>
            </form>
          )}

          {/* Contact info */}
          <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-border/40 space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground">
              <Mail size={12} className="text-primary" />
              <span>info@exploreaz.com</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground">
              <Phone size={12} className="text-primary" />
              <span>+994 50 123 45 67</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground">
              <MapPin size={12} className="text-primary" />
              <span>{t("contact.cityCountry")}</span>
            </div>
          </div>
        </div>

        {/* Tourist Rules Panel */}
        <div
          className="rounded-2xl border border-border p-4 sm:p-6"
          style={{ background: "hsl(var(--card))" }}
        >
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <ShieldCheck size={16} className="text-primary" />
            <span className="font-bold text-xs sm:text-sm">{t("rules.title")}</span>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {RULES.map((rule) => (
              <div key={rule.key} className="text-[11px] sm:text-xs leading-relaxed px-2.5 sm:px-3 py-2 rounded-lg bg-secondary/40 border border-border/30">
                <span className="font-semibold text-foreground/90">{t(`rules.${rule.key}.label`)}</span>{" "}
                <span className="text-foreground/70">{t(`rules.${rule.key}.text`)}</span>
              </div>
            ))}
          </div>

          <div className="text-[9px] sm:text-[10px] text-muted-foreground/60 pt-2 mt-3 border-t border-border/30">
            {t("rules.disclaimer")}
          </div>
        </div>
      </div>
    </div>
  );
}
