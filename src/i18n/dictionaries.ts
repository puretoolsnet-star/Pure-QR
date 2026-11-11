import type { Locale } from "@/i18n/config";
import { CATALOG_EXTRA } from "@/i18n/catalog-extra";
import type { Dictionary, RawLocaleDictionary } from "@/i18n/types";

const uk: RawLocaleDictionary = {
  brand: { name: "PureQR", tagline: "QR-коди без серверів" },
  nav: {
    home: "Головна",
    tools: "Інструменти",
    selectLanguage: "Мова",
    menuAria: "Меню сайту",
    menuClose: "Закрити меню",
  },
  ecosystem: {
    menuLabel: "Наша екосистема",
    menuHint:
      "Пов’язані сервіси з локальною обробкою у браузері — одна команда, одна філософія приватності.",
    active: "Активно",
    comingSoon: "Незабаром",
    items: {
      purepdf: {
        name: "PurePDF",
        tagline: "Інструменти для роботи з PDF.",
      },
      pureqr: {
        name: "PureQR",
        tagline: "Генератор та менеджер QR-кодів.",
      },
      pureSign: {
        name: "PureSign",
        tagline: "Підпис та заповнення PDF локально.",
      },
      pureTable: {
        name: "PureTable",
        tagline: "Бізнес-утиліта для парсингу накладних у Excel/CSV.",
      },
    },
  },
  footer: {
    privacyBadge: "100% Client-Side Privacy",
    tagline: "Жодні дані не покидають ваш браузер.",
    rights: "© PureQR. Усі QR генеруються локально.",
  },
  home: {
    heroTitle: "PureQR — QR Code Generator",
    heroSubtitle: "Створюйте та скануйте QR-коди локально у браузері",
    toolsAria: "Інструменти QR",
    openTool: "Відкрити →",
    privacyHighlight:
      "100% Client-Side Processing — паролі Wi‑Fi, контакти та текст не надсилаються на сервери.",
  },
  common: {
    backHome: "На головну",
    downloadPng: "Завантажити PNG",
    downloadSvg: "Завантажити SVG",
    copy: "Скопіювати в буфер",
    copied: "Скопійовано",
    generate: "Оновити QR",
    clear: "Очистити",
    clientSideNote: "Client-Side: обробка лише у вашому браузері.",
    privacyReminder:
      "100% Client-Side Privacy — дані не передаються на сервери.",
  },
  tools: {
    generator: {
      title: "Генератор QR",
      description:
        "Текст або URL у QR-код з кольорами, margin та експортом PNG/SVG.",
      hint: "Введіть будь-який текст або посилання.",
    },
    wifi: {
      title: "Wi‑Fi QR",
      description:
        "QR для Wi‑Fi (SSID, пароль, WPA/WPA2, WEP або відкрита мережа).",
      hint: "Пароль залишається на вашому пристрої.",
    },
    vcard: {
      title: "vCard QR",
      description: "Контактна візитка у форматі QR для швидкого збереження.",
      hint: "Заповніть поля контакту — vCard формується локально.",
    },
    menu: {
      title: "Menu QR — меню для кафе та ресторанів",
      description:
        "Створюйте зручні QR-коди для електронних меню, прайс-листів та каталогів.",
      hint: "Вставте посилання на онлайн-меню або оберіть шаблон.",
    },
    "logo-qr": {
      title: "Logo QR / Брендований код",
      description:
        "Професійні QR-коди з логотипом бренду в центрі та високою корекцією помилок.",
      hint: "Завантажте PNG/JPG/SVG і налаштуйте кольори — усе локально.",
    },
    scanner: {
      title: "QR Scanner",
      description: "Зчитайте QR-код із завантаженого зображення в браузері.",
      hint: "PNG, JPG або WebP — без камери та без сервера.",
    },
  },
  generator: {
    contentLabel: "Текст або URL",
    contentPlaceholder: "https://example.com або будь-який текст…",
    fgColor: "Колір модулів",
    bgColor: "Фон",
    size: "Розмір (px)",
    preview: "Попередній перегляд",
    includeMargin: "Додати margin (quiet zone)",
    margin: "Розмір margin",
  },
  wifi: {
    ssid: "Назва мережі (SSID)",
    password: "Пароль",
    encryption: "Тип шифрування",
    hidden: "Прихована мережа",
    wpa: "WPA / WPA2",
    wep: "WEP",
    nopass: "Без пароля (Open)",
  },
  vcard: {
    firstName: "Ім’я",
    lastName: "Прізвище",
    company: "Компанія",
    jobTitle: "Посада",
    phone: "Телефон",
    email: "Email",
    website: "Веб-сайт",
  },
  menu: {
    urlLabel: "Посилання на онлайн-меню",
    urlPlaceholder: "https://your-cafe.com/menu",
    templateLabel: "Шаблон",
    templateCustom: "Власне посилання",
    templateCafe: "Кафе",
    templateRestaurant: "Ресторан",
    templateCatalog: "Прайс-лист / каталог",
    hintToggle: "Додати підказку для гостей",
    hintCaption: "Наведіть камеру, щоб відкрити меню 🍽️",
    hintHelp: "Текст для друку під QR (у сам код кодуються лише посилання).",
    fgColor: "Колір QR (бренд)",
    bgColor: "Фон QR",
    invalidUrl: "Перевірте формат URL меню.",
  },
  logoQr: {
    contentLabel: "Текст або посилання",
    contentPlaceholder: "URL, текст, контакт…",
    logoUpload: "Завантажити логотип",
    logoUploadHint: "PNG, JPG, SVG або WebP. Файл не покидає браузер.",
    logoScale: "Розмір логотипу",
    excavate: "Вирізати фон під логотипом (excavate)",
    excavateHelp:
      "Робить «вікно» в модулях QR під іконку для кращого сканування.",
    fgColor: "Колір QR",
    bgColor: "Фон QR",
    errorLevel: "Корекція помилок: рівень H (максимум для логотипу)",
    removeLogo: "Прибрати логотип",
  },
  scanner: {
    dropTitle: "Перетягніть зображення або натисніть для вибору",
    dropActive: "Відпустіть файл для сканування…",
    dropHint: "PNG, JPG або WebP — розшифровка через jsQR і Canvas.",
    result: "Результат",
    noQr: "QR-код на зображенні не знайдено.",
    scanning: "Сканування…",
    openLink: "Відкрити посилання",
    exportResult: "Завантажити результат (.txt)",
  },
  rewardedAd: {
    sponsored: "Підтримка проєкту",
    title: "Завантажити готовий файл",
    message:
      "Короткий перегляд спонсорського блоку — єдина умова, щоб тримати PureQR безкоштовним, повністю приватним і без реєстрацій чи підписок.",
    watch: "Переглянути спонсорське відео для завантаження",
    watching: "Триває спонсорський перегляд…",
    download: "Завантажити файл",
    waitHint:
      "Натисніть кнопку нижче, щоб запустити спонсорський блок Adsterra. Продовжити без перегляду неможливо.",
    progress: (seconds) => `${seconds} с`,
    thanks: "Дякуємо за підтримку. Файл зараз завантажиться на ваш пристрій.",
    close: "Закрити",
    slotLabel: "Спонсорський блок Adsterra",
  },
};

