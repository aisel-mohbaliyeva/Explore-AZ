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
}

export interface Hotel {
  name: string;
  priceRange: string;
  rating: number;
  image: string;
}

export interface City {
  city: string;
  lat: number;
  lng: number;
  region: string;
  tagline: string;
  heroColor: string;
  touristPlaces: TouristPlace[];
  restaurants: Restaurant[];
  hotels: Hotel[];
  plans: Plan[];
}

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
      { name: "Şəki Xan Sarayı", description: "XVIII əsrdən qalan tarixi saray, şüşəbənd pəncərələri ilə məşhurdur.", price: "5 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=400&h=250&fit=crop" },
      { name: "Albaniya Kilsəsi", description: "Qədim Alban xristian kilsəsi, IV əsrə aiddir.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1548407260-da850faa41e3?w=400&h=250&fit=crop" },
      { name: "Şəki Qalası", description: "Orta əsr müdafiə qalası, panoramik mənzərə.", price: "3 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Şəki Milli Mətbəxi", cuisine: "Azərbaycan", priceRange: "15–25 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop" },
      { name: "Karvan Sarayı Restoran", cuisine: "Azərbaycan/Dünya", priceRange: "20–40 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Şəki Saray Hotel", priceRange: "60–120 AZN/gecə", rating: 4.6, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop" },
      { name: "Caravanserai Hotel", priceRange: "80–150 AZN/gecə", rating: 4.8, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şəki Xan Sarayı", type: "tourist", price: "5 AZN" }, { name: "Albaniya Kilsəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Karvan Sarayı Restoran", type: "restaurant", price: "25 AZN" }, { name: "Şəki Qalası", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Şəki Milli Mətbəxi", type: "restaurant", price: "20 AZN" }, { name: "Bazarlıq & Suvenirlər", type: "activity", price: "~10 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şəki Xan Sarayı", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Albaniya Kilsəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şəki Qalası", type: "tourist", price: "3 AZN" }] },
        { day: 4, activities: [{ name: "Karvan Sarayı Restoran", type: "restaurant", price: "30 AZN" }] },
        { day: 5, activities: [{ name: "Yaxınlıq kəndlər turu", type: "activity", price: "15 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şəhərə gəliş & yerləşmə", type: "activity", price: "0 AZN" }] },
        { day: 2, activities: [{ name: "Şəki Xan Sarayı", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Albaniya Kilsəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Şəki Qalası", type: "tourist", price: "3 AZN" }] },
        { day: 5, activities: [{ name: "Karvan Sarayı Restoran", type: "restaurant", price: "30 AZN" }] },
        { day: 6, activities: [{ name: "Kənd ekskursiyası", type: "activity", price: "20 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Bakı",
    lat: 40.4093, lng: 49.8671,
    region: "Abşeron",
    tagline: "Şərqin Parisi",
    heroColor: "#1A3A5C",
    touristPlaces: [
      { name: "İçərişəhər (Köhnə Şəhər)", description: "UNESCO Dünya İrsi siyahısında olan qədim qala şəhəri.", price: "Pulsuz", rating: 4.9, image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400&h=250&fit=crop" },
      { name: "Qız Qalası", description: "XII əsrdən qalan sirli qala kulesi, möhtəşəm mənzərəsi var.", price: "8 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=250&fit=crop" },
      { name: "Alov Qüllələri", description: "Müasir Bakının simvolu olan üç alışan qüllə.", price: "Pulsuz (bayırdan)", rating: 4.8, image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Firuze Restaurant", cuisine: "Azərbaycan", priceRange: "30–60 AZN", rating: 4.8, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop" },
      { name: "Neftchi Baku", cuisine: "Fusion", priceRange: "40–80 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Four Seasons Baku", priceRange: "300–600 AZN/gecə", rating: 4.9, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop" },
      { name: "JW Marriott Absheron", priceRange: "150–300 AZN/gecə", rating: 4.7, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İçərişəhər turu", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Qız Qalası", type: "tourist", price: "8 AZN" }] },
        { day: 3, activities: [{ name: "Firuze Restaurant", type: "restaurant", price: "45 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İçərişəhər turu", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Qız Qalası", type: "tourist", price: "8 AZN" }] },
        { day: 3, activities: [{ name: "Alov Qüllələri", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Neftchi Baku", type: "restaurant", price: "60 AZN" }] },
        { day: 5, activities: [{ name: "Bakı Bulvarı & Gəzinti", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İçərişəhər turu", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Qız Qalası", type: "tourist", price: "8 AZN" }] },
        { day: 3, activities: [{ name: "Alov Qüllələri", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Neftchi Baku", type: "restaurant", price: "60 AZN" }] },
        { day: 5, activities: [{ name: "Bakı Bulvarı & Gəzinti", type: "activity", price: "Pulsuz" }] },
        { day: 6, activities: [{ name: "Müasir Incəsənət Muzeyi", type: "tourist", price: "5 AZN" }] },
        { day: 7, activities: [{ name: "Heydar Əliyev Mərkəzi", type: "tourist", price: "10 AZN" }] },
      ]},
    ],
  },
  {
    city: "Lənkəran",
    lat: 38.7529, lng: 48.8522,
    region: "Cənub",
    tagline: "Subtropik cənnət",
    heroColor: "#2D6A4F",
    touristPlaces: [
      { name: "Lənkəran Qalası", description: "XIX əsr Rus qalası, tarixi əhəmiyyəti böyükdür.", price: "3 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
      { name: "Hirkan Milli Parkı", description: "UNESCO Biosfer qoruğu, nadir flora və fauna.", price: "5 AZN", rating: 4.9, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Balıqçı Evi", cuisine: "Dəniz məhsulları", priceRange: "20–35 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Lənkəran Resort", priceRange: "70–130 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Lənkəran Qalası", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Hirkan Milli Parkı", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Balıqçı Evi", type: "restaurant", price: "30 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Lənkəran Qalası", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Hirkan Milli Parkı", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Balıqçı Evi", type: "restaurant", price: "30 AZN" }] },
        { day: 4, activities: [{ name: "Xəzər sahili gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Çay bağları turu", type: "activity", price: "10 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Lənkəran Qalası", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Hirkan Milli Parkı", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Balıqçı Evi", type: "restaurant", price: "30 AZN" }] },
        { day: 4, activities: [{ name: "Xəzər sahili gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Çay bağları turu", type: "activity", price: "10 AZN" }] },
        { day: 6, activities: [{ name: "Astara səfəri", type: "activity", price: "15 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & bazarlıq", type: "activity", price: "~20 AZN" }] },
      ]},
    ],
  },
  {
    city: "Qəbələ",
    lat: 40.9981, lng: 47.8498,
    region: "Şimal-Qərb",
    tagline: "Dağların qoynunda",
    heroColor: "#4A6741",
    touristPlaces: [
      { name: "Nohur Gölü", description: "Dağ göl, gözəl təbiət mənzərəsi ilə əhatə olunmuşdur.", price: "Pulsuz", rating: 4.8, image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=250&fit=crop" },
      { name: "Qəbələ Kanat Yolu", description: "Dağlara qalxmaq üçün kanat yolu, panoramik mənzərə.", price: "15 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Dağ Evi Restoran", cuisine: "Azərbaycan/Dağ mətbəxi", priceRange: "25–45 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Qəbələ Olympic Complex", priceRange: "120–250 AZN/gecə", rating: 4.8, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nohur Gölü", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Qəbələ Kanat Yolu", type: "tourist", price: "15 AZN" }] },
        { day: 3, activities: [{ name: "Dağ Evi Restoran", type: "restaurant", price: "35 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nohur Gölü", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Qəbələ Kanat Yolu", type: "tourist", price: "15 AZN" }] },
        { day: 3, activities: [{ name: "Dağ Evi Restoran", type: "restaurant", price: "35 AZN" }] },
        { day: 4, activities: [{ name: "Yaxınlıq çaylar turu", type: "activity", price: "10 AZN" }] },
        { day: 5, activities: [{ name: "Qədim Qəbələ tarixi yeri", type: "tourist", price: "5 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nohur Gölü", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Qəbələ Kanat Yolu", type: "tourist", price: "15 AZN" }] },
        { day: 3, activities: [{ name: "Dağ Evi Restoran", type: "restaurant", price: "35 AZN" }] },
        { day: 4, activities: [{ name: "Yaxınlıq çaylar turu", type: "activity", price: "10 AZN" }] },
        { day: 5, activities: [{ name: "Qədim Qəbələ tarixi yeri", type: "tourist", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Meşə pikniki", type: "activity", price: "~15 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Gəncə",
    lat: 40.6828, lng: 46.3606,
    region: "Qərb",
    tagline: "Nizaminin vətəni",
    heroColor: "#6B3A8B",
    touristPlaces: [
      { name: "Nizami Türbəsi", description: "Böyük Azərbaycan şairi Nizami Gəncəvinin məzarı.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1548407260-da850faa41e3?w=400&h=250&fit=crop" },
      { name: "Şah Abbas Məscidi", description: "XVII əsr Səfəvi dövrü məscidi, memarlıq incisi.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Gəncə Əşrəfi", cuisine: "Azərbaycan", priceRange: "15–30 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Vego Hotel Gəncə", priceRange: "80–160 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nizami Türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Şah Abbas Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Gəncə Əşrəfi", type: "restaurant", price: "25 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nizami Türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Şah Abbas Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Gəncə Əşrəfi", type: "restaurant", price: "25 AZN" }] },
        { day: 4, activities: [{ name: "İmamzadə türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Gəncə park & bulvar", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nizami Türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Şah Abbas Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Gəncə Əşrəfi", type: "restaurant", price: "25 AZN" }] },
        { day: 4, activities: [{ name: "İmamzadə türbəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Gəncə park & bulvar", type: "activity", price: "Pulsuz" }] },
        { day: 6, activities: [{ name: "Yaxınlıq rayonlar turu", type: "activity", price: "15 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Sumqayıt",
    lat: 40.5855, lng: 49.6317,
    region: "Abşeron",
    tagline: "Sənaye şəhəri",
    heroColor: "#3A6B9F",
    touristPlaces: [
      { name: "Sumqayıt Bulvarı", description: "Xəzər sahili boyunca uzanan gözəl park və gəzinti yeri.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop" },
      { name: "Sumqayıt Mədəniyyət Evi", description: "Sovet dövrü memarlıq nümunəsi, müxtəlif tədbirlər keçirilir.", price: "3 AZN", rating: 4.1, image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Sahil Restoran", cuisine: "Azərbaycan/Dəniz", priceRange: "20–40 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "AF Hotel", priceRange: "100–200 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Sumqayıt Bulvarı", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Sumqayıt Mədəniyyət Evi", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Sahil Restoran", type: "restaurant", price: "30 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Sumqayıt Bulvarı", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Sumqayıt Mədəniyyət Evi", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Sahil Restoran", type: "restaurant", price: "30 AZN" }] },
        { day: 4, activities: [{ name: "Sahil gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Bakıya günübirlik səfər", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Sumqayıt Bulvarı", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Mədəniyyət Evi", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Sahil Restoran", type: "restaurant", price: "30 AZN" }] },
        { day: 4, activities: [{ name: "Sahil gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Bakıya səfər", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Xəzər parkı", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Quba",
    lat: 41.3613, lng: 48.5135,
    region: "Şimal",
    tagline: "Alma bağlarının diyarı",
    heroColor: "#D44D4D",
    touristPlaces: [
      { name: "Qırmızı Qəsəbə", description: "Dağ yəhudilərinin yaşadığı unikal qəsəbə, dünyada yeganə.", price: "Pulsuz", rating: 4.8, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop" },
      { name: "Afurca Şəlaləsi", description: "Quba rayonunda yerləşən gözəl təbiət abidəsi.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
      { name: "Cümə Məscidi", description: "XIX əsrdən qalan tarixi məscid.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Quba Kababçısı", cuisine: "Azərbaycan", priceRange: "15–30 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Rixos Quba Azerbaijan", priceRange: "200–400 AZN/gecə", rating: 4.9, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qırmızı Qəsəbə", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Afurca Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Quba Kababçısı", type: "restaurant", price: "25 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qırmızı Qəsəbə", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Afurca Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Cümə Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Quba Kababçısı", type: "restaurant", price: "25 AZN" }] },
        { day: 5, activities: [{ name: "Alma bağları turu", type: "activity", price: "10 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qırmızı Qəsəbə", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Afurca Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Cümə Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Quba Kababçısı", type: "restaurant", price: "25 AZN" }] },
        { day: 5, activities: [{ name: "Alma bağları turu", type: "activity", price: "10 AZN" }] },
        { day: 6, activities: [{ name: "Dağ kəndləri ekskursiyası", type: "activity", price: "15 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Qusar",
    lat: 41.4275, lng: 48.4304,
    region: "Şimal",
    tagline: "Şahdağın ətəyində",
    heroColor: "#2E86AB",
    touristPlaces: [
      { name: "Şahdağ Xizək Kurotu", description: "Azərbaycanın ən böyük xizək kurotu, qış turizmi üçün ideal.", price: "30 AZN", rating: 4.9, image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=400&h=250&fit=crop" },
      { name: "Laza kəndi", description: "Dağ kəndi, möhtəşəm təbiət mənzərəsi və şəlalələr.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Şahdağ Resort Restaurant", cuisine: "Azərbaycan/Beynəlxalq", priceRange: "30–60 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Şahdağ Hotel & Spa", priceRange: "250–500 AZN/gecə", rating: 4.8, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şahdağ Xizək Kurotu", type: "tourist", price: "30 AZN" }] },
        { day: 2, activities: [{ name: "Laza kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şahdağ Resort Restaurant", type: "restaurant", price: "45 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şahdağ Xizək Kurotu", type: "tourist", price: "30 AZN" }] },
        { day: 2, activities: [{ name: "Laza kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şahdağ Resort Restaurant", type: "restaurant", price: "45 AZN" }] },
        { day: 4, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "10 AZN" }] },
        { day: 5, activities: [{ name: "Quba şəhərinə səfər", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şahdağ Xizək Kurotu", type: "tourist", price: "30 AZN" }] },
        { day: 2, activities: [{ name: "Laza kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şahdağ Resort Restaurant", type: "restaurant", price: "45 AZN" }] },
        { day: 4, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "10 AZN" }] },
        { day: 5, activities: [{ name: "Quba şəhərinə səfər", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Spa & istirahət", type: "activity", price: "50 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Şamaxı",
    lat: 40.6317, lng: 48.6367,
    region: "Şirvan",
    tagline: "Qədim paytaxt",
    heroColor: "#8B4513",
    touristPlaces: [
      { name: "Şamaxı Rəsədxanası", description: "Azərbaycanın ən böyük astronomik rəsədxanası.", price: "5 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=400&h=250&fit=crop" },
      { name: "Cümə Məscidi", description: "Qafqazın ən qədim məscidlərindən biri, VIII əsrə aiddir.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=400&h=250&fit=crop" },
      { name: "Yeddi Gumbəz", description: "XVIII əsr türbə kompleksi, Şirvanşahlar dövrü.", price: "3 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1548407260-da850faa41e3?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Şamaxı Saçı Evi", cuisine: "Azərbaycan", priceRange: "10–25 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Şamaxı Palace Hotel", priceRange: "100–200 AZN/gecə", rating: 4.6, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şamaxı Rəsədxanası", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Cümə Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Yeddi Gumbəz", type: "tourist", price: "3 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şamaxı Rəsədxanası", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Cümə Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Yeddi Gumbəz", type: "tourist", price: "3 AZN" }] },
        { day: 4, activities: [{ name: "Şamaxı Saçı Evi", type: "restaurant", price: "20 AZN" }] },
        { day: 5, activities: [{ name: "Şərab zavoduna səfər", type: "activity", price: "10 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şamaxı Rəsədxanası", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Cümə Məscidi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Yeddi Gumbəz", type: "tourist", price: "3 AZN" }] },
        { day: 4, activities: [{ name: "Şamaxı Saçı Evi", type: "restaurant", price: "20 AZN" }] },
        { day: 5, activities: [{ name: "Şərab zavodu", type: "activity", price: "10 AZN" }] },
        { day: 6, activities: [{ name: "Pirsaat çayı turu", type: "activity", price: "5 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Zaqatala",
    lat: 41.6314, lng: 46.6445,
    region: "Şimal-Qərb",
    tagline: "Fındıq diyarı",
    heroColor: "#5D8C3E",
    touristPlaces: [
      { name: "Zaqatala Qalası", description: "XIX əsr Rus qalası, hərbi muzey.", price: "3 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" },
      { name: "Car-Balakən Meşələri", description: "Sıx meşələr, yürüyüş marşrutları.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Zaqatala Piti Evi", cuisine: "Azərbaycan", priceRange: "10–20 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Zaqatala City Hotel", priceRange: "50–100 AZN/gecə", rating: 4.3, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Zaqatala Qalası", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Car-Balakən Meşələri", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Zaqatala Piti Evi", type: "restaurant", price: "15 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Zaqatala Qalası", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Car-Balakən Meşələri", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Zaqatala Piti Evi", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Fındıq bağları turu", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Dağ kəndləri səfəri", type: "activity", price: "10 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Zaqatala Qalası", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Car-Balakən Meşələri", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Zaqatala Piti Evi", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Fındıq bağları turu", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Dağ kəndləri", type: "activity", price: "10 AZN" }] },
        { day: 6, activities: [{ name: "Balakən səfəri", type: "activity", price: "5 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Mingəçevir",
    lat: 40.7654, lng: 47.0597,
    region: "Mərkəzi Aran",
    tagline: "İşıqlar şəhəri",
    heroColor: "#E6A817",
    touristPlaces: [
      { name: "Mingəçevir Su Anbarı", description: "Azərbaycanın ən böyük su anbarı, gözəl mənzərə.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=250&fit=crop" },
      { name: "Mingəçevir SES", description: "Tarixi su elektrik stansiyası, sənaye turizmi.", price: "5 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Kür Restoran", cuisine: "Azərbaycan/Balıq", priceRange: "15–30 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Mingəçevir City Hotel", priceRange: "50–90 AZN/gecə", rating: 4.2, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Mingəçevir Su Anbarı", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Mingəçevir SES", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Kür Restoran", type: "restaurant", price: "25 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Mingəçevir Su Anbarı", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Mingəçevir SES", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Kür Restoran", type: "restaurant", price: "25 AZN" }] },
        { day: 4, activities: [{ name: "Kür çayı gəzintisi", type: "activity", price: "10 AZN" }] },
        { day: 5, activities: [{ name: "Şəhər parkı", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Su Anbarı", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Mingəçevir SES", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Kür Restoran", type: "restaurant", price: "25 AZN" }] },
        { day: 4, activities: [{ name: "Kür çayı gəzintisi", type: "activity", price: "10 AZN" }] },
        { day: 5, activities: [{ name: "Şəhər parkı", type: "activity", price: "Pulsuz" }] },
        { day: 6, activities: [{ name: "Yevlax səfəri", type: "activity", price: "5 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Naxçıvan",
    lat: 39.2089, lng: 45.4122,
    region: "Naxçıvan MR",
    tagline: "Qədim diyar",
    heroColor: "#C4451C",
    touristPlaces: [
      { name: "Möminə Xatun Türbəsi", description: "XII əsr Atabəylər dövrü memarlıq şah əsəri.", price: "5 AZN", rating: 4.9, image: "https://images.unsplash.com/photo-1548407260-da850faa41e3?w=400&h=250&fit=crop" },
      { name: "Əshabi-Kəhf", description: "Qədim dini ziyarətgah, mağara kompleksi.", price: "3 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" },
      { name: "Naxçıvan Qalası", description: "Qədim müdafiə qalası, panoramik mənzərə.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Naxçıvan Evi", cuisine: "Azərbaycan", priceRange: "15–30 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Naxçıvan Hotel", priceRange: "70–140 AZN/gecə", rating: 4.4, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Möminə Xatun Türbəsi", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Əshabi-Kəhf", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Naxçıvan Qalası", type: "tourist", price: "Pulsuz" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Möminə Xatun Türbəsi", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Əshabi-Kəhf", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Naxçıvan Qalası", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Naxçıvan Evi", type: "restaurant", price: "25 AZN" }] },
        { day: 5, activities: [{ name: "Ordubad səfəri", type: "activity", price: "15 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Möminə Xatun Türbəsi", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Əshabi-Kəhf", type: "tourist", price: "3 AZN" }] },
        { day: 3, activities: [{ name: "Naxçıvan Qalası", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Naxçıvan Evi", type: "restaurant", price: "25 AZN" }] },
        { day: 5, activities: [{ name: "Ordubad səfəri", type: "activity", price: "15 AZN" }] },
        { day: 6, activities: [{ name: "Duz Dağı terapiya", type: "activity", price: "20 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Şuşa",
    lat: 39.7558, lng: 46.7492,
    region: "Qarabağ",
    tagline: "Mədəniyyət beşiyi",
    heroColor: "#7B2D8E",
    touristPlaces: [
      { name: "Şuşa Qalası", description: "XVIII əsr Pənahəli xanın tikdirdiyi tarixi qala.", price: "5 AZN", rating: 4.9, image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=400&h=250&fit=crop" },
      { name: "Xan Qızı Bulağı", description: "Tarixi bulaq, Şuşanın simvolu.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
      { name: "Cıdır Düzü", description: "Panoramik mənzərə, at yarışları keçirilən tarixi yer.", price: "Pulsuz", rating: 4.8, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Şuşa Restoran", cuisine: "Azərbaycan/Qarabağ", priceRange: "20–40 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Şuşa Hotel", priceRange: "80–160 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şuşa Qalası", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Xan Qızı Bulağı", type: "tourist", price: "Pulsuz" }, { name: "Cıdır Düzü", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şuşa Restoran", type: "restaurant", price: "30 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şuşa Qalası", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Xan Qızı Bulağı", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Cıdır Düzü", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Şuşa Restoran", type: "restaurant", price: "30 AZN" }] },
        { day: 5, activities: [{ name: "Qarabağ təbiət turu", type: "activity", price: "15 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şuşa Qalası", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Xan Qızı Bulağı", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Cıdır Düzü", type: "tourist", price: "Pulsuz" }] },
        { day: 4, activities: [{ name: "Şuşa Restoran", type: "restaurant", price: "30 AZN" }] },
        { day: 5, activities: [{ name: "Qarabağ təbiət turu", type: "activity", price: "15 AZN" }] },
        { day: 6, activities: [{ name: "Muğam axşamı", type: "activity", price: "10 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Qobustan",
    lat: 40.0853, lng: 49.3872,
    region: "Abşeron",
    tagline: "Qaya rəsmləri diyarı",
    heroColor: "#A0522D",
    touristPlaces: [
      { name: "Qobustan Qayaüstü Rəsmlər", description: "UNESCO Dünya İrsi, 40.000 illik qaya rəsmləri.", price: "5 AZN", rating: 4.9, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" },
      { name: "Palçıq Vulkanları", description: "Dünyada ən çox palçıq vulkanı olan yer.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Qobustan Restoran", cuisine: "Azərbaycan", priceRange: "15–25 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Qobustan Guest House", priceRange: "40–80 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qayaüstü Rəsmlər", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Palçıq Vulkanları", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Qobustan Restoran", type: "restaurant", price: "20 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qayaüstü Rəsmlər", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Palçıq Vulkanları", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Qobustan Restoran", type: "restaurant", price: "20 AZN" }] },
        { day: 4, activities: [{ name: "Bakıya günübirlik səfər", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Xəzər sahili gəzintisi", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Qayaüstü Rəsmlər", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Palçıq Vulkanları", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Qobustan Restoran", type: "restaurant", price: "20 AZN" }] },
        { day: 4, activities: [{ name: "Bakıya səfər", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Xəzər sahili", type: "activity", price: "Pulsuz" }] },
        { day: 6, activities: [{ name: "Arxeoloji muzey", type: "tourist", price: "3 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "İsmayıllı",
    lat: 40.7869, lng: 48.1499,
    region: "Şimal",
    tagline: "Lahıc sənətkarları",
    heroColor: "#CD7F32",
    touristPlaces: [
      { name: "Lahıc kəndi", description: "Qədim sənətkarlıq kəndi, mis əşyalar, UNESCO namizədi.", price: "Pulsuz", rating: 4.9, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop" },
      { name: "İsmayıllı Dövlət Qoruğu", description: "Zəngin flora və fauna ilə dolu qoruq.", price: "5 AZN", rating: 4.6, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Lahıc Restoran", cuisine: "Azərbaycan/Dağ", priceRange: "10–25 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Lahıc Guest House", priceRange: "40–80 AZN/gecə", rating: 4.4, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Lahıc kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "İsmayıllı Qoruğu", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Lahıc Restoran", type: "restaurant", price: "20 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Lahıc kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "İsmayıllı Qoruğu", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Lahıc Restoran", type: "restaurant", price: "20 AZN" }] },
        { day: 4, activities: [{ name: "Mis emalatxanası", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "Pulsuz" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Lahıc kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "İsmayıllı Qoruğu", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Lahıc Restoran", type: "restaurant", price: "20 AZN" }] },
        { day: 4, activities: [{ name: "Mis emalatxanası", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "Pulsuz" }] },
        { day: 6, activities: [{ name: "Şəlalə turu", type: "activity", price: "10 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Göygöl",
    lat: 40.5836, lng: 46.3172,
    region: "Qərb",
    tagline: "Mavi göl cənnəti",
    heroColor: "#1E90FF",
    touristPlaces: [
      { name: "Göygöl", description: "1139-cu il zəlzələsindən yaranmış möhtəşəm göl.", price: "5 AZN", rating: 4.9, image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=250&fit=crop" },
      { name: "Maral Göl", description: "Göygöl Milli Parkının ikinci gözəl gölü.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Göygöl Restoran", cuisine: "Azərbaycan", priceRange: "15–30 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Göygöl Resort", priceRange: "80–150 AZN/gecə", rating: 4.5, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Göygöl", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Maral Göl", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Göygöl Restoran", type: "restaurant", price: "25 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Göygöl", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Maral Göl", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Göygöl Restoran", type: "restaurant", price: "25 AZN" }] },
        { day: 4, activities: [{ name: "Milli Park yürüyüşü", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Gəncə səfəri", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Göygöl", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Maral Göl", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Göygöl Restoran", type: "restaurant", price: "25 AZN" }] },
        { day: 4, activities: [{ name: "Milli Park yürüyüşü", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Gəncə səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Dağ pikniki", type: "activity", price: "10 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Xaçmaz",
    lat: 41.4643, lng: 48.8024,
    region: "Şimal",
    tagline: "Nabran sahilləri",
    heroColor: "#20B2AA",
    touristPlaces: [
      { name: "Nabran Sahili", description: "Xəzərin ən gözəl çimərliklərindən biri, yay istirahəti.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop" },
      { name: "Nabran Meşəsi", description: "Subtropik meşə, ekskursiya marşrutları.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Nabran Beach Restaurant", cuisine: "Dəniz məhsulları", priceRange: "20–40 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Nabran Hotel & Resort", priceRange: "80–180 AZN/gecə", rating: 4.6, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nabran Sahili", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Nabran Meşəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Nabran Beach Restaurant", type: "restaurant", price: "30 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nabran Sahili", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Nabran Meşəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Nabran Beach Restaurant", type: "restaurant", price: "30 AZN" }] },
        { day: 4, activities: [{ name: "Su parkı", type: "activity", price: "20 AZN" }] },
        { day: 5, activities: [{ name: "Quba səfəri", type: "activity", price: "10 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Nabran Sahili", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Nabran Meşəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Nabran Beach Restaurant", type: "restaurant", price: "30 AZN" }] },
        { day: 4, activities: [{ name: "Su parkı", type: "activity", price: "20 AZN" }] },
        { day: 5, activities: [{ name: "Quba səfəri", type: "activity", price: "10 AZN" }] },
        { day: 6, activities: [{ name: "Balıq ovu", type: "activity", price: "15 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Tovuz",
    lat: 40.9925, lng: 45.6286,
    region: "Qərb",
    tagline: "Tarixi torpaq",
    heroColor: "#556B2F",
    touristPlaces: [
      { name: "Ağ Oğlan Mağarası", description: "Qədim daş dövrü mağarası, arxeoloji tapıntılar.", price: "3 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop" },
      { name: "Yanardağ", description: "Təbii qaz alovu, nadir geoloji fenomen.", price: "Pulsuz", rating: 4.3, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Tovuz Milli Mətbəx", cuisine: "Azərbaycan", priceRange: "10–20 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Tovuz Hotel", priceRange: "40–80 AZN/gecə", rating: 4.1, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Ağ Oğlan Mağarası", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Yanardağ", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Tovuz Milli Mətbəx", type: "restaurant", price: "15 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Ağ Oğlan Mağarası", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Yanardağ", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Tovuz Milli Mətbəx", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Kənd həyatı turu", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Ağstafa səfəri", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Ağ Oğlan Mağarası", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Yanardağ", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Tovuz Milli Mətbəx", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Kənd həyatı turu", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Ağstafa səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Gəncə günübirlik", type: "activity", price: "10 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Balakən",
    lat: 41.7257, lng: 46.4044,
    region: "Şimal-Qərb",
    tagline: "Meşələrin gizli incisi",
    heroColor: "#228B22",
    touristPlaces: [
      { name: "Katex Şəlaləsi", description: "Hündürlüyü 16 metr olan möhtəşəm şəlalə.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
      { name: "Balakən Meşəsi", description: "Sıx meşə örtüyü, ekoturizm marşrutları.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Balakən Restoran", cuisine: "Azərbaycan", priceRange: "10–20 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Balakən Guest House", priceRange: "30–60 AZN/gecə", rating: 4.2, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Katex Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Balakən Meşəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Balakən Restoran", type: "restaurant", price: "15 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Katex Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Balakən Meşəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Balakən Restoran", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Çay qırağı piknik", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Zaqatala səfəri", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Katex Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Balakən Meşəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Balakən Restoran", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Çay qırağı piknik", type: "activity", price: "5 AZN" }] },
        { day: 5, activities: [{ name: "Zaqatala səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Dağ kəndləri", type: "activity", price: "10 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Qax",
    lat: 41.4204, lng: 46.9183,
    region: "Şimal-Qərb",
    tagline: "Dağ kəndlərinin sirri",
    heroColor: "#3CB371",
    touristPlaces: [
      { name: "İlisu kəndi", description: "Tarixi dağ kəndi, XVIII əsr məscidi və qalası.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop" },
      { name: "İlisu Şəlaləsi", description: "Möhtəşəm şəlalə, təbiət gözəlliyi.", price: "Pulsuz", rating: 4.8, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "İlisu Restoran", cuisine: "Azərbaycan/Dağ", priceRange: "10–20 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "İlisu Ekoloji Otel", priceRange: "50–100 AZN/gecə", rating: 4.6, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İlisu kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "İlisu Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "İlisu Restoran", type: "restaurant", price: "15 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İlisu kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "İlisu Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "İlisu Restoran", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Şəki səfəri", type: "activity", price: "10 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "İlisu kəndi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "İlisu Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "İlisu Restoran", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Şəki səfəri", type: "activity", price: "10 AZN" }] },
        { day: 6, activities: [{ name: "Meşə ekskursiyası", type: "activity", price: "5 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Oğuz",
    lat: 41.0719, lng: 47.4658,
    region: "Şimal",
    tagline: "Təbiətin qucağında",
    heroColor: "#6B8E23",
    touristPlaces: [
      { name: "Oğuz Şəlaləsi", description: "Gözəl dağ şəlaləsi, təbiət abidəsi.", price: "Pulsuz", rating: 4.5, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
      { name: "Alban Kilsəsi", description: "Qədim Alban dövrü xristian kilsəsi.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1548407260-da850faa41e3?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Oğuz Restoran", cuisine: "Azərbaycan", priceRange: "10–20 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Oğuz Guest House", priceRange: "30–60 AZN/gecə", rating: 4.1, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Oğuz Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Alban Kilsəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Oğuz Restoran", type: "restaurant", price: "15 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Oğuz Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Alban Kilsəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Oğuz Restoran", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Şəki səfəri", type: "activity", price: "10 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Oğuz Şəlaləsi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Alban Kilsəsi", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Oğuz Restoran", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Şəki səfəri", type: "activity", price: "10 AZN" }] },
        { day: 6, activities: [{ name: "Kənd həyatı", type: "activity", price: "Pulsuz" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Astara",
    lat: 38.4340, lng: 48.8730,
    region: "Cənub",
    tagline: "İran sərhədində",
    heroColor: "#2F4F4F",
    touristPlaces: [
      { name: "Yanar Bulaq", description: "Təbii qaz alovu ilə yanan su bulağı, nadir fenomen.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop" },
      { name: "İstisu Bulağı", description: "Müalicəvi termal su bulağı.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Astara Balıq Evi", cuisine: "Dəniz məhsulları", priceRange: "15–30 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Astara Hotel", priceRange: "40–80 AZN/gecə", rating: 4.1, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Yanar Bulaq", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "İstisu Bulağı", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Astara Balıq Evi", type: "restaurant", price: "25 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Yanar Bulaq", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "İstisu Bulağı", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Astara Balıq Evi", type: "restaurant", price: "25 AZN" }] },
        { day: 4, activities: [{ name: "Sərhəd bazarı", type: "activity", price: "~10 AZN" }] },
        { day: 5, activities: [{ name: "Lənkəran səfəri", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Yanar Bulaq", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "İstisu Bulağı", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Astara Balıq Evi", type: "restaurant", price: "25 AZN" }] },
        { day: 4, activities: [{ name: "Sərhəd bazarı", type: "activity", price: "~10 AZN" }] },
        { day: 5, activities: [{ name: "Lənkəran səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Çay bağları", type: "activity", price: "5 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Masallı",
    lat: 39.0340, lng: 48.6590,
    region: "Cənub",
    tagline: "Yaşıl vadi",
    heroColor: "#3B7A57",
    touristPlaces: [
      { name: "Viləş çayı vadisi", description: "Gözəl təbiət, meşəlik ərazi.", price: "Pulsuz", rating: 4.4, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop" },
      { name: "Masallı İsti Su", description: "Termal su mənbəyi, sağlamlıq turizmi.", price: "5 AZN", rating: 4.3, image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8673?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Masallı Restoran", cuisine: "Azərbaycan", priceRange: "10–20 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Masallı Guest House", priceRange: "30–60 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Viləş çayı vadisi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Masallı İsti Su", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Masallı Restoran", type: "restaurant", price: "15 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Viləş çayı vadisi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Masallı İsti Su", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Masallı Restoran", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Meşə gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Lənkəran səfəri", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Viləş çayı vadisi", type: "tourist", price: "Pulsuz" }] },
        { day: 2, activities: [{ name: "Masallı İsti Su", type: "tourist", price: "5 AZN" }] },
        { day: 3, activities: [{ name: "Masallı Restoran", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Meşə gəzintisi", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Lənkəran səfəri", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Kənd turu", type: "activity", price: "5 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Şirvan",
    lat: 39.9275, lng: 48.9206,
    region: "Şirvan",
    tagline: "Aran düzənliyi",
    heroColor: "#DAA520",
    touristPlaces: [
      { name: "Şirvan Milli Parkı", description: "Ceyranların qorunduğu milli park, quş müşahidəsi.", price: "5 AZN", rating: 4.7, image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&h=250&fit=crop" },
      { name: "Flamingo Gölü", description: "Köçəri flamingolar üçün məşhur göl.", price: "Pulsuz", rating: 4.6, image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Şirvan Restoran", cuisine: "Azərbaycan", priceRange: "10–25 AZN", rating: 4.2, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Şirvan Hotel", priceRange: "40–80 AZN/gecə", rating: 4.1, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şirvan Milli Parkı", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Flamingo Gölü", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şirvan Restoran", type: "restaurant", price: "20 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şirvan Milli Parkı", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Flamingo Gölü", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şirvan Restoran", type: "restaurant", price: "20 AZN" }] },
        { day: 4, activities: [{ name: "Safari turu", type: "activity", price: "15 AZN" }] },
        { day: 5, activities: [{ name: "Quş müşahidəsi", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Şirvan Milli Parkı", type: "tourist", price: "5 AZN" }] },
        { day: 2, activities: [{ name: "Flamingo Gölü", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Şirvan Restoran", type: "restaurant", price: "20 AZN" }] },
        { day: 4, activities: [{ name: "Safari turu", type: "activity", price: "15 AZN" }] },
        { day: 5, activities: [{ name: "Quş müşahidəsi", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Salyan səfəri", type: "activity", price: "5 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
      ]},
    ],
  },
  {
    city: "Lerik",
    lat: 38.7736, lng: 48.4150,
    region: "Cənub",
    tagline: "Uzunömürlülər diyarı",
    heroColor: "#708090",
    touristPlaces: [
      { name: "Uzunömürlülər Muzeyi", description: "100 yaşdan yuxarı insanlara həsr olunmuş unikal muzey.", price: "3 AZN", rating: 4.5, image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&h=250&fit=crop" },
      { name: "Lerik Dağları", description: "Talış dağlarının ən gözəl panoramik mənzərəsi.", price: "Pulsuz", rating: 4.7, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop" },
    ],
    restaurants: [
      { name: "Lerik Dağ Evi", cuisine: "Azərbaycan/Talış", priceRange: "10–20 AZN", rating: 4.4, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop" },
    ],
    hotels: [
      { name: "Lerik Guest House", priceRange: "25–50 AZN/gecə", rating: 4.0, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop" },
    ],
    plans: [
      { days: 3, price: "5 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Uzunömürlülər Muzeyi", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Lerik Dağları", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Lerik Dağ Evi", type: "restaurant", price: "15 AZN" }] },
      ]},
      { days: 5, price: "8 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Uzunömürlülər Muzeyi", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Lerik Dağları", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Lerik Dağ Evi", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Kənd həyatı turu", type: "activity", price: "5 AZN" }] },
      ]},
      { days: 7, price: "12 AZN", dailyPlans: [
        { day: 1, activities: [{ name: "Uzunömürlülər Muzeyi", type: "tourist", price: "3 AZN" }] },
        { day: 2, activities: [{ name: "Lerik Dağları", type: "tourist", price: "Pulsuz" }] },
        { day: 3, activities: [{ name: "Lerik Dağ Evi", type: "restaurant", price: "15 AZN" }] },
        { day: 4, activities: [{ name: "Dağ yürüyüşü", type: "activity", price: "Pulsuz" }] },
        { day: 5, activities: [{ name: "Kənd həyatı turu", type: "activity", price: "5 AZN" }] },
        { day: 6, activities: [{ name: "Lənkəran səfəri", type: "activity", price: "10 AZN" }] },
        { day: 7, activities: [{ name: "Son gün & ayrılış", type: "activity", price: "0 AZN" }] },
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
