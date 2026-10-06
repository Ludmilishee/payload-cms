type LocalizedText = {
  ru: string
  uz: string
}

type ParkSeed = {
  address: LocalizedText
  isActive?: boolean
  name: LocalizedText
  sortOrder?: number
}

type CitySeed = {
  name: LocalizedText
  parks: ParkSeed[]
  slug: string
}

export const parksSeed: CitySeed[] = [
  {
    name: { ru: "Ташкент", uz: "Toshkent" },
    slug: "tashkent",
    parks: [
      {
        name: { ru: "EATSEXPRESS", uz: "EATSEXPRESS" },
        address: { ru: "г. Ташкент, Чиланзарский район, Махалля Диёр, 8-й квартал, д. 4, кв. 39\n\n+998 78 113 8183", uz: "Toshkent sh., Chilonzor tumani, Diyor mahallasi, 8-daha, 4 uy, 39\n\n+998 78 113 8183" },
        sortOrder: 0,
      },
      {
        name: { ru: "IDriver", uz: "IDriver" },
        address: { ru: "г. Ташкент, Мирзо-Улугбекский район, улица Аккурган, 31А\n\n+998 78 113 7770", uz: "Toshkent sh., Mirzo-Ulugbek tumani, Oqqo'rg'on ko‘chasi, 31A\n\n+998 78 113 7770" },
        sortOrder: 1,
      },
      {
        name: { ru: "Nur Taxi", uz: "Nur Taxi" },
        address: { ru: "г. Ташкент, ул. Катта Хирмонтепа, д. 1\n\n+998 78 113 1399", uz: "Toshkent sh., Katta Xirmontepa ko‘chasi, 1-uy\n\n+998 78 113 1399" },
        sortOrder: 2,
      },
      {
        name: { ru: "Driver Pro", uz: "Driver Pro" },
        address: { ru: "г. Ташкент, Учтепинский район, массив Чиланзар, квартал Г9а, дом 2\n\n+998 90 981 7773", uz: "Toshkent sh., Uchtepa tumani, Chilonzor massivi, G9a-kvartal, 2-uy\n\n+998 90 981 7773" },
        sortOrder: 3,
      },
      {
        name: { ru: "Prime", uz: "Prime" },
        address: { ru: "г. Ташкент, Чиланзар, 17 квартал, дом 35, 39\n\n+998 90 072 1110", uz: "Toshkent sh., Chilonzor 17-kvartal, 35-uy, 39\n\n+998 90 072 1110" },
        sortOrder: 4,
      },
      {
        name: { ru: "LIBERPASS", uz: "LIBERPASS" },
        address: { ru: "г. Ташкент, Чиланзарский район, 8-й квартал, дом 53\n\n+998 50 724 5818", uz: "Toshkent sh., Chilonzor tumani, 8-kvartal, 53-uy\n\n+998 50 724 5818" },
        sortOrder: 5,
      },
      {
        name: { ru: "TURON TAXI", uz: "TURON TAXI" },
        address: { ru: "г. Ташкент, Яшнабадский район, дом 4, 5\n\n+998 95 078 9799", uz: "Toshkent sh., Yashnobod tumani, 4-uy, 5\n\n+998 95 078 9799" },
        sortOrder: 6,
      },
      {
        name: { ru: "Shoxona taxi", uz: "Shoxona taxi" },
        address: { ru: "г. Ташкент, Сергелийский район, улица Лутфикор, дом 45\n\n+998 50 578 1004", uz: "Toshkent sh., Sergeli tumani, Lutfkor ko‘chasi, 45-uy\n\n+998 50 578 1004" },
        sortOrder: 7,
      },
      {
        name: { ru: "Smart taxi", uz: "Smart taxi" },
        address: { ru: "г. Ташкент, Яшнабадский район, улица Корасув, ориентир — ресторан PARVOZ\n\n+998 91 701 9991", uz: "Toshkent sh., Yashnobod tumani, Qorasuv ko‘chasi, mo‘ljal — PARVOZ restorani\n\n+998 91 701 9991" },
        sortOrder: 8,
      },
      {
        name: { ru: "HUMO TAXI", uz: "HUMO TAXI" },
        address: { ru: "г. Ташкент, Мирзо-Улугбекский район, улица Юзработ, дом 39 (Diadora)\n\n+998 78 113 8081", uz: "Toshkent sh., Mirzo-Ulug‘bek tumani, Yuzrabot ko‘chasi, 39-uy (Diadora)\n\n+998 78 113 8081" },
        sortOrder: 9,
      },
      {
        name: { ru: "LEGENDA", uz: "LEGENDA" },
        address: { ru: "г. Ташкент, Чиланзарский район, 8-й квартал, улица Катартал, дом 1\n\n+998 78 150 5050", uz: "Toshkent sh., Chilonzor tumani, 8-kvartal, Qatortol ko‘chasi, 1-uy\n\n+998 78 150 5050" },
        sortOrder: 10,
      },
      {
        name: { ru: "Imkon Taxi", uz: "Imkon Taxi" },
        address: { ru: "г. Ташкент, Учтепинский район, массив Чиланзар, 11-й квартал, дом 48\n\n+998 88 038 9700", uz: "Toshkent sh., Uchtepa tumani, Chilonzor dahasi, 11-kvartal, 48-uy\n\n+998 88 038 9700" },
        sortOrder: 11,
      },
      {
        name: { ru: "AFROSIYOB", uz: "AFROSIYOB" },
        address: { ru: "г. Ташкент, Мирзо-Улугбекский район, улица Ломоносова, дом 50\n\n+998 78 113 1333", uz: "Toshkent sh., Mirzo-Ulug‘bek tumani, Lomonosov ko‘chasi, 50-uy\n\n+998 78 113 1333" },
        sortOrder: 12,
      },
      {
        name: { ru: "Daks-Drive", uz: "Daks-Drive" },
        address: { ru: "г. Ташкент, Кибрайский район, улица Университетская, дом 6\n\n+998 78 113 8861", uz: "Toshkent sh., Qibray tumani, Universitet ko'chasi, 6-uy\n\n+998 78 113 8861" },
        sortOrder: 13,
      },
      {
        name: { ru: "SARKOR", uz: "SARKOR" },
        address: { ru: "г. Ташкент, Чиланзарский район, 26-й квартал, дом 24\n\n+998 77 377 6555", uz: "Toshkent sh., Chilonzor tumani, 26 daha, 24-uy\n\n+998 77 377 6555" },
        sortOrder: 14,
      },
      {
        name: { ru: "CITYDRIVE", uz: "CITYDRIVE" },
        address: { ru: "г. Ташкент, Яккасарайский район, массив Башлык, дом 2\n\n+998 93 359 4400", uz: "Toshkent sh., Yakkasaroy tumani, Boshliq dahasi, 2-uy\n\n+998 93 359 4400" },
        sortOrder: 15,
      },
      {
        name: { ru: "SAMI TAKSI", uz: "SAMI TAKSI" },
        address: { ru: "г. Ташкент, Сергелийский район, улица Кумарык, дом 54-а\n\n+998 77 353 5252", uz: "Toshkent sh., Sergeli tumani, Qum-Ariq koʻchasi, 54a-uy\n\n+998 77 353 5252" },
        sortOrder: 16,
      },
    ],
  },
  {
    name: { ru: "Самарканд", uz: "Samarqand" },
    slug: "samarkand",
    parks: [
      {
        name: { ru: "IDriver", uz: "IDriver" },
        address: { ru: "г. Самарканд, Проспект Навои, дом 58A\n\n+998 78 113 7770", uz: "Samarkand sh., Navoiy Shoh ko‘chasi, 58A-uy\n\n+998 78 113 7770" },
        sortOrder: 0,
      },
      {
        name: { ru: "Smart Taxi", uz: "Smart Taxi" },
        address: { ru: "г. Самарканд, улица Гагарина, дом 38\n\n+998 66 666 0006", uz: "Samarkand sh., Gagarin ko'chasi, 38-uy\n\n+998 66 666 0006" },
        sortOrder: 1,
      },
      {
        name: { ru: "CITYDRIVE", uz: "CITYDRIVE" },
        address: { ru: "г. Самарканд, улица Амира Темура, дом 3\n\n+998 91 551 9355", uz: "Samarkan sh., Amir Temur ko'chasi, 3-uy\n\n+998 91 551 9355" },
        sortOrder: 2,
      },
      {
        name: { ru: "CENTER TAXI 777", uz: "CENTER TAXI 777" },
        address: { ru: "г. Самарканд, улица Гагарина, дом 138\n\n+998 77 135 2555", uz: "Samarkand sh., Gagarin ko'chasi, 138-uy\n\n+998 77 135 2555" },
        sortOrder: 3,
      },
      {
        name: { ru: "Yuksalish Taxi", uz: "Yuksalish Taxi" },
        address: { ru: "г. Самарканд, улица Гагарина, дом 60\n\n+998 50 302 6900", uz: "Samarkand sh., Gagarin ko'chasi, 60-uy\n\n+998 50 302 6900" },
        sortOrder: 4,
      },
      {
        name: { ru: "SamAvto", uz: "SamAvto" },
        address: { ru: "г. Самарканд, улица Буйук Ипак Йули, дом 46А\n\n+998 97 911 0080", uz: "Samarkand sh., Buyuk Ipak Yo'li ko'chasi, 46A-uy\n\n+998 97 911 0080" },
        sortOrder: 5,
      },
      {
        name: { ru: "LIBERPASS", uz: "LIBERPASS" },
        address: { ru: "г. Самарканд, улица Бурханиддина Маргинани, дом 8\n\n+998 95 007 4456", uz: "Samarkand sh., Burhoniddin Margʻinoniy koʻchasi, 8-uy\n\n+998 95 007 4456" },
        sortOrder: 6,
      },
    ],
  },
  {
    name: { ru: "Бухара", uz: "Buxoro" },
    slug: "bukhara",
    parks: [
      {
        name: { ru: "IDriver", uz: "IDriver" },
        address: { ru: "г. Бухара, улица Фатхобод, дом 7\n\n+998 78 113 7770", uz: "Buxoro sh., Fatxobod ko'chasi, 7-uy\n\n+998 78 113 7770" },
        sortOrder: 0,
      },
      {
        name: { ru: "Smart Taxi", uz: "Smart Taxi" },
        address: { ru: "г. Бухара, проспект Абу Али ибн Сины, дом 4\n\n+998 66 666 0006, +998 91 701 9991", uz: "Buxoro sh., Abu Ali Ibn Sino Shoh ko'chasi, 4-uy\n\n+998 66 666 0006, +998 91 701 9991" },
        sortOrder: 1,
      },
      {
        name: { ru: "CITYDRIVE", uz: "CITYDRIVE" },
        address: { ru: "г. Бухара, проспект Абу Али ибн Сины, дом 1\n\n+998 50 455 1448", uz: "Buxoro sh., Abu Ali Ibn Sino Shoh ko'chasi, 1-uy\n\n+998 50 455 1448" },
        sortOrder: 2,
      },
      {
        name: { ru: "Prime", uz: "Prime" },
        address: { ru: "г. Бухара, улица Мустакиллик, дом 23\n\n+998 87 075 1110", uz: "Buxoro sh., Mustaqillik ko'chasi, 23-uy\n\n+998 87 075 1110" },
        sortOrder: 3,
      },
      {
        name: { ru: "SHARQ", uz: "SHARQ" },
        address: { ru: "г. Бухара, улица Каюма Муртазаева, дом 10\n\n+998 93 869 6050", uz: "Buxoro sh., Qayum Murtazoyev ko'chasi, 10-uy\n\n+998 93 869 6050" },
        sortOrder: 4,
      },
    ],
  },
]
