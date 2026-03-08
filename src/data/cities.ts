export interface Activity {
  name: string;
  type: "tourist" | "restaurant" | "hotel" | "activity";
  price: string;
}

export interface DayPlan {
  day: number;
  activities: Activity[];
}

export interface Plan {
  days: number;
  price: string;
  dailyPlans: DayPlan[];
}

export interface TouristPlace {
  name: string;
  description: string;
  price: string;
  rating: number;
  image: string;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  image: string;
  instagram?: string;
  website?: string;
}

export interface Hotel {
  name: string;
  priceRange: string;
  rating: number;
  image: string;
  instagram?: string;
  website?: string;
}

export interface TransportInfo {
  name: string;
  address: string;
  description: string;
  phone?: string;
}

export interface CarRentalInfo {
  company: string;
  priceRange: string;
  description: string;
  phone?: string;
}

export type TourismCategory = "mountain" | "nature" | "sea" | "historical";

export interface City {
  city: string;
  lat: number;
  lng: number;
  region: string;
  tagline: string;
  heroColor: string;
  tourismCategory?: TourismCategory;
  touristPlaces: TouristPlace[];
  restaurants: Restaurant[];
  hotels: Hotel[];
  plans: Plan[];
  transport?: TransportInfo[];
  carRental?: CarRentalInfo[];
}

export const TOURISM_CATEGORIES = {
  mountain: { emoji: "🏔", label: "Dağ turizmi", cities: ["Qəbələ", "Qusar", "Quba", "Şəki", "Qax"] },
  nature: { emoji: "🌿", label: "Təbiət və meşə", cities: ["İsmayıllı", "Zaqatala", "Balakən", "Göygöl"] },
  sea: { emoji: "🌊", label: "Dəniz və subtropik", cities: ["Lənkəran", "Astara"] },
  historical: { emoji: "🏛", label: "Tarixi və mədəni", cities: ["Şuşa", "Naxçıvan", "Şamaxı"] },
};

export interface StaticCity {
  name: string;
  x: number;
  y: number;
}