const en: RawLocaleDictionary = {
  brand: { name: "PureQR", tagline: "QR codes without servers" },
  nav: {
    home: "Home",
    tools: "Tools",
    selectLanguage: "Language",
    menuAria: "Site menu",
    menuClose: "Close menu",
  },
  ecosystem: {
    menuLabel: "Our ecosystem",
    menuHint:
      "Related browser-local tools from the same team — privacy-first, no unnecessary uploads.",
    active: "Active",
    comingSoon: "Coming Soon",
    items: {
      purepdf: {
        name: "PurePDF",
        tagline: "Fast PDF processing tools.",
      },
      pureqr: {
        name: "PureQR",
        tagline: "Modern QR code generator & manager.",
      },
      pureSign: {
        name: "PureSign",
        tagline: "Sign and fill PDF documents locally.",
      },
      pureTable: {
        name: "PureTable",
        tagline: "Business utility for parsing invoices into Excel/CSV.",
      },
    },
  },
  footer: {
    privacyBadge: "100% Client-Side Privacy",
    tagline: "Your data never leaves the browser.",
    rights: "© PureQR. All QR codes are generated locally.",
  },
  home: {
    heroTitle: "PureQR — QR Code Generator",
    heroSubtitle: "Create and scan QR codes locally in your browser",
    toolsAria: "QR tools",
    openTool: "Open →",
    privacyHighlight:
      "100% Client-Side Processing — Wi‑Fi passwords, contacts, and text are never sent to servers.",
  },
  common: {
    backHome: "Back to home",
    downloadPng: "Download PNG",
    downloadSvg: "Download SVG",
    copy: "Copy to clipboard",
    copied: "Copied",
    generate: "Update QR",
    clear: "Clear",
    clientSideNote: "Client-Side: processing happens only in your browser.",
    privacyReminder:
      "100% Client-Side Privacy — data is not sent to servers.",
  },
  tools: {
    generator: {
      title: "QR Generator",
      description:
        "Text or URLs as QR codes with colors, margin, and PNG/SVG export.",
      hint: "Enter any text or link.",
    },
    wifi: {
      title: "Wi‑Fi QR",
      description:
        "Wi‑Fi join QR (SSID, password, WPA/WPA2, WEP, or open network).",
      hint: "Your password stays on your device.",
    },
    vcard: {
      title: "vCard QR",
      description: "Contact card as QR for quick saving to the phone.",
      hint: "Fill contact fields — vCard is built locally.",
    },
    menu: {
      title: "Menu QR",
      description:
        "Create QR codes for digital menus, price lists, and catalogs.",
      hint: "Paste your online menu URL or pick a template.",
    },
    "logo-qr": {
      title: "Logo QR — branded code",
      description:
        "Professional QR codes with your brand logo centered and high error correction.",
      hint: "Upload PNG/JPG/SVG, tune colors — all client-side.",
    },
    scanner: {
      title: "QR Scanner",
      description: "Decode QR codes from uploaded images in the browser.",
      hint: "PNG, JPG, or WebP — no camera, no server.",
    },
  },
  generator: {
    contentLabel: "Text or URL",
    contentPlaceholder: "https://example.com or any text…",
    fgColor: "Module color",
    bgColor: "Background",
    size: "Size (px)",
    preview: "Preview",
    includeMargin: "Include margin (quiet zone)",
    margin: "Margin size",
  },
  wifi: {
    ssid: "Network name (SSID)",
    password: "Password",
    encryption: "Encryption type",
    hidden: "Hidden network",
    wpa: "WPA / WPA2",
    wep: "WEP",
    nopass: "Open (no password)",
  },
  vcard: {
    firstName: "First name",
    lastName: "Last name",
    company: "Company",
    jobTitle: "Job title",
    phone: "Phone",
    email: "Email",
    website: "Website",
  },
  menu: {
    urlLabel: "Online menu URL",
    urlPlaceholder: "https://your-cafe.com/menu",
    templateLabel: "Template",
    templateCustom: "Custom link",
    templateCafe: "Café",
    templateRestaurant: "Restaurant",
    templateCatalog: "Price list / catalog",
    hintToggle: "Add guest hint text",
    hintCaption: "Point your camera to open the menu 🍽️",
    hintHelp: "Print this under the QR — the code encodes only the link.",
    fgColor: "QR color (brand)",
    bgColor: "QR background",
    invalidUrl: "Please check the menu URL format.",
  },
  logoQr: {
    contentLabel: "Text or link",
    contentPlaceholder: "URL, text, contact…",
    logoUpload: "Upload logo",
    logoUploadHint: "PNG, JPG, SVG, or WebP. File never leaves your browser.",
    logoScale: "Logo size",
    excavate: "Excavate modules under logo",
    excavateHelp: "Clears QR modules behind the icon for reliable scanning.",
    fgColor: "QR color",
    bgColor: "QR background",
    errorLevel: "Error correction: level H (recommended with logo)",
    removeLogo: "Remove logo",
  },
  scanner: {
    dropTitle: "Drop an image here or click to browse",
    dropActive: "Drop the file to scan…",
    dropHint: "PNG, JPG, or WebP — decoded with jsQR and Canvas.",
    result: "Result",
    noQr: "No QR code found in this image.",
    scanning: "Scanning…",
    openLink: "Open link",
    exportResult: "Download result (.txt)",
  },
  rewardedAd: {
    sponsored: "Support the project",
    title: "Download your file",
    message:
      "A short sponsor view is the only condition that keeps PureQR free, fully private, and without sign-ups or subscriptions.",
    watch: "Watch sponsor video to download",
    watching: "Sponsor view in progress…",
    download: "Download file",
    waitHint:
      "Tap the button below to start the Adsterra sponsor block. There is no way to continue without watching.",
    progress: (seconds) => `${seconds}s`,
    thanks: "Thank you for the support. Your file will download now.",
    close: "Close",
    slotLabel: "Adsterra sponsor block",
  },
};

