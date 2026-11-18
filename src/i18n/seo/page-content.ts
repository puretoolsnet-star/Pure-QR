import { getDictionary } from "@/i18n/dictionaries";
import type { Locale, ToolId } from "@/i18n/locales";
import type { SeoPageId } from "@/i18n/seo/copy";

export type FaqItem = { question: string; answer: string };

export type SeoPageContent = {
  heading: string;
  intro: string;
  sections: { title: string; body: string }[];
  faq: FaqItem[];
};

export const FAQ_SECTION_LABEL: Record<Locale, string> = {
  uk: "Часті питання",
  en: "FAQ",
  de: "Häufige Fragen",
  fr: "Questions fréquentes",
  es: "Preguntas frecuentes",
  pl: "Najczęstsze pytania",
};

const SHARED_FAQ: Record<Locale, FaqItem[]> = {
  uk: [
    {
      question: "Чи передаються мої дані на сервер PureQR?",
      answer:
        "Ні. Генерація, стилізація та експорт QR відбуваються лише у вашому браузері. Паролі Wi‑Fi, контакти, текст і файли не завантажуються на наші сервери.",
    },
    {
      question: "Чи потрібна реєстрація або оплата?",
      answer:
        "Ні. PureQR безкоштовний для особистого та бізнес-використання. Достатньо відкрити потрібний інструмент і створити код.",
    },
    {
      question: "У яких форматах можна завантажити QR-код?",
      answer:
        "Більшість генераторів підтримують PNG для друку та соцмереж і SVG для масштабування без втрати якості. Сканер читає QR із зображення локально.",
    },
  ],
  en: [
    {
      question: "Does PureQR upload my data to a server?",
      answer:
        "No. Encoding, styling and export run entirely in your browser. Wi‑Fi passwords, contacts, text and files are never sent to our servers.",
    },
    {
      question: "Do I need an account or a subscription?",
      answer:
        "No. PureQR is free for personal and business use. Open the tool you need and generate a code instantly.",
    },
    {
      question: "Which download formats are supported?",
      answer:
        "Most generators offer PNG for print and social use and SVG for lossless scaling. The scanner decodes QR codes from images locally.",
    },
  ],
  de: [
    {
      question: "Werden meine Daten an einen Server gesendet?",
      answer:
        "Nein. Erstellung, Styling und Export laufen vollständig im Browser. WLAN-Passwörter, Kontakte, Text und Dateien werden nicht hochgeladen.",
    },
    {
      question: "Brauche ich ein Konto oder ein Abo?",
      answer:
        "Nein. PureQR ist kostenlos. Öffnen Sie das gewünschte Tool und erstellen Sie sofort einen Code.",
    },
    {
      question: "Welche Download-Formate gibt es?",
      answer:
        "Die meisten Generatoren bieten PNG für Druck und Social Media sowie SVG ohne Qualitätsverlust. Der Scanner liest QR-Codes lokal aus Bildern.",
    },
  ],
  fr: [
    {
      question: "Mes données sont-elles envoyées à un serveur ?",
      answer:
        "Non. L’encodage, le style et l’export se font entièrement dans le navigateur. Mots de passe Wi‑Fi, contacts, texte et fichiers ne sont pas envoyés.",
    },
    {
      question: "Faut-il un compte ou un abonnement ?",
      answer:
        "Non. PureQR est gratuit. Ouvrez l’outil souhaité et créez un code immédiatement.",
    },
    {
      question: "Quels formats de téléchargement sont proposés ?",
      answer:
        "La plupart des générateurs proposent le PNG pour l’impression et les réseaux sociaux, et le SVG pour une mise à l’échelle nette. Le scanner lit les images localement.",
    },
  ],
  es: [
    {
      question: "¿PureQR sube mis datos a un servidor?",
      answer:
        "No. La codificación, el estilo y la exportación ocurren solo en el navegador. Contraseñas Wi‑Fi, contactos, texto y archivos no se envían a nuestros servidores.",
    },
    {
      question: "¿Necesito cuenta o suscripción?",
      answer:
        "No. PureQR es gratuito. Abre la herramienta que necesites y genera el código al instante.",
    },
    {
      question: "¿Qué formatos de descarga hay?",
      answer:
        "La mayoría ofrece PNG para impresión y redes, y SVG sin pérdida de calidad. El escáner lee códigos QR desde imágenes en local.",
    },
  ],
  pl: [
    {
      question: "Czy PureQR wysyła moje dane na serwer?",
      answer:
        "Nie. Kodowanie, styl i eksport odbywają się wyłącznie w przeglądarce. Hasła Wi‑Fi, kontakty, tekst i pliki nie trafiają na nasze serwery.",
    },
    {
      question: "Czy potrzebuję konta lub subskrypcji?",
      answer:
        "Nie. PureQR jest darmowy. Otwórz właściwe narzędzie i wygeneruj kod od razu.",
    },
    {
      question: "Jakie formaty pobierania są dostępne?",
      answer:
        "Większość generatorów oferuje PNG do druku i social mediów oraz SVG bez utraty jakości. Skaner odczytuje QR ze zdjęć lokalnie.",
    },
  ],
};