export const CITIES: City[] = [
  {
    city: "Şəki",
    lat: 41.199, lng: 47.174,
    region: "Şimal-Qərb",
    tagline: "Xan saraylarının şəhəri",
    heroColor: "#8B5E3C",
    touristPlaces: [
      { name: "Şəki Xan Sarayı", description: "XVIII əsrdən qalan tarixi saray, şüşəbənd pəncərələri ilə məşhurdur.", price: "5 AZN", rating: 4.9, image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=400&h=250&fit=crop" },
      { name: "Karvansaray Kompleksi", description: "Yuxarı və Aşağı Karvansaray — tarixi ticarət mərkəzləri.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=250&fit=crop" },
      { name: "Şəki Qala Divarları", description: "Orta əsr müdafiə qalası divarları, panoramik mənzərə.", price: "3 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" },
      { name: "Alban Kilsəsi (Kiş kəndi)", description: "Qafqaz Albaniyası dövrünə aid qədim xristian kilsəsi, IV əsr.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1548407260-da850faa41e3?w=400&h=250&fit=crop" },
      { name: "Şəki Tarix Muzeyi", description: "Şəkinin zəngin tarixini əks etdirən muzey.", price: "3 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&h=250&fit=crop" },
      { name: "Marxal Resort ətrafı", description: "Meşəlik dağ ətəyi, gəzinti və istirahət üçün ideal.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
      { name: "Gelersen-Gorersen Qalası", description: "Qədim qala xarabalıqları, möhtəşəm dağ mənzərəsi.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
      { name: "Xan Yaylağı", description: "Şəki xanlarının yay istirahət yeri, təbiət qoynunda.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
      { name: "Kiş kəndi", description: "Qədim Alban kəndi, tarixi ab-hava və gözəl təbiət.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop" },
      { name: "Şəki Parkı", description: "Şəhər mərkəzində yaşıl park, istirahət üçün ideal.", price: "Pulsuz", rating: 4.2, image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=400&h=250&fit=crop" },
      { name: "Yuxarı Karvansaray", description: "XVIII əsr ticarət karvansarayı, indi otel və muzey.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop" },
      { name: "Aşağı Karvansaray", description: "Tarixi ticarət mərkəzi, restoran və suvenir mağazaları.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=250&fit=crop" },
      { name: "Şəki Bazarı", description: "Yerli məhsullar, şəkər halvası və suvenirlər.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop" },
      { name: "Şəki küçələri", description: "Fotogenik dar küçələr, tarixi memarlıq.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=250&fit=crop" },
      { name: "Kiş çayı sahili", description: "Çay kənarında gəzinti, təbiət mənzərəsi.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Shebeke Restaurant", cuisine: "Azərbaycan", priceRange: "20–40 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" },
      { name: "Chalabi Khan Restaurant", cuisine: "Azərbaycan", priceRange: "25–45 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop" },
      { name: "Sheki Palace Restaurant", cuisine: "Azərbaycan", priceRange: "20–35 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop" },
      { name: "Qafqaz Restaurant", cuisine: "Kabab/Milli", priceRange: "15–30 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "Gagarin Restaurant", cuisine: "Kabab/Milli", priceRange: "15–25 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop" },
      { name: "Seki Cafe", cuisine: "Kafe", priceRange: "5–15 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop" },
      { name: "Central Cafe", cuisine: "Kafe", priceRange: "5–15 AZN", rating: 4.1, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Marxal Resort & Spa", priceRange: "150–300 AZN/gecə", rating: 4.8, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop" },
      { name: "Sheki Palace Hotel", priceRange: "100–200 AZN/gecə", rating: 4.6, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Sheki Saray Hotel", priceRange: "80–150 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop" },
      { name: "Sheki Park Hotel", priceRange: "60–120 AZN/gecə", rating: 4.3, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=250&fit=crop" },
      { name: "Issam Hotel", priceRange: "50–100 AZN/gecə", rating: 4.2, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop" },
      { name: "Central Hostel Sheki", priceRange: "20–40 AZN/gecə", rating: 3.9, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
      { name: "Sheki Guest House", priceRange: "15–35 AZN/gecə", rating: 3.8, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şəki Xan Sarayı", type: "tourist", price: "5 AZN" }, { name: "Karvansaray Kompleksi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Kiş kəndi & Alban Kilsəsi", type: "tourist", price: "Pulsuz" }, { name: "Chalabi Khan Restaurant", type: "restaurant", price: "30 AZN" }] },
        { day: 3, activities: [{ name: "Şəki Bazarı & küçələr", type: "activity", price: "~10 AZN" }, { name: "Shebeke Restaurant", type: "restaurant", price: "25 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şəki Xan Sarayı", type: "tourist", price: "5 AZN" }, { name: "Şəki Tarix Muzeyi", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Karvansaray Kompleksi", type: "tourist", price: "Pulsuz" }, { name: "Şəki küçələri", type: "activity", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Kiş kəndi & Alban Kilsəsi", type: "tourist", price: "Pulsuz" }, { name: "Kiş çayı sahili", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Gelersen-Gorersen Qalası", type: "tourist", price: "Pulsuz" }, { name: "Xan Yaylağı", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Şəki Bazarı", type: "activity", price: "~10 AZN" }, { name: "Shebeke Restaurant", type: "restaurant", price: "25 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şəhərə gəliş & Şəki Parkı", type: "activity", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Şəki Xan Sarayı", type: "tourist", price: "5 AZN" }, { name: "Şəki Tarix Muzeyi", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Karvansaray Kompleksi", type: "tourist", price: "Pulsuz" }, { name: "Şəki küçələri", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Kiş kəndi & Alban Kilsəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Gelersen-Gorersen Qalası", type: "tourist", price: "Pulsuz" }, { name: "Marxal Resort ətrafı", type: "activity", price: "Pulsuz" }] },
        { day: 6, activities: [{ name: "Xan Yaylağı", type: "tourist", price: "Pulsuz" }, { name: "Qafqaz Restaurant", type: "restaurant", price: "20 AZN" }] },
        { day: 7, activities: [{ name: "Şəki Bazarı & Son gün", type: "activity", price: "~15 AZN" }] },
      ]},
    ],
  },
  {
    city: "Bakı",
    lat: 40.4093, lng: 49.8671,
    region: "Abşeron",
    tagline: "Şərqin Parisi",
    heroColor: "#FF6B35",
    touristPlaces: [
      { name: "İçərişəhər", description: "UNESCO Dünya İrsi siyahısında olan qədim qala şəhəri.", price: "Pulsuz", rating: 4.9, image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400&h=250&fit=crop" },
      { name: "Qız Qalası", description: "XII əsrdən qalan sirli qala kulesi, möhtəşəm panoramik mənzərə.", price: "8 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=250&fit=crop" },
      { name: "Şirvanşahlar Sarayı", description: "XV əsrdən qalan möhtəşəm saray kompleksi, UNESCO abidəsi.", price: "10 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=400&h=250&fit=crop" },
      { name: "Sınıq Qala", description: "XII əsr minarəsi ilə məşhur tarixi məscid.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1548407260-da850faa41e3?w=400&h=250&fit=crop" },
      { name: "Buxara Karvansarayı", description: "XV əsr ticarət karvansarayı.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=250&fit=crop" },
      { name: "Heydər Əliyev Mərkəzi", description: "Zaha Hadid-in dizayn etdiyi ikonik bina.", price: "15 AZN", rating: 4.9, image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=250&fit=crop" },
      { name: "Alov Qüllələri", description: "Müasir Bakının simvolu olan üç alışan qüllə.", price: "Pulsuz", rating: 4.8, image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=250&fit=crop" },
      { name: "Dağüstü Park", description: "Panoramik mənzərə, funikulyor ilə çatmaq olar.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400&h=250&fit=crop" },
      { name: "Dənizkənarı Bulvar", description: "6 km uzunluğunda Xəzər sahili boyunca gəzinti yolu.", price: "Pulsuz", rating: 4.8, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop" },
      { name: "Kiçik Venesiya", description: "Bulvardakı kanal sistemi, qayıqla gəzinti.", price: "5 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=400&h=250&fit=crop" },
      { name: "Nizami küçəsi", description: "Bakının ən məşhur piyada küçəsi.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=250&fit=crop" },
      { name: "Atəşgah Məbədi", description: "Əbədi alov məbədi, Zərdüştlük dövrü.", price: "4 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" },
      { name: "Yanardağ", description: "Təbii qaz ilə daim yanan dağ yamacı.", price: "2 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=400&h=250&fit=crop" },
      { name: "Qobustan Qaya Rəsmləri", description: "UNESCO — 40.000 illik qaya rəsmləri.", price: "5 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop" },
      { name: "Azərbaycan Milli Xalça Muzeyi", description: "Dünyada ən böyük xalça kolleksiyası.", price: "7 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&h=250&fit=crop" },
      { name: "Opera və Balet Teatrı", description: "Bakının mədəni həyatının mərkəzi.", price: "10–50 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Mangal Steak House", cuisine: "Steak/Mangal", priceRange: "40–80 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "Shirvanshah Museum Restaurant", cuisine: "Azərbaycan", priceRange: "30–60 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" },
      { name: "Dolma Restaurant", cuisine: "Azərbaycan", priceRange: "20–40 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop" },
      { name: "Chinar Restaurant", cuisine: "Premium", priceRange: "50–100 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop" },
      { name: "Qaynana Restaurant", cuisine: "Azərbaycan", priceRange: "20–35 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop" },
      { name: "Darya Fish House", cuisine: "Dəniz məhsulları", priceRange: "30–60 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop" },
      { name: "Buddha Bar Baku", cuisine: "Asiya/Fusion", priceRange: "50–100 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
      { name: "Hard Rock Cafe Baku", cuisine: "Amerika", priceRange: "25–50 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Four Seasons Hotel Baku", priceRange: "400–800 AZN/gecə", rating: 4.9, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop" },
      { name: "Fairmont Flame Towers", priceRange: "300–600 AZN/gecə", rating: 4.8, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "JW Marriott Absheron", priceRange: "200–400 AZN/gecə", rating: 4.7, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=250&fit=crop" },
      { name: "Hilton Baku", priceRange: "180–350 AZN/gecə", rating: 4.6, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop" },
      { name: "Holiday Inn Baku", priceRange: "100–200 AZN/gecə", rating: 4.4, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=250&fit=crop" },
      { name: "Ibis Baku City", priceRange: "60–120 AZN/gecə", rating: 4.1, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop" },
      { name: "Old City Inn", priceRange: "30–60 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İçərişəhər turu", type: "tourist", price: "Pulsuz" }, { name: "Qız Qalası", type: "tourist", price: "8 AZN" }] },
        { day: 2, activities: [{ name: "Heydər Əliyev Mərkəzi", type: "tourist", price: "15 AZN" }, { name: "Alov Qüllələri", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Dənizkənarı Bulvar", type: "activity", price: "Pulsuz" }, { name: "Shirvanshah Museum Restaurant", type: "restaurant", price: "45 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İçərişəhər & Qız Qalası", type: "tourist", price: "8 AZN" }] },
        { day: 2, activities: [{ name: "Şirvanşahlar Sarayı", type: "tourist", price: "10 AZN" }, { name: "Nizami küçəsi", type: "activity", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Heydər Əliyev Mərkəzi", type: "tourist", price: "15 AZN" }, { name: "Dağüstü Park", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Atəşgah Məbədi", type: "tourist", price: "4 AZN" }, { name: "Yanardağ", type: "tourist", price: "2 AZN" }] },
        { day: 5, activities: [{ name: "Dənizkənarı Bulvar & Kiçik Venesiya", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İçərişəhər turu", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Qız Qalası & Şirvanşahlar Sarayı", type: "tourist", price: "18 AZN" }] },
        { day: 3, activities: [{ name: "Heydər Əliyev Mərkəzi", type: "tourist", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Atəşgah & Yanardağ", type: "tourist", price: "6 AZN" }] },
        { day: 5, activities: [{ name: "Qobustan Qaya Rəsmləri", type: "tourist", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Xalça Muzeyi & Opera", type: "tourist", price: "17 AZN" }] },
        { day: 7, activities: [{ name: "Bulvar & Alış-veriş", type: "activity", price: "Pulsuz" }] },
      ]},
    ],
    transport: [
      { name: "Bakı Dəmiryol Vağzalı (28 May)", address: "28 May meydanı, Bakı", description: "Bakıdan rayonlara və beynəlxalq istiqamətlərə qatar reyslər. Bakı-Tbilisi, Bakı-Gəncə, Bakı-Balakən xətləri mövcuddur.", phone: "+994 12 499 47 27" },
      { name: "Bakı Beynəlxalq Avtovağzalı", address: "Həzi Aslanov qəsəbəsi, Bakı", description: "Azərbaycanın bütün rayonlarına avtobuslar. Gündəlik 200+ reys. Bilet qiyməti 5-15 AZN arasıdır.", phone: "+994 12 525 56 55" },
    ],
    carRental: [
      { company: "Avis Azerbaijan", priceRange: "50-150 AZN/gün", description: "Beynəlxalq kirayə şirkəti. Sedan, SUV və lüks avtomobillər mövcuddur. Sürücü vəsiqəsi və 21+ yaş tələb olunur.", phone: "+994 12 497 79 79" },
      { company: "Hertz Baku", priceRange: "60-200 AZN/gün", description: "Premium avtomobil kirayəsi. Aeroportdan təhvil götürmə mümkündür.", phone: "+994 12 498 55 00" },
      { company: "Rent a Car Baku", priceRange: "35-100 AZN/gün", description: "Yerli kirayə xidməti. Uyğun qiymətlər, GPS daxildir. Şəhərdaxili və rayonlararası səfərlər üçün.", phone: "+994 50 200 10 10" },
    ],
  },
  {
    city: "Lənkəran",
    lat: 38.7529, lng: 48.8522,
    region: "Cənub",
    tagline: "Subtropik cənnət",
    heroColor: "#2ECC71",
    touristPlaces: [
      { name: "Hirkan Milli Parkı", description: "UNESCO Biosfer qoruğu, nadir flora və fauna, subtropik meşələr.", price: "5 AZN", rating: 4.9, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
      { name: "Xanbulan Gölü", description: "Gözəl göl, quş müşahidəsi və istirahət üçün ideal.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=250&fit=crop" },
      { name: "Lənkəran Çayı Sahili", description: "Çay kənarında gəzinti, yaşıl təbiət.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
      { name: "Gizilagac Milli Parkı", description: "Flamingo və nadir quşların yaşadığı qoruq.", price: "5 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
      { name: "Lerik Yolu Panoraması", description: "Dağ yolundakı möhtəşəm mənzərə nöqtəsi.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
      { name: "Lənkəran Qalası", description: "XIX əsr Rus qalası, tarixi əhəmiyyəti böyükdür.", price: "3 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=400&h=250&fit=crop" },
      { name: "Mayak (Lighthouse)", description: "Tarixi dəniz fənəri, Xəzər sahilində.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop" },
      { name: "Lənkəran Xan Evi", description: "Lənkəran xanlarının yaşayış evi, tarixi muzey.", price: "3 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&h=250&fit=crop" },
      { name: "Samovar Parkı", description: "Samovar heykəli olan park, şəhərin simvolu.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=400&h=250&fit=crop" },
      { name: "Lənkəran Bulvarı", description: "Xəzər sahili boyunca gözəl gəzinti yolu.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop" },
      { name: "Çay Plantasiyaları", description: "Lənkəranın məşhur çay bağları, ekskursiya imkanı.", price: "5 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Khan Lankaran Restaurant", cuisine: "Talış mətbəxi", priceRange: "20–40 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" },
      { name: "Samovar Restaurant", cuisine: "Talış mətbəxi", priceRange: "15–30 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop" },
      { name: "Qala Restaurant", cuisine: "Milli yeməklər", priceRange: "15–25 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "Riverside Restaurant", cuisine: "Milli yeməklər", priceRange: "20–35 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop" },
      { name: "Lankaran Cafe", cuisine: "Kafe", priceRange: "5–15 AZN", rating: 4.1, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Lankaran Springs Wellness Resort", priceRange: "200–400 AZN/gecə", rating: 4.8, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop" },
      { name: "Khan Lankaran Hotel", priceRange: "80–150 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Luxe Lankaran Hotel", priceRange: "60–120 AZN/gecə", rating: 4.3, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop" },
      { name: "Lankaran Guest House", priceRange: "25–50 AZN/gecə", rating: 3.9, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
      { name: "Samovar Hotel", priceRange: "30–60 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Lənkəran Qalası", type: "tourist", price: "3 AZN" }, { name: "Lənkəran Bulvarı", type: "activity", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Hirkan Milli Parkı", type: "tourist", price: "5 AZN" }, { name: "Khan Lankaran Restaurant", type: "restaurant", price: "30 AZN" }] },
        { day: 3, activities: [{ name: "Çay Plantasiyaları", type: "tourist", price: "5 AZN" }, { name: "Samovar Parkı", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Lənkəran Qalası", type: "tourist", price: "3 AZN" }, { name: "Lənkəran Bulvarı", type: "activity", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Hirkan Milli Parkı", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Xanbulan Gölü", type: "tourist", price: "Pulsuz" }, { name: "Gizilagac Milli Parkı", type: "tourist", price: "5 AZN" }] },
        { day: 4, activities: [{ name: "Çay Plantasiyaları", type: "tourist", price: "5 AZN" }, { name: "Samovar Restaurant", type: "restaurant", price: "20 AZN" }] },
        { day: 5, activities: [{ name: "Mayak & sahil gəzintisi", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şəhərə gəliş & Lənkəran Bulvarı", type: "activity", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Lənkəran Qalası", type: "tourist", price: "3 AZN" }, { name: "Lənkəran Xan Evi", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Hirkan Milli Parkı", type: "tourist", price: "5 AZN" }] },
        { day: 4, activities: [{ name: "Xanbulan Gölü", type: "tourist", price: "Pulsuz" }, { name: "Gizilagac Milli Parkı", type: "tourist", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Çay Plantasiyaları", type: "tourist", price: "5 AZN" }, { name: "Riverside Restaurant", type: "restaurant", price: "25 AZN" }] },
        { day: 6, activities: [{ name: "Lerik Yolu Panoraması", type: "tourist", price: "Pulsuz" }, { name: "Samovar Parkı", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Son gün & bazarlıq", type: "activity", price: "~20 AZN" }] },
      ]},
    ],
  },
  {
    city: "Qəbələ",
    lat: 40.9981, lng: 47.8498,
    region: "Şimal-Qərb",
    tagline: "Dağların qoynunda",
    heroColor: "#8E44AD",
    touristPlaces: [
      { name: "Tufandağ Mountain Resort", description: "Azərbaycanın ən böyük xizək və dağ kurotu, teleferik.", price: "20 AZN", rating: 4.9, image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=400&h=250&fit=crop" },
      { name: "Nohur Gölü", description: "Dağ gölü, gözəl təbiət mənzərəsi ilə əhatə olunmuş.", price: "Pulsuz", rating: 4.8, image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=250&fit=crop" },
      { name: "Yeddi Gözəl Şəlaləsi", description: "7 pilləli möhtəşəm şəlalə, meşə içində.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
      { name: "Qəbələ Meşələri", description: "Sıx meşəlik ərazi, yürüyüş və piknik üçün ideal.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
      { name: "Qəbələ Çayı", description: "Təmiz dağ çayı, təbiət gözəlliyi.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
      { name: "Gabaland", description: "Böyük əyləncə parkı, uşaqlar və ailələr üçün.", price: "15 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1567789884554-0b308b3e2e30?w=400&h=250&fit=crop" },
      { name: "Qəbələ Shooting Club", description: "Atıcılıq klübu, beynəlxalq yarışlar keçirilir.", price: "20 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=250&fit=crop" },
      { name: "Çuxur Qəbələ (Qədim şəhər)", description: "Qafqaz Albaniyası paytaxtının qalıqları, arxeoloji ərazi.", price: "5 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" },
      { name: "Tufandağ Teleferik", description: "Dağa qalxan teleferik, panoramik mənzərə.", price: "15 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
      { name: "Nohur Gölü Sahili", description: "Göl kənarında istirahət, kafe və gəzinti.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Qafqaz Riverside Restaurant", cuisine: "Kabab/Milli", priceRange: "25–50 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" },
      { name: "Gabala Garden Restaurant", cuisine: "Kabab/Milli", priceRange: "20–40 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop" },
      { name: "Qəbələ Restaurant", cuisine: "Azərbaycan", priceRange: "15–30 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "Nohur Restaurant", cuisine: "Azərbaycan", priceRange: "15–25 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop" },
      { name: "Gabala Cafe", cuisine: "Kafe", priceRange: "5–15 AZN", rating: 4.1, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Qafqaz Tufandag Resort", priceRange: "200–400 AZN/gecə", rating: 4.9, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop" },
      { name: "Qafqaz Riverside Hotel", priceRange: "150–300 AZN/gecə", rating: 4.7, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Chenot Palace Health Wellness Hotel", priceRange: "300–600 AZN/gecə", rating: 4.9, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop" },
      { name: "Qafqaz Sport Hotel", priceRange: "80–150 AZN/gecə", rating: 4.4, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=250&fit=crop" },
      { name: "Gabala Garden Hotel", priceRange: "60–120 AZN/gecə", rating: 4.3, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop" },
      { name: "Gabala Hostel", priceRange: "20–40 AZN/gecə", rating: 3.8, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
      { name: "Green Garden Hotel", priceRange: "30–60 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Tufandağ Teleferik", type: "tourist", price: "15 AZN" }, { name: "Nohur Gölü", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Yeddi Gözəl Şəlaləsi", type: "tourist", price: "Pulsuz" }, { name: "Qafqaz Riverside Restaurant", type: "restaurant", price: "35 AZN" }] },
        { day: 3, activities: [{ name: "Gabaland", type: "tourist", price: "15 AZN" }, { name: "Gabala Cafe", type: "restaurant", price: "10 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Tufandağ Mountain Resort", type: "tourist", price: "20 AZN" }] },
        { day: 2, activities: [{ name: "Nohur Gölü", type: "tourist", price: "Pulsuz" }, { name: "Nohur Restaurant", type: "restaurant", price: "20 AZN" }] },
        { day: 3, activities: [{ name: "Yeddi Gözəl Şəlaləsi", type: "tourist", price: "Pulsuz" }, { name: "Qəbələ Meşələri", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Gabaland", type: "tourist", price: "15 AZN" }, { name: "Qəbələ Shooting Club", type: "activity", price: "20 AZN" }] },
        { day: 5, activities: [{ name: "Çuxur Qəbələ", type: "tourist", price: "5 AZN" }, { name: "Gabala Garden Restaurant", type: "restaurant", price: "30 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şəhərə gəliş & Nohur Gölü sahili", type: "activity", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Tufandağ Mountain Resort", type: "tourist", price: "20 AZN" }] },
        { day: 3, activities: [{ name: "Yeddi Gözəl Şəlaləsi", type: "tourist", price: "Pulsuz" }, { name: "Qəbələ Meşələri", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Gabaland", type: "tourist", price: "15 AZN" }] },
        { day: 5, activities: [{ name: "Çuxur Qəbələ", type: "tourist", price: "5 AZN" }, { name: "Qəbələ Çayı", type: "activity", price: "Pulsuz" }] },
        { day: 6, activities: [{ name: "Qəbələ Shooting Club", type: "activity", price: "20 AZN" }, { name: "Qafqaz Riverside Restaurant", type: "restaurant", price: "35 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Gəncə",
    lat: 40.6828, lng: 46.3606,
    region: "Qərb",
    tagline: "Nizaminin vətəni",
    heroColor: "#9B59B6",
    touristPlaces: [
      { name: "Nizami Türbəsi", description: "Böyük Azərbaycan şairi Nizami Gəncəvinin məzarı.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1548407260-da850faa41e3?w=400&h=250&fit=crop" },
      { name: "Şah Abbas Məscidi", description: "XVII əsr Səfəvi dövrü məscidi, memarlıq incisi.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=400&h=250&fit=crop" },
      { name: "İmamzadə Türbəsi", description: "Tarixi ziyarətgah, möhtəşəm memarlıq.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=400&h=250&fit=crop" },
      { name: "Gəncə Dövlət Tarix Muzeyi", description: "Şəhərin zəngin tarixini əks etdirən muzey.", price: "3 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&h=250&fit=crop" },
      { name: "Cavad Xan Türbəsi", description: "Gəncənin qəhrəmanı Cavad Xanın xatirəsi.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" },
      { name: "Bottle House", description: "Şüşə butulkalardan tikilmiş unikal ev.", price: "Pulsuz", rating: 4.2, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop" },
      { name: "Gəncə Parkı", description: "Şəhərin mərkəzi parkı, heykəllər və fontanlar.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=400&h=250&fit=crop" },
      { name: "Heydar Əliyev Parkı", description: "Müasir park kompleksi, istirahət üçün ideal.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Gəncə Əşrəfi", cuisine: "Azərbaycan", priceRange: "15–30 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "Nizami Restaurant", cuisine: "Azərbaycan", priceRange: "20–40 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" },
      { name: "City Cafe Gəncə", cuisine: "Kafe/Avropa", priceRange: "10–25 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
      { name: "Kabab House Gəncə", cuisine: "Kabab", priceRange: "10–20 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Vego Hotel Gəncə", priceRange: "100–200 AZN/gecə", rating: 4.6, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop" },
      { name: "Ganja Hotel", priceRange: "60–120 AZN/gecə", rating: 4.3, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop" },
      { name: "Ramada by Wyndham Gəncə", priceRange: "80–160 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=250&fit=crop" },
      { name: "Ganja City Hotel", priceRange: "40–80 AZN/gecə", rating: 4.1, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nizami Türbəsi", type: "tourist", price: "Pulsuz" }, { name: "Şah Abbas Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "İmamzadə Türbəsi", type: "tourist", price: "Pulsuz" }, { name: "Gəncə Əşrəfi", type: "restaurant", price: "25 AZN" }] },
        { day: 3, activities: [{ name: "Bottle House", type: "tourist", price: "Pulsuz" }, { name: "Gəncə Parkı", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nizami Türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Şah Abbas Məscidi", type: "tourist", price: "Pulsuz" }, { name: "Cavad Xan Türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Gəncə Tarix Muzeyi", type: "tourist", price: "3 AZN" }] },
        { day: 4, activities: [{ name: "Bottle House", type: "tourist", price: "Pulsuz" }, { name: "Nizami Restaurant", type: "restaurant", price: "30 AZN" }] },
        { day: 5, activities: [{ name: "Göygöl səfəri", type: "activity", price: "10 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şəhərə gəliş & Gəncə Parkı", type: "activity", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Nizami Türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şah Abbas Məscidi & İmamzadə", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Gəncə Tarix Muzeyi", type: "tourist", price: "3 AZN" }] },
        { day: 5, activities: [{ name: "Göygöl günübirlik səfər", type: "activity", price: "15 AZN" }] },
        { day: 6, activities: [{ name: "Bottle House & Heydar Əliyev Parkı", type: "tourist", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Son gün & bazarlıq", type: "activity", price: "~10 AZN" }] },
      ]},
    ],
  },
  {
    city: "Sumqayıt",
    lat: 40.5855, lng: 49.6317,
    region: "Abşeron",
    tagline: "Sənaye şəhəri",
    heroColor: "#1ABC9C",
    touristPlaces: [
      { name: "Sumqayıt Bulvarı", description: "Xəzər sahili boyunca uzanan gözəl park və gəzinti yeri.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop" },
      { name: "Sumqayıt Mədəniyyət Evi", description: "Sovet dövrü memarlıq nümunəsi.", price: "3 AZN", rating: 4.1, image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&h=250&fit=crop" },
      { name: "Sumqayıt Olimpiya Kompleksi", description: "Müasir idman kompleksi.", price: "5 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=250&fit=crop" },
      { name: "Xəzər Sahili", description: "Çimərlik və dəniz kənarı istirahət.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop" },
      { name: "Sumqayıt Parkı", description: "Yaşıl park, ailə istirahəti üçün.", price: "Pulsuz", rating: 4.1, image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Sahil Restoran", cuisine: "Azərbaycan/Dəniz", priceRange: "20–40 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop" },
      { name: "AF Hotel Restaurant", cuisine: "Beynəlxalq", priceRange: "25–50 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" },
      { name: "Sumqayıt Kebab House", cuisine: "Kabab", priceRange: "10–20 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "AF Hotel", priceRange: "100–200 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop" },
      { name: "Sumqayıt City Hotel", priceRange: "50–100 AZN/gecə", rating: 4.2, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop" },
      { name: "Caspian Hotel Sumqayıt", priceRange: "40–80 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Sumqayıt Bulvarı", type: "tourist", price: "Pulsuz" }, { name: "Xəzər Sahili", type: "activity", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Sumqayıt Mədəniyyət Evi", type: "tourist", price: "3 AZN" }, { name: "Sahil Restoran", type: "restaurant", price: "30 AZN" }] },
        { day: 3, activities: [{ name: "Bakıya günübirlik səfər", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Sumqayıt Bulvarı", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Mədəniyyət Evi", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Sahil Restoran", type: "restaurant", price: "30 AZN" }] },
        { day: 4, activities: [{ name: "Xəzər Sahili", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Bakıya səfər", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Sumqayıt Bulvarı", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Mədəniyyət Evi", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Sahil Restoran", type: "restaurant", price: "30 AZN" }] },
        { day: 4, activities: [{ name: "Xəzər Sahili", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Bakıya səfər", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Olimpiya Kompleksi", type: "activity", price: "5 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Quba",
    lat: 41.3613, lng: 48.5135,
    region: "Şimal",
    tagline: "Alma bağlarının diyarı",
    heroColor: "#E67E22",
    touristPlaces: [
      { name: "Qırmızı Qəsəbə", description: "Dağ yəhudilərinin yaşadığı unikal qəsəbə, dünyada yeganə.", price: "Pulsuz", rating: 4.8, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop" },
      { name: "Afurca Şəlaləsi", description: "Quba rayonunda yerləşən gözəl təbiət abidəsi.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
      { name: "Cümə Məscidi", description: "XIX əsrdən qalan tarixi məscid.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=400&h=250&fit=crop" },
      { name: "Təngə Dərəsi", description: "Dərin dərə, möhtəşəm təbiət mənzərəsi.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
      { name: "Quba Alma Bağları", description: "Quba rayonunun simvolu olan geniş alma bağları.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
      { name: "Xınalıq Kəndi", description: "Dünyanın ən yüksək yaşayış məntəqələrindən biri, 2350m.", price: "Pulsuz", rating: 4.9, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" },
      { name: "Quba Soyuqbulaq", description: "Təmiz dağ suyu mənbəyi, istirahət yeri.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Quba Kababçısı", cuisine: "Azərbaycan", priceRange: "15–30 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "Rixos Restaurant", cuisine: "Beynəlxalq", priceRange: "30–60 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" },
      { name: "Quba Restaurant", cuisine: "Milli mətbəx", priceRange: "10–25 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop" },
      { name: "Dağ Evi Quba", cuisine: "Dağ mətbəxi", priceRange: "15–30 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Rixos Quba Azerbaijan", priceRange: "250–500 AZN/gecə", rating: 4.9, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop" },
      { name: "Quba Palace Hotel", priceRange: "80–160 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Quba Olympic Complex", priceRange: "60–120 AZN/gecə", rating: 4.3, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=250&fit=crop" },
      { name: "Quba Guest House", priceRange: "25–50 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qırmızı Qəsəbə", type: "tourist", price: "Pulsuz" }, { name: "Cümə Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Afurca Şəlaləsi", type: "tourist", price: "Pulsuz" }, { name: "Quba Kababçısı", type: "restaurant", price: "25 AZN" }] },
        { day: 3, activities: [{ name: "Alma bağları turu", type: "activity", price: "10 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qırmızı Qəsəbə", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Afurca Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Cümə Məscidi", type: "tourist", price: "Pulsuz" }, { name: "Quba Kababçısı", type: "restaurant", price: "25 AZN" }] },
        { day: 4, activities: [{ name: "Xınalıq kəndi səfəri", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Alma bağları & Təngə Dərəsi", type: "activity", price: "10 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şəhərə gəliş & Quba mərkəz", type: "activity", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Qırmızı Qəsəbə", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Afurca Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Xınalıq kəndi səfəri", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Təngə Dərəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 6, activities: [{ name: "Alma bağları & Soyuqbulaq", type: "activity", price: "10 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Qusar",
    lat: 41.4275, lng: 48.4304,
    region: "Şimal",
    tagline: "Şahdağın ətəyində",
    heroColor: "#16A085",
    touristPlaces: [
      { name: "Şahdağ Xizək Kurotu", description: "Azərbaycanın ən böyük xizək kurotu, qış turizmi üçün ideal.", price: "30 AZN", rating: 4.9, image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=400&h=250&fit=crop" },
      { name: "Laza kəndi", description: "Dağ kəndi, möhtəşəm təbiət mənzərəsi və şəlalələr.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
      { name: "Laza Şəlaləsi", description: "Laza kəndinin yaxınlığında gözəl şəlalə.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
      { name: "Suvar kəndi", description: "Dağ kəndi, ənənəvi həyat tərzi.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop" },
      { name: "Qusar Dağları", description: "Trekkinq və dağ yürüyüşü üçün ideal.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Şahdağ Resort Restaurant", cuisine: "Azərbaycan/Beynəlxalq", priceRange: "30–60 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" },
      { name: "Qusar Restaurant", cuisine: "Milli mətbəx", priceRange: "15–25 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "Mountain Cafe Qusar", cuisine: "Kafe", priceRange: "10–20 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Şahdağ Hotel & Spa", priceRange: "300–600 AZN/gecə", rating: 4.9, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Pik Palace Hotel", priceRange: "200–400 AZN/gecə", rating: 4.7, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop" },
      { name: "Qusar Olympic Complex", priceRange: "60–120 AZN/gecə", rating: 4.3, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=250&fit=crop" },
      { name: "Laza Guest House", priceRange: "25–50 AZN/gecə", rating: 4.1, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şahdağ Xizək Kurotu", type: "tourist", price: "30 AZN" }] },
        { day: 2, activities: [{ name: "Laza kəndi & Şəlalə", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şahdağ Resort Restaurant", type: "restaurant", price: "45 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şahdağ Xizək Kurotu", type: "tourist", price: "30 AZN" }] },
        { day: 2, activities: [{ name: "Laza kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Laza Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "10 AZN" }] },
        { day: 5, activities: [{ name: "Quba şəhərinə səfər", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şahdağ Xizək Kurotu", type: "tourist", price: "30 AZN" }] },
        { day: 2, activities: [{ name: "Laza kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Laza Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Suvar kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "10 AZN" }] },
        { day: 6, activities: [{ name: "Spa & istirahət", type: "activity", price: "50 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Şamaxı",
    lat: 40.6317, lng: 48.6364,
    region: "Dağlıq Şirvan",
    tagline: "Qədim paytaxt",
    heroColor: "#A0522D",
    touristPlaces: [
      { name: "Şamaxı Cümə Məscidi", description: "Qafqazın ən qədim məscidlərindən biri.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1585036156171-384164a8c821?w=400&h=250&fit=crop" },
      { name: "Yeddi Gumbəz", description: "Şirvanşahlar sülaləsinin məzarlığı.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=250&fit=crop" },
      { name: "Şamaxı Astrofizika Rəsədxanası", description: "Qafqazın ən böyük rəsədxanası.", price: "5 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=400&h=250&fit=crop" },
      { name: "Diri Baba Türbəsi", description: "Qədim türbə, memarı naməlum.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=250&fit=crop" },
      { name: "Pirqulu Meşəsi", description: "Təbiət gəzintisi üçün ideal.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Şamaxı Restaurant", cuisine: "Milli mətbəx", priceRange: "15–25 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "Pirqulu Cafe", cuisine: "Kafe", priceRange: "8–15 AZN", rating: 4.1, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Şamaxı Palace Hotel", priceRange: "80–150 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Şamaxı Guest House", priceRange: "25–50 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Cümə Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Yeddi Gumbəz", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Rəsədxana", type: "tourist", price: "5 AZN" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Cümə Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Yeddi Gumbəz", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Rəsədxana", type: "tourist", price: "5 AZN" }] },
        { day: 4, activities: [{ name: "Pirqulu Meşəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Diri Baba Türbəsi", type: "tourist", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Cümə Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Yeddi Gumbəz", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Rəsədxana", type: "tourist", price: "5 AZN" }] },
        { day: 4, activities: [{ name: "Pirqulu Meşəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Diri Baba Türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 6, activities: [{ name: "Şamaxı bazarı", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Zaqatala",
    lat: 41.6328, lng: 46.6453,
    region: "Şimal-Qərb",
    tagline: "Meşələr diyarı",
    heroColor: "#27AE60",
    touristPlaces: [
      { name: "Zaqatala Qala-Divarları", description: "Tarixi qala divarları.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1533154683220-35e79e6a7c77?w=400&h=250&fit=crop" },
      { name: "Zaqatala Dövlət Təbiət Qoruğu", description: "Zəngin flora və fauna.", price: "3 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop" },
      { name: "Car kəndi", description: "Tarixi Avar kəndi.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
      { name: "Muxtarov Məscidi", description: "Gözəl tarixi məscid.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1585036156171-384164a8c821?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Zaqatala Restaurant", cuisine: "Milli mətbəx", priceRange: "12–22 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "Meşə Cafe", cuisine: "Kafe", priceRange: "8–15 AZN", rating: 4.1, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Zaqatala Park Hotel", priceRange: "60–120 AZN/gecə", rating: 4.4, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Zaqatala Guest House", priceRange: "20–40 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qala-Divarları", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Təbiət Qoruğu", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Car kəndi", type: "tourist", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qala-Divarları", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Təbiət Qoruğu", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Car kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Muxtarov Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Meşə gəzintisi", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qala-Divarları", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Təbiət Qoruğu", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Car kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Muxtarov Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Meşə gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 6, activities: [{ name: "Bazarı gəz", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Mingəçevir",
    lat: 40.7703, lng: 47.0496,
    region: "Mərkəz",
    tagline: "İşıqlar şəhəri",
    heroColor: "#F39C12",
    touristPlaces: [
      { name: "Mingəçevir Su Anbarı", description: "Azərbaycanın ən böyük su anbarı.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1500463959177-e0869687df26?w=400&h=250&fit=crop" },
      { name: "Mingəçevir SES", description: "Tarixi su elektrik stansiyası.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop" },
      { name: "Kür çayı sahili", description: "Gəzinti üçün gözəl sahil.", price: "Pulsuz", rating: 4.2, image: "https://images.unsplash.com/photo-1500463959177-e0869687df26?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Mingəçevir Restaurant", cuisine: "Milli mətbəx", priceRange: "12–20 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "Kür Cafe", cuisine: "Kafe", priceRange: "8–15 AZN", rating: 4.0, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Mingəçevir Sport Hotel", priceRange: "50–100 AZN/gecə", rating: 4.3, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Mingəçevir Guest House", priceRange: "20–40 AZN/gecə", rating: 3.9, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Su Anbarı", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Kür sahili", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "SES", type: "tourist", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Su Anbarı", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Kür sahili", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "SES", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Balıq ovu", type: "activity", price: "10 AZN" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Su Anbarı", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Kür sahili", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "SES", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Balıq ovu", type: "activity", price: "10 AZN" }] },
        { day: 6, activities: [{ name: "Gəncə səfəri", type: "activity", price: "5 AZN" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Naxçıvan",
    lat: 39.2089, lng: 45.4122,
    region: "Naxçıvan MR",
    tagline: "Muxtar diyar",
    heroColor: "#D35400",
    touristPlaces: [
      { name: "Möminə Xatun Türbəsi", description: "12-ci əsr memarlıq şah əsəri.", price: "Pulsuz", rating: 4.8, image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=250&fit=crop" },
      { name: "Nuh Peyğəmbər Türbəsi", description: "Əfsanəvi dini ziyarətgah.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=250&fit=crop" },
      { name: "Əlincəqala", description: "Möhtəşəm qədim qala.", price: "3 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1533154683220-35e79e6a7c77?w=400&h=250&fit=crop" },
      { name: "Əshabi-Kəhf", description: "Qurani-Kərimdəki əhvalat ilə bağlı mağara.", price: "2 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
      { name: "Qarabağlar Türbəsi", description: "Gözəl tarixi türbə.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1585036156171-384164a8c821?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Naxçıvan Restaurant", cuisine: "Milli mətbəx", priceRange: "12–22 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "Təndir Restaurant", cuisine: "Təndir yeməkləri", priceRange: "10–18 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" },
      { name: "Duz Dağı Cafe", cuisine: "Kafe", priceRange: "8–15 AZN", rating: 4.1, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Naxçıvan Hotel", priceRange: "70–140 AZN/gecə", rating: 4.4, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Tebriz Hotel", priceRange: "40–80 AZN/gecə", rating: 4.2, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop" },
      { name: "Naxçıvan Guest House", priceRange: "20–40 AZN/gecə", rating: 3.9, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Möminə Xatun Türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Əlincəqala", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Əshabi-Kəhf", type: "tourist", price: "2 AZN" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Möminə Xatun Türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Əlincəqala", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Əshabi-Kəhf", type: "tourist", price: "2 AZN" }] },
        { day: 4, activities: [{ name: "Nuh Peyğəmbər Türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Qarabağlar Türbəsi", type: "tourist", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Möminə Xatun Türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Əlincəqala", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Əshabi-Kəhf", type: "tourist", price: "2 AZN" }] },
        { day: 4, activities: [{ name: "Nuh Peyğəmbər Türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Qarabağlar Türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 6, activities: [{ name: "Duz Dağı", type: "activity", price: "5 AZN" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Şuşa",
    lat: 39.7571, lng: 46.7488,
    region: "Qarabağ",
    tagline: "Mədəniyyət beşiyi",
    heroColor: "#9B59B6",
    touristPlaces: [
      { name: "Şuşa Qalası", description: "Pənahəli xanın tikdirdiyi tarixi qala.", price: "Pulsuz", rating: 4.8, image: "https://images.unsplash.com/photo-1533154683220-35e79e6a7c77?w=400&h=250&fit=crop" },
      { name: "Xan Qızı Bulağı", description: "Gözəl mənzərəli tarixi bulaq.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
      { name: "Cıdır Düzü", description: "Panoramik mənzərə, tarixən at yarışları keçirilən yer.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
      { name: "Yuxarı Gövhər Ağa Məscidi", description: "18-ci əsr tarixi məscid.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1585036156171-384164a8c821?w=400&h=250&fit=crop" },
      { name: "Aşağı Gövhər Ağa Məscidi", description: "Şuşanın məşhur məscidi.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Şuşa Restaurant", cuisine: "Qarabağ mətbəxi", priceRange: "15–25 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "Cıdır Cafe", cuisine: "Kafe", priceRange: "8–15 AZN", rating: 4.1, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Şuşa Hotel", priceRange: "80–150 AZN/gecə", rating: 4.4, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Qarabağ Resort", priceRange: "60–120 AZN/gecə", rating: 4.2, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şuşa Qalası", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Cıdır Düzü", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Xan Qızı Bulağı", type: "tourist", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şuşa Qalası", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Cıdır Düzü", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Xan Qızı Bulağı", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Yuxarı Gövhər Ağa Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Aşağı Gövhər Ağa Məscidi", type: "tourist", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şuşa Qalası", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Cıdır Düzü", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Xan Qızı Bulağı", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Yuxarı Gövhər Ağa Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Aşağı Gövhər Ağa Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 6, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Qobustan",
    lat: 40.0825, lng: 49.3827,
    region: "Abşeron",
    tagline: "Qaya rəsmləri diyarı",
    heroColor: "#6D4C41",
    touristPlaces: [
      { name: "Qobustan Qaya Rəsmləri", description: "UNESCO Dünya İrsi, 40.000 illik qaya rəsmləri.", price: "5 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
      { name: "Palçıq Vulkanları", description: "Nadir təbiət hadisəsi.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
      { name: "Qobustan Muzeyi", description: "Qaya rəsmləri haqqında interaktiv muzey.", price: "5 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Qobustan Restaurant", cuisine: "Milli mətbəx", priceRange: "12–20 AZN", rating: 4.1, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Qobustan Guest House", priceRange: "25–50 AZN/gecə", rating: 3.9, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qaya Rəsmləri", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Palçıq Vulkanları", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Qobustan Muzeyi", type: "tourist", price: "5 AZN" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qaya Rəsmləri", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Palçıq Vulkanları", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Qobustan Muzeyi", type: "tourist", price: "5 AZN" }] },
        { day: 4, activities: [{ name: "Ətraf gəzinti", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Bakıya qayıdış", type: "activity", price: "0 AZN" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qaya Rəsmləri", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Palçıq Vulkanları", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Qobustan Muzeyi", type: "tourist", price: "5 AZN" }] },
        { day: 4, activities: [{ name: "Ətraf gəzinti", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Şirvan Milli Parkı", type: "tourist", price: "2 AZN" }] },
        { day: 6, activities: [{ name: "Foto çəkiliş", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "İsmayıllı",
    lat: 40.7874, lng: 48.1504,
    region: "Şimal",
    tagline: "Dağ kəndləri",
    heroColor: "#27AE60",
    touristPlaces: [
      { name: "Lahıc kəndi", description: "Qədim sənətkarlıq kəndi, mis ustalarıyla məşhur.", price: "Pulsuz", rating: 4.8, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
      { name: "İvanovka kəndi", description: "Molokan icmasının yaşadığı unikal kənd.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1500463959177-e0869687df26?w=400&h=250&fit=crop" },
      { name: "Sulut Şəlaləsi", description: "Gözəl şəlalə, trekkinq marşrutu.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
      { name: "İsmayıllı Meşələri", description: "Yaşıl meşələrdə gəzinti.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Lahıc Restaurant", cuisine: "Milli mətbəx", priceRange: "10–18 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "İsmayıllı Cafe", cuisine: "Kafe", priceRange: "8–12 AZN", rating: 4.0, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "İsmayıllı Resort", priceRange: "60–120 AZN/gecə", rating: 4.3, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Lahıc Guest House", priceRange: "20–40 AZN/gecə", rating: 4.1, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Lahıc kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Sulut Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "İvanovka kəndi", type: "tourist", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Lahıc kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Sulut Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "İvanovka kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Meşə gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Mis sənətkarlıq", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Lahıc kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Sulut Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "İvanovka kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Meşə gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Mis sənətkarlıq", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Göygöl",
    lat: 40.5871, lng: 46.3248,
    region: "Qərb",
    tagline: "Mavi göl",
    heroColor: "#00BCD4",
    touristPlaces: [
      { name: "Göygöl (Mavi Göl)", description: "Azərbaycanın ən gözəl gölü.", price: "Pulsuz", rating: 4.9, image: "https://images.unsplash.com/photo-1500463959177-e0869687df26?w=400&h=250&fit=crop" },
      { name: "Göygöl Milli Parkı", description: "Gözəl təbiət, trekkinq marşrutları.", price: "2 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop" },
      { name: "Maralgöl", description: "Kiçik dağ gölü, gözəl mənzərə.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Göygöl Restaurant", cuisine: "Milli mətbəx", priceRange: "12–20 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Göygöl Park Hotel", priceRange: "60–120 AZN/gecə", rating: 4.4, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Göygöl Guest House", priceRange: "20–40 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Göygöl", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Milli Park", type: "tourist", price: "2 AZN" }] },
        { day: 3, activities: [{ name: "Maralgöl", type: "tourist", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Göygöl", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Milli Park", type: "tourist", price: "2 AZN" }] },
        { day: 3, activities: [{ name: "Maralgöl", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Trekkinq", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Gəncə səfəri", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Göygöl", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Milli Park", type: "tourist", price: "2 AZN" }] },
        { day: 3, activities: [{ name: "Maralgöl", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Trekkinq", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Gəncə səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Piknik", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Xaçmaz",
    lat: 41.4594, lng: 48.8024,
    region: "Şimal",
    tagline: "Xəzər sahili",
    heroColor: "#E67E22",
    touristPlaces: [
      { name: "Nabran sahilləri", description: "Xəzər dənizi sahili, yay istirahəti.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop" },
      { name: "Nabran Meşəsi", description: "Sahil meşəsi, piknik üçün ideal.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
      { name: "Xaçmaz Bazarı", description: "Yerli meyvə-tərəvəz bazarı.", price: "Pulsuz", rating: 4.2, image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Nabran Beach Restaurant", cuisine: "Dəniz məhsulları", priceRange: "15–30 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" },
      { name: "Xaçmaz Cafe", cuisine: "Kafe", priceRange: "8–15 AZN", rating: 4.0, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Nabran Hotel & Resort", priceRange: "80–160 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Xaçmaz Guest House", priceRange: "25–50 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nabran sahilləri", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Nabran Meşəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Xaçmaz Bazarı", type: "tourist", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nabran sahilləri", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Nabran Meşəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Xaçmaz Bazarı", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Dəniz istirahəti", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Quba səfəri", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nabran sahilləri", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Nabran Meşəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Xaçmaz Bazarı", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Dəniz istirahəti", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Quba səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Su idmanı", type: "activity", price: "15 AZN" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Balakən",
    lat: 41.7236, lng: 46.4044,
    region: "Şimal-Qərb",
    tagline: "Yaşıl cənnət",
    heroColor: "#2ECC71",
    touristPlaces: [
      { name: "Katex Kilsəsi", description: "Qədim alban kilsəsi.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=250&fit=crop" },
      { name: "Balakən Meşələri", description: "Sıx meşələr, təbiət gəzintisi.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
      { name: "Balakən Şəlaləsi", description: "Gözəl dağ şəlaləsi.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Balakən Restaurant", cuisine: "Milli mətbəx", priceRange: "10–18 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Balakən Guest House", priceRange: "20–40 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Katex Kilsəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Meşə gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəlalə", type: "tourist", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Katex Kilsəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Meşə gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəlalə", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Zaqatala səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "İstirahət", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Katex Kilsəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Meşə gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəlalə", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Zaqatala səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Qax səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Piknik", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Qax",
    lat: 41.4181, lng: 46.9222,
    region: "Şimal-Qərb",
    tagline: "Təbiət möcüzəsi",
    heroColor: "#16A085",
    touristPlaces: [
      { name: "İlisu kəndi", description: "Tarixi kənd, gözəl mənzərə.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
      { name: "İlisu Şəlaləsi", description: "Möhtəşəm şəlalə.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
      { name: "Qax Meşələri", description: "Qoz-fındıq meşələri.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "İlisu Restaurant", cuisine: "Milli mətbəx", priceRange: "10–18 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
      { name: "Qax Cafe", cuisine: "Kafe", priceRange: "8–12 AZN", rating: 4.0, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "İlisu Lodge", priceRange: "50–100 AZN/gecə", rating: 4.4, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Qax Guest House", priceRange: "20–40 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İlisu kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "İlisu Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Meşə gəzintisi", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İlisu kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "İlisu Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Meşə gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Zaqatala səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "İstirahət", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İlisu kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "İlisu Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Meşə gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Zaqatala səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Balakən səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Piknik", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Oğuz",
    lat: 41.0726, lng: 47.4637,
    region: "Şimal",
    tagline: "Sakit dağ qəsəbəsi",
    heroColor: "#2ECC71",
    touristPlaces: [
      { name: "Oğuz Meşələri", description: "Sıx meşələr və dağ mənzərəsi.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
      { name: "Bum Şəlaləsi", description: "Gözəl dağ şəlaləsi.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Oğuz Restaurant", cuisine: "Milli mətbəx", priceRange: "10–18 AZN", rating: 4.1, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Oğuz Guest House", priceRange: "20–40 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Oğuz Meşələri", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Bum Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Oğuz Meşələri", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Bum Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Şəki səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "İstirahət", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Oğuz Meşələri", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Bum Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Şəki səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Qəbələ səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Piknik", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Astara",
    lat: 38.4560, lng: 48.8749,
    region: "Cənub",
    tagline: "İran sərhədində",
    heroColor: "#E67E22",
    touristPlaces: [
      { name: "İstisu Bulaqları", description: "Müalicəvi isti su bulaqları.", price: "3 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1500463959177-e0869687df26?w=400&h=250&fit=crop" },
      { name: "Astara Sahili", description: "Xəzər dənizi sahili.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop" },
      { name: "Astara Bazarı", description: "Sərhəd bazarı, müxtəlif mallar.", price: "Pulsuz", rating: 4.2, image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Astara Restaurant", cuisine: "Talış mətbəxi", priceRange: "10–18 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Astara Hotel", priceRange: "40–80 AZN/gecə", rating: 4.1, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
      { name: "Astara Guest House", priceRange: "20–35 AZN/gecə", rating: 3.9, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İstisu Bulaqları", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Sahil gəzintisi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Bazarı gəz", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İstisu Bulaqları", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Sahil gəzintisi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Bazarı gəz", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Lənkəran səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "İstirahət", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İstisu Bulaqları", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Sahil gəzintisi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Bazarı gəz", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Lənkəran səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Lerik səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Meşə gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Masallı",
    lat: 39.0340, lng: 48.6595,
    region: "Cənub",
    tagline: "Subtropik bölgə",
    heroColor: "#F39C12",
    touristPlaces: [
      { name: "Yardımlı yolu", description: "Dağ yolu, panoramik mənzərə.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
      { name: "Masallı Parkı", description: "Şəhər parkı, gəzinti üçün.", price: "Pulsuz", rating: 4.1, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Masallı Restaurant", cuisine: "Milli mətbəx", priceRange: "10–18 AZN", rating: 4.1, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Masallı Hotel", priceRange: "35–70 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Yardımlı yolu", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Masallı Parkı", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Yardımlı yolu", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Masallı Parkı", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Lənkəran səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "İstirahət", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Yardımlı yolu", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Masallı Parkı", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Lənkəran səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Astara səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Lerik səfəri", type: "activity", price: "5 AZN" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Şirvan",
    lat: 39.9275, lng: 48.9206,
    region: "Aran",
    tagline: "Neft şəhəri",
    heroColor: "#795548",
    touristPlaces: [
      { name: "Şirvan Milli Parkı", description: "Ceyranlar və quşlar üçün qoruq.", price: "2 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop" },
      { name: "Şirvan Şəhər Parkı", description: "Gəzinti üçün yaşıl park.", price: "Pulsuz", rating: 4.0, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Şirvan Restaurant", cuisine: "Milli mətbəx", priceRange: "10–18 AZN", rating: 4.0, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Şirvan Hotel", priceRange: "35–70 AZN/gecə", rating: 3.9, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şirvan Milli Parkı", type: "tourist", price: "2 AZN" }] },
        { day: 2, activities: [{ name: "Şəhər Parkı", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şirvan Milli Parkı", type: "tourist", price: "2 AZN" }] },
        { day: 2, activities: [{ name: "Şəhər Parkı", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Salyan səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "İstirahət", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şirvan Milli Parkı", type: "tourist", price: "2 AZN" }] },
        { day: 2, activities: [{ name: "Şəhər Parkı", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Salyan səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Qobustan səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Dəniz sahili", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Lerik",
    lat: 38.7736, lng: 48.4152,
    region: "Cənub",
    tagline: "Uzunömürlülər diyarı",
    heroColor: "#8E44AD",
    touristPlaces: [
      { name: "Lerik Uzunömürlülər Muzeyi", description: "120 yaşı keçmiş insanlar haqqında muzey.", price: "2 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop" },
      { name: "Lerik Dağları", description: "Talış dağları, trekkinq.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
      { name: "Lerik Şəlaləsi", description: "Gözəl dağ şəlaləsi.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Lerik Restaurant", cuisine: "Talış mətbəxi", priceRange: "8–15 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Lerik Guest House", priceRange: "15–30 AZN/gecə", rating: 3.9, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Uzunömürlülər Muzeyi", type: "tourist", price: "2 AZN" }] },
        { day: 2, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəlalə", type: "tourist", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Uzunömürlülər Muzeyi", type: "tourist", price: "2 AZN" }] },
        { day: 2, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəlalə", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Kənd gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Lənkəran səfəri", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Uzunömürlülər Muzeyi", type: "tourist", price: "2 AZN" }] },
        { day: 2, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəlalə", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Kənd gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Lənkəran səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Masallı səfəri", type: "activity", price: "5 AZN" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Tovuz",
    lat: 40.9925, lng: 45.6286,
    region: "Qərb",
    tagline: "Qərb qapısı",
    heroColor: "#FF8C00",
    touristPlaces: [
      { name: "Ağbulaq kəndi", description: "Gözəl dağ kəndi.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
      { name: "Tovuz Məscidi", description: "Tarixi məscid.", price: "Pulsuz", rating: 4.1, image: "https://images.unsplash.com/photo-1585036156171-384164a8c821?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Tovuz Restaurant", cuisine: "Milli mətbəx", priceRange: "10–18 AZN", rating: 4.0, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Tovuz Hotel", priceRange: "30–60 AZN/gecə", rating: 3.9, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "3 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Ağbulaq kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Tovuz Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Ağbulaq kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Tovuz Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Gəncə səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "İstirahət", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Ağbulaq kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Tovuz Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəhər gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Gəncə səfəri", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Göygöl səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Piknik", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Geri dönüş", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
];

// Static cities use lat/lng converted to SVG coordinates via latLngToXY
// These are approximate positions for cities NOT in the main CITIES array
export const STATIC_CITIES: StaticCity[] = [
  { name: "Ağcabədi", ...latLngToStaticXY(40.05, 47.46) },
  { name: "Ağdam", ...latLngToStaticXY(39.99, 46.93) },
  { name: "Ağdaş", ...latLngToStaticXY(40.64, 47.47) },
  { name: "Ağstafa", ...latLngToStaticXY(41.12, 45.45) },
  { name: "Ağsu", ...latLngToStaticXY(40.57, 48.40) },
  { name: "Bərdə", ...latLngToStaticXY(40.38, 47.13) },
  { name: "Beyləqan", ...latLngToStaticXY(39.77, 47.62) },
  { name: "Biləsuvar", ...latLngToStaticXY(39.46, 48.55) },
  { name: "Cəbrayıl", ...latLngToStaticXY(39.40, 47.03) },
  { name: "Cəlilabad", ...latLngToStaticXY(39.21, 48.50) },
  { name: "Daşkəsən", ...latLngToStaticXY(40.52, 46.08) },
  { name: "Füzuli", ...latLngToStaticXY(39.60, 47.14) },
  { name: "Gədəbəy", ...latLngToStaticXY(40.57, 45.81) },
  { name: "Goranboy", ...latLngToStaticXY(40.61, 46.79) },
  { name: "Göyçay", ...latLngToStaticXY(40.65, 47.74) },
  { name: "Hacıqabul", ...latLngToStaticXY(40.04, 48.94) },
  { name: "İmişli", ...latLngToStaticXY(39.87, 48.06) },
  { name: "Kürdəmir", ...latLngToStaticXY(40.34, 48.16) },
  { name: "Laçın", ...latLngToStaticXY(39.63, 46.55) },
  { name: "Neftçala", ...latLngToStaticXY(39.38, 49.25) },
  { name: "Qazax", ...latLngToStaticXY(41.09, 45.37) },
  { name: "Qubadlı", ...latLngToStaticXY(39.35, 46.58) },
  { name: "Saatlı", ...latLngToStaticXY(39.93, 48.37) },
  { name: "Sabirabad", ...latLngToStaticXY(39.99, 48.48) },
  { name: "Salyan", ...latLngToStaticXY(39.59, 48.98) },
  { name: "Şəmkir", ...latLngToStaticXY(40.83, 46.02) },
  { name: "Samux", ...latLngToStaticXY(40.76, 46.41) },
  { name: "Siyəzən", ...latLngToStaticXY(41.08, 49.11) },
  { name: "Tərtər", ...latLngToStaticXY(40.34, 46.93) },
  { name: "Ucar", ...latLngToStaticXY(40.51, 47.65) },
  { name: "Xızı", ...latLngToStaticXY(40.91, 49.07) },
  { name: "Xocavənd", ...latLngToStaticXY(39.79, 47.11) },
  { name: "Yardımlı", ...latLngToStaticXY(38.91, 48.24) },
  { name: "Yevlax", ...latLngToStaticXY(40.62, 47.15) },
  { name: "Zəngilan", ...latLngToStaticXY(39.08, 46.66) },
  { name: "Zərdab", ...latLngToStaticXY(40.22, 47.71) },
  { name: "Ordubad", ...latLngToStaticXY(38.91, 46.02) },
  { name: "Şərur", ...latLngToStaticXY(39.55, 44.98) },
];

function latLngToStaticXY(lat: number, lng: number): { x: number; y: number } {
  const minLat = 38.353659, maxLat = 41.906070;
  const minLng = 44.760482, maxLng = 50.614493;
  const x = ((lng - minLng) / (maxLng - minLng)) * 774;
  const y = ((maxLat - lat) / (maxLat - minLat)) * 612;
  return { x: Math.round(x), y: Math.round(y) };
}

// Matches the geo-calibrated SVG: geoViewBox="44.760482 41.906070 50.614493 38.353659"
// SVG native size: 774.02289 x 612.39087
export function latLngToXY(lat: number, lng: number, width = 774, height = 612) {
  const minLat = 38.353659, maxLat = 41.906070;
  const minLng = 44.760482, maxLng = 50.614493;
  const x = ((lng - minLng) / (maxLng - minLng)) * width;
  const y = ((maxLat - lat) / (maxLat - minLat)) * height;
  return { x, y };
}

export const TYPE_COLORS: Record<string, string> = {
  tourist: "#E8A838",
  restaurant: "#E85858",
  hotel: "#4A90D9",
  activity: "#52C77C",
};

export const TYPE_ICONS: Record<string, string> = {
  tourist: "🏛",
  restaurant: "🍽",
  hotel: "🏨",
  activity: "🎯",
};
