import type { ToolCategoryId } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import type { ToolId } from "@/i18n/types";

type ToolCard = { title: string; description: string; hint: string };

type CategoryCopy = { title: string; subtitle: string };

export type CatalogExtra = {
  categoryAccordion: {
    expandCategory: string;
    collapseCategory: string;
    categoryToolsListAria: string;
  };
  categories: Record<ToolCategoryId, CategoryCopy>;
  tools: Partial<Record<ToolId, ToolCard>>;
  common: { fieldError: string; addRow: string; removeRow: string };
  scanner: {
    tabFile: string;
    tabCamera: string;
    cameraHint: string;
    cameraStart: string;
    cameraStop: string;
    cameraDenied: string;
  };
  phone: { number: string; invalid: string };
  email: { to: string; subject: string; body: string; invalid: string };
  sms: { phone: string; message: string; invalid: string };
  location: { lat: string; lng: string; label: string; invalid: string };
  socials: {
    platform: string;
    username: string;
    customUrl: string;
    instagram: string;
    telegram: string;
    whatsapp: string;
    facebook: string;
    x: string;
    tiktok: string;
    linkedin: string;
    youtube: string;
    custom: string;
    invalid: string;
  };
  multiLink: {
    pageTitle: string;
    linkLabel: string;
    linkUrl: string;
    addLink: string;
    invalid: string;
  };
  event: {
    title: string;
    location: string;
    start: string;
    end: string;
    description: string;
    invalid: string;
  };
  pdfQr: { url: string; invalid: string };
  appStore: { ios: string; android: string; invalid: string };
  bulkQr: {
    csvLabel: string;
    csvPlaceholder: string;
    csvHint: string;
    rowCount: (n: number) => string;
    exportAll: string;
    invalidRows: string;
    previewLimit: string;
  };
  pdfPrint: {
    hint: string;
    value: string;
    label: string;
    addRow: string;
    print: string;
    printTitle: string;
    exportBatch: string;
  };
};