const HOME_CONTENT: Record<Locale, SeoPageContent> = {
  uk: {
    heading: "Безкоштовний генератор QR-кодів у браузері",
    intro:
      "PureQR об’єднує створення, стилізацію та сканування QR в одному місці. Усі обчислення виконуються на вашому пристрої — ідеально для посилань, Wi‑Fi, візиток, меню та брендованих кодів.",
    sections: [
      {
        title: "Приватність без компромісів",
        body: "Паролі мереж, номери телефонів і візитки не проходять через наш бекенд. Ви контролюєте, що саме потрапляє в QR, і можете безпечно ділитися кодами з клієнтами чи гостями.",
      },
      {
        title: "Швидкий старт без встановлення",
        body: "Не потрібні застосунки чи акаунти: оберіть категорію інструментів на головній, налаштуйте кольори та розмір і завантажте PNG або SVG за кілька секунд.",
      },
      {
        title: "Інструменти для бізнесу та особистого use-case",
        body: "Від QR для меню ресторану та PDF до пакетного експорту та кодів з логотипом — кожна сторінка оптимізована під конкретне завдання та мову інтерфейсу.",
      },
    ],
    faq: [
      {
        question: "Як створити QR код онлайн безкоштовно?",
        answer:
          "Відкрийте PureQR на qr.kixt.net, оберіть інструмент (текст, Wi‑Fi, vCard тощо), введіть дані та завантажте готовий код. Усе відбувається локально у браузері.",
      },
      ...SHARED_FAQ.uk,
    ],
  },
  en: {
    heading: "Free QR code generator online",
    intro:
      "PureQR brings creation, styling and scanning together in one privacy-first toolkit. All processing stays on your device — perfect for links, Wi‑Fi, vCards, menus and branded codes.",
    sections: [
      {
        title: "Privacy by design",
        body: "Network passwords, phone numbers and contact cards never hit our backend. You choose what goes into the QR and can share codes confidently with customers or guests.",
      },
      {
        title: "No install, no sign-up",
        body: "Skip apps and accounts: pick a tool from the home catalog, tune colors and size, then download PNG or SVG in seconds — entirely in the browser.",
      },
      {
        title: "Built for business and personal use",
        body: "From restaurant menu QR codes and PDF links to bulk export and logo-centered designs, each page is tailored to a specific job and available in six languages.",
      },
    ],
    faq: [
      {
        question: "How do I create a QR code online for free?",
        answer:
          "Open PureQR at qr.kixt.net, pick a tool (text, Wi‑Fi, vCard, etc.), enter your content and download the result. Everything runs locally in your browser.",
      },
      ...SHARED_FAQ.en,
    ],
  },
  de: {
    heading: "Kostenloser QR-Code-Generator im Browser",
    intro:
      "PureQR vereint Erstellen, Gestalten und Scannen in einer datenschutzfreundlichen Suite. Alle Berechnungen bleiben auf Ihrem Gerät.",
    sections: [
      {
        title: "Datenschutz ohne Kompromisse",
        body: "WLAN-Passwörter und Kontakte passieren keinen Server. Sie entscheiden, was im QR-Code landet.",
      },
      {
        title: "Sofort startklar",
        body: "Keine App, kein Konto: Tool wählen, Farben anpassen, PNG oder SVG laden — alles im Browser.",
      },
      {
        title: "Für Business und privat",
        body: "Vom Speisekarten-QR bis zum Logo-QR finden Sie für jede Aufgabe ein passendes Tool in sechs Sprachen.",
      },
    ],
    faq: [
      {
        question: "Wie erstelle ich kostenlos online einen QR-Code?",
        answer:
          "Öffnen Sie qr.kixt.net, wählen Sie ein Tool, geben Sie Inhalte ein und laden Sie den Code herunter — vollständig lokal im Browser.",
      },
      ...SHARED_FAQ.de,
    ],
  },
  fr: {
    heading: "Générateur de QR code gratuit en ligne",
    intro:
      "PureQR regroupe création, personnalisation et lecture dans une boîte à outils respectueuse de la vie privée. Tout se fait sur votre appareil.",
    sections: [
      {
        title: "Confidentialité intégrée",
        body: "Mots de passe Wi‑Fi et contacts ne transitent pas par nos serveurs. Vous maîtrisez le contenu du QR.",
      },
      {
        title: "Sans installation",
        body: "Choisissez un outil, ajustez couleurs et taille, téléchargez en PNG ou SVG — directement dans le navigateur.",
      },
      {
        title: "Pour le pro et le perso",
        body: "Menus, PDF, logo au centre, export groupé : une page dédiée par besoin, en six langues.",
      },
    ],
    faq: [
      {
        question: "Comment créer un QR code gratuitement en ligne ?",
        answer:
          "Ouvrez qr.kixt.net, sélectionnez un outil, saisissez votre contenu et téléchargez — le tout localement dans le navigateur.",
      },
      ...SHARED_FAQ.fr,
    ],
  },
  es: {
    heading: "Generador de códigos QR gratis online",
    intro:
      "PureQR reúne creación, diseño y escaneo con privacidad primero. Todo el procesamiento permanece en tu dispositivo.",
    sections: [
      {
        title: "Privacidad real",
        body: "Las contraseñas Wi‑Fi y los contactos no pasan por nuestro servidor. Tú decides qué va dentro del QR.",
      },
      {
        title: "Sin apps ni registro",
        body: "Elige una herramienta, ajusta colores y tamaño y descarga PNG o SVG en segundos, en el navegador.",
      },
      {
        title: "Para negocio y uso personal",
        body: "Menús, PDF, logo central, exportación masiva: cada página cubre un caso concreto en seis idiomas.",
      },
    ],
    faq: [
      {
        question: "¿Cómo crear un código QR online gratis?",
        answer:
          "Entra en qr.kixt.net, elige una herramienta, introduce el contenido y descarga el código — todo en local en el navegador.",
      },
      ...SHARED_FAQ.es,
    ],
  },
  pl: {
    heading: "Darmowy generator kodów QR online",
    intro:
      "PureQR łączy tworzenie, styl i skanowanie w jednym zestawie z naciskiem na prywatność. Obliczenia pozostają na Twoim urządzeniu.",
    sections: [
      {
        title: "Prywatność bez ustępstw",
        body: "Hasła Wi‑Fi i kontakty nie trafiają na nasz backend. Sam decydujesz, co trafia do kodu QR.",
      },
      {
        title: "Bez instalacji i konta",
        body: "Wybierz narzędzie, ustaw kolory i rozmiar, pobierz PNG lub SVG — wyłącznie w przeglądarce.",
      },
      {
        title: "Dla firm i użytku prywatnego",
        body: "Od menu restauracji po kod z logo i eksport zbiorczy — osobna strona pod każde zadanie, w sześciu językach.",
      },
    ],
    faq: [
      {
        question: "Jak za darmo stworzyć kod QR online?",
        answer:
          "Wejdź na qr.kixt.net, wybierz narzędzie, wpisz treść i pobierz wynik — lokalnie w przeglądarce.",
      },
      ...SHARED_FAQ.pl,
    ],
  },
};

