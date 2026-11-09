import type { Locale, ToolId } from "@/i18n/locales";

export type SeoPageId = "home" | ToolId;

export type SeoCopy = {
  title: string;
  description: string;
  keywords: string[];
};

const COPY: Record<SeoPageId, Record<Locale, SeoCopy>> = {
  home: {
    uk: {
      title: "Генератор QR-кодів онлайн без сервера | PureQR",
      description:
        "Безкоштовний генератор і сканер QR у браузері: текст, Wi‑Fi, vCard, меню кафе та код із логотипом. Паролі й контакти не залишають пристрій.",
      keywords: [
        "генератор QR кодів",
        "QR код онлайн",
        "створити QR",
        "сканер QR",
        "Wi-Fi QR",
        "QR меню",
        "QR з логотипом",
        "PureQR",
      ],
    },
    en: {
      title: "Free QR Code Generator — Private & Browser-Based | PureQR",
      description:
        "Create and scan QR codes in your browser: text, Wi‑Fi, vCard, restaurant menus and branded logos. Nothing is uploaded to a server.",
      keywords: [
        "QR code generator",
        "free QR code",
        "create QR code",
        "QR scanner",
        "Wi-Fi QR",
        "menu QR code",
        "QR code with logo",
        "PureQR",
      ],
    },
    de: {
      title: "QR-Code Generator online — lokal im Browser | PureQR",
      description:
        "QR-Codes kostenlos erstellen und scannen: Text, WLAN, vCard, Speisekarte und Logo. Passwörter und Kontakte bleiben auf Ihrem Gerät.",
      keywords: [
        "QR-Code Generator",
        "QR Code erstellen",
        "QR Scanner",
        "WLAN QR Code",
        "Speisekarte QR",
        "QR Code mit Logo",
        "PureQR",
      ],
    },
    fr: {
      title: "Générateur de QR code gratuit dans le navigateur | PureQR",
      description:
        "Créez et scannez des QR codes localement : texte, Wi‑Fi, vCard, menu de restaurant et logo. Aucune donnée n’est envoyée à un serveur.",
      keywords: [
        "générateur QR code",
        "créer un QR code",
        "scanner QR",
        "QR code Wi-Fi",
        "QR code menu",
        "QR code avec logo",
        "PureQR",
      ],
    },
    es: {
      title: "Generador de códigos QR gratis en el navegador | PureQR",
      description:
        "Crea y escanea códigos QR en local: texto, Wi‑Fi, vCard, menú de restaurante y logo. Las contraseñas y contactos no salen de tu dispositivo.",
      keywords: [
        "generador de códigos QR",
        "crear código QR",
        "escáner QR",
        "QR Wi-Fi",
        "código QR menú",
        "QR con logo",
        "PureQR",
      ],
    },
    pl: {
      title: "Generator kodów QR online — prywatnie w przeglądarce | PureQR",
      description:
        "Twórz i skanuj kody QR lokalnie: tekst, Wi‑Fi, vCard, menu lokalu i logo. Hasła i kontakty nie trafiają na serwer.",
      keywords: [
        "generator kodów QR",
        "kod QR online",
        "skaner QR",
        "QR Wi-Fi",
        "QR menu",
        "kod QR z logo",
        "PureQR",
      ],
    },
  },
  generator: {
    uk: {
      title: "Генератор QR для тексту та посилань | PureQR",
      description:
        "Зробіть QR-код із тексту або URL: кольори, розмір і тихе поле. Експорт PNG і SVG відбувається лише у вашому браузері.",
      keywords: [
        "генератор QR",
        "QR з посилання",
        "QR з тексту",
        "завантажити QR PNG",
        "QR SVG",
        "PureQR",
      ],
    },
    en: {
      title: "Text & URL QR Code Generator | PureQR",
      description:
        "Turn any text or link into a QR code with custom colors, size and quiet zone. Download PNG or SVG without leaving your browser.",
      keywords: [
        "URL QR code",
        "text to QR",
        "QR code PNG",
        "QR code SVG",
        "custom QR colors",
        "PureQR",
      ],
    },
    de: {
      title: "QR-Code aus Text oder Link erzeugen | PureQR",
      description:
        "Text oder URL als QR-Code mit Farben, Größe und Ruhezone. PNG- und SVG-Export läuft vollständig lokal im Browser.",
      keywords: [
        "QR Code aus Link",
        "Text zu QR",
        "QR PNG",
        "QR SVG",
        "QR Farben",
        "PureQR",
      ],
    },
    fr: {
      title: "QR code pour texte et lien | PureQR",
      description:
        "Transformez un texte ou une URL en QR code : couleurs, taille et marge. Téléchargez un PNG ou SVG sans envoi vers un serveur.",
      keywords: [
        "QR code URL",
        "texte en QR",
        "QR code PNG",
        "QR code SVG",
        "PureQR",
      ],
    },
    es: {
      title: "Generador QR de texto y enlaces | PureQR",
      description:
        "Convierte un texto o URL en código QR con colores, tamaño y margen. Descarga PNG o SVG sin subir nada a un servidor.",
      keywords: [
        "QR de enlace",
        "texto a QR",
        "código QR PNG",
        "código QR SVG",
        "PureQR",
      ],
    },
    pl: {
      title: "Generator QR z tekstu i linku | PureQR",
      description:
        "Zamień tekst lub adres URL na kod QR: kolory, rozmiar i margines. Pobierz PNG lub SVG bez wysyłania danych na serwer.",
      keywords: [
        "QR z linku",
        "tekst na QR",
        "kod QR PNG",
        "kod QR SVG",
        "PureQR",
      ],
    },
  },
  wifi: {
    uk: {
      title: "QR-код для Wi‑Fi: SSID і пароль локально | PureQR",
      description:
        "Гості підключаться до Wi‑Fi одним сканом. SSID, пароль і тип WPA/WEP лишаються в браузері й не передаються на сервер.",
      keywords: [
        "QR Wi-Fi",
        "QR код для вайфай",
        "поділитися паролем Wi-Fi",
        "WPA QR",
        "PureQR",
      ],
    },
    en: {
      title: "Wi‑Fi QR Code Generator — Password Stays Local | PureQR",
      description:
        "Share your network with one scan. SSID, WPA/WEP password and hidden-network flag are encoded only in your browser.",
      keywords: [
        "Wi-Fi QR code",
        "share Wi-Fi password",
        "WPA QR code",
        "SSID QR",
        "PureQR",
      ],
    },
    de: {
      title: "WLAN-QR-Code erstellen — Passwort bleibt lokal | PureQR",
      description:
        "Gäste verbinden sich mit einem Scan. SSID, WPA/WEP-Passwort und verstecktes Netz werden nur im Browser verarbeitet.",
      keywords: [
        "WLAN QR Code",
        "Wi-Fi Passwort teilen",
        "WPA QR",
        "SSID QR",
        "PureQR",
      ],
    },
    fr: {
      title: "QR code Wi‑Fi — le mot de passe reste local | PureQR",
      description:
        "Partagez le réseau en un scan. SSID, mot de passe WPA/WEP et réseau masqué sont encodés uniquement dans le navigateur.",
      keywords: [
        "QR code Wi-Fi",
        "partager mot de passe Wi-Fi",
        "QR WPA",
        "PureQR",
      ],
    },
    es: {
      title: "Código QR Wi‑Fi: la contraseña no sale del navegador | PureQR",
      description:
        "Los invitados se conectan con un escaneo. SSID, clave WPA/WEP y red oculta se generan solo en tu dispositivo.",
      keywords: [
        "QR Wi-Fi",
        "compartir contraseña Wi-Fi",
        "QR WPA",
        "PureQR",
      ],
    },
    pl: {
      title: "Kod QR Wi‑Fi — hasło zostaje w przeglądarce | PureQR",
      description:
        "Goście łączą się jednym skanem. SSID, hasło WPA/WEP i ukryta sieć są kodowane wyłącznie lokalnie.",
      keywords: [
        "QR Wi-Fi",
        "udostępnij hasło Wi-Fi",
        "kod QR WPA",
        "PureQR",
      ],
    },
  },
  vcard: {
    uk: {
      title: "QR-візитка vCard для контакту | PureQR",
      description:
        "Ім’я, телефон, email і сайт у QR-коді формату vCard. Контакт збирається локально, без форми на сервері.",
      keywords: [
        "vCard QR",
        "QR візитка",
        "QR контакт",
        "електронна візитка",
        "PureQR",
      ],
    },
    en: {
      title: "vCard QR Code for a Digital Business Card | PureQR",
      description:
        "Put a name, phone, email and website into a scannable vCard QR code. The contact file is built entirely in your browser.",
      keywords: [
        "vCard QR code",
        "digital business card QR",
        "contact QR code",
        "PureQR",
      ],
    },
    de: {
      title: "vCard-QR-Code als digitale Visitenkarte | PureQR",
      description:
        "Name, Telefon, E-Mail und Website als scanbare vCard. Der Kontakt wird lokal im Browser erzeugt, nicht auf einem Server.",
      keywords: [
        "vCard QR",
        "digitale Visitenkarte",
        "Kontakt QR Code",
        "PureQR",
      ],
    },
    fr: {
      title: "QR code vCard — carte de visite numérique | PureQR",
      description:
        "Nom, téléphone, e-mail et site dans un QR vCard. Le contact est composé localement, sans formulaire serveur.",
      keywords: [
        "QR code vCard",
        "carte de visite QR",
        "contact QR",
        "PureQR",
      ],
    },
    es: {
      title: "Código QR vCard para tarjeta de contacto | PureQR",
      description:
        "Nombre, teléfono, email y web en un QR vCard. El contacto se genera en el navegador, sin enviarlo a un servidor.",
      keywords: [
        "QR vCard",
        "tarjeta de visita QR",
        "contacto QR",
        "PureQR",
      ],
    },
    pl: {
      title: "Kod QR vCard — wizytówka kontaktowa | PureQR",
      description:
        "Imię, telefon, e-mail i strona w kodzie vCard. Wizytówka powstaje lokalnie w przeglądarce, bez wysyłki na serwer.",
      keywords: [
        "vCard QR",
        "wizytówka QR",
        "kod QR kontakt",
        "PureQR",
      ],
    },
  },
  scanner: {
    uk: {
      title: "Сканер QR-кодів із зображення онлайн | PureQR",
      description:
        "Зчитайте QR із PNG, JPG або WebP прямо в браузері. Без камери, без завантаження файлу на сервер і без облікового запису.",
      keywords: [
        "сканер QR",
        "зчитати QR з фото",
        "декодер QR онлайн",
        "QR з зображення",
        "PureQR",
      ],
    },
    en: {
      title: "QR Code Scanner from an Image — In the Browser | PureQR",
      description:
        "Decode a QR code from PNG, JPG or WebP locally. No camera permission, no file upload and no account required.",
      keywords: [
        "QR scanner",
        "scan QR from image",
        "QR decoder online",
        "read QR code",
        "PureQR",
      ],
    },
    de: {
      title: "QR-Code aus einem Bild scannen | PureQR",
      description:
        "QR-Code aus PNG, JPG oder WebP im Browser lesen. Ohne Kamera, ohne Upload und ohne Konto.",
      keywords: [
        "QR Scanner",
        "QR aus Bild lesen",
        "QR Decoder",
        "PureQR",
      ],
    },
    fr: {
      title: "Scanner un QR code depuis une image | PureQR",
      description:
        "Lisez un QR code PNG, JPG ou WebP dans le navigateur. Sans caméra, sans envoi du fichier et sans compte.",
      keywords: [
        "scanner QR",
        "lire QR code image",
        "décodeur QR",
        "PureQR",
      ],
    },
    es: {
      title: "Escanear código QR desde una imagen | PureQR",
      description:
        "Lee un QR en PNG, JPG o WebP dentro del navegador. Sin cámara, sin subir el archivo y sin registro.",
      keywords: [
        "escáner QR",
        "leer QR de imagen",
        "decodificador QR",
        "PureQR",
      ],
    },
    pl: {
      title: "Skaner kodów QR ze zdjęcia w przeglądarce | PureQR",
      description:
        "Odczytaj kod QR z PNG, JPG lub WebP lokalnie. Bez kamery, bez wysyłania pliku i bez konta.",
      keywords: [
        "skaner QR",
        "odczytaj QR ze zdjęcia",
        "dekoder QR",
        "PureQR",
      ],
    },
  },
  menu: {
    uk: {
      title: "QR-код для меню кафе та ресторану | PureQR",
      description:
        "Посилання на електронне меню, прайс або каталог у зручному QR-коді. Шаблон для кафе, ресторану чи власного бренду — усе локально.",
      keywords: [
        "QR меню",
        "QR код для ресторану",
        "меню кафе QR",
        "електронне меню",
        "PureQR",
      ],
    },
    en: {
      title: "Menu QR Code for Cafés and Restaurants | PureQR",
      description:
        "Turn a menu, price list or catalog link into a QR code. Café, restaurant and custom color presets stay in the browser.",
      keywords: [
        "menu QR code",
        "restaurant QR code",
        "café menu QR",
        "digital menu QR",
        "PureQR",
      ],
    },
    de: {
      title: "QR-Code für Speisekarte und Restaurant | PureQR",
      description:
        "Link zur digitalen Speisekarte, Preisliste oder zum Katalog als QR-Code. Vorlagen für Café und Restaurant bleiben lokal.",
      keywords: [
        "Speisekarte QR",
        "Restaurant QR Code",
        "Café QR",
        "digitales Menü",
        "PureQR",
      ],
    },
    fr: {
      title: "QR code de menu pour café et restaurant | PureQR",
      description:
        "Transformez le lien d’un menu, d’un tarif ou d’un catalogue en QR code. Les modèles café et restaurant restent dans le navigateur.",
      keywords: [
        "QR code menu",
        "QR restaurant",
        "menu café QR",
        "carte digitale",
        "PureQR",
      ],
    },
    es: {
      title: "Código QR para menú de café y restaurante | PureQR",
      description:
        "Convierte el enlace de una carta, lista de precios o catálogo en QR. Las plantillas de café y restaurante se quedan en el navegador.",
      keywords: [
        "QR menú",
        "código QR restaurante",
        "menú café QR",
        "carta digital",
        "PureQR",
      ],
    },
    pl: {
      title: "Kod QR do menu kawiarni i restauracji | PureQR",
      description:
        "Link do karty dań, cennika albo katalogu jako kod QR. Szablony kawiarni i restauracji działają lokalnie w przeglądarce.",
      keywords: [
        "QR menu",
        "kod QR restauracja",
        "menu kawiarnia QR",
        "karta dań QR",
        "PureQR",
      ],
    },
  },
  "logo-qr": {
    uk: {
      title: "QR-код із логотипом бренду в центрі | PureQR",
      description:
        "Брендований QR із вашим PNG, JPG або SVG і високою корекцією помилок. Логотип накладається локально, файл не завантажується на сервер.",
      keywords: [
        "QR з логотипом",
        "брендований QR",
        "QR код логотип",
        "QR висока корекція",
        "PureQR",
      ],
    },
    en: {
      title: "QR Code with a Logo in the Center | PureQR",
      description:
        "Build a branded QR code from your PNG, JPG or SVG with high error correction. The logo is composited locally, never uploaded.",
      keywords: [
        "QR code with logo",
        "branded QR code",
        "logo in QR code",
        "high error correction QR",
        "PureQR",
      ],
    },
    de: {
      title: "QR-Code mit Logo in der Mitte | PureQR",
      description:
        "Marken-QR aus PNG, JPG oder SVG mit hoher Fehlerkorrektur. Das Logo wird lokal eingesetzt und nicht hochgeladen.",
      keywords: [
        "QR Code mit Logo",
        "gebrandeter QR Code",
        "Logo im QR",
        "PureQR",
      ],
    },
    fr: {
      title: "QR code avec logo de marque au centre | PureQR",
      description:
        "QR professionnel à partir d’un PNG, JPG ou SVG et d’une forte correction d’erreur. Le logo est ajouté localement, sans upload.",
      keywords: [
        "QR code avec logo",
        "QR code de marque",
        "logo au centre QR",
        "PureQR",
      ],
    },
    es: {
      title: "Código QR con el logo de la marca en el centro | PureQR",
      description:
        "QR de marca desde PNG, JPG o SVG con alta corrección de errores. El logo se compone en local y no se sube a ningún servidor.",
      keywords: [
        "QR con logo",
        "código QR de marca",
        "logo en el centro del QR",
        "PureQR",
      ],
    },
    pl: {
      title: "Kod QR z logo marki na środku | PureQR",
      description:
        "Firmowy kod QR z pliku PNG, JPG lub SVG i wysoką korekcją błędów. Logo nakładane jest lokalnie, bez wysyłania pliku.",
      keywords: [
        "kod QR z logo",
        "firmowy kod QR",
        "logo w kodzie QR",
        "PureQR",
      ],
    },
  },
};

export function getSeoCopy(page: SeoPageId, locale: Locale): SeoCopy {
  return COPY[page][locale];
}

export function isSeoPageId(value: string): value is SeoPageId {
  return value in COPY;
}
