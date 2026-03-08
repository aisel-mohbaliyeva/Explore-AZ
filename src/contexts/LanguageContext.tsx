import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "az" | "en" | "ru";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

// Translation data
const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.map": { az: "Xəritə", en: "Map", ru: "Карта" },
  "nav.plans": { az: "Planlar", en: "Plans", ru: "Планы" },
  "nav.guide": { az: "Bələdçi", en: "Guide", ru: "Гид" },

  // Hero
  "hero.subtitle": { az: "Azərbaycanı kəşf et", en: "Explore Azerbaijan", ru: "Откройте Азербайджан" },
  "hero.title1": { az: "Hər şəhər", en: "Every city", ru: "Каждый город" },
  "hero.title2": { az: "bir hekayə", en: "a story", ru: "история" },

  // Rules
  "rules.title": { az: "Turistlər üçün qaydalar", en: "Rules for tourists", ru: "Правила для туристов" },
  "rules.stay.label": { az: "📅 Qalma müddəti:", en: "📅 Stay duration:", ru: "📅 Срок пребывания:" },
  "rules.stay.text": { 
    az: "Vizasız ölkələrdən gələnlər 30 gün, e-Viza ilə 30 gün qala bilər. Uzadılma üçün Miqrasiya Xidmətinə müraciət edilməlidir.", 
    en: "Visa-free countries: 30 days. e-Visa: 30 days. For extension, apply to the Migration Service.", 
    ru: "Безвизовый въезд: 30 дней. e-Visa: 30 дней. Для продления обратитесь в Миграционную службу." 
  },
  "rules.entry.label": { az: "🛂 Giriş şərtləri:", en: "🛂 Entry requirements:", ru: "🛂 Требования для въезда:" },
  "rules.entry.text": { 
    az: "Etibarlı pasport (min. 6 ay), viza (lazım olduqda), geri dönüş bileti və otel rezervasiyası.", 
    en: "Valid passport (min. 6 months), visa (if required), return ticket and hotel reservation.", 
    ru: "Действующий паспорт (мин. 6 месяцев), виза (при необходимости), обратный билет и бронь отеля." 
  },
  "rules.prohibitions.label": { az: "🚫 Qadağalar:", en: "🚫 Prohibitions:", ru: "🚫 Запреты:" },
  "rules.prohibitions.text": { 
    az: "İctimai yerlərdə sərxoşluq, küçədə tüpürmə, dövlət simvollarına hörmətsizlik, icazəsiz foto (hərbi obyektlər).", 
    en: "Public intoxication, spitting on streets, disrespect to state symbols, unauthorized photos (military objects).", 
    ru: "Алкогольное опьянение в общественных местах, плевание на улице, неуважение к гос. символам, фото без разрешения (военные объекты)." 
  },
  "rules.drugs.label": { az: "💊 Narkotik:", en: "💊 Drugs:", ru: "💊 Наркотики:" },
  "rules.drugs.text": { 
    az: "Hər cür narkotik maddə qəti qadağandır. Ciddi cəza nəzərdə tutulur.", 
    en: "All drugs are strictly prohibited. Severe penalties apply.", 
    ru: "Все наркотики строго запрещены. Предусмотрены суровые наказания." 
  },
  "rules.karabakh.label": { az: "🏳️ Qarabağ:", en: "🏳️ Karabakh:", ru: "🏳️ Карабах:" },
  "rules.karabakh.text": { 
    az: "Azərbaycanın işğaldan azad olunmuş ərazilərinə xüsusi icazə lazımdır.", 
    en: "Special permission is required to visit Azerbaijan's liberated territories.", 
    ru: "Для посещения освобождённых территорий Азербайджана требуется специальное разрешение." 
  },
  "rules.currency.label": { az: "💰 Valyuta:", en: "💰 Currency:", ru: "💰 Валюта:" },
  "rules.currency.text": { 
    az: "Ölkəyə 10,000 USD-dən artıq nağd pul gətirərkən bəyannamə tələb olunur.", 
    en: "Declaration is required when bringing more than 10,000 USD in cash.", 
    ru: "При ввозе более 10 000 USD наличными требуется декларация." 
  },
  "rules.photo.label": { az: "📸 Foto/Video:", en: "📸 Photo/Video:", ru: "📸 Фото/Видео:" },
  "rules.photo.text": { 
    az: "Hərbi obyektləri, hava limanının daxilini və bəzi dövlət binalarını çəkmək qadağandır. İnsanları çəkməzdən əvvəl icazə alın.", 
    en: "Photographing military objects, airport interiors and some government buildings is prohibited. Ask permission before photographing people.", 
    ru: "Запрещено фотографировать военные объекты, интерьеры аэропорта и некоторые государственные здания. Спрашивайте разрешение перед фотографированием людей." 
  },
  "rules.alcohol.label": { az: "🍷 Alkoqol:", en: "🍷 Alcohol:", ru: "🍷 Алкоголь:" },
  "rules.alcohol.text": { 
    az: "Alkoqol satışı 18 yaşdan yuxarı olanlara icazəlidir. İctimai yerlərdə alkoqol qəbulu cərimə ilə nəticələnə bilər.", 
    en: "Alcohol sales are permitted for those over 18. Drinking in public places may result in fines.", 
    ru: "Продажа алкоголя разрешена лицам старше 18 лет. Употребление в общественных местах может привести к штрафу." 
  },
  "rules.respect.label": { az: "🕌 Dini yerlər:", en: "🕌 Religious sites:", ru: "🕌 Религиозные места:" },
  "rules.respect.text": { 
    az: "Məscid və dini yerləri ziyarət edərkən qapalı geyim geyinin. Ayaqqabılarınızı çıxarın. Namaz vaxtı səs-küy etməyin.", 
    en: "Wear modest clothing when visiting mosques and religious sites. Remove shoes. Be quiet during prayer times.", 
    ru: "При посещении мечетей и религиозных мест носите скромную одежду. Снимайте обувь. Соблюдайте тишину во время молитвы." 
  },
  "rules.registration.label": { az: "📋 Qeydiyyat:", en: "📋 Registration:", ru: "📋 Регистрация:" },
  "rules.registration.text": { 
    az: "15 gündən çox qalarsınızsa, yerli miqrasiya xidmətində qeydiyyatdan keçməlisiniz. Otel qaldıqda avtomatik qeydiyyat aparılır.", 
    en: "If staying more than 15 days, you must register with local migration services. Hotels handle registration automatically.", 
    ru: "При пребывании более 15 дней необходимо зарегистрироваться в местной миграционной службе. Отели регистрируют автоматически." 
  },
  "rules.disclaimer": { 
    az: "* Qaydalar dəyişə bilər. Səfərdən əvvəl rəsmi mənbələri yoxlayın.", 
    en: "* Rules may change. Check official sources before travel.", 
    ru: "* Правила могут меняться. Проверяйте официальные источники перед поездкой." 
  },

  // Tourism Categories
  "tourism.categories": { az: "Turizm Bölgələri", en: "Tourism Regions", ru: "Туристические регионы" },
  "tourism.mainCities": { az: "Əsas turistik şəhərlər", en: "Main tourist cities", ru: "Основные туристические города" },

  // Transport
  "transport.title": { az: "Nəqliyyat & Maşın Kirayəsi", en: "Transport & Car Rental", ru: "Транспорт и аренда авто" },
  "transport.pricesBus": { az: "Avtobus", en: "Bus", ru: "Автобус" },
  "transport.pricesTaxi": { az: "Taksi", en: "Taxi", ru: "Такси" },
  "transport.pricesAirport": { az: "Aeroport avtobusu", en: "Airport bus", ru: "Автобус аэропорта" },
  "transport.busStation": { az: "Bakı Beynəlxalq Avtovağzalı", en: "Baku International Bus Terminal", ru: "Бакинский международный автовокзал" },
  "transport.busDesc": { 
    az: "Azərbaycanın bütün rayonlarına gündəlik 200+ avtobus reysi. Bilet qiyməti 5–15 AZN arasıdır.", 
    en: "200+ daily bus routes to all regions of Azerbaijan. Ticket prices: 5–15 AZN.", 
    ru: "200+ ежедневных автобусных рейсов во все регионы Азербайджана. Стоимость: 5–15 AZN." 
  },
  "transport.busDestinations": { 
    az: "Şəki, Qəbələ, Lənkəran, Gəncə, Quba, Şamaxı, Zaqatala, Balakən, İsmayıllı və digər rayonlar", 
    en: "Sheki, Gabala, Lankaran, Ganja, Guba, Shamakhi, Zagatala, Balakan, Ismayilli and other regions", 
    ru: "Шеки, Габала, Ленкорань, Гянджа, Губа, Шамахы, Загатала, Балакен, Исмаиллы и другие районы" 
  },
  "transport.railway": { az: "Azərbaycan Dəmir Yolları (ADY)", en: "Azerbaijan Railways (ADY)", ru: "Азербайджанские железные дороги (ADY)" },
  "transport.railDesc": { 
    az: "Bakıdan rayonlara və beynəlxalq istiqamətlərə qatar reyslər mövcuddur.", 
    en: "Train routes from Baku to regions and international destinations are available.", 
    ru: "Доступны железнодорожные рейсы из Баку в регионы и международные направления." 
  },
  "transport.railDestinations": { 
    az: "Bakı–Gəncə, Bakı–Balakən (Şəki, Qəbələ, Zaqatala), Bakı–Lənkəran, Bakı–Tbilisi (beynəlxalq)", 
    en: "Baku–Ganja, Baku–Balakan (Sheki, Gabala, Zagatala), Baku–Lankaran, Baku–Tbilisi (international)", 
    ru: "Баку–Гянджа, Баку–Балакен (Шеки, Габала, Загатала), Баку–Ленкорань, Баку–Тбилиси (международный)" 
  },
  "transport.directions": { az: "İstiqamətlər:", en: "Destinations:", ru: "Направления:" },
  "transport.officialSite": { az: "Rəsmi sayt:", en: "Official site:", ru: "Официальный сайт:" },
  "transport.carRental": { az: "Maşın Kirayəsi", en: "Car Rental", ru: "Аренда авто" },
  "transport.carDesc": { 
    az: "Beynəlxalq kirayə şirkəti. Sedan, SUV və lüks avtomobillər. Aeroportdan təhvil mümkündür.", 
    en: "International rental company. Sedan, SUV and luxury cars. Airport pickup available.", 
    ru: "Международная прокатная компания. Седаны, внедорожники и люксовые авто. Возможен трансфер из аэропорта." 
  },
  "transport.warning": { az: "Diqqət!", en: "Warning!", ru: "Внимание!" },
  "transport.warningText": { 
    az: "Maşın kirayə edərkən mütləq rəsmi müqavilə imzalayın, sənədləri yoxlayın və şifahi razılaşmalara güvənməyin.", 
    en: "When renting a car, always sign an official contract, check documents and don't rely on verbal agreements.", 
    ru: "При аренде автомобиля обязательно подпишите официальный договор, проверьте документы и не полагайтесь на устные договорённости." 
  },

  // Tickets
  "tickets.title": { az: "Bilet & Tədbirlər", en: "Tickets & Events", ru: "Билеты и мероприятия" },
  "tickets.question": { 
    az: "Azərbaycanda konsert, teatr və tədbirlərə necə bilet almaq olar?", 
    en: "How to buy tickets for concerts, theater and events in Azerbaijan?", 
    ru: "Как купить билеты на концерты, театр и мероприятия в Азербайджане?" 
  },
  "tickets.answer": { 
    az: "Azərbaycanda keçirilən bütün mədəni tədbirlər, konsertlər, teatr tamaşaları və idman yarışlarına biletləri iTicket.az platforması vasitəsilə onlayn əldə edə bilərsiniz. Biletlər həm veb saytdan, həm də mobil tətbiqdən alına bilər.", 
    en: "You can buy tickets online for all cultural events, concerts, theater shows and sports events in Azerbaijan through the iTicket.az platform. Tickets are available from both the website and mobile app.", 
    ru: "Билеты на все культурные мероприятия, концерты, театральные представления и спортивные соревнования в Азербайджане можно приобрести онлайн через платформу iTicket.az. Билеты доступны как на сайте, так и в мобильном приложении." 
  },
  "tickets.theater": { az: "Teatr", en: "Theater", ru: "Театр" },
  "tickets.theaterDesc": { 
    az: "Azərbaycan Dövlət Akademik Milli Dram Teatrı, Opera və Balet Teatrı və digər teatrlar", 
    en: "Azerbaijan State Academic National Drama Theater, Opera and Ballet Theater and others", 
    ru: "Азербайджанский Государственный Академический Национальный Драматический Театр, Театр Оперы и Балета и другие" 
  },
  "tickets.concerts": { az: "Konsertlər", en: "Concerts", ru: "Концерты" },
  "tickets.concertsDesc": { 
    az: "Heydər Əliyev Mərkəzi, Baku Crystal Hall və digər konsert meydançaları", 
    en: "Heydar Aliyev Center, Baku Crystal Hall and other concert venues", 
    ru: "Центр Гейдара Алиева, Baku Crystal Hall и другие концертные площадки" 
  },
  "tickets.sports": { az: "İdman tədbirləri", en: "Sports events", ru: "Спортивные мероприятия" },
  "tickets.sportsDesc": { 
    az: "Bakı Olimpiya Stadionu, Tofiq Bəhramov adına stadion və digər idman obyektləri", 
    en: "Baku Olympic Stadium, Tofig Bahramov Stadium and other sports facilities", 
    ru: "Бакинский Олимпийский стадион, стадион им. Тофика Бахрамова и другие спортивные объекты" 
  },
  "tickets.festivals": { az: "Festivallar", en: "Festivals", ru: "Фестивали" },
  "tickets.festivalsDesc": { 
    az: "Musiqi festivalları, mədəniyyət gecələri və mövsümi tədbirlər", 
    en: "Music festivals, cultural nights and seasonal events", 
    ru: "Музыкальные фестивали, культурные вечера и сезонные мероприятия" 
  },
  "tickets.iticketDesc": { 
    az: "Azərbaycanın ən böyük bilet platforması — bütün tədbirlərin biletləri bir yerdə", 
    en: "Azerbaijan's largest ticket platform — all event tickets in one place", 
    ru: "Крупнейшая билетная платформа Азербайджана — все билеты на мероприятия в одном месте" 
  },
  "tickets.goToSite": { az: "Sayta keç", en: "Visit site", ru: "Перейти на сайт" },

  // FAQ
  "faq.title": { az: "Tez-tez verilən suallar", en: "Frequently asked questions", ru: "Часто задаваемые вопросы" },
  "faq.q1": { az: "Azərbaycana viza lazımdır?", en: "Do I need a visa for Azerbaijan?", ru: "Нужна ли виза в Азербайджан?" },
  "faq.a1": { 
    az: "Bir çox ölkə vətəndaşları üçün ASAN Viza sistemi vasitəsilə elektron viza (e-Visa) əldə etmək mümkündür. Proses onlayn şəkildə 3 iş günü ərzində tamamlanır. Türkiyə, Gürcüstan və bəzi MDB ölkələrinin vətəndaşları vizasız daxil ola bilər.", 
    en: "Citizens of many countries can obtain an electronic visa (e-Visa) through the ASAN Visa system. The process is completed online within 3 business days. Citizens of Turkey, Georgia and some CIS countries can enter visa-free.", 
    ru: "Граждане многих стран могут получить электронную визу (e-Visa) через систему ASAN Visa. Процесс завершается онлайн в течение 3 рабочих дней. Граждане Турции, Грузии и некоторых стран СНГ могут въехать без визы." 
  },
  "faq.q2": { az: "Azərbaycanda hansı valyuta istifadə olunur?", en: "What currency is used in Azerbaijan?", ru: "Какая валюта используется в Азербайджане?" },
  "faq.a2": { 
    az: "Azərbaycanın rəsmi valyutası Azərbaycan Manatıdır (AZN). 1 AZN ≈ 0.59 USD. Bakıda və böyük şəhərlərdə bankomatlar geniş yayılıb. Kreditlər kartları əksər otellərdə və restoranlarda qəbul olunur, lakin kiçik rayonlarda nağd pul tövsiyə edilir.", 
    en: "The official currency is the Azerbaijani Manat (AZN). 1 AZN ≈ 0.59 USD. ATMs are widely available in Baku and major cities. Credit cards are accepted in most hotels and restaurants, but cash is recommended in smaller regions.", 
    ru: "Официальная валюта — Азербайджанский Манат (AZN). 1 AZN ≈ 0.59 USD. Банкоматы широко доступны в Баку и крупных городах. Кредитные карты принимаются в большинстве отелей и ресторанов, но в небольших районах рекомендуется наличные." 
  },
  "faq.q3": { az: "Bakıdan rayonlara necə getmək olar?", en: "How to get from Baku to regions?", ru: "Как добраться из Баку в регионы?" },
  "faq.a3": { 
    az: "Bakı Beynəlxalq Avtovağzalından (Həzi Aslanov) bütün rayonlara gündəlik avtobus reyslər mövcuddur. Həmçinin ADY (Azərbaycan Dəmir Yolları) vasitəsilə Gəncə, Balakən, Lənkəran istiqamətlərinə qatar reyslər var. Avtomobil kirayəsi də populyar seçimdir.", 
    en: "Daily bus routes to all regions are available from Baku International Bus Terminal (Hazi Aslanov). Train routes via ADY (Azerbaijan Railways) to Ganja, Balakan, Lankaran are also available. Car rental is also a popular option.", 
    ru: "Ежедневные автобусные рейсы во все регионы отправляются с Бакинского международного автовокзала (Гази Асланов). Также доступны железнодорожные рейсы через ADY в Гянджу, Балакен, Ленкорань. Аренда авто также популярный вариант." 
  },
  "faq.q4": { az: "Ən yaxşı səyahət mövsümü hansıdır?", en: "What is the best travel season?", ru: "Какой лучший сезон для путешествий?" },
  "faq.a4": { 
    az: "Yaz (may-iyun) və payız (sentyabr-oktyabr) ayları ən ideal vaxtdır. Hava ilıq və quru olur. Qış aylarında dağ bölgələrində (Qəbələ, Qusar) qar turizmi populyardır. Yay aylarında Lənkəran və Astara subtropik iqlimi ilə cəlb edicidir.", 
    en: "Spring (May-June) and autumn (September-October) are ideal. The weather is warm and dry. In winter, mountain regions (Gabala, Gusar) offer popular snow tourism. In summer, Lankaran and Astara attract with subtropical climate.", 
    ru: "Весна (май-июнь) и осень (сентябрь-октябрь) — идеальное время. Погода тёплая и сухая. Зимой горные районы (Габала, Гусар) популярны для снежного туризма. Летом Ленкорань и Астара привлекают субтропическим климатом." 
  },
  "faq.q5": { az: "Azərbaycanda təhlükəsizlik necədir?", en: "How safe is Azerbaijan?", ru: "Насколько безопасен Азербайджан?" },
  "faq.a5": { 
    az: "Azərbaycan ümumiyyətlə təhlükəsiz ölkədir. Turistlər üçün xüsusi risk yoxdur. Lakin hər yerdə olduğu kimi, şəxsi əşyalarınıza diqqət edin, gecə saatlarında tanımadığınız ərazilərdə ehtiyatlı olun və rəsmi taksi xidmətlərindən istifadə edin.", 
    en: "Azerbaijan is generally a safe country. There is no special risk for tourists. However, as everywhere, watch your belongings, be cautious in unfamiliar areas at night and use official taxi services.", 
    ru: "Азербайджан в целом безопасная страна. Для туристов нет особых рисков. Однако, как и везде, следите за вещами, будьте осторожны в незнакомых районах ночью и пользуйтесь официальными службами такси." 
  },

  // Contact
  "contact.title": { az: "Əlaqə", en: "Contact", ru: "Контакт" },
  "contact.formTitle": { az: "Təklif və iradlarınızı bizə bildirin", en: "Share your suggestions and feedback", ru: "Поделитесь своими предложениями и отзывами" },
  "contact.name": { az: "Ad, Soyad", en: "Full Name", ru: "Имя, Фамилия" },
  "contact.namePlaceholder": { az: "Adınızı daxil edin", en: "Enter your name", ru: "Введите ваше имя" },
  "contact.email": { az: "E-poçt", en: "Email", ru: "Эл. почта" },
  "contact.message": { az: "Mesajınız", en: "Your message", ru: "Ваше сообщение" },
  "contact.messagePlaceholder": { az: "Təklif, irad və ya sualınızı yazın...", en: "Write your suggestion, feedback or question...", ru: "Напишите ваше предложение, отзыв или вопрос..." },
  "contact.send": { az: "Göndər", en: "Send", ru: "Отправить" },
  "contact.sent": { az: "Mesajınız göndərildi!", en: "Your message was sent!", ru: "Ваше сообщение отправлено!" },
  "contact.sentSub": { az: "Tezliklə sizinlə əlaqə saxlayacağıq.", en: "We will contact you soon.", ru: "Мы свяжемся с вами в ближайшее время." },
  "contact.prices": { az: "Nəqliyyat qiymətləri", en: "Transport prices", ru: "Цены на транспорт" },
  "contact.pricesNote": { az: "* Qiymətlər təxminidir və dəyişə bilər", en: "* Prices are approximate and may change", ru: "* Цены приблизительные и могут измениться" },

  // Ad Banner
  "ad.badge": { az: "REKLAM", en: "AD", ru: "РЕКЛАМА" },
  "ad.placeholder": { az: "Burada sizin reklamınız ola bilər", en: "Your ad could be here", ru: "Здесь может быть ваша реклама" },
  "ad.placeholderDesc": { 
    az: "Reklam yerləşdirmək üçün bizimlə əlaqə saxlayın. Turizm, otel, restoran, nəqliyyat və digər xidmətlər üçün ideal reklam imkanı.", 
    en: "Contact us to place your ad. Ideal advertising opportunity for tourism, hotels, restaurants, transport and other services.", 
    ru: "Свяжитесь с нами для размещения рекламы. Идеальная рекламная возможность для туризма, отелей, ресторанов, транспорта и других услуг." 
  },
  "ad.contactTitle": { az: "📌 Reklam üçün əlaqə:", en: "📌 Contact for ads:", ru: "📌 Контакт для рекламы:" },

  // Currency
  "currency.title": { az: "Valyutanı çevir", en: "Currency converter", ru: "Конвертер валют" },
  "currency.amount": { az: "Məbləğ", en: "Amount", ru: "Сумма" },
  "currency.from": { az: "Haradan", en: "From", ru: "Из" },
  "currency.to": { az: "Haraya", en: "To", ru: "В" },

  // City Modal
  "modal.touristPlaces": { az: "Turistik Yerlər", en: "Tourist Places", ru: "Достопримечательности" },
  "modal.restaurants": { az: "Restoranlar", en: "Restaurants", ru: "Рестораны" },
  "modal.hotels": { az: "Otellər", en: "Hotels", ru: "Отели" },
  "modal.readOnWiki": { az: "Vikipediyada oxu", en: "Read on Wikipedia", ru: "Читать на Википедии" },

  // Map
  "map.title": { az: "🗺 Azərbaycan Xəritəsi", en: "🗺 Map of Azerbaijan", ru: "🗺 Карта Азербайджана" },
  "map.regions": { az: "Azərbaycan rayonları", en: "Azerbaijan regions", ru: "Районы Азербайджана" },
  "map.clickMarker": { az: "⭕ Rəngli marker → klikləyin", en: "⭕ Colored marker → click", ru: "⭕ Цветной маркер → нажмите" },
  "map.places": { az: "yer", en: "places", ru: "мест" },
  "map.restaurant": { az: "restoran", en: "restaurants", ru: "ресторанов" },
  "map.hotel": { az: "otel", en: "hotels", ru: "отелей" },

  // Guide Page
  "guide.badge": { az: "Fərdi Bələdçi Xidməti", en: "Personal Guide Service", ru: "Персональный гид" },
  "guide.title1": { az: "Azərbaycanda", en: "Travel Azerbaijan", ru: "Путешествуйте по Азербайджану" },
  "guide.title2": { az: "şəxsi bələdçi", en: "with a personal guide", ru: "с персональным гидом" },
  "guide.title3": { az: "ilə gəzin", en: "", ru: "" },
  "guide.subtitle": { 
    az: "Peşəkar bələdçimiz sizinlə hər yerdə olacaq, hər şeydə kömək edəcək. Dil maneəsi olmadan, rahat və unudulmaz səyahət keçirin.", 
    en: "Our professional guide will be with you everywhere, helping with everything. Travel comfortably and unforgettably without language barriers.", 
    ru: "Наш профессиональный гид будет с вами повсюду, помогая во всём. Путешествуйте комфортно и незабываемо без языковых барьеров." 
  },
  "guide.feat1": { az: "Azərbaycan dilindən tərcümə", en: "Translation from Azerbaijani", ru: "Перевод с азербайджанского" },
  "guide.feat1d": { az: "Hər yerdə sizin üçün tərcümə edəcək", en: "Will translate for you everywhere", ru: "Будет переводить для вас повсюду" },
  "guide.feat2": { az: "Yerli insanlarla danışıqlar", en: "Negotiations with locals", ru: "Общение с местными" },
  "guide.feat2d": { az: "Alış-veriş, restoran sifarişi və s.", en: "Shopping, restaurant orders, etc.", ru: "Покупки, заказы в ресторанах и т.д." },
  "guide.feat3": { az: "Hər yerə müşayiət", en: "Escort everywhere", ru: "Сопровождение повсюду" },
  "guide.feat3d": { az: "İstədiyiniz yerə birlikdə gedəcək", en: "Will go with you wherever you want", ru: "Поедет с вами куда захотите" },
  "guide.feat4": { az: "Ən yaxşı yerləri göstərəcək", en: "Will show the best places", ru: "Покажет лучшие места" },
  "guide.feat4d": { az: "Gizli yerlər və yerli sirlər", en: "Hidden gems and local secrets", ru: "Скрытые жемчужины и местные секреты" },
  "guide.feat5": { az: "24/7 dəstək", en: "24/7 support", ru: "Поддержка 24/7" },
  "guide.feat5d": { az: "Hər an əlaqədə olacaq", en: "Available at all times", ru: "На связи в любое время" },
  "guide.selectPlan": { az: "Bələdçi Planı Seçin", en: "Select Guide Plan", ru: "Выберите план гида" },
  "guide.3day": { az: "3 Günlük Bələdçi", en: "3-Day Guide", ru: "Гид на 3 дня" },
  "guide.5day": { az: "5 Günlük Bələdçi", en: "5-Day Guide", ru: "Гид на 5 дней" },
  "guide.7day": { az: "7 Günlük Bələdçi", en: "7-Day Guide", ru: "Гид на 7 дней" },
  "guide.3dayDesc": { az: "Qısa səyahət üçün ideal", en: "Ideal for short trips", ru: "Идеально для коротких поездок" },
  "guide.5dayDesc": { az: "Ən populyar seçim", en: "Most popular choice", ru: "Самый популярный выбор" },
  "guide.7dayDesc": { az: "Tam Azərbaycan turu", en: "Full Azerbaijan tour", ru: "Полный тур по Азербайджану" },
  "guide.mostPopular": { az: "Ən populyar", en: "Most popular", ru: "Самый популярный" },
  "guide.included": { az: "Bələdçi xidmətinə daxildir:", en: "Guide service includes:", ru: "Услуга гида включает:" },
  "guide.inc1": { az: "Azərbaycan dilindən tərcümə", en: "Translation from Azerbaijani", ru: "Перевод с азербайджанского" },
  "guide.inc2": { az: "Yerli insanlarla danışıqlar", en: "Negotiations with locals", ru: "Общение с местными" },
  "guide.inc3": { az: "Restoranlarda sifariş köməyi", en: "Help ordering in restaurants", ru: "Помощь с заказами в ресторанах" },
  "guide.inc4": { az: "Ən yaxşı yerləri göstərmək", en: "Showing the best places", ru: "Показ лучших мест" },
  "guide.inc5": { az: "Alış-verişdə kömək", en: "Shopping help", ru: "Помощь с покупками" },
  "guide.inc6": { az: "Nəqliyyat məsləhəti", en: "Transport advice", ru: "Консультация по транспорту" },
  "guide.inc7": { az: "24/7 telefon dəstəyi", en: "24/7 phone support", ru: "Телефонная поддержка 24/7" },
  "guide.inc8": { az: "Təcili hallarda kömək", en: "Emergency assistance", ru: "Помощь в экстренных случаях" },
  "guide.paymentTitle": { az: "Ödəniş qaydası", en: "Payment policy", ru: "Порядок оплаты" },
  "guide.paymentText": { 
    az: "Ödənişin 50%-i əvvəlcədən ödənilir, qalan hissəsi isə hər gün sonunda gündəlik olaraq ödənilir. Bu üsul sizə xidmətin keyfiyyətini qiymətləndirmək imkanı verir.", 
    en: "50% is paid in advance, the rest is paid daily at the end of each day. This allows you to evaluate the quality of service.", 
    ru: "50% оплачивается авансом, остальное — ежедневно в конце каждого дня. Это позволяет вам оценить качество обслуживания." 
  },
  "guide.orderBtn": { az: "Günlük Bələdçi Sifariş Et", en: "Day Guide Order", ru: "Заказать гида на дней" },
  "guide.orderTitle": { az: "Bələdçi Sifarişi", en: "Guide Order", ru: "Заказ гида" },
  "guide.professional": { az: "Günlük Professional Bələdçi", en: "Day Professional Guide", ru: "Дневной Профессиональный Гид" },
  "guide.fullEscort": { az: "Tam müşayiət xidməti", en: "Full escort service", ru: "Полное сопровождение" },
  "guide.translation": { az: "Azərbaycan dilindən tərcümə", en: "Translation from Azerbaijani", ru: "Перевод с азербайджанского" },
  "guide.together": { az: "Hər yerə birlikdə getmək", en: "Going everywhere together", ru: "Поездки повсюду вместе" },
  "guide.contact247": { az: "24/7 əlaqə", en: "24/7 contact", ru: "Связь 24/7" },
  "guide.payNow": { az: "İndi ödəniləcək:", en: "Pay now:", ru: "Оплата сейчас:" },
  "guide.total": { az: "Cəmi:", en: "Total:", ru: "Итого:" },
  "guide.placeOrder": { az: "💳 Sifariş Et", en: "💳 Place Order", ru: "💳 Заказать" },
  "guide.cancel": { az: "Ləğv et", en: "Cancel", ru: "Отмена" },

  // Plans
  "plans.subtitle": { az: "🇦🇿 Azərbaycan Səyahət Planları", en: "🇦🇿 Azerbaijan Travel Plans", ru: "🇦🇿 Планы путешествий по Азербайджану" },
  "plans.title": { az: "Səyahət Müddətini Seç", en: "Choose Trip Duration", ru: "Выберите длительность поездки" },
  "plans.desc": { az: "Azərbaycana gələn turistlər üçün hazır səyahət planları", en: "Ready-made travel plans for tourists visiting Azerbaijan", ru: "Готовые планы путешествий для туристов, посещающих Азербайджан" },
  "plans.dayPlan": { az: "Günlük Plan", en: "Day Plan", ru: "Дневной план" },
  "plans.fullRoute": { az: "Tam marşrut", en: "Full route", ru: "Полный маршрут" },
  "plans.fullPlan": { az: "Tam plan", en: "Full plan", ru: "Полный план" },
  "plans.budget": { az: "💰 Təxmini Gündəlik Büdcə", en: "💰 Approximate Daily Budget", ru: "💰 Примерный дневной бюджет" },
  "plans.places": { az: "Gəziləcək Yerlər", en: "Places to Visit", ru: "Места для посещения" },
  "plans.restaurants": { az: "Restoranlar", en: "Restaurants", ru: "Рестораны" },
  "plans.hotels": { az: "Otellər", en: "Hotels", ru: "Отели" },
  "plans.day": { az: "-ci gün", en: "Day ", ru: " день" },
  "plans.dayTitle": { az: "-ci gün —", en: "Day — ", ru: " день —" },
  "plans.locked": { az: "Bu gün kilidlidir", en: "This day is locked", ru: "Этот день заблокирован" },
  "plans.lockedDesc": { az: "Tam planı görmək üçün satın alın. Bütün günlər, restoranlar, otellər və büdcə təklifləri daxildir.", en: "Purchase to see the full plan. All days, restaurants, hotels and budget suggestions included.", ru: "Купите, чтобы увидеть полный план. Все дни, рестораны, отели и бюджетные предложения включены." },
  "plans.unlock": { az: "Kilidi Aç", en: "Unlock", ru: "Разблокировать" },
  "plans.priceLabel": { az: "Tam plan qiyməti", en: "Full plan price", ru: "Цена полного плана" },
  "plans.buyPlan": { az: "Planı Al", en: "Get Plan", ru: "Купить план" },
  "plans.routeIncluded": { az: "Tam marşrut, restoranlar və otellər daxil", en: "Full route, restaurants and hotels included", ru: "Полный маршрут, рестораны и отели включены" },
  "plans.azerbaijanPlan": { az: "Günlük Azərbaycan Planı", en: "Day Azerbaijan Plan", ru: "Дневной план по Азербайджану" },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("az");

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