const PRIVACY_SECTION: Record<
  Locale,
  { title: string; body: (toolTitle: string) => string }
> = {
  uk: {
    title: "Локальна обробка в браузері",
    body: (tool) =>
      `Інструмент «${tool}» формує QR-код на вашому пристрої. Дані не передаються на сервер, тому ви можете безпечно кодувати конфіденційну інформацію.`,
  },
  en: {
    title: "Processed locally in your browser",
    body: (tool) =>
      `The ${tool} tool builds the QR payload on your device. Nothing is uploaded, so you can encode sensitive details with confidence.`,
  },
  de: {
    title: "Lokal im Browser verarbeitet",
    body: (tool) =>
      `Das Tool „${tool}“ erzeugt den QR-Code auf Ihrem Gerät. Es erfolgt kein Upload — auch für sensible Inhalte geeignet.`,
  },
  fr: {
    title: "Traitement local dans le navigateur",
    body: (tool) =>
      `L’outil « ${tool} » compose le QR sur votre appareil. Aucun envoi serveur : idéal pour des données sensibles.`,
  },
  es: {
    title: "Procesado en local en el navegador",
    body: (tool) =>
      `La herramienta ${tool} genera el QR en tu dispositivo. No hay subida al servidor, apto para datos sensibles.`,
  },
  pl: {
    title: "Przetwarzanie lokalne w przeglądarce",
    body: (tool) =>
      `Narzędzie „${tool}” tworzy kod QR na Twoim urządzeniu. Brak wysyłki na serwer — także dla danych wrażliwych.`,
  },
};

