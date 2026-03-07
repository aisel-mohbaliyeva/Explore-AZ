import { useState } from "react";
import { Search } from "lucide-react";
import { City, CITIES } from "@/data/cities";
import AzerbaijanMap from "@/components/ui/AzerbaijanMap";
import CityModal from "@/components/ui/CityModal";
import PlansPage from "@/components/ui/PlansPage";

type FilterCategory = "all" | "touristPlaces" | "restaurants" | "hotels";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<FilterCategory>("all");
  const [page, setPage] = useState<"home" | "plans">("home");

  const filteredCities = CITIES.filter(
    (c) =>
      c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openCity = (city: City) => setSelectedCity(city);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-sora">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 h-16 border-b border-border/20 bg-gray-900 text-white">
        <div className="flex items-center gap-2.5">
          <span className="font-extrabold text-lg tracking-tight">TripAZ</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setPage("home")}
            className={`px-4 py-2 rounded ${page === "home" ? "bg-gray-700" : "bg-gray-800"}`}
          >
            🗺 Xəritə
          </button>
          <button
            onClick={() => setPage("plans")}
            className={`px-4 py-2 rounded ${page === "plans" ? "bg-gray-700" : "bg-gray-800"}`}
          >
            📋 Planlar
          </button>
        </div>
        <div className="flex items-center gap-2 bg-gray-800 rounded px-2 py-1">
          <Search size={16} />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Şəhər axtar..."
            className="bg-transparent outline-none text-white text-sm"
          />
        </div>
      </nav>

      {/* Main content */}
      <div className="pt-20 px-6 max-w-6xl mx-auto">
        {page === "home" && (
          <>
            <AzerbaijanMap
              filteredCities={filteredCities}
              selectedCity={selectedCity}
              hoveredCity={hoveredCity}
              onCityClick={openCity}
              onCityHover={setHoveredCity}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {filteredCities.map((city) => (
                <div
                  key={city.city}
                  onClick={() => openCity(city)}
                  className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
                >
                  <div className="font-bold">{city.city}</div>
                  <div className="text-sm text-gray-400">{city.tagline}</div>
                  <div className="flex gap-2 mt-2 text-xs">
                    <span>🏛 {city.touristPlaces.length}</span>
                    <span>🍽 {city.restaurants.length}</span>
                    <span>🏨 {city.hotels.length}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {page === "plans" && <PlansPage cities={CITIES} onCitySelect={openCity} />}
      </div>

      {/* City modal */}
      {selectedCity && <CityModal city={selectedCity} onClose={() => setSelectedCity(null)} />}
    </div>
  );
};

export default Index;