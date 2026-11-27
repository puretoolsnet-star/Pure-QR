import { TOOL_IDS } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale, ToolId } from "@/i18n/locales";

export type SeoPageId = "home" | ToolId;

export type SeoCopy = {
  title: string;
  description: string;
  keywords: string[];
};

const COPY: Partial<Record<SeoPageId, Record<Locale, SeoCopy>>> = {
  home: {
    uk: {
      title: "Створити QR код онлайн безкоштовно — PureQR",
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
      title: "Free QR Code Generator Online — PureQR",
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
      title: "QR-Code Generator online kostenlos — PureQR",
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
      title: "Générateur QR code gratuit en ligne — PureQR",
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
      title: "Generador de códigos QR gratis online — PureQR",
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
      title: "Darmowy generator kodów QR online — PureQR",
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
  email: {
    uk: {
      title: "QR-код для email — готова чернетка листа | PureQR",
      description:
        "Створіть QR, що відкриває чернетку листа з адресою, темою та текстом. Усі поля збираються лише у браузері.",
      keywords: ["QR email", "QR код для листа", "mailto QR", "PureQR"],
    },
    en: {
      title: "Email QR Code Generator — Pre-filled Mailto | PureQR",
      description:
        "Build a QR that opens an email draft with address, subject and body filled in. Composed locally in your browser.",
      keywords: ["email QR code", "mailto QR", "QR for email", "PureQR"],
    },
    de: {
      title: "E-Mail-QR-Code mit vorausgefüllter Nachricht | PureQR",
      description:
        "QR-Code, der einen E-Mail-Entwurf mit Empfänger, Betreff und Text öffnet — lokal im Browser erstellt.",
      keywords: ["E-Mail QR Code", "mailto QR", "PureQR"],
    },
    fr: {
      title: "QR code e-mail — brouillon prérempli | PureQR",
      description:
        "Créez un QR qui ouvre un brouillon avec destinataire, objet et message. Composition locale dans le navigateur.",
      keywords: ["QR code e-mail", "mailto QR", "PureQR"],
    },
    es: {
      title: "Código QR para email — borrador preparado | PureQR",
      description:
        "Genera un QR que abre un borrador con destinatario, asunto y cuerpo. Todo se compone en tu navegador.",
      keywords: ["QR email", "mailto QR", "PureQR"],
    },
    pl: {
      title: "Kod QR do e-mail — wstępnie wypełniona wiadomość | PureQR",
      description:
        "Kod QR otwierający szkic wiadomości z adresem, tematem i treścią — tworzony lokalnie w przeglądarce.",
      keywords: ["kod QR e-mail", "mailto QR", "PureQR"],
    },
  },
  sms: {
    uk: {
      title: "QR-код для SMS з номером і текстом | PureQR",
      description:
        "Закодуйте номер телефону та повідомлення SMS у QR для швидкого набору після сканування. Дані не відправляються на сервер.",
      keywords: ["QR SMS", "QR код SMS", "SMS QR generator", "PureQR"],
    },
    en: {
      title: "SMS QR Code Generator | PureQR",
      description:
        "Encode a phone number and SMS body into a scannable QR. Built entirely in your browser.",
      keywords: ["SMS QR code", "text message QR", "PureQR"],
    },
    de: {
      title: "SMS-QR-Code erstellen | PureQR",
      description:
        "Telefonnummer und SMS-Text als QR-Code — Erstellung vollständig lokal im Browser.",
      keywords: ["SMS QR Code", "QR SMS", "PureQR"],
    },
    fr: {
      title: "QR code SMS — numéro et message | PureQR",
      description:
        "Encodez un numéro et un texte SMS dans un QR scannable, créé localement dans le navigateur.",
      keywords: ["QR code SMS", "SMS QR", "PureQR"],
    },
    es: {
      title: "Código QR SMS con número y texto | PureQR",
      description:
        "Codifica teléfono y mensaje SMS en un QR. Generación local en el navegador.",
      keywords: ["QR SMS", "código QR mensaje", "PureQR"],
    },
    pl: {
      title: "Kod QR SMS — numer i treść | PureQR",
      description:
        "Zakoduj numer i treść SMS w kodzie QR. Tworzenie wyłącznie w przeglądarce.",
      keywords: ["kod QR SMS", "SMS QR", "PureQR"],
    },
  },
  phone: {
    uk: {
      title: "QR-код для дзвінка — номер телефону | PureQR",
      description:
        "QR формату tel: для миттєвого набору номера після сканування. Номер залишається на пристрої під час генерації.",
      keywords: ["QR телефон", "QR дзвінок", "tel QR", "PureQR"],
    },
    en: {
      title: "Phone Call QR Code — Tel Link | PureQR",
      description:
        "Create a tel: QR so scanners can dial your number instantly. Encoded locally in the browser.",
      keywords: ["phone QR code", "call QR", "tel QR", "PureQR"],
    },
    de: {
      title: "Anruf-QR-Code mit Telefonnummer | PureQR",
      description:
        "tel:-QR für sofortiges Wählen nach dem Scan. Lokal im Browser erzeugt.",
      keywords: ["Telefon QR Code", "Anruf QR", "PureQR"],
    },
    fr: {
      title: "QR code appel téléphonique | PureQR",
      description:
        "QR tel: pour composer un numéro en un scan. Créé localement dans le navigateur.",
      keywords: ["QR code téléphone", "appel QR", "PureQR"],
    },
    es: {
      title: "Código QR para llamada telefónica | PureQR",
      description:
        "QR tel: para marcar al instante tras escanear. Generado en local en el navegador.",
      keywords: ["QR teléfono", "llamada QR", "PureQR"],
    },
    pl: {
      title: "Kod QR do połączenia telefonicznego | PureQR",
      description:
        "QR tel: umożliwiający szybkie wybieranie numeru. Kodowanie lokalne w przeglądarce.",
      keywords: ["kod QR telefon", "połączenie QR", "PureQR"],
    },
  },
  location: {
    uk: {
      title: "QR-код геолокації — координати на карті | PureQR",
      description:
        "Передайте широту, довготу та назву місця в QR для навігації. Координати кодуєте лише у браузері.",
      keywords: ["QR геолокація", "QR координати", "карта QR", "PureQR"],
    },
    en: {
      title: "Location QR Code — Map Coordinates | PureQR",
      description:
        "Share latitude, longitude and a place label in a geo QR for navigation. Encoded only in your browser.",
      keywords: ["location QR code", "GPS QR", "map QR", "PureQR"],
    },
    de: {
      title: "Standort-QR-Code mit Koordinaten | PureQR",
      description:
        "Breiten- und Längengrad plus Ortsname als Navigations-QR — lokal im Browser.",
      keywords: ["Standort QR Code", "GPS QR", "PureQR"],
    },
    fr: {
      title: "QR code de localisation GPS | PureQR",
      description:
        "Partagez latitude, longitude et libellé du lieu dans un QR géo, créé dans le navigateur.",
      keywords: ["QR code localisation", "GPS QR", "PureQR"],
    },
    es: {
      title: "Código QR de ubicación y coordenadas | PureQR",
      description:
        "Comparte latitud, longitud y nombre del lugar en un QR geo. Codificación local en el navegador.",
      keywords: ["QR ubicación", "GPS QR", "PureQR"],
    },
    pl: {
      title: "Kod QR lokalizacji — współrzędne mapy | PureQR",
      description:
        "Szerokość, długość geograficzna i etykieta miejsca w kodzie QR do nawigacji — lokalnie w przeglądarce.",
      keywords: ["kod QR lokalizacja", "GPS QR", "PureQR"],
    },
  },
  socials: {
    uk: {
      title: "QR-код для соцмереж — профілі та сторінки | PureQR",
      description:
        "Один QR на посилання Instagram, TikTok, YouTube, Facebook та інші. Усі URL залишаються у вашій сесії браузера.",
      keywords: ["QR соцмережі", "QR Instagram", "QR TikTok", "PureQR"],
    },
    en: {
      title: "Social Media QR Code Generator | PureQR",
      description:
        "Point a QR to Instagram, TikTok, YouTube, Facebook and more. Links are composed locally in the browser.",
      keywords: ["social media QR", "Instagram QR code", "PureQR"],
    },
    de: {
      title: "Social-Media-QR-Code | PureQR",
      description:
        "QR zu Instagram, TikTok, YouTube und weiteren Profilen — lokal im Browser erstellt.",
      keywords: ["Social Media QR", "Instagram QR", "PureQR"],
    },
    fr: {
      title: "QR code réseaux sociaux | PureQR",
      description:
        "Liez Instagram, TikTok, YouTube et d’autres profils dans un QR créé localement.",
      keywords: ["QR code réseaux sociaux", "Instagram QR", "PureQR"],
    },
    es: {
      title: "Código QR para redes sociales | PureQR",
      description:
        "Apunta un QR a Instagram, TikTok, YouTube y más perfiles. Enlaces generados en el navegador.",
      keywords: ["QR redes sociales", "Instagram QR", "PureQR"],
    },
    pl: {
      title: "Kod QR mediów społecznościowych | PureQR",
      description:
        "QR do Instagrama, TikToka, YouTube i innych profili — tworzony lokalnie w przeglądarce.",
      keywords: ["QR social media", "Instagram QR", "PureQR"],
    },
  },
  "multi-link": {
    uk: {
      title: "QR з кількома посиланнями — link hub | PureQR",
      description:
        "Зберіть декілька URL в одному QR для bio-сторінок і кампаній. Список посилань формується локально.",
      keywords: ["QR кілька посилань", "link in bio QR", "multi URL QR", "PureQR"],
    },
    en: {
      title: "Multi-Link QR Code — Link Hub | PureQR",
      description:
        "Bundle several URLs into one QR for bio pages and campaigns. Your link list stays in the browser.",
      keywords: ["multi link QR", "link in bio QR", "PureQR"],
    },
    de: {
      title: "Multi-Link-QR-Code — Link-Sammlung | PureQR",
      description:
        "Mehrere URLs in einem QR für Bio-Seiten und Kampagnen — lokal zusammengestellt.",
      keywords: ["Multi Link QR", "Link Hub QR", "PureQR"],
    },
    fr: {
      title: "QR code multi-liens — page bio | PureQR",
      description:
        "Regroupez plusieurs URL dans un QR pour bio et campagnes, créé localement.",
      keywords: ["QR multi-liens", "link in bio", "PureQR"],
    },
    es: {
      title: "Código QR con varios enlaces | PureQR",
      description:
        "Agrupa varias URL en un QR para bio y campañas. Lista generada en el navegador.",
      keywords: ["QR varios enlaces", "link in bio", "PureQR"],
    },
    pl: {
      title: "Kod QR z wieloma linkami | PureQR",
      description:
        "Połącz kilka adresów URL w jednym kodzie QR pod bio i kampanie — lokalnie w przeglądarce.",
      keywords: ["wiele linków QR", "link in bio", "PureQR"],
    },
  },
  event: {
    uk: {
      title: "QR-код події — календар iCal / vEvent | PureQR",
      description:
        "Додайте в QR дату, час, місце та назву події для імпорту в календар. vEvent збирається лише у браузері.",
      keywords: ["QR подія", "календар QR", "vEvent QR", "PureQR"],
    },
    en: {
      title: "Event QR Code — Calendar vEvent | PureQR",
      description:
        "Encode event title, date, time and location for calendar import. vEvent payload built locally.",
      keywords: ["event QR code", "calendar QR", "vEvent", "PureQR"],
    },
    de: {
      title: "Event-QR-Code für den Kalender | PureQR",
      description:
        "Titel, Datum, Uhrzeit und Ort als vEvent-QR — lokal im Browser erstellt.",
      keywords: ["Event QR Code", "Kalender QR", "PureQR"],
    },
    fr: {
      title: "QR code événement — calendrier | PureQR",
      description:
        "Encodez titre, date, heure et lieu pour l’import calendrier. vEvent composé localement.",
      keywords: ["QR code événement", "calendrier QR", "PureQR"],
    },
    es: {
      title: "Código QR de evento para calendario | PureQR",
      description:
        "Codifica título, fecha, hora y lugar para importar al calendario. vEvent generado en local.",
      keywords: ["QR evento", "calendario QR", "PureQR"],
    },
    pl: {
      title: "Kod QR wydarzenia — kalendarz | PureQR",
      description:
        "Tytuł, data, godzina i miejsce w kodzie QR vEvent — tworzone lokalnie w przeglądarce.",
      keywords: ["kod QR wydarzenie", "kalendarz QR", "PureQR"],
    },
  },
  "pdf-qr": {
    uk: {
      title: "QR-код на PDF-файл або документ | PureQR",
      description:
        "Вкажіть посилання на PDF у QR для меню, інструкцій або каталогів. URL не передається на сервер PureQR.",
      keywords: ["QR PDF", "QR документ", "посилання на PDF QR", "PureQR"],
    },
    en: {
      title: "PDF QR Code — Link to a Document | PureQR",
      description:
        "Turn a PDF URL into a QR for menus, manuals or catalogs. The link is encoded only in your browser.",
      keywords: ["PDF QR code", "document QR", "PureQR"],
    },
    de: {
      title: "PDF-QR-Code — Link zum Dokument | PureQR",
      description:
        "PDF-URL als QR für Menüs und Handbücher — lokal im Browser kodiert.",
      keywords: ["PDF QR Code", "Dokument QR", "PureQR"],
    },
    fr: {
      title: "QR code PDF — lien vers un document | PureQR",
      description:
        "Transformez une URL PDF en QR pour menus et notices, encodage local.",
      keywords: ["QR code PDF", "document QR", "PureQR"],
    },
    es: {
      title: "Código QR para enlace PDF | PureQR",
      description:
        "Convierte una URL de PDF en QR para menús y catálogos. Codificación en el navegador.",
      keywords: ["QR PDF", "documento QR", "PureQR"],
    },
    pl: {
      title: "Kod QR do pliku PDF | PureQR",
      description:
        "URL do PDF jako kod QR pod menu i instrukcje — kodowanie lokalne w przeglądarce.",
      keywords: ["kod QR PDF", "dokument QR", "PureQR"],
    },
  },
  "app-store": {
    uk: {
      title: "QR-код App Store / Google Play | PureQR",
      description:
        "Один QR веде на сторінку застосунку в Apple App Store або Google Play. Посилання збирається локально.",
      keywords: ["QR App Store", "QR Google Play", "QR додаток", "PureQR"],
    },
    en: {
      title: "App Store & Google Play QR Code | PureQR",
      description:
        "Send users to your iOS or Android app listing with one QR. Store URLs encoded locally.",
      keywords: ["app store QR code", "google play QR", "PureQR"],
    },
    de: {
      title: "App Store & Google Play QR-Code | PureQR",
      description:
        "Ein QR führt zur App im Apple App Store oder Google Play — lokal erstellt.",
      keywords: ["App Store QR", "Google Play QR", "PureQR"],
    },
    fr: {
      title: "QR code App Store et Google Play | PureQR",
      description:
        "Un QR vers votre app iOS ou Android. Liens magasin encodés localement.",
      keywords: ["QR App Store", "QR Google Play", "PureQR"],
    },
    es: {
      title: "Código QR App Store y Google Play | PureQR",
      description:
        "Dirige a tu app en iOS o Android con un QR. URLs de tienda codificadas en local.",
      keywords: ["QR App Store", "QR Google Play", "PureQR"],
    },
    pl: {
      title: "Kod QR App Store i Google Play | PureQR",
      description:
        "Jeden kod QR do aplikacji w Apple App Store lub Google Play — lokalnie w przeglądarce.",
      keywords: ["QR App Store", "QR Google Play", "PureQR"],
    },
  },
  "bulk-qr": {
    uk: {
      title: "Масове створення QR-кодів з CSV | PureQR",
      description:
        "Імпортуйте список значень і експортуйте пакет PNG або SVG у браузері. Файл CSV не завантажується на сервер.",
      keywords: ["масовий QR", "QR з CSV", "пакетний QR", "PureQR"],
    },
    en: {
      title: "Bulk QR Code Generator from CSV | PureQR",
      description:
        "Import a list and export many PNG or SVG codes in the browser. Your CSV never leaves your device.",
      keywords: ["bulk QR code", "CSV QR generator", "PureQR"],
    },
    de: {
      title: "Massen-QR-Codes aus CSV | PureQR",
      description:
        "Liste importieren und viele PNG/SVG-QR lokal exportieren. CSV bleibt auf dem Gerät.",
      keywords: ["Massen QR Code", "CSV QR", "PureQR"],
    },
    fr: {
      title: "QR codes en masse depuis CSV | PureQR",
      description:
        "Importez une liste et exportez des PNG/SVG dans le navigateur. Le CSV ne quitte pas l’appareil.",
      keywords: ["QR code en masse", "CSV QR", "PureQR"],
    },
    es: {
      title: "Códigos QR masivos desde CSV | PureQR",
      description:
        "Importa una lista y exporta muchos PNG/SVG en el navegador. El CSV no sale del dispositivo.",
      keywords: ["QR masivo", "CSV QR", "PureQR"],
    },
    pl: {
      title: "Masowe kody QR z pliku CSV | PureQR",
      description:
        "Zaimportuj listę i wyeksportuj wiele kodów PNG/SVG w przeglądarce. CSV nie trafia na serwer.",
      keywords: ["masowy kod QR", "CSV QR", "PureQR"],
    },
  },
  "pdf-print": {
    uk: {
      title: "Друк аркуша з кількома QR-кодами | PureQR",
      description:
        "Розмістіть сітку QR на сторінці PDF для друку — мітки, відступи та експорт виконуються локально у браузері.",
      keywords: ["друк QR", "QR сітка PDF", "аркуш QR", "PureQR"],
    },
    en: {
      title: "Printable QR Code Sheet — PDF Layout | PureQR",
      description:
        "Lay out a grid of QR codes on a print-ready PDF page. Labels and export run locally in the browser.",
      keywords: ["print QR codes", "QR sheet PDF", "PureQR"],
    },
    de: {
      title: "QR-Code-Druckbogen als PDF | PureQR",
      description:
        "Raster aus QR-Codes für den Druck — Beschriftung und Export lokal im Browser.",
      keywords: ["QR drucken", "QR Bogen PDF", "PureQR"],
    },
    fr: {
      title: "Planche de QR codes à imprimer — PDF | PureQR",
      description:
        "Disposez une grille de QR pour l’impression. Export PDF local dans le navigateur.",
      keywords: ["imprimer QR codes", "planche QR", "PureQR"],
    },
    es: {
      title: "Hoja imprimible de códigos QR — PDF | PureQR",
      description:
        "Organiza una cuadrícula de QR para imprimir. Exportación PDF local en el navegador.",
      keywords: ["imprimir QR", "hoja QR PDF", "PureQR"],
    },
    pl: {
      title: "Arkusz kodów QR do druku — PDF | PureQR",
      description:
        "Ułóż siatkę kodów QR do druku. Eksport PDF lokalnie w przeglądarce.",
      keywords: ["druk kodów QR", "arkusz QR PDF", "PureQR"],
    },
  },
};

const BRAND_TITLE_SUFFIX = /\s*(?:\||—)\s*PureQR\s*$/u;

/** Visible H1 aligned with metadata title, without the PureQR suffix. */
export function getSeoH1(page: SeoPageId, locale: Locale): string {
  return getSeoCopy(page, locale).title.replace(BRAND_TITLE_SUFFIX, "").trim();
}

export function getSeoCopy(page: SeoPageId, locale: Locale): SeoCopy {
  const explicit = COPY[page as keyof typeof COPY]?.[locale];
  if (explicit) return explicit;
  if (page === "home") return COPY.home![locale];
  const tool = getDictionary(locale).tools[page as ToolId];
  return {
    title: `${tool.title} | PureQR`,
    description: tool.hint ? `${tool.description} ${tool.hint}` : tool.description,
    keywords: [tool.title, "PureQR", "QR code"],
  };
}

export function isSeoPageId(value: string): value is SeoPageId {
  return value === "home" || (TOOL_IDS as readonly string[]).includes(value);
}