const USE_SECTION: Record<
  Locale,
  { title: string; body: (description: string, hint?: string) => string }
> = {
  uk: {
    title: "Навіщо цей QR-інструмент",
    body: (description, hint) =>
      [description, hint].filter(Boolean).join(" "),
  },
  en: {
    title: "Why use this QR tool",
    body: (description, hint) =>
      [description, hint].filter(Boolean).join(" "),
  },
  de: {
    title: "Wofür dieses QR-Tool",
    body: (description, hint) =>
      [description, hint].filter(Boolean).join(" "),
  },
  fr: {
    title: "À quoi sert cet outil QR",
    body: (description, hint) =>
      [description, hint].filter(Boolean).join(" "),
  },
  es: {
    title: "Para qué sirve esta herramienta",
    body: (description, hint) =>
      [description, hint].filter(Boolean).join(" "),
  },
  pl: {
    title: "Do czego służy to narzędzie",
    body: (description, hint) =>
      [description, hint].filter(Boolean).join(" "),
  },
};

const TOOL_FAQ_Q: Record<
  Locale,
  (toolTitle: string, description: string) => FaqItem
> = {
  uk: (title, description) => ({
    question: `Як працює інструмент «${title}»?`,
    answer: description,
  }),
  en: (title, description) => ({
    question: `How does the ${title} tool work?`,
    answer: description,
  }),
  de: (title, description) => ({
    question: `Wie funktioniert das Tool „${title}"?`,
    answer: description,
  }),
  fr: (title, description) => ({
    question: `Comment fonctionne l’outil « ${title} » ?`,
    answer: description,
  }),
  es: (title, description) => ({
    question: `¿Cómo funciona la herramienta ${title}?`,
    answer: description,
  }),
  pl: (title, description) => ({
    question: `Jak działa narzędzie „${title}"?`,
    answer: description,
  }),
};

