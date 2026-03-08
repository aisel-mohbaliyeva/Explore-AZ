import { useState } from "react";
import { Star, MapPin } from "lucide-react";
import { BAKU_PLACES, PLACE_CATEGORIES, BakuPlace } from "@/data/bakuData";

export default function PlacesPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = BAKU_PLACES.filter(p =>
    (filter === "all" || p.category === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-[1100px] mx-auto px-6 pt-8 pb-16">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold">📍 Bakıda Gəzməli Yerlər</h1>
        <p className="text-muted-foreground text-sm mt-1">Top {BAKU_PLACES.length} yer</p>
      </div>

      {/* Search */}
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Yer axtar..."
        className="w-full max-w-[400px] mb-5 px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50"
      />

      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-6">
        {Object.entries(PLACE_CATEGORIES).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${
              filter === key ? "bg-primary/10 border-primary text-primary" : "bg-secondary border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(place => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>
      {filtered.length === 0 && <p className="text-center text-muted-foreground py-10">Nəticə tapılmadı</p>}
    </div>
  );
}

function PlaceCard({ place }: { place: BakuPlace }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 transition-all hover:shadow-xl group">
      <div className="relative h-[180px] overflow-hidden">
        <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold" style={{ background: "rgba(0,0,0,0.7)" }}>
          <Star size={10} className="text-primary fill-primary" /> {place.rating}
        </div>
        <div className="absolute top-2.5 left-2.5 px-2 py-1 rounded-lg text-xs font-semibold bg-primary text-primary-foreground">
          {place.price}
        </div>
      </div>
      <div className="p-4">
        <div className="font-bold text-base mb-1">{place.name}</div>
        <div className="text-xs text-muted-foreground mb-2 line-clamp-2">{place.description}</div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin size={10} /> {place.address}
        </div>
      </div>
    </div>
  );
}
