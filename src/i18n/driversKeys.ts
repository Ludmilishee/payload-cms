import type { Locale } from './config'

type TranslationEntry = Record<Locale, string> & {
  note: string
}

export const DRIVERS_TRANSLATIONS = {
  "becomeDriver": {
    ru: "Скачать приложение",
    uz: "Ilovani yuklab oling",
    note: "CTA скачать приложение",
  },
  "clearInfo": {
    ru: "Никаких внезапных списаний. Фиксированная комиссия сервиса",
    uz: "Kutilmagan pul yechib olishlar yo‘q. Xizmat komissiyasi qat’iy belgilangan",
    note: "clearInfo",
  },
  "clearTitle": {
    ru: "Прозрачность",
    uz: "Shaffoflik",
    note: "clearTitle",
  },
  "common.become-driver": {
    ru: "Скачать приложение",
    uz: "Ilovani yuklab olish",
    note: "common.become-driver",
  },
  "common.city-andijan": {
    ru: "Андижан",
    uz: "Andijon",
    note: "common.city-andijan",
  },
  "common.city-bishkek": {
    ru: "Бишкек",
    uz: "Бишкек",
    note: "common.city-bishkek",
  },
  "common.city-bukhara": {
    ru: "Бухара",
    uz: "Buxoro",
    note: "common.city-bukhara",
  },
  "common.city-denau": {
    ru: "Денау",
    uz: "Denov",
    note: "common.city-denau",
  },
  "common.city-fergana": {
    ru: "Фергана",
    uz: "Farg'ona",
    note: "common.city-fergana",
  },
  "common.city-gulistan": {
    ru: "Гулистан",
    uz: "Guliston",
    note: "common.city-gulistan",
  },
  "common.city-jizzakh": {
    ru: "Джизак",
    uz: "Jizzax",
    note: "common.city-jizzakh",
  },
  "common.city-karshi": {
    ru: "Карши",
    uz: "Qarshi",
    note: "common.city-karshi",
  },
  "common.city-khiva": {
    ru: "Хива",
    uz: "Xiva",
    note: "common.city-khiva",
  },
  "common.city-kokand": {
    ru: "Коканд",
    uz: "Qo'qon",
    note: "common.city-kokand",
  },
  "common.city-kungrad": {
    ru: "Кунград",
    uz: "Qo'ng'irot",
    note: "common.city-kungrad",
  },
  "common.city-manas": {
    ru: "Манас",
    uz: "Манас",
    note: "common.city-manas",
  },
  "common.city-minsk": {
    ru: "Минск",
    uz: "Минск",
    note: "common.city-minsk",
  },
  "common.city-namangan": {
    ru: "Наманган",
    uz: "Namangan",
    note: "common.city-namangan",
  },
  "common.city-navoi": {
    ru: "Навои",
    uz: "Navoiy",
    note: "common.city-navoi",
  },
  "common.city-nukus": {
    ru: "Нукус",
    uz: "Nukus",
    note: "common.city-nukus",
  },
  "common.city-osh": {
    ru: "Ош",
    uz: "Ош",
    note: "common.city-osh",
  },
  "common.city-samarkand": {
    ru: "Самарканд",
    uz: "Samarqand",
    note: "common.city-samarkand",
  },
  "common.city-shahrisabz": {
    ru: "Шахрисабз",
    uz: "Shahrisabz",
    note: "common.city-shahrisabz",
  },
  "common.city-tashkent": {
    ru: "Ташкент",
    uz: "Toshkent",
    note: "common.city-tashkent",
  },
  "common.city-termez": {
    ru: "Термез",
    uz: "Termiz",
    note: "common.city-termez",
  },
  "common.city-urgench": {
    ru: "Ургенч",
    uz: "Urganch",
    note: "common.city-urgench",
  },
  "common.city-zarafshan": {
    ru: "Зарафшан",
    uz: "Zarafshon",
    note: "common.city-zarafshan",
  },
  "common.cookie": {
    ru: "Мы используем <cookieLink>cookie</cookieLink>, чтобы оптимизировать работу сайта и улучшать ваш пользовательский опыт",
    uz: "Sayt ishlashini optimallashtirish va foydalanuvchi tajribangizni yaxshilash uchun biz <cookieLink>cookie-fayldan</cookieLink> foydalanamiz",
    note: "common.cookie",
  },
  "common.cookie-cancel": {
    ru: "Отказаться",
    uz: "Rad etish",
    note: "common.cookie-cancel",
  },
  "common.cookie-ok": {
    ru: "Принять",
    uz: "Qabul qilish",
    note: "common.cookie-ok",
  },
  "common.footer-cookies-policy": {
    ru: "Политика обработки\n файлов cookie",
    uz: "Cookie-fayllar\n siyosati",
    note: "common.footer-cookies-policy",
  },
  "common.footer-copyright": {
    ru: "© 2025\n Все права защищены",
    uz: "© 2025\n Barcha huquqlar himoyalangan",
    note: "common.footer-copyright",
  },
  "common.footer-download-in": {
    ru: "Скачать в",
    uz: "Yuklab olish",
    note: "common.footer-download-in",
  },
  "common.footer-privacy-policy": {
    ru: "Политика\n конфиденциальности",
    uz: "Maxfiylik\n siyosati",
    note: "common.footer-privacy-policy",
  },
  "common.footer-schedule-text": {
    ru: "Вы сами выбираете график",
    uz: "Grafikni o‘zingiz tanlaysiz",
    note: "common.footer-schedule-text",
  },
  "common.invite-not-allowed": {
    ru: "Ваш инвайт код неверный или был использован",
    uz: "Sizning invayt-kodingiz noto‘g‘ri yoki allaqachon ishlatilgan",
    note: "common.invite-not-allowed",
  },
  "common.menu-drivers": {
    ru: "Водителям",
    uz: "Haydovchilarga",
    note: "common.menu-drivers",
  },
  "common.menu-parks": {
    ru: "Паркам",
    uz: "Taksi saroylariga",
    note: "common.menu-parks",
  },
  "common.useCookie": {
    ru: "Использовать\n файлы cookie",
    uz: "Cookie-fayllardan\n foydalanish",
    note: "common.useCookie",
  },
  "common.validation-city-invalid": {
    ru: "Выберите город из списка",
    uz: "Ro'yxatdan shaharni tanlang: Toshkent, Andijon, Buxoro, Guliston",
    note: "common.validation-city-invalid",
  },
  "common.validation-city-required": {
    ru: "Город обязателен для заполнения",
    uz: "Shahar to'ldirilishi shart",
    note: "common.validation-city-required",
  },
  "common.validation-contact-name-invalid": {
    ru: "ФИО должно содержать только буквы, пробелы, дефисы и апострофы (без цифр и специальных символов)",
    uz: "FIO faqat harflar, bo'shliqlar, defislar va apostroflardan iborat bo'lishi kerak (raqamlar va maxsus belgilar bo'lmasligi kerak)",
    note: "common.validation-contact-name-invalid",
  },
  "common.validation-contact-name-required": {
    ru: "ФИО представителя обязательно для заполнения",
    uz: "Vakilning FIO to'ldirilishi shart",
    note: "common.validation-contact-name-required",
  },
  "common.validation-email-invalid": {
    ru: "Введите корректный email адрес",
    uz: "To'g'ri email manzilini kiriting",
    note: "common.validation-email-invalid",
  },
  "common.validation-email-required": {
    ru: "Email обязателен для заполнения",
    uz: "Email to'ldirilishi shart",
    note: "common.validation-email-required",
  },
  "common.validation-field-required": {
    ru: "Поле обязательно для заполнения",
    uz: "Поле обязательно для заполнения",
    note: "common.validation-field-required",
  },
  "common.validation-field-value-error": {
    ru: "Неправильное значение поля",
    uz: "Неправильное значение поля",
    note: "common.validation-field-value-error",
  },
  "common.validation-inn-length": {
    ru: "ИНН должен содержать {{count}} цифр",
    uz: "INN {{count}} ta raqamdan iborat bo'lishi kerak",
    note: "common.validation-inn-length",
  },
  "common.validation-inn-only-digits": {
    ru: "ИНН должен содержать только цифры",
    uz: "INN faqat raqamlardan iborat bo'lishi kerak",
    note: "common.validation-inn-only-digits",
  },
  "common.validation-inn-required": {
    ru: "ИНН обязателен для заполнения",
    uz: "INN to'ldirilishi shart",
    note: "common.validation-inn-required",
  },
  "common.validation-legal-entity-required": {
    ru: "Юридическое лицо обязательно для заполнения",
    uz: "Yuridik shaxs to'ldirilishi shart",
    note: "common.validation-legal-entity-required",
  },
  "common.validation-park-name-forbidden": {
    ru: "Без слова «агрегатор» и упоминания Wildberries в любой форме",
    uz: "“Agregator” so‘zisiz va Wildberries nomini hech qanday shaklda tilga olmasdan",
    note: "common.validation-park-name-forbidden",
  },
  "common.validation-phone-already-exists": {
    ru: "Этот номер телефона уже зарегистрирован",
    uz: "Bu telefon raqami allaqachon ro'yxatdan o'tgan",
    note: "common.validation-phone-already-exists",
  },
  "common.validation-phone-by": {
    ru: "Номер телефона Беларуси должен быть в формате +375 и 9 цифр",
    uz: "Belarus telefon raqami +375 va 9 ta raqam formatida bo'lishi kerak",
    note: "common.validation-phone-by",
  },
  "common.validation-phone-kg": {
    ru: "Номер телефона Кыргызстана должен быть в формате +996 и 9 цифр",
    uz: "Kırgızstan telefon raqami +996 va 9 ta raqam formatida bo'lishi kerak",
    note: "common.validation-phone-kg",
  },
  "common.validation-phone-only-digits": {
    ru: "Номер телефона должен содержать только цифры после +",
    uz: "Telefon raqami + dan keyin faqat raqamlardan iborat bo'lishi kerak",
    note: "common.validation-phone-only-digits",
  },
  "common.validation-phone-required": {
    ru: "Номер телефона обязателен для заполнения",
    uz: "Telefon raqami to'ldirilishi shart",
    note: "common.validation-phone-required",
  },
  "common.validation-phone-ru": {
    ru: "Номер телефона России должен быть в формате +7 и 10 цифр",
    uz: "Rossiya telefon raqami +7 va 10 ta raqam formatida bo'lishi kerak",
    note: "common.validation-phone-ru",
  },
  "common.validation-phone-start-with-plus": {
    ru: "Номер телефона должен начинаться с +",
    uz: "Telefon raqami + bilan boshlanishi kerak",
    note: "common.validation-phone-start-with-plus",
  },
  "common.validation-phone-uz": {
    ru: "Номер телефона Узбекистана должен быть в формате +998 и 9 цифр",
    uz: "O'zbekiston telefon raqami +998 va 9 ta raqam formatida bo'lishi kerak",
    note: "common.validation-phone-uz",
  },
  "common.validation-string-too-long": {
    ru: "Строка должна быть не более 255 символов",
    uz: "Satr 255 belgidan oshmasligi kerak",
    note: "common.validation-string-too-long",
  },
  "errorMessage": {
    ru: "Произошла ошибка",
    uz: "Xatolik yuz berdi",
    note: "errorMessage",
  },
  "form-submit-error-generic": {
    ru: "Произошла ошибка, пожалуйста попробуйте позже",
    uz: "Xato yuz berdi, iltimos keyinroq qayta urinib ko'ring",
    note: "form-submit-error-generic",
  },
  "form-submit-success": {
    ru: "Спасибо! Мы свяжемся с вами в течение 3 рабочих дней",
    uz: "Rahmat! Biz siz bilan 3 ish kuni ichida bog'lanamiz",
    note: "form-submit-success",
  },
  "form.button": {
    ru: "Отправить заявку",
    uz: "Ariza yuborish",
    note: "form.button",
  },
  "form.city": {
    ru: "Город",
    uz: "Shahar",
    note: "form.city",
  },
  "form.first-name": {
    ru: "Имя",
    uz: "Ism",
    note: "form.first-name",
  },
  "form.last-name": {
    ru: "Фамилия",
    uz: "Familiya",
    note: "form.last-name",
  },
  "form.phone": {
    ru: "Номер телефона",
    uz: "Telefon",
    note: "form.phone",
  },
  "formTitle": {
    ru: "Стать водителем",
    uz: "Haydovchi bo‘lish",
    note: "Заголовок формы",
  },
  "infoBlock.item1.content": {
    ru: "Граждане Узбекистана от 21 года. Нужны права категории «B», стаж от 3 лет и лицензия на услуги такси",
    uz: "“B” toifadagi haydovchilik guvohnomasiga, 3 yillik haydochilik tajribasiga va taksi xizmatlarini ko‘rsatish uchun litsenziya kartochkasiga ega bo‘lgan, 21 yoshdan katta O‘zbekiston fuqarolari",
    note: "infoBlock.item1.content",
  },
  "infoBlock.item1.title": {
    ru: "Кто может стать водителем?",
    uz: "Kim haydovchi bo‘lishi mumkin?",
    note: "infoBlock.item1.title",
  },
  "infoBlock.item2.content": {
    ru: "Которая эксплуатировалась на городских маршрутах меньше 15 лет и со знаком TAXI любого цвета на крыше. Это должен быть легковой автомобиль для пассажирских перевозок — минивэн или вагонный тип кузова не подойдёт. Остальные требования зависят от <tariffsLink>тарифов</tariffsLink>",
    uz: "Shahar marshrutlarida 15 yildan kamroq xizmat ko‘rsatgan va tom qismida istalgan rangdagi TAXI belgisi bor. Bu yo‘lovchi tashish uchun mo‘ljallangan yengil avtomobil – miniven yoki vagon sinfiga mansub kuzov mos kelmaydi. Boshqa talablar <tariffsLink>tariflarga</tariffsLink> bog‘liq",
    note: "infoBlock.item2.content",
  },
  "infoBlock.item2.title": {
    ru: "На какой машине можно таксовать?",
    uz: "Qanday mashinada taksi xizmatini ko‘rsatish mumkin?",
    note: "infoBlock.item2.title",
  },
  "infoBlock.item3.content": {
    ru: "У каждого водителя есть рейтинг от 0 до 100 баллов. Новичок стартует со 100 баллами, а дальше рейтинг меняется в зависимости от того, сколько заказов водитель принял и пропустил. Чем выше рейтинг, тем чаще водитель получает заказы",
    uz: "Har bir haydovchi 0 dan 100 ballgacha reytingga ega bo‘ladi. Yangi haydovchi 100 ball bilan ishni boshlaydi, keyin haydovchi nechta buyurtmani qabul qilgani va o‘tkazib yuborganiga qarab reyting o‘zgarib boradi. Reyting qanchalik baland bo‘lsa, haydovchi shuncha ko‘p buyurtma oladi",
    note: "infoBlock.item3.content",
  },
  "infoBlock.item3.title": {
    ru: "Как распределяются заказы между водителями?",
    uz: "Buyurtmalar haydovchilar o‘rtasida qanday tasdimlanadi?",
    note: "infoBlock.item3.title",
  },
  "infoBlock.item4.content": {
    ru: "Подойдёт любой смартфон на Android. Он должен быть с камерой, GPS и доступом в интернет",
    uz: "Android tizimidagi istalgan smartfon to‘g'ri keladi. U kamera, GPS va internetga kirish imkoniyatiga ega bo‘lishi kerak",
    note: "infoBlock.item4.content",
  },
  "infoBlock.item4.title": {
    ru: "Какой телефон нужен, чтобы принимать заказы?",
    uz: "Buyurtmalarni qabul qilish uchun qanday telefon kerak?",
    note: "infoBlock.item4.title",
  },
  "infoBlock.item5.content": {
    ru: "Да, вы сами решаете, когда и сколько работать. Главное, чтобы график устраивал вас и партнёра сервиса, с которым вы сотрудничаете",
    uz: "Ha, qachon va qancha ishlashni o‘zingiz belgilaysiz. Asosiysi, grafik sizni va siz hamkorlik qiladigan xizmat hamkorini qoniqtirishi kerak",
    note: "infoBlock.item5.content",
  },
  "infoBlock.item5.title": {
    ru: "Могу ли я выбирать график работы?",
    uz: "Ishlash grafikimni tanlay olamanmi?",
    note: "infoBlock.item5.title",
  },
  "infoStandartsTitle": {
    ru: "Стандарты сервиса",
    uz: "Xizmat standartlari",
    note: "infoStandartsTitle",
  },
  "infoTariffsTitle": {
    ru: "Подобрать тариф под автомобиль",
    uz: "Avtomobilga tarif tanlash",
    note: "infoTariffsTitle",
  },
  "infoTitle": {
    ru: "Полезная информация",
    uz: "Foydali ma’lumot",
    note: "Заголовок FAQ",
  },
  "introTitle": {
    ru: "Ваш доход превыше всего",
    uz: "Daroma­dingiz hamma narsadan ustun",
    note: "Hero заголовок",
  },
  "justiceInfo": {
    ru: "Проверяем жалобы и не блокируем за снижение рейтинга. За поездки без оценки повышаем рейтинг",
    uz: "Shikoyatlarni tekshiramiz va reyting tushishi uchun bloklamaymiz. Baho qo‘yilmagan safarlar uchun reytingni ko‘taramiz",
    note: "justiceInfo",
  },
  "justiceTitle": {
    ru: "Справедливость",
    uz: "Haqqoniylik",
    note: "justiceTitle",
  },
  "noParks": {
    ru: "Нет парков",
    uz: "Parklar yo‘q",
    note: "noParks",
  },
  "parksBlockDescription.bukhara": {
    ru: "Обратитесь в офисы наших партнёров в Бухаре",
    uz: "Buxorodagi hamkorlarimiz ofislariga murojaat qiling",
    note: "parksBlockDescription.bukhara",
  },
  "parksBlockDescription.generic": {
    ru: "Обратитесь в офисы наших партнёров",
    uz: "Hamkorlarimiz ofislariga murojaat qiling",
    note: "parksBlockDescription.generic",
  },
  "parksBlockDescription.samarkand": {
    ru: "Обратитесь в офисы наших партнёров в Самарканде",
    uz: "Samarqanddagi hamkorlarimiz ofislariga murojaat qiling",
    note: "parksBlockDescription.samarkand",
  },
  "parksBlockDescription.tashkent": {
    ru: "Обратитесь в офисы наших партнёров в Ташкенте",
    uz: "Toshkentdagi hamkorlarimiz ofislariga murojaat qiling",
    note: "parksBlockDescription.tashkent",
  },
  "parksBlockTitle": {
    ru: "Станьте водителем",
    uz: "Haydovchi bo‘ling",
    note: "Заголовок блока парков",
  },
  "profitInfo": {
    ru: "Низкая комиссия сервиса, гарантированный доход при выполнении условий*, привилегии за фирменную оклейку авто",
    uz: "Kam xizmat komissiyasi, shartlar bajarilgandagi kafolatlangan daromad*, avtomobilga yopishtiriluvchi brend stikeri uchun imtiyozlar",
    note: "profitInfo",
  },
  "profitInfo2": {
    ru: "* Условия в разделе «Мотивация» приложения WB Flot",
    uz: "* Shartlar WB Flot ilovasining \"Motivatsiya\" bo‘limida",
    note: "profitInfo2",
  },
  "profitTitle": {
    ru: "Выгода",
    uz: "Foyda",
    note: "profitTitle",
  },
  "successMessage": {
    ru: "Вы отправили заявку",
    uz: "Siz ariza yubordingiz",
    note: "successMessage",
  },
  "successText": {
    ru: "Свяжемся с вами в течение нескольких дней. Пока можете скачать приложение WB Flot",
    uz: "Siz bilan kun davomida bog‘lanamiz. Hozircha WB Flot ilovasini yuklab olishingiz mumkin",
    note: "successText",
  },
  "validation-first-name-invalid": {
    ru: "Имя должно содержать только буквы, пробелы, дефисы и апострофы (без цифр и специальных символов)",
    uz: "Ism faqat harflar, bo'shliqlar, defislar va apostroflardan iborat bo'lishi kerak (raqamlar va maxsus belgilar bo'lmasligi kerak)",
    note: "validation-first-name-invalid",
  },
  "validation-first-name-invalid-cyrillic": {
    ru: "Имя должно содержать только кириллические буквы, пробелы, дефисы и апострофы (без цифр и специальных символов)",
    uz: "Ism faqat kirill harflari, bo'shliqlar, defislar va apostroflardan iborat bo'lishi kerak (raqamlar va maxsus belgilar bo'lmasligi kerak)",
    note: "validation-first-name-invalid-cyrillic",
  },
  "validation-first-name-required": {
    ru: "Имя обязательно для заполнения",
    uz: "Ism majburiy maydon",
    note: "validation-first-name-required",
  },
  "validation-last-name-invalid": {
    ru: "Фамилия должна содержать только буквы, пробелы, дефисы и апострофы (без цифр и специальных символов)",
    uz: "Familiya faqat harflar, bo'shliqlar, defislar va apostroflardan iborat bo'lishi kerak (raqamlar va maxsus belgilar bo'lmasligi kerak)",
    note: "validation-last-name-invalid",
  },
  "validation-last-name-invalid-cyrillic": {
    ru: "Фамилия должна содержать только кириллические буквы, пробелы, дефисы и апострофы (без цифр и специальных символов)",
    uz: "Familiya faqat kirill harflari, bo'shliqlar, defislar va apostroflardan iborat bo'lishi kerak (raqamlar va maxsus belgilar bo'lmasligi kerak)",
    note: "validation-last-name-invalid-cyrillic",
  },
  "validation-last-name-required": {
    ru: "Фамилия обязательна для заполнения",
    uz: "Familiya majburiy maydon",
    note: "validation-last-name-required",
  },
  "valuesTitle": {
    ru: "Нам важно то, что ценно вам",
    uz: "Sizga qadrli bo‘lgan narsa biz uchun ham qadrli",
    note: "Заголовок ценностей",
  },
  "wrapperFooter": {
    ru: "Нажимая кнопку, вы подтверждаете, что ознакомились и приняли <conditionLink> условия оказания услуг по содействию в подключении к Партнерам Сервиса WB TAXI</conditionLink>",
    uz: "Tugmani bosish orqali <conditionLink>WB TAXI xizmat hamkorlariga ulanishga yordam berish bo‘yicha xizmat ko‘rsatish shartlari</conditionLink> bilan tanishib chiqqaningizni va ularni qabul qilishingizni tasdiqlaysiz",
    note: "wrapperFooter",
  },
  "wrapperFooter2": {
    ru: "<contractLink>Условия использования мобильного приложения WB Flot</contractLink>",
    uz: "<contractLink>WB Flot mobil ilovasidan foydalanish shartlari</contractLink>",
    note: "wrapperFooter2",
  },
  "wrapperFooter3": {
    ru: "<policyLink>Политика конфиденциальности водителей и представителей перевозчика</policyLink>",
    uz: "<policyLink>Haydovchilar va tashuvchi vakillari maxfiylik siyosati</policyLink>",
    note: "wrapperFooter3",
  },
} as const satisfies Record<string, TranslationEntry>

export type DriversTranslationKey = keyof typeof DRIVERS_TRANSLATIONS