const uk: CatalogExtra = {
  categoryAccordion: {
    expandCategory: "Розгорнути категорію",
    collapseCategory: "Згорнути категорію",
    categoryToolsListAria: "Інструменти в категорії",
  },
  categories: {
    basics: {
      title: "Основні",
      subtitle: "URL, текст, Wi‑Fi та контактні візитки",
    },
    business: {
      title: "Бізнес та комунікація",
      subtitle: "Меню, email, SMS, дзвінки та геолокація",
    },
    social: {
      title: "Соцмережі та месенджери",
      subtitle: "Профілі Instagram, Telegram, WhatsApp та multi-link",
    },
    content: {
      title: "Контент та події",
      subtitle: "Календар, PDF-посилання та магазини додатків",
    },
    pro: {
      title: "Pro-інструменти",
      subtitle: "Логотип, bulk, сканер і друк PDF",
    },
  },
  tools: {
    email: {
      title: "Email QR",
      description: "QR-код mailto: з темою та текстом листа.",
      hint: "Підходить для швидкого зворотного зв’язку з клієнтами.",
    },
    sms: {
      title: "SMS QR",
      description: "QR відкриває SMS з номером і готовим повідомленням.",
      hint: "Формат SMSTO: працює на більшості смартфонів.",
    },
    phone: {
      title: "Телефон QR",
      description: "QR з посиланням tel: для миттєвого дзвінка.",
      hint: "Введіть номер у міжнародному форматі.",
    },
    location: {
      title: "Геолокація / Maps",
      description: "QR із координатами geo: для навігації.",
      hint: "Додайте підпис місця — необов’язково.",
    },
    socials: {
      title: "Socials QR",
      description:
        "Посилання на Instagram, Telegram, WhatsApp, TikTok та інші.",
      hint: "Оберіть мережу та вкажіть @нік або URL.",
    },
    "multi-link": {
      title: "Multi-link / Bio",
      description: "Кілька посилань в одному QR (мікро-сторінка в data URL).",
      hint: "Усі дані залишаються у вашому браузері.",
    },
    event: {
      title: "Event QR (календар)",
      description: "Подія у форматі iCalendar для додавання в календар.",
      hint: "Вкажіть дату початку та назву події.",
    },
    "pdf-qr": {
      title: "PDF-код",
      description: "QR на PDF-файл або документ у хмарі.",
      hint: "Вставте публічне HTTPS-посилання на PDF.",
    },
    "app-store": {
      title: "App Store / Google Play",
      description: "QR на сторінку застосунку в Apple або Google Play.",
      hint: "Можна вказати обидва магазини.",
    },
    "bulk-qr": {
      title: "Bulk QR (CSV)",
      description: "Масова генерація з CSV/Excel (експорт як CSV).",
      hint: "Колонки: label,value — до сотень рядків локально.",
    },
    "pdf-print": {
      title: "PDF Print Export",
      description: "Друк аркуша з кількома QR або пакетний експорт.",
      hint: "Використовуйте «Зберегти як PDF» у діалозі друку браузера.",
    },
  },
  common: {
    fieldError: "Перевірте введені дані",
    addRow: "Додати рядок",
    removeRow: "Видалити",
  },
  scanner: {
    tabFile: "Зображення",
    tabCamera: "Камера",
    cameraHint: "Наведіть камеру на QR — розпізнавання в реальному часі.",
    cameraStart: "Увімкнути камеру",
    cameraStop: "Зупинити",
    cameraDenied: "Немає доступу до камери. Дозвольте його в браузері.",
  },
  phone: { number: "Номер телефону", invalid: "Введіть коректний номер." },
  email: {
    to: "Email одержувача",
    subject: "Тема",
    body: "Текст листа",
    invalid: "Некоректна email-адреса.",
  },
  sms: {
    phone: "Номер",
    message: "Повідомлення",
    invalid: "Некоректний номер.",
  },
  location: {
    lat: "Широта",
    lng: "Довгота",
    label: "Назва місця",
    invalid: "Координати поза діапазоном.",
  },
  socials: {
    platform: "Мережа",
    username: "Нік / @handle",
    customUrl: "Власний URL",
    instagram: "Instagram",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    facebook: "Facebook",
    x: "X (Twitter)",
    tiktok: "TikTok",
    linkedin: "LinkedIn",
    youtube: "YouTube",
    custom: "Власне посилання",
    invalid: "Заповніть профіль або URL.",
  },
  multiLink: {
    pageTitle: "Заголовок сторінки",
    linkLabel: "Назва",
    linkUrl: "URL",
    addLink: "Ще посилання",
    invalid: "Додайте принаймні одне посилання з назвою.",
  },
  event: {
    title: "Назва події",
    location: "Місце",
    start: "Початок",
    end: "Кінець",
    description: "Опис",
    invalid: "Потрібні назва та дата початку.",
  },
  pdfQr: { url: "URL PDF", invalid: "Некоректне посилання." },
  appStore: {
    ios: "App Store (iOS)",
    android: "Google Play",
    invalid: "Додайте хоча б одне посилання на магазин.",
  },
  bulkQr: {
    csvLabel: "CSV дані",
    csvPlaceholder: "label,value\nМеню,https://cafe.com/menu\nWi-Fi,SSID123",
    csvHint:
      "Збережіть Excel як CSV. Формат: назва,значення QR (або один стовпчик — лише значення).",
    rowCount: (n) => `${n} QR для генерації`,
    exportAll: "Експорт усіх PNG",
    invalidRows: "Немає валідних рядків у CSV.",
    previewLimit: "Попередній перегляд перших 12 кодів",
  },
  pdfPrint: {
    hint: "Зберіть аркуш для друку — кожен рядок = підпис + QR.",
    value: "Зміст QR",
    label: "Підпис",
    addRow: "Додати QR",
    print: "Друк / зберегти PDF",
    printTitle: "PureQR — аркуш QR",
    exportBatch: "Пакетний експорт PNG",
  },
};