const pl: RawLocaleDictionary = {
  ...en,
  brand: { name: "PureQR", tagline: "Kody QR bez serwerów" },
  nav: {
    home: "Start",
    tools: "Narzędzia",
    selectLanguage: "Język",
    menuAria: "Menu strony",
    menuClose: "Zamknij menu",
  },
  ecosystem: {
    menuLabel: "Nasz ekosystem",
    menuHint:
      "Powiązane narzędzia działające lokalnie w przeglądarce — ta sama prywatność.",
    active: "Aktywne",
    comingSoon: "Wkrótce",
    items: {
      purepdf: {
        name: "PurePDF",
        tagline: "Szybkie narzędzia do obsługi plików PDF.",
      },
      pureqr: {
        name: "PureQR",
        tagline: "Nowoczesny generator i menedżer kodów QR.",
      },
      pureSign: {
        name: "PureSign",
        tagline: "Podpisywanie i wypełnianie PDF lokalnie.",
      },
      pureTable: {
        name: "PureTable",
        tagline: "Narzędzie biznesowe do parsowania faktur.",
      },
    },
  },
  footer: {
    privacyBadge: "100% Client-Side Privacy",
    tagline: "Dane nie opuszczają przeglądarki.",
    rights: "© PureQR. Wszystkie kody QR generowane lokalnie.",
  },
  home: {
    heroTitle: "PureQR — QR Code Generator",
    heroSubtitle: "Twórz i skanuj kody QR lokalnie w przeglądarce",
    toolsAria: "Narzędzia QR",
    openTool: "Otwórz →",
    privacyHighlight:
      "100% Client-Side Processing — hasła Wi‑Fi, kontakty i tekst nie trafiają na serwery.",
  },
  common: {
    backHome: "Strona główna",
    downloadPng: "Pobierz PNG",
    downloadSvg: "Pobierz SVG",
    copy: "Kopiuj do schowka",
    copied: "Skopiowano",
    generate: "Odśwież QR",
    clear: "Wyczyść",
    clientSideNote: "Client-Side: przetwarzanie tylko w przeglądarce.",
    privacyReminder:
      "100% Client-Side Privacy — dane nie trafiają na serwery.",
  },
  tools: {
    generator: {
      title: "Generator QR",
      description:
        "Tekst lub URL jako QR z kolorami, marginesem i eksportem PNG/SVG.",
      hint: "Wpisz dowolny tekst lub link.",
    },
    wifi: {
      title: "Wi‑Fi QR",
      description:
        "QR Wi‑Fi (SSID, hasło, WPA/WPA2, WEP lub sieć otwarta).",
      hint: "Hasło pozostaje na Twoim urządzeniu.",
    },
    vcard: {
      title: "vCard QR",
      description: "Wizytówka kontaktu jako kod QR.",
      hint: "Uzupełnij pola — vCard powstaje lokalnie.",
    },
    menu: {
      title: "Menu QR",
      description:
        "Twórz QR-kody do menu online, cenników i katalogów.",
      hint: "Wklej link do menu lub wybierz szablon.",
    },
    "logo-qr": {
      title: "Logo QR — kod z logo",
      description:
        "Profesjonalne QR z logo marki na środku i wysoką korekcją błędów.",
      hint: "Wgraj PNG/JPG/SVG, ustaw kolory — wszystko lokalnie.",
    },
    scanner: {
      title: "Skaner QR",
      description: "Odczytaj kod QR z przesłanego obrazu w przeglądarce.",
      hint: "PNG, JPG lub WebP — bez kamery i serwera.",
    },
  },
  generator: {
    contentLabel: "Tekst lub URL",
    contentPlaceholder: "https://example.com lub dowolny tekst…",
    fgColor: "Kolor modułów",
    bgColor: "Tło",
    size: "Rozmiar (px)",
    preview: "Podgląd",
    includeMargin: "Dodaj margines (quiet zone)",
    margin: "Rozmiar marginesu",
  },
  wifi: {
    ssid: "Nazwa sieci (SSID)",
    password: "Hasło",
    encryption: "Typ szyfrowania",
    hidden: "Ukryta sieć",
    wpa: "WPA / WPA2",
    wep: "WEP",
    nopass: "Otwarta (bez hasła)",
  },
  vcard: {
    firstName: "Imię",
    lastName: "Nazwisko",
    company: "Firma",
    jobTitle: "Stanowisko",
    phone: "Telefon",
    email: "Email",
    website: "Strona WWW",
  },
  menu: {
    urlLabel: "Link do menu online",
    urlPlaceholder: "https://twoja-kawiarnia.pl/menu",
    templateLabel: "Szablon",
    templateCustom: "Własny link",
    templateCafe: "Kawiarnia",
    templateRestaurant: "Restauracja",
    templateCatalog: "Cennik / katalog",
    hintToggle: "Dodaj podpowiedź dla gości",
    hintCaption: "Skieruj aparat, aby otworzyć menu 🍽️",
    hintHelp: "Tekst do druku pod QR — w kodzie jest tylko link.",
    fgColor: "Kolor QR (marka)",
    bgColor: "Tło QR",
    invalidUrl: "Sprawdź format URL menu.",
  },
  logoQr: {
    contentLabel: "Tekst lub link",
    contentPlaceholder: "URL, tekst, kontakt…",
    logoUpload: "Wgraj logo",
    logoUploadHint: "PNG, JPG, SVG lub WebP. Plik nie opuszcza przeglądarki.",
    logoScale: "Rozmiar logo",
    excavate: "Wyciąć tło pod logo (excavate)",
    excavateHelp:
      "Usuwa moduły QR pod ikoną dla lepszego skanowania.",
    fgColor: "Kolor QR",
    bgColor: "Tło QR",
    errorLevel: "Korekcja błędów: poziom H (zalecany z logo)",
    removeLogo: "Usuń logo",
  },
  scanner: {
    dropTitle: "Upuść obraz tutaj lub kliknij, aby wybrać",
    dropActive: "Upuść plik, aby zeskanować…",
    dropHint: "PNG, JPG lub WebP — dekodowanie jsQR i Canvas.",
    result: "Wynik",
    noQr: "Nie znaleziono kodu QR na obrazie.",
    scanning: "Skanowanie…",
    openLink: "Otwórz link",
    exportResult: "Pobierz wynik (.txt)",
  },
  rewardedAd: {
    sponsored: "Wesprzyj projekt",
    title: "Pobierz gotowy plik",
    message:
      "Krótki blok sponsora to jedyny warunek, by PureQR pozostał darmowy, w pełni prywatny i bez rejestracji oraz subskrypcji.",
    watch: "Obejrzyj wideo sponsora, aby pobrać",
    watching: "Trwa odtwarzanie sponsora…",
    download: "Pobierz plik",
    waitHint:
      "Kliknij przycisk poniżej, aby uruchomić blok Adsterra. Nie można kontynuować bez obejrzenia.",
    progress: (seconds) => `${seconds} s`,
    thanks: "Dziękujemy za wsparcie. Plik zaraz się pobierze.",
    close: "Zamknij",
    slotLabel: "Blok sponsora Adsterra",
  },
};

