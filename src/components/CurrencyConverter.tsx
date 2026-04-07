import { useState } from "react";
import { ArrowRightLeft, Banknote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CURRENCIES = [
  { code: "AZN", name: "Azərbaycan Manatı", symbol: "₼", rate: 1 },
  { code: "USD", name: "ABŞ Dolları", symbol: "$", rate: 0.5882 },
  { code: "EUR", name: "Avro", symbol: "€", rate: 0.5405 },
  { code: "TRY", name: "Türk Lirəsi", symbol: "₺", rate: 19.12 },
  { code: "RUB", name: "Rus Rublu", symbol: "₽", rate: 52.94 },
  { code: "GBP", name: "Britaniya Funtu", symbol: "£", rate: 0.4651 },
  { code: "GEL", name: "Gürcüstan Larisi", symbol: "₾", rate: 1.59 },
  { code: "IRR", name: "İran Rialı", symbol: "﷼", rate: 24706 },
  { code: "SAR", name: "Səudiyyə Riyalı", symbol: "﷼", rate: 2.2059 },
  { code: "AED", name: "BƏƏ Dirhəmi", symbol: "د.إ", rate: 2.1588 },
  { code: "CNY", name: "Çin Yuanı", symbol: "¥", rate: 4.2647 },
  { code: "JPY", name: "Yapon Yeni", symbol: "¥", rate: 88.24 },
  { code: "KRW", name: "Koreya Vonu", symbol: "₩", rate: 802.94 },
  { code: "INR", name: "Hindistan Rupisi", symbol: "₹", rate: 49.41 },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("1");
  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("AZN");
  const { t } = useLanguage();

  const from = CURRENCIES.find((c) => c.code === fromCur)!;
  const to = CURRENCIES.find((c) => c.code === toCur)!;
  const converted = (parseFloat(amount || "0") * to.rate) / from.rate;

  const swap = () => { setFromCur(toCur); setToCur(fromCur); };

  return (
    <div className="rounded-2xl border border-border p-3 sm:p-4 w-full" style={{ background: "hsl(var(--card))" }}>
      <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
        <Banknote size={18} className="text-primary" />
        <span className="text-[10px] sm:text-xs font-semibold tracking-[1.5px] text-primary uppercase">{t("currency.title")}</span>
      </div>

      <div className="flex flex-col gap-2 sm:gap-2.5">
        <div>
          <label className="text-[10px] text-muted-foreground mb-1 block">{t("currency.amount")}</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-xs sm:text-sm text-foreground outline-none focus:ring-1 focus:ring-primary" />
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex-1 min-w-0">
            <label className="text-[10px] text-muted-foreground mb-1 block">{t("currency.from")}</label>
            <select value={fromCur} onChange={(e) => setFromCur(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-1.5 sm:px-2 py-2 text-[11px] sm:text-xs text-foreground outline-none focus:ring-1 focus:ring-primary cursor-pointer">
              {CURRENCIES.map((c) => <option key={c.code} value={c.code}>{c.symbol} {c.code}</option>)}
            </select>
          </div>
          <button onClick={swap} className="mt-4 p-1.5 rounded-lg bg-secondary border border-border hover:bg-accent transition-colors cursor-pointer shrink-0">
            <ArrowRightLeft size={14} className="text-primary" />
          </button>
          <div className="flex-1 min-w-0">
            <label className="text-[10px] text-muted-foreground mb-1 block">{t("currency.to")}</label>
            <select value={toCur} onChange={(e) => setToCur(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-1.5 sm:px-2 py-2 text-[11px] sm:text-xs text-foreground outline-none focus:ring-1 focus:ring-primary cursor-pointer">
              {CURRENCIES.map((c) => <option key={c.code} value={c.code}>{c.symbol} {c.code}</option>)}
            </select>
          </div>
        </div>

        <div className="rounded-xl p-2.5 sm:p-3 text-center" style={{ background: "hsl(var(--muted))" }}>
          <div className="text-base sm:text-lg font-bold text-foreground">{to.symbol} {converted.toFixed(2)}</div>
          <div className="text-[9px] sm:text-[10px] text-muted-foreground mt-0.5">
            {parseFloat(amount || "0")} {fromCur} = {converted.toFixed(2)} {toCur}
          </div>
        </div>
      </div>
    </div>
  );
}