/** Richer copy for high-traffic tool pages. */
const TOOL_CONTENT_OVERRIDES: Partial<
  Record<ToolId, Partial<Record<Locale, Pick<SeoPageContent, "heading" | "intro" | "sections">>>>
> = {
  generator: {
    uk: {
      heading: "Створити QR код з тексту або посилання",
      intro:
        "Налаштуйте кольори модулів, фон, розмір і тиху зону (margin), потім завантажте готовий PNG або SVG — без відправки вмісту на сервер.",
      sections: [
        {
          title: "Кольорові QR для бренду",
          body: "Підберіть контрастні кольори під фірмовий стиль: темні модулі на світлому тлі зазвичай скануються найкраще.",
        },
        {
          title: PRIVACY_SECTION.uk.title,
          body: PRIVACY_SECTION.uk.body("Генератор QR"),
        },
      ],
    },
    en: {
      heading: "Create a QR code from text or URL",
      intro:
        "Customize module colors, background, size and quiet zone, then download PNG or SVG — your content never leaves the browser.",
      sections: [
        {
          title: "Colored QR styles for your brand",
          body: "Pick high-contrast colors that match your identity. Dark modules on a light background typically scan best.",
        },
        {
          title: PRIVACY_SECTION.en.title,
          body: PRIVACY_SECTION.en.body("Text & URL QR Generator"),
        },
      ],
    },
  },
  wifi: {
    en: {
      heading: "Wi‑Fi QR code with password kept local",
      intro:
        "Encode SSID, security type and password into a scannable Wi‑Fi QR guests can use to join instantly — credentials stay on your device.",
      sections: [
        {
          title: "Share guest Wi‑Fi safely",
          body: "Print the code for a lobby or event instead of spelling out passwords. WPA/WEP and hidden networks are supported.",
        },
        {
          title: PRIVACY_SECTION.en.title,
          body: PRIVACY_SECTION.en.body("Wi‑Fi QR"),
        },
      ],
    },
    uk: {
      heading: "QR-код для Wi‑Fi без передачі пароля на сервер",
      intro:
        "Закодуйте SSID, тип захисту та пароль у QR, який гості відсканують для миттєвого підключення — дані лишаються на пристрої.",
      sections: [
        {
          title: "Зручний доступ для гостей",
          body: "Роздрукуйте код у залі або на заході замість диктування пароля. Підтримуються WPA/WEP і приховані мережі.",
        },
        {
          title: PRIVACY_SECTION.uk.title,
          body: PRIVACY_SECTION.uk.body("Wi‑Fi QR"),
        },
      ],
    },
  },
};

function buildToolContent(toolId: ToolId, locale: Locale): SeoPageContent {
  const d = getDictionary(locale);
  const tool = d.tools[toolId];
  const override = TOOL_CONTENT_OVERRIDES[toolId]?.[locale];

  const sections =
    override?.sections ??
    [
      {
        title: USE_SECTION[locale].title,
        body: USE_SECTION[locale].body(tool.description, tool.hint),
      },
      {
        title: PRIVACY_SECTION[locale].title,
        body: PRIVACY_SECTION[locale].body(tool.title),
      },
    ];

  const toolFaq = TOOL_FAQ_Q[locale](
    tool.title,
    [tool.description, tool.hint].filter(Boolean).join(" "),
  );

  return {
    heading: override?.heading ?? tool.title,
    intro: override?.intro ?? tool.description,
    sections,
    faq: [toolFaq, ...SHARED_FAQ[locale]],
  };
}

export function getSeoPageContent(
  page: SeoPageId,
  locale: Locale,
): SeoPageContent {
  if (page === "home") return HOME_CONTENT[locale];
  return buildToolContent(page as ToolId, locale);
}