const de: RawLocaleDictionary = {
  ...en,
  brand: { name: "PureQR", tagline: "QR-Codes ohne Server" },
  nav: {
    home: "Start",
    tools: "Tools",
    selectLanguage: "Sprache",
    menuAria: "Website-Menü",
    menuClose: "Menü schließen",
  },
  ecosystem: {
    menuLabel: "Unser Ökosystem",
    menuHint:
      "Verwandte Tools, die lokal im Browser laufen — datenschutzfreundlich.",
    active: "Aktiv",
    comingSoon: "Demnächst",
    items: {
      purepdf: {
        name: "PurePDF",
        tagline: "Schnelle PDF-Verarbeitungstools.",
      },
      pureqr: {
        name: "PureQR",
        tagline: "Moderne QR-Code-Erstellung & Verwaltung.",
      },
      pureSign: {
        name: "PureSign",
        tagline: "PDF-Dokumente lokal signieren und ausfüllen.",
      },
      pureTable: {
        name: "PureTable",
        tagline: "Geschäftsdienstprogramm zum Parsen von Rechnungen.",
      },
    },
  },
  footer: {
    privacyBadge: "100% Client-Side Privacy",
    tagline: "Ihre Daten verlassen nie den Browser.",
    rights: "© PureQR. Alle QR-Codes werden lokal erzeugt.",
  },
  home: {
    heroTitle: "PureQR — QR Code Generator",
    heroSubtitle: "QR-Codes lokal im Browser erstellen und scannen",
    toolsAria: "QR-Tools",
    openTool: "Öffnen →",
    privacyHighlight:
      "100% Client-Side Processing — Wi‑Fi-Passwörter, Kontakte und Text werden nicht an Server gesendet.",
  },
  common: {
    backHome: "Zur Startseite",
    downloadPng: "PNG herunterladen",
    downloadSvg: "SVG herunterladen",
    copy: "In Zwischenablage kopieren",
    copied: "Kopiert",
    generate: "QR aktualisieren",
    clear: "Löschen",
    clientSideNote: "Client-Side: Verarbeitung nur in Ihrem Browser.",
    privacyReminder:
      "100% Client-Side Privacy — Daten werden nicht an Server gesendet.",
  },
  tools: {
    generator: {
      title: "QR-Generator",
      description:
        "Text oder URL als QR mit Farben, Rand und PNG/SVG-Export.",
      hint: "Beliebigen Text oder Link eingeben.",
    },
    wifi: {
      title: "Wi‑Fi QR",
      description:
        "WLAN-QR (SSID, Passwort, WPA/WPA2, WEP oder offenes Netz).",
      hint: "Ihr Passwort bleibt auf dem Gerät.",
    },
    vcard: {
      title: "vCard QR",
      description: "Kontaktkarte als QR zum schnellen Speichern.",
      hint: "Felder ausfüllen — vCard wird lokal erstellt.",
    },
    menu: {
      title: "Menu QR",
      description:
        "QR-Codes für digitale Speisekarten, Preislisten und Kataloge.",
      hint: "Menü-URL einfügen oder Vorlage wählen.",
    },
    "logo-qr": {
      title: "Logo QR — Marken-QR",
      description:
        "Professionelle QR-Codes mit zentriertem Logo und hoher Fehlerkorrektur.",
      hint: "PNG/JPG/SVG hochladen, Farben anpassen — alles lokal.",
    },
    scanner: {
      title: "QR-Scanner",
      description: "QR aus hochgeladenen Bildern im Browser lesen.",
      hint: "PNG, JPG oder WebP — keine Kamera, kein Server.",
    },
  },
  generator: {
    contentLabel: "Text oder URL",
    contentPlaceholder: "https://example.com oder beliebiger Text…",
    fgColor: "Modulfarbe",
    bgColor: "Hintergrund",
    size: "Größe (px)",
    preview: "Vorschau",
    includeMargin: "Rand (Quiet Zone) einbeziehen",
    margin: "Randgröße",
  },
  wifi: {
    ssid: "Netzwerkname (SSID)",
    password: "Passwort",
    encryption: "Verschlüsselungstyp",
    hidden: "Verstecktes Netzwerk",
    wpa: "WPA / WPA2",
    wep: "WEP",
    nopass: "Offen (kein Passwort)",
  },
  vcard: {
    firstName: "Vorname",
    lastName: "Nachname",
    company: "Unternehmen",
    jobTitle: "Position",
    phone: "Telefon",
    email: "E-Mail",
    website: "Webseite",
  },
  menu: {
    urlLabel: "URL der Online-Speisekarte",
    urlPlaceholder: "https://ihr-cafe.de/menu",
    templateLabel: "Vorlage",
    templateCustom: "Eigener Link",
    templateCafe: "Café",
    templateRestaurant: "Restaurant",
    templateCatalog: "Preisliste / Katalog",
    hintToggle: "Gäste-Hinweis hinzufügen",
    hintCaption: "Kamera auf den QR richten, um das Menü zu öffnen 🍽️",
    hintHelp: "Text unter dem QR zum Drucken — im Code nur der Link.",
    fgColor: "QR-Farbe (Marke)",
    bgColor: "QR-Hintergrund",
    invalidUrl: "Bitte URL-Format prüfen.",
  },
  logoQr: {
    contentLabel: "Text oder Link",
    contentPlaceholder: "URL, Text, Kontakt…",
    logoUpload: "Logo hochladen",
    logoUploadHint: "PNG, JPG, SVG oder WebP. Datei verlässt nicht den Browser.",
    logoScale: "Logogröße",
    excavate: "Module unter Logo aussparen (excavate)",
    excavateHelp:
      "Entfernt QR-Module hinter dem Icon für zuverlässiges Scannen.",
    fgColor: "QR-Farbe",
    bgColor: "QR-Hintergrund",
    errorLevel: "Fehlerkorrektur: Stufe H (empfohlen mit Logo)",
    removeLogo: "Logo entfernen",
  },
  scanner: {
    dropTitle: "Bild hier ablegen oder klicken zum Auswählen",
    dropActive: "Datei loslassen zum Scannen…",
    dropHint: "PNG, JPG oder WebP — Dekodierung mit jsQR und Canvas.",
    result: "Ergebnis",
    noQr: "Kein QR-Code im Bild gefunden.",
    scanning: "Scanne…",
    openLink: "Link öffnen",
    exportResult: "Ergebnis laden (.txt)",
  },
  rewardedAd: {
    sponsored: "Projekt unterstützen",
    title: "Fertige Datei herunterladen",
    message:
      "Ein kurzer Sponsor-Block ist die einzige Bedingung, damit PureQR kostenlos, vollständig privat und ohne Registrierung oder Abo bleibt.",
    watch: "Sponsor-Video ansehen, um herunterzuladen",
    watching: "Sponsor-Ansicht läuft…",
    download: "Datei herunterladen",
    waitHint:
      "Tippen Sie unten, um den Adsterra-Sponsorblock zu starten. Ein Fortfahren ohne Ansehen ist nicht möglich.",
    progress: (seconds) => `${seconds} s`,
    thanks: "Danke für die Unterstützung. Die Datei wird jetzt heruntergeladen.",
    close: "Schließen",
    slotLabel: "Adsterra-Sponsorblock",
  },
};

