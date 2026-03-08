import { ExternalLink } from "lucide-react";
import { RENTAL_SITES } from "@/data/bakuData";

export default function RentPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 pt-8 pb-16">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold">🏠 Bakıda Kirayə Ev</h1>
        <p className="text-muted-foreground text-sm mt-1">Ən etibarlı platformalar</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {RENTAL_SITES.map(site => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 transition-all hover:shadow-xl hover:border-primary/40 group block"
          >
            <div className="text-4xl mb-4">{site.icon}</div>
            <div className="font-bold text-lg mb-1 flex items-center gap-2">
              {site.name}
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground">{site.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
