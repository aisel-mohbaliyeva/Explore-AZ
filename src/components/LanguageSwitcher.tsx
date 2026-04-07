import { Globe } from "lucide-react";
import { useLanguage, Lang } from "@/contexts/LanguageContext";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useState } from "react";

const LANGUAGES: { code: Lang; label: string; name: string }[] = [
  { code: "az", label: "AZ", name: "Azərbaycan" },
  { code: "en", label: "EN", name: "English" },
  { code: "ru", label: "RU", name: "Русский" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const current = LANGUAGES.find((l) => l.code === lang)!;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all border border-border/40 bg-secondary/50 hover:bg-secondary"
        >
          <Globe size={13} className="text-muted-foreground" />
          <span>{current.label}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-36 p-1.5" sideOffset={8}>
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            onClick={() => { setLang(l.code); setOpen(false); }}
            className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium cursor-pointer transition-all border-none flex items-center justify-between ${
              lang === l.code
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-secondary"
            }`}
            style={{ background: lang === l.code ? undefined : "none" }}
          >
            <span>{l.name}</span>
            <span className="text-[10px] opacity-70">{l.label}</span>
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