const es: RawLocaleDictionary = {
  ...en,
  brand: { name: "PureQR", tagline: "Códigos QR sin servidores" },
  nav: {
    home: "Inicio",
    tools: "Herramientas",
    selectLanguage: "Idioma",
    menuAria: "Menú del sitio",
    menuClose: "Cerrar menú",
  },
  ecosystem: {
    menuLabel: "Nuestro ecosistema",
    menuHint:
      "Herramientas relacionadas en el navegador — privacidad primero.",
    active: "Activo",
    comingSoon: "Próximamente",
    items: {
      purepdf: {
        name: "PurePDF",
        tagline: "Herramientas rápidas para archivos PDF.",
      },
      pureqr: {
        name: "PureQR",
        tagline: "Generador y gestor de códigos QR.",
      },
      pureSign: {
        name: "PureSign",
        tagline: "Firma y completa archivos PDF localmente.",
      },
      pureTable: {
        name: "PureTable",
        tagline: "Utilidad de negocio para procesar facturas.",
      },
    },
  },
  footer: {
    privacyBadge: "100% Client-Side Privacy",
    tagline: "Tus datos no salen del navegador.",
    rights: "© PureQR. Todos los QR se generan localmente.",
  },
  home: {
    heroTitle: "PureQR — QR Code Generator",
    heroSubtitle: "Crea y escanea códigos QR localmente en el navegador",
    toolsAria: "Herramientas QR",
    openTool: "Abrir →",
    privacyHighlight:
      "100% Client-Side Processing — contraseñas Wi‑Fi, contactos y texto no se envían a servidores.",
  },
  common: {
    backHome: "Volver al inicio",
    downloadPng: "Descargar PNG",
    downloadSvg: "Descargar SVG",
    copy: "Copiar al portapapeles",
    copied: "Copiado",
    generate: "Actualizar QR",
    clear: "Borrar",
    clientSideNote: "Client-Side: procesamiento solo en tu navegador.",
    privacyReminder:
      "100% Client-Side Privacy — los datos no se envían a servidores.",
  },
  tools: {
    generator: {
      title: "Generador QR",
      description:
        "Texto o URL en QR con colores, margen y exportación PNG/SVG.",
      hint: "Introduce cualquier texto o enlace.",
    },
    wifi: {
      title: "Wi‑Fi QR",
      description:
        "QR Wi‑Fi (SSID, contraseña, WPA/WPA2, WEP o red abierta).",
      hint: "La contraseña permanece en tu dispositivo.",
    },
    vcard: {
      title: "vCard QR",
      description: "Tarjeta de contacto como QR para guardar rápido.",
      hint: "Rellena los campos — vCard se crea localmente.",
    },
    menu: {
      title: "Menu QR",
      description:
        "Crea códigos QR para menús digitales, listas de precios y catálogos.",
      hint: "Pega la URL del menú o elige una plantilla.",
    },
    "logo-qr": {
      title: "Logo QR — código de marca",
      description:
        "QR profesionales con logo centrado y alta corrección de errores.",
      hint: "Sube PNG/JPG/SVG, ajusta colores — todo en el cliente.",
    },
    scanner: {
      title: "Escáner QR",
      description: "Lee códigos QR de imágenes subidas en el navegador.",
      hint: "PNG, JPG o WebP — sin cámara ni servidor.",
    },
  },
  generator: {
    contentLabel: "Texto o URL",
    contentPlaceholder: "https://example.com o cualquier texto…",
    fgColor: "Color de módulos",
    bgColor: "Fondo",
    size: "Tamaño (px)",
    preview: "Vista previa",
    includeMargin: "Incluir margen (zona tranquila)",
    margin: "Tamaño del margen",
  },
  wifi: {
    ssid: "Nombre de red (SSID)",
    password: "Contraseña",
    encryption: "Tipo de cifrado",
    hidden: "Red oculta",
    wpa: "WPA / WPA2",
    wep: "WEP",
    nopass: "Abierta (sin contraseña)",
  },
  vcard: {
    firstName: "Nombre",
    lastName: "Apellidos",
    company: "Empresa",
    jobTitle: "Cargo",
    phone: "Teléfono",
    email: "Email",
    website: "Sitio web",
  },
  menu: {
    urlLabel: "URL del menú online",
    urlPlaceholder: "https://tu-cafe.com/menu",
    templateLabel: "Plantilla",
    templateCustom: "Enlace personalizado",
    templateCafe: "Cafetería",
    templateRestaurant: "Restaurante",
    templateCatalog: "Lista de precios / catálogo",
    hintToggle: "Añadir texto de ayuda",
    hintCaption: "Apunta la cámara para abrir el menú 🍽️",
    hintHelp: "Texto para imprimir bajo el QR — el código solo lleva el enlace.",
    fgColor: "Color del QR (marca)",
    bgColor: "Fondo del QR",
    invalidUrl: "Comprueba el formato de la URL.",
  },
  logoQr: {
    contentLabel: "Texto o enlace",
    contentPlaceholder: "URL, texto, contacto…",
    logoUpload: "Subir logo",
    logoUploadHint: "PNG, JPG, SVG o WebP. El archivo no sale del navegador.",
    logoScale: "Tamaño del logo",
    excavate: "Excavar módulos bajo el logo",
    excavateHelp:
      "Limpia los módulos QR detrás del icono para un escaneo fiable.",
    fgColor: "Color del QR",
    bgColor: "Fondo del QR",
    errorLevel: "Corrección de errores: nivel H (recomendado con logo)",
    removeLogo: "Quitar logo",
  },
  scanner: {
    dropTitle: "Suelta una imagen aquí o haz clic para buscar",
    dropActive: "Suelta el archivo para escanear…",
    dropHint: "PNG, JPG o WebP — decodificado con jsQR y Canvas.",
    result: "Resultado",
    noQr: "No se encontró código QR en la imagen.",
    scanning: "Escaneando…",
    openLink: "Abrir enlace",
    exportResult: "Descargar resultado (.txt)",
  },
  rewardedAd: {
    sponsored: "Apoya el proyecto",
    title: "Descargar el archivo listo",
    message:
      "Un breve bloque de patrocinio es la única condición para mantener PureQR gratis, totalmente privado y sin registros ni suscripciones.",
    watch: "Ver vídeo del patrocinador para descargar",
    watching: "Reproducción del patrocinador en curso…",
    download: "Descargar archivo",
    waitHint:
      "Pulsa el botón para iniciar el bloque Adsterra. No se puede continuar sin verlo.",
    progress: (seconds) => `${seconds} s`,
    thanks: "Gracias por el apoyo. El archivo se descargará ahora.",
    close: "Cerrar",
    slotLabel: "Bloque patrocinador Adsterra",
  },
};