const en: CatalogExtra = {
  categoryAccordion: {
    expandCategory: "Expand category",
    collapseCategory: "Collapse category",
    categoryToolsListAria: "Tools in category",
  },
  categories: {
    basics: { title: "Essentials", subtitle: "URL, text, Wi‑Fi and contacts" },
    business: {
      title: "Business & communication",
      subtitle: "Menu, email, SMS, calls and maps",
    },
    social: {
      title: "Social & messengers",
      subtitle: "Instagram, Telegram, WhatsApp and bio links",
    },
    content: {
      title: "Content & events",
      subtitle: "Calendar, PDF links and app stores",
    },
    pro: {
      title: "Pro tools",
      subtitle: "Logo, bulk, scanner and PDF print",
    },
  },
  tools: {
    email: {
      title: "Email QR",
      description: "mailto: QR with subject and body prefilled.",
      hint: "Great for support and lead capture.",
    },
    sms: {
      title: "SMS QR",
      description: "Opens SMS with number and message ready to send.",
      hint: "SMSTO format works on most phones.",
    },
    phone: {
      title: "Phone QR",
      description: "tel: link QR for one-tap calling.",
      hint: "Use international format when possible.",
    },
    location: {
      title: "Location / Maps",
      description: "geo: coordinates for navigation apps.",
      hint: "Optional place label for clarity.",
    },
    socials: {
      title: "Socials QR",
      description: "Profile links for major social networks.",
      hint: "Pick a network and enter @handle or URL.",
    },
    "multi-link": {
      title: "Multi-link / Bio",
      description: "Several links in one QR via local data URL page.",
      hint: "Nothing is uploaded — built in your browser.",
    },
    event: {
      title: "Event QR",
      description: "iCalendar VEVENT to add to the calendar.",
      hint: "Title and start date are required.",
    },
    "pdf-qr": {
      title: "PDF link QR",
      description: "QR pointing to a hosted PDF document.",
      hint: "Use a public HTTPS URL.",
    },
    "app-store": {
      title: "App Store / Google Play",
      description: "Deep links to your app listing.",
      hint: "You may provide iOS, Android, or both.",
    },
    "bulk-qr": {
      title: "Bulk QR (CSV)",
      description: "Mass-generate codes from CSV (export from Excel).",
      hint: "Columns: label,value — processed locally.",
    },
    "pdf-print": {
      title: "PDF print export",
      description: "Printable sheet with multiple QR codes.",
      hint: "Use the browser print dialog to save as PDF.",
    },
  },
  common: {
    fieldError: "Please check the highlighted fields",
    addRow: "Add row",
    removeRow: "Remove",
  },
  scanner: {
    tabFile: "Image",
    tabCamera: "Camera",
    cameraHint: "Point the camera at a QR — live decode.",
    cameraStart: "Start camera",
    cameraStop: "Stop",
    cameraDenied: "Camera access denied. Allow it in browser settings.",
  },
  phone: { number: "Phone number", invalid: "Enter a valid number." },
  email: {
    to: "Recipient email",
    subject: "Subject",
    body: "Message",
    invalid: "Invalid email address.",
  },
  sms: {
    phone: "Phone number",
    message: "Message",
    invalid: "Invalid phone number.",
  },
  location: {
    lat: "Latitude",
    lng: "Longitude",
    label: "Place name",
    invalid: "Coordinates out of range.",
  },
  socials: {
    platform: "Network",
    username: "Username / @handle",
    customUrl: "Custom URL",
    instagram: "Instagram",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    facebook: "Facebook",
    x: "X (Twitter)",
    tiktok: "TikTok",
    linkedin: "LinkedIn",
    youtube: "YouTube",
    custom: "Custom link",
    invalid: "Enter a handle or URL.",
  },
  multiLink: {
    pageTitle: "Page title",
    linkLabel: "Label",
    linkUrl: "URL",
    addLink: "Another link",
    invalid: "Add at least one labeled link.",
  },
  event: {
    title: "Event title",
    location: "Venue",
    start: "Start",
    end: "End",
    description: "Description",
    invalid: "Title and start time are required.",
  },
  pdfQr: { url: "PDF URL", invalid: "Invalid URL." },
  appStore: {
    ios: "App Store (iOS)",
    android: "Google Play",
    invalid: "Add at least one store URL.",
  },
  bulkQr: {
    csvLabel: "CSV data",
    csvPlaceholder: "label,value\nMenu,https://cafe.com/menu",
    csvHint: "Save Excel as CSV. Format: label,value or value-only rows.",
    rowCount: (n) => `${n} codes to generate`,
    exportAll: "Export all PNGs",
    invalidRows: "No valid rows in CSV.",
    previewLimit: "Preview of first 12 codes",
  },
  pdfPrint: {
    hint: "Build a sheet — each row is caption + QR payload.",
    value: "QR content",
    label: "Caption",
    addRow: "Add QR row",
    print: "Print / save PDF",
    printTitle: "PureQR — QR sheet",
    exportBatch: "Batch export PNGs",
  },
};

function fromEn(partial: CatalogExtra): CatalogExtra {
  return partial;
}

