// ==================== BAKU PLACES (Top 30) ====================
export interface BakuPlace {
  name: string;
  category: "tarixi" | "muasir" | "gezinti" | "park" | "etraf" | "turistik" | "medeni";
  description: string;
  address: string;
  price: string;
  rating: number;
  image: string;
}

export const BAKU_PLACES: BakuPlace[] = [
  // 🏛 Tarixi yerlər
  { name: "İçərişəhər", category: "tarixi", description: "UNESCO Dünya İrsi siyahısında olan qədim qala şəhəri. Dar küçələri, tarixi binaları ilə möhtəşəmdir.", address: "İçərişəhər, Bakı", price: "Pulsuz", rating: 4.9, image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400&h=300&fit=crop" },
  { name: "Qız Qalası", category: "tarixi", description: "XII əsrdən qalan sirli qala qülləsi, möhtəşəm panoramik mənzərəsi var.", address: "İçərişəhər, Bakı", price: "8 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop" },
  { name: "Şirvanşahlar Sarayı", category: "tarixi", description: "XV əsrdən qalan möhtəşəm saray kompleksi, UNESCO abidəsi.", address: "İçərişəhər, Bakı", price: "10 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=400&h=300&fit=crop" },
  { name: "Sınıq Qala", category: "tarixi", description: "XII əsr minarəsi ilə məşhur tarixi məscid.", address: "İçərişəhər, Bakı", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1548407260-da850faa41e3?w=400&h=300&fit=crop" },
  { name: "Buxara Karvansarayı", category: "tarixi", description: "XV əsr ticarət karvansarayı, indi restoran və suvenir mağazaları.", address: "İçərişəhər, Bakı", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
  { name: "Multani Karvansarayı", category: "tarixi", description: "XIV əsr ticarət mərkəzi, gözəl həyəti ilə tanınır.", address: "İçərişəhər, Bakı", price: "Pulsuz", rating: 4.2, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop" },

  // 🌆 Müasir yerlər
  { name: "Heydər Əliyev Mərkəzi", category: "muasir", description: "Zaha Hadid-in dizayn etdiyi ikonik bina, müasir memarlıq şah əsəri.", address: "Heydər Əliyev pr. 1", price: "15 AZN", rating: 4.9, image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop" },
  { name: "Alov Qüllələri", category: "muasir", description: "Müasir Bakının simvolu olan üç alışan qüllə.", address: "Məhəmməd Hadi küç.", price: "Pulsuz (bayırdan)", rating: 4.8, image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=300&fit=crop" },
  { name: "Dağüstü Park", category: "muasir", description: "Şəhərin panoramik mənzərəsi açılan park, funikulyor ilə çatmaq olar.", address: "Dağüstü Park", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400&h=300&fit=crop" },
  { name: "Şəhidlər Xiyabanı", category: "muasir", description: "Qara Yanvar şəhidlərinin xatirə kompleksi, əbədi məşəl.", address: "Şəhidlər Xiyabanı", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&h=300&fit=crop" },
  { name: "Baku Crystal Hall", category: "muasir", description: "2012 Eurovision üçün tikilmiş möhtəşəm konsert zalı.", address: "Flaq meydanı", price: "Tədbirə görə", rating: 4.5, image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop" },

  // 🌊 Gəzinti yerləri
  { name: "Dənizkənarı Bulvar", category: "gezinti", description: "6 km uzunluğunda Xəzər dənizi sahili boyunca gözəl gəzinti yolu.", address: "Neftçilər pr.", price: "Pulsuz", rating: 4.8, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop" },
  { name: "Kiçik Venesiya", category: "gezinti", description: "Bulvardakı kanal sistemi, qayıqla gəzinti imkanı.", address: "Sahil Bulvarı", price: "5 AZN (qayıq)", rating: 4.4, image: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=400&h=300&fit=crop" },
  { name: "Bakı Ferris Wheel", category: "gezinti", description: "Şeytan Çarxı — möhtəşəm panoramik mənzərə.", address: "Sahil Bulvarı", price: "5 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1567789884554-0b308b3e2e30?w=400&h=300&fit=crop" },
  { name: "Nizami küçəsi (Tarqovu)", category: "gezinti", description: "Bakının ən məşhur piyada küçəsi, mağazalar, kafelər.", address: "Nizami küçəsi", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop" },

  // 🌳 Parklar
  { name: "Dədə Qorqud Parkı", category: "park", description: "Şəhər mərkəzində yaşıl park, istirahət və gəzinti üçün ideal.", address: "Nəsimi rayonu", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=400&h=300&fit=crop" },
  { name: "Zabrat Parkı", category: "park", description: "Geniş ərazidə istirahət parkı.", address: "Zabrat", price: "Pulsuz", rating: 4.0, image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=400&h=300&fit=crop" },
  { name: "Mərkəzi Botanika Bağı", category: "park", description: "Nadir bitki növləri ilə zəngin botanika bağı.", address: "Badamdar", price: "2 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop" },

  // 🏝 Bakı ətrafı yerlər
  { name: "Atəşgah Məbədi", category: "etraf", description: "Əbədi alov məbədi, Zərdüştlük dövrünə aiddir.", address: "Suraxanı", price: "4 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" },
  { name: "Yanardağ", category: "etraf", description: "Təbii qaz ilə daim yanan dağ yamacı.", address: "Məhəmmədi", price: "2 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=400&h=300&fit=crop" },
  { name: "Qobustan Qaya Rəsmləri", category: "etraf", description: "UNESCO — 40.000 illik qaya rəsmləri.", address: "Qobustan", price: "5 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop" },
  { name: "Palçıq Vulkanları", category: "etraf", description: "Dünyada ən çox palçıq vulkanı Azərbaycandadır.", address: "Qobustan ətrafı", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop" },

  // 📸 Turistlərin sevdiyi yerlər
  { name: "Ağ Şəhər Bulvarı", category: "turistik", description: "Müasir yaşayış kompleksi, gözəl dəniz kənarı.", address: "Ağ Şəhər", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop" },
  { name: "Port Baku ərazisi", category: "turistik", description: "Lüks alış-veriş və istirahət mərkəzi.", address: "Neftçilər pr.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop" },
  { name: "İçərişəhər küçələri", category: "turistik", description: "Fotogenik dar küçələr, tarixi ab-hava.", address: "İçərişəhər", price: "Pulsuz", rating: 4.8, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
  { name: "Highland Terrace", category: "turistik", description: "Panoramik mənzərə nöqtəsi, gözəl gün batımı.", address: "Dağüstü Park yaxını", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=400&h=300&fit=crop" },

  // 🎭 Mədəni yerlər
  { name: "Nizami Kino Mərkəzi", category: "medeni", description: "Tarixi kino binası, mədəni tədbirlər üçün.", address: "Nizami küçəsi", price: "Filmə görə", rating: 4.2, image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop" },
  { name: "Azərbaycan Milli Xalça Muzeyi", category: "medeni", description: "Unikal xalça kolleksiyası, xalça formasında bina.", address: "Mikayıl Useynov pr.", price: "7 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" },
  { name: "Opera və Balet Teatrı", category: "medeni", description: "1911-ci ildən fəaliyyət göstərən möhtəşəm teatr.", address: "Nizami küçəsi 95", price: "15-60 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=300&fit=crop" },
  { name: "Muzey Mərkəzi", category: "medeni", description: "Müxtəlif ekspozisiyalar, müasir incəsənət.", address: "Neftçilər pr.", price: "10 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=400&h=300&fit=crop" },
];

export const PLACE_CATEGORIES: Record<string, string> = {
  all: "🌐 Hamısı",
  tarixi: "🏛 Tarixi",
  muasir: "🌆 Müasir",
  gezinti: "🌊 Gəzinti",
  park: "🌳 Parklar",
  etraf: "🏝 Bakı ətrafı",
  turistik: "📸 Turistik",
  medeni: "🎭 Mədəni",
};

// ==================== BAKU HOTELS (Top 20) ====================
export interface BakuHotel {
  name: string;
  tier: "luxury" | "mid" | "budget" | "economy";
  address: string;
  priceRange: string;
  rating: number;
  image: string;
  instagram?: string;
}

export const BAKU_HOTELS: BakuHotel[] = [
  // 💎 Luxury
  { name: "Four Seasons Hotel", tier: "luxury", address: "Neftçilər pr. 1", priceRange: "400–800 AZN/gecə", rating: 4.9, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop" },
  { name: "Fairmont Flame Towers", tier: "luxury", address: "Məhəmməd Hadi küç. 1A", priceRange: "350–700 AZN/gecə", rating: 4.8, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop" },
  { name: "JW Marriott Absheron", tier: "luxury", address: "Azadlıq meydanı 674", priceRange: "300–600 AZN/gecə", rating: 4.8, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop" },
  { name: "Ritz-Carlton Baku", tier: "luxury", address: "Neftçilər pr.", priceRange: "350–650 AZN/gecə", rating: 4.7, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop" },
  { name: "Hilton Baku", tier: "luxury", address: "Azadlıq pr. 1", priceRange: "250–500 AZN/gecə", rating: 4.7, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop" },

  // ⭐ Mid-range
  { name: "Radisson Hotel Baku", tier: "mid", address: "Azadlıq pr.", priceRange: "150–300 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop" },
  { name: "Holiday Inn Baku", tier: "mid", address: "Atatürk pr.", priceRange: "120–250 AZN/gecə", rating: 4.4, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop" },
  { name: "Landmark Hotel", tier: "mid", address: "Nizami küçəsi 90A", priceRange: "130–260 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&h=300&fit=crop" },
  { name: "Midtown Hotel", tier: "mid", address: "Rəşid Behbudov küç.", priceRange: "100–200 AZN/gecə", rating: 4.3, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop" },
  { name: "Winter Park Hotel", tier: "mid", address: "Fəzail Bayramov küç.", priceRange: "110–220 AZN/gecə", rating: 4.4, image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop" },

  // 💰 Budget
  { name: "Ibis Baku City", tier: "budget", address: "Heydər Əliyev pr.", priceRange: "60–120 AZN/gecə", rating: 4.1, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400&h=300&fit=crop" },
  { name: "Parkside Hotel", tier: "budget", address: "Şəhidlər küçəsi", priceRange: "70–140 AZN/gecə", rating: 4.2, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop" },
  { name: "Central Park Hotel", tier: "budget", address: "S.Vurğun küçəsi", priceRange: "65–130 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=400&h=300&fit=crop" },
  { name: "East Legend Hotel", tier: "budget", address: "Böyük Qala küçəsi", priceRange: "80–160 AZN/gecə", rating: 4.3, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop" },
  { name: "Riviera Hotel", tier: "budget", address: "Sahil", priceRange: "55–110 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=400&h=300&fit=crop" },

  // 💸 Economy
  { name: "Sunday Hotel", tier: "economy", address: "28 May küçəsi", priceRange: "35–70 AZN/gecə", rating: 3.9, image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop" },
  { name: "Altus Hotel", tier: "economy", address: "Nərimanov rayonu", priceRange: "40–80 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop" },
  { name: "City Park Hotel", tier: "economy", address: "Bakı şəhəri", priceRange: "30–65 AZN/gecə", rating: 3.8, image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=400&h=300&fit=crop" },
  { name: "Deniz Inn Hotel", tier: "economy", address: "Sahil", priceRange: "25–55 AZN/gecə", rating: 3.7, image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop" },
  { name: "Old City Inn", tier: "economy", address: "İçərişəhər yaxını", priceRange: "30–60 AZN/gecə", rating: 4.1, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop" },
];

export const HOTEL_TIERS: Record<string, string> = {
  all: "🏨 Hamısı",
  luxury: "💎 Lüks",
  mid: "⭐ Orta qiymət",
  budget: "💰 Büdcəli",
  economy: "💸 Ucuz",
};

// ==================== BAKU RESTAURANTS (Top 30) ====================
export interface BakuRestaurant {
  name: string;
  category: "steak" | "azerbaycan" | "premium" | "manzarali" | "casual" | "diger";
  cuisine: string;
  address: string;
  priceRange: string;
  rating: number;
  image: string;
  instagram?: string;
}

export const BAKU_RESTAURANTS: BakuRestaurant[] = [
  // 🥩 Steak və Mangal
  { name: "Mangal Steak House", category: "steak", cuisine: "Steak & Mangal", address: "Nizami küçəsi", priceRange: "40–80 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop", instagram: "mangalsteakhouse" },
  { name: "Gunaydin Restaurant", category: "steak", cuisine: "Türk/Steak", address: "Port Baku", priceRange: "50–100 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop", instagram: "gunaydınbaku" },
  { name: "Fillet House", category: "steak", cuisine: "Steak", address: "Tbilisi pr.", priceRange: "45–90 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop" },
  { name: "Meatadore", category: "steak", cuisine: "Steak & BBQ", address: "Nərimanov", priceRange: "35–70 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop" },
  { name: "Fireworks Steak", category: "steak", cuisine: "Steak", address: "Sahil", priceRange: "40–85 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop" },

  // 🇦🇿 Azərbaycan mətbəxi
  { name: "Shirvanshah Museum Restaurant", category: "azerbaycan", cuisine: "Azərbaycan", address: "İçərişəhər", priceRange: "30–60 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop" },
  { name: "Dolma Restaurant", category: "azerbaycan", cuisine: "Azərbaycan", address: "Fountains Meydanı", priceRange: "25–50 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop" },
  { name: "Qaynana Restaurant", category: "azerbaycan", cuisine: "Azərbaycan", address: "Nizami küçəsi", priceRange: "20–45 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop" },
  { name: "Nakhchivan Restaurant", category: "azerbaycan", cuisine: "Naxçıvan mətbəxi", address: "Bakı şəhəri", priceRange: "20–40 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop" },
  { name: "Sumakh Restaurant", category: "azerbaycan", cuisine: "Azərbaycan", address: "İçərişəhər", priceRange: "25–55 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop" },

  // 🍷 Premium
  { name: "Chinar Restaurant", category: "premium", cuisine: "Fine Dining", address: "Sahil bulvarı", priceRange: "60–120 AZN", rating: 4.9, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop" },
  { name: "Sky Grill", category: "premium", cuisine: "Beynəlxalq", address: "Hilton Baku", priceRange: "70–140 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop" },
  { name: "Art Club Restaurant", category: "premium", cuisine: "Fusion", address: "İçərişəhər", priceRange: "50–100 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f73?w=400&h=300&fit=crop" },
  { name: "Çay Bağı 145", category: "premium", cuisine: "Azərbaycan/Premium", address: "Dağüstü Park", priceRange: "45–90 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop" },
  { name: "MariVanna Baku", category: "premium", cuisine: "Rus/Premium", address: "Port Baku", priceRange: "55–110 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1560053608-13721e0d69e8?w=400&h=300&fit=crop" },

  // 🌊 Mənzərəli
  { name: "Darya Fish House", category: "manzarali", cuisine: "Dəniz məhsulları", address: "Sahil bulvarı", priceRange: "35–70 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop" },
  { name: "Sahil Bar & Restaurant", category: "manzarali", cuisine: "Beynəlxalq", address: "Bulvar", priceRange: "30–60 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop" },
  { name: "Shore House", category: "manzarali", cuisine: "Mediterranean", address: "Bilgah", priceRange: "40–80 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop" },
  { name: "Terrace 145", category: "manzarali", cuisine: "Beynəlxalq", address: "Dağüstü Park", priceRange: "35–75 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop" },
  { name: "Pasifico", category: "manzarali", cuisine: "Asian Fusion", address: "Sahil", priceRange: "45–90 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=400&h=300&fit=crop" },

  // 🍔 Casual
  { name: "United Coffee Beans", category: "casual", cuisine: "Kafe/Brunch", address: "Nizami küçəsi", priceRange: "10–25 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop" },
  { name: "Coffee Moffie", category: "casual", cuisine: "Kafe", address: "28 May", priceRange: "8–20 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop" },
  { name: "Espresso Lab", category: "casual", cuisine: "Kafe", address: "Port Baku", priceRange: "10–25 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop" },
  { name: "Paul's Baku", category: "casual", cuisine: "Fransız/Kafe", address: "Port Baku", priceRange: "15–35 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=300&fit=crop" },
  { name: "Hard Rock Cafe Baku", category: "casual", cuisine: "Amerika", address: "Port Baku", priceRange: "25–50 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop" },

  // 🍣 Digər mətbəxlər
  { name: "Buddha Bar Baku", category: "diger", cuisine: "Pan-Asian", address: "JW Marriott", priceRange: "60–120 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop" },
  { name: "Scalini Italian Restaurant", category: "diger", cuisine: "İtalyan", address: "Hilton Baku", priceRange: "40–80 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop" },
  { name: "Namaste Indian Restaurant", category: "diger", cuisine: "Hind", address: "Sahil", priceRange: "25–50 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop" },
  { name: "Wok Asian Cuisine", category: "diger", cuisine: "Asiya", address: "Nərimanov", priceRange: "20–40 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" },
  { name: "Sushi Room", category: "diger", cuisine: "Yapon", address: "Port Baku", priceRange: "30–65 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop" },
];

export const RESTAURANT_CATEGORIES: Record<string, string> = {
  all: "🍽 Hamısı",
  steak: "🥩 Steak & Mangal",
  azerbaycan: "🇦🇿 Azərbaycan",
  premium: "🍷 Premium",
  manzarali: "🌊 Mənzərəli",
  casual: "🍔 Casual",
  diger: "🍣 Digər",
};

// ==================== MALLS ====================
export interface Mall {
  name: string;
  address: string;
  nearestMetro: string;
  image: string;
}

export const BAKU_MALLS: Mall[] = [
  { name: "28 Mall", address: "Nəsimi rayonu", nearestMetro: "28 May", image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400&h=300&fit=crop" },
  { name: "Ganjlik Mall", address: "Təbriz küçəsi", nearestMetro: "Gənclik", image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=400&h=300&fit=crop" },
  { name: "Port Baku Mall", address: "Neftçilər prospekti", nearestMetro: "Sahil", image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop" },
  { name: "Deniz Mall", address: "Bulvar", nearestMetro: "Sahil", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=300&fit=crop" },
  { name: "Park Bulvar", address: "Bulvar", nearestMetro: "Sahil", image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400&h=300&fit=crop" },
  { name: "Metro Park", address: "Təbriz küçəsi", nearestMetro: "Nərimanov", image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=400&h=300&fit=crop" },
  { name: "Crescent Mall", address: "Ağ Şəhər", nearestMetro: "—", image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop" },
  { name: "Aygun Mall", address: "Azadlıq prospekti", nearestMetro: "Azadlıq", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=300&fit=crop" },
];

// ==================== MARKETS ====================
export interface Market {
  name: string;
  tier: "premium" | "standard" | "budget";
  image: string;
}

export const BAKU_MARKETS: Market[] = [
  { name: "Port Baku Bazaar", tier: "premium", image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400&h=300&fit=crop" },
  { name: "Grand Market", tier: "premium", image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop" },
  { name: "Bravo", tier: "standard", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=300&fit=crop" },
  { name: "Araz", tier: "standard", image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=300&fit=crop" },
  { name: "Bazarstore", tier: "budget", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop" },
];

// ==================== RENTAL SITES ====================
export interface RentalSite {
  name: string;
  url: string;
  description: string;
  icon: string;
}

export const RENTAL_SITES: RentalSite[] = [
  { name: "Airbnb", url: "https://www.airbnb.com/s/Baku", description: "Qısa müddətli kirayə evlər, mənzillər", icon: "🏠" },
  { name: "Booking.com", url: "https://www.booking.com/city/az/baku.html", description: "Otellər və apartamentlər", icon: "🏨" },
  { name: "Tap.az", url: "https://tap.az/elanlar/dasinmaz-emlak/menziller/kiraye/gunluk", description: "Yerli elanlar saytı", icon: "📋" },
  { name: "Bina.az", url: "https://bina.az/kiraye/menzil/gundelik", description: "Emlak portalı", icon: "🏗" },
  { name: "Lalafo", url: "https://lalafo.az", description: "Elanlar saytı", icon: "📱" },
  { name: "Yeniemlak.az", url: "https://yeniemlak.az", description: "Emlak axtarış platforması", icon: "🔍" },
];