const fr: RawLocaleDictionary = {
  ...en,
  brand: { name: "PureQR", tagline: "QR codes sans serveurs" },
  nav: {
    home: "Accueil",
    tools: "Outils",
    selectLanguage: "Langue",
    menuAria: "Menu du site",
    menuClose: "Fermer le menu",
  },
  ecosystem: {
    menuLabel: "Notre écosystème",
    menuHint:
      "Outils associés exécutés localement dans le navigateur — confidentialité d’abord.",
    active: "Actif",
    comingSoon: "Bientôt",
    items: {
      purepdf: {
        name: "PurePDF",
        tagline: "Outils de traitement PDF rapides.",
      },
      pureqr: {
        name: "PureQR",
        tagline: "Générateur et gestionnaire de codes QR.",
      },
      pureSign: {
        name: "PureSign",
        tagline: "Signer et remplir des PDF localement.",
      },
      pureTable: {
        name: "PureTable",
        tagline: "Utilitaire métier pour analyser les factures.",
      },
    },
  },
  footer: {
    privacyBadge: "100% Client-Side Privacy",
    tagline: "Vos données ne quittent jamais le navigateur.",
    rights: "© PureQR. Tous les QR sont générés localement.",
  },
  home: {
    heroTitle: "PureQR — QR Code Generator",
    heroSubtitle: "Créez et scannez des QR codes localement dans le navigateur",
    toolsAria: "Outils QR",
    openTool: "Ouvrir →",
    privacyHighlight:
      "100% Client-Side Processing — mots de passe Wi‑Fi, contacts et texte ne sont jamais envoyés aux serveurs.",
  },
  common: {
    backHome: "Retour à l’accueil",
    downloadPng: "Télécharger PNG",
    downloadSvg: "Télécharger SVG",
    copy: "Copier dans le presse-papiers",
    copied: "Copié",
    generate: "Mettre à jour le QR",
    clear: "Effacer",
    clientSideNote: "Client-Side : traitement uniquement dans votre navigateur.",
    privacyReminder:
      "100% Client-Side Privacy — les données ne sont pas envoyées aux serveurs.",
  },
  tools: {
    generator: {
      title: "Générateur QR",
      description:
        "Texte ou URL en QR avec couleurs, marge et export PNG/SVG.",
      hint: "Saisissez un texte ou un lien.",
    },
    wifi: {
      title: "Wi‑Fi QR",
      description:
        "QR Wi‑Fi (SSID, mot de passe, WPA/WPA2, WEP ou réseau ouvert).",
      hint: "Le mot de passe reste sur votre appareil.",
    },
    vcard: {
      title: "vCard QR",
      description: "Carte de contact en QR pour enregistrement rapide.",
      hint: "Remplissez les champs — vCard créée localement.",
    },
    menu: {
      title: "Menu QR",
      description:
        "Créez des QR pour menus digitaux, tarifs et catalogues.",
      hint: "Collez l’URL du menu ou choisissez un modèle.",
    },
    "logo-qr": {
      title: "Logo QR — code de marque",
      description:
        "QR professionnels avec logo centré et correction d’erreurs élevée.",
      hint: "Importez PNG/JPG/SVG, couleurs — tout côté client.",
    },
    scanner: {
      title: "Scanner QR",
      description: "Lisez un QR depuis une image importée dans le navigateur.",
      hint: "PNG, JPG ou WebP — sans caméra ni serveur.",
    },
  },
  generator: {
    contentLabel: "Texte ou URL",
    contentPlaceholder: "https://example.com ou tout texte…",
    fgColor: "Couleur des modules",
    bgColor: "Arrière-plan",
    size: "Taille (px)",
    preview: "Aperçu",
    includeMargin: "Inclure la marge (quiet zone)",
    margin: "Taille de la marge",
  },
  wifi: {
    ssid: "Nom du réseau (SSID)",
    password: "Mot de passe",
    encryption: "Type de chiffrement",
    hidden: "Réseau masqué",
    wpa: "WPA / WPA2",
    wep: "WEP",
    nopass: "Ouvert (sans mot de passe)",
  },
  vcard: {
    firstName: "Prénom",
    lastName: "Nom",
    company: "Entreprise",
    jobTitle: "Poste",
    phone: "Téléphone",
    email: "E-mail",
    website: "Site web",
  },
  menu: {
    urlLabel: "URL du menu en ligne",
    urlPlaceholder: "https://votre-cafe.fr/menu",
    templateLabel: "Modèle",
    templateCustom: "Lien personnalisé",
    templateCafe: "Café",
    templateRestaurant: "Restaurant",
    templateCatalog: "Tarifs / catalogue",
    hintToggle: "Ajouter un texte d’aide",
    hintCaption: "Pointez la caméra pour ouvrir le menu 🍽️",
    hintHelp: "Texte à imprimer sous le QR — le code ne contient que le lien.",
    fgColor: "Couleur du QR (marque)",
    bgColor: "Fond du QR",
    invalidUrl: "Vérifiez le format de l’URL.",
  },
  logoQr: {
    contentLabel: "Texte ou lien",
    contentPlaceholder: "URL, texte, contact…",
    logoUpload: "Importer un logo",
    logoUploadHint: "PNG, JPG, SVG ou WebP. Le fichier reste dans le navigateur.",
    logoScale: "Taille du logo",
    excavate: "Excavation sous le logo",
    excavateHelp:
      "Efface les modules QR derrière l’icône pour un scan fiable.",
    fgColor: "Couleur du QR",
    bgColor: "Fond du QR",
    errorLevel: "Correction d’erreurs : niveau H (recommandé avec logo)",
    removeLogo: "Retirer le logo",
  },
  scanner: {
    dropTitle: "Déposez une image ici ou cliquez pour parcourir",
    dropActive: "Relâchez le fichier pour scanner…",
    dropHint: "PNG, JPG ou WebP — décodage jsQR et Canvas.",
    result: "Résultat",
    noQr: "Aucun QR trouvé sur l’image.",
    scanning: "Analyse…",
    openLink: "Ouvrir le lien",
    exportResult: "Télécharger le résultat (.txt)",
  },
  rewardedAd: {
    sponsored: "Soutenir le projet",
    title: "Télécharger le fichier prêt",
    message:
      "Un court bloc sponsor est la seule condition pour garder PureQR gratuit, entièrement privé, sans inscription ni abonnement.",
    watch: "Regarder la vidéo sponsor pour télécharger",
    watching: "Visionnage sponsor en cours…",
    download: "Télécharger le fichier",
    waitHint:
      "Appuyez ci-dessous pour lancer le bloc Adsterra. Impossible de continuer sans le regarder.",
    progress: (seconds) => `${seconds} s`,
    thanks: "Merci pour le soutien. Le fichier va se télécharger.",
    close: "Fermer",
    slotLabel: "Bloc sponsor Adsterra",
  },
};

export const dictionaries: Record<Locale, RawLocaleDictionary> = {
  uk,
  en,
  pl,
  de,
  es,
  fr,
};

function buildDictionary(locale: Locale): Dictionary {
  const base = dictionaries[locale];
  const extra = CATALOG_EXTRA[locale];
  return {
    ...base,
    home: {
      ...base.home,
      categories: extra.categories,
      expandCategory: extra.categoryAccordion.expandCategory,
      collapseCategory: extra.categoryAccordion.collapseCategory,
      categoryToolsListAria: extra.categoryAccordion.categoryToolsListAria,
    },
    tools: { ...base.tools, ...extra.tools } as Dictionary["tools"],
    common: { ...base.common, ...extra.common },
    scanner: { ...base.scanner, ...extra.scanner },
    phone: extra.phone,
    email: extra.email,
    sms: extra.sms,
    location: extra.location,
    socials: extra.socials,
    multiLink: extra.multiLink,
    event: extra.event,
    pdfQr: extra.pdfQr,
    appStore: extra.appStore,
    bulkQr: extra.bulkQr,
    pdfPrint: extra.pdfPrint,
  };
}

export function getDictionary(locale: Locale): Dictionary {
  return buildDictionary(locale);
}