const pl: CatalogExtra = fromEn({
  ...en,
  categoryAccordion: {
    expandCategory: "Rozwiń kategorię",
    collapseCategory: "Zwiń kategorię",
    categoryToolsListAria: "Narzędzia w kategorii",
  },
  categories: {
    basics: { title: "Podstawy", subtitle: "URL, tekst, Wi‑Fi i kontakty" },
    business: {
      title: "Biznes i komunikacja",
      subtitle: "Menu, e‑mail, SMS, telefon i mapa",
    },
    social: {
      title: "Social media i komunikatory",
      subtitle: "Instagram, Telegram, WhatsApp i bio link",
    },
    content: {
      title: "Treści i wydarzenia",
      subtitle: "Kalendarz, PDF i sklepy z aplikacjami",
    },
    pro: {
      title: "Narzędzia Pro",
      subtitle: "Logo, bulk, skaner i druk PDF",
    },
  },
  tools: {
    ...en.tools,
    email: {
      title: "QR e-mail",
      description: "Kod mailto: z tematem i treścią.",
      hint: "Szybki kontakt z klientami.",
    },
    phone: {
      title: "QR telefon",
      description: "Link tel: do jednego dotknięcia.",
      hint: "Format międzynarodowy.",
    },
    "bulk-qr": {
      title: "Bulk QR (CSV)",
      description: "Masowa generacja z CSV (eksport z Excela).",
      hint: "Kolumny: label,value — lokalnie w przeglądarce.",
    },
    "pdf-print": {
      title: "Eksport do druku PDF",
      description: "Arkusz z wieloma kodami QR.",
      hint: "Zapisz jako PDF w oknie drukowania.",
    },
  },
});

const de: CatalogExtra = fromEn({
  ...en,
  categoryAccordion: {
    expandCategory: "Kategorie aufklappen",
    collapseCategory: "Kategorie einklappen",
    categoryToolsListAria: "Werkzeuge in der Kategorie",
  },
  categories: {
    basics: { title: "Basics", subtitle: "URL, Text, WLAN und Kontakte" },
    business: {
      title: "Business & Kommunikation",
      subtitle: "Menü, E-Mail, SMS, Telefon, Karte",
    },
    social: {
      title: "Social & Messenger",
      subtitle: "Profile und Bio-Links",
    },
    content: {
      title: "Inhalte & Events",
      subtitle: "Kalender, PDF und App Stores",
    },
    pro: {
      title: "Pro-Tools",
      subtitle: "Logo, Bulk, Scanner, PDF-Druck",
    },
  },
});

const es: CatalogExtra = fromEn({
  ...en,
  categoryAccordion: {
    expandCategory: "Expandir categoría",
    collapseCategory: "Contraer categoría",
    categoryToolsListAria: "Herramientas en la categoría",
  },
  categories: {
    basics: { title: "Esenciales", subtitle: "URL, texto, Wi‑Fi y contactos" },
    business: {
      title: "Negocio y comunicación",
      subtitle: "Menú, email, SMS, teléfono y mapa",
    },
    social: {
      title: "Redes y mensajería",
      subtitle: "Perfiles sociales y bio link",
    },
    content: {
      title: "Contenido y eventos",
      subtitle: "Calendario, PDF y tiendas de apps",
    },
    pro: {
      title: "Herramientas Pro",
      subtitle: "Logo, bulk, escáner e impresión PDF",
    },
  },
});

const fr: CatalogExtra = fromEn({
  ...en,
  categoryAccordion: {
    expandCategory: "Déplier la catégorie",
    collapseCategory: "Replier la catégorie",
    categoryToolsListAria: "Outils dans la catégorie",
  },
  categories: {
    basics: { title: "Essentiels", subtitle: "URL, texte, Wi‑Fi et contacts" },
    business: {
      title: "Business & communication",
      subtitle: "Menu, e-mail, SMS, appel et carte",
    },
    social: {
      title: "Réseaux & messageries",
      subtitle: "Profils sociaux et lien bio",
    },
    content: {
      title: "Contenu & événements",
      subtitle: "Calendrier, PDF et stores",
    },
    pro: {
      title: "Outils Pro",
      subtitle: "Logo, bulk, scanner et impression PDF",
    },
  },
});

export const CATALOG_EXTRA: Record<Locale, CatalogExtra> = {
  uk,
  en,
  pl,
  de,
  es,
  fr,
};
