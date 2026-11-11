import type { TOOL_IDS } from "@/i18n/config";
import type { EcosystemProjectId } from "@/lib/ecosystem";

export type ToolId = (typeof TOOL_IDS)[number];

export type Dictionary = {
  brand: { name: string; tagline: string };
  nav: {
    home: string;
    tools: string;
    selectLanguage: string;
    menuAria: string;
    menuClose: string;
  };
  ecosystem: {
    menuLabel: string;
    menuHint: string;
    active: string;
    comingSoon: string;
    items: Record<EcosystemProjectId, { name: string; tagline: string }>;
  };
  footer: {
    privacyBadge: string;
    tagline: string;
    rights: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    toolsAria: string;
    openTool: string;
    privacyHighlight: string;
    categories: Record<
      import("@/i18n/config").ToolCategoryId,
      { title: string; subtitle: string }
    >;
    expandCategory: string;
    collapseCategory: string;
    categoryToolsListAria: string;
  };
  common: {
    backHome: string;
    downloadPng: string;
    downloadSvg: string;
    copy: string;
    copied: string;
    generate: string;
    clear: string;
    clientSideNote: string;
    privacyReminder: string;
    fieldError: string;
    addRow: string;
    removeRow: string;
  };
  tools: Record<
    ToolId,
    {
      title: string;
      description: string;
      hint: string;
    }
  >;
  generator: {
    contentLabel: string;
    contentPlaceholder: string;
    fgColor: string;
    bgColor: string;
    size: string;
    preview: string;
    includeMargin: string;
    margin: string;
  };
  wifi: {
    ssid: string;
    password: string;
    encryption: string;
    hidden: string;
    wpa: string;
    wep: string;
    nopass: string;
  };
  vcard: {
    firstName: string;
    lastName: string;
    company: string;
    jobTitle: string;
    phone: string;
    email: string;
    website: string;
  };
  scanner: {
    dropTitle: string;
    dropActive: string;
    dropHint: string;
    result: string;
    noQr: string;
    scanning: string;
    openLink: string;
    exportResult: string;
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
  menu: {
    urlLabel: string;
    urlPlaceholder: string;
    templateLabel: string;
    templateCustom: string;
    templateCafe: string;
    templateRestaurant: string;
    templateCatalog: string;
    hintToggle: string;
    hintCaption: string;
    hintHelp: string;
    fgColor: string;
    bgColor: string;
    invalidUrl: string;
  };
  logoQr: {
    contentLabel: string;
    contentPlaceholder: string;
    logoUpload: string;
    logoUploadHint: string;
    logoScale: string;
    excavate: string;
    excavateHelp: string;
    fgColor: string;
    bgColor: string;
    errorLevel: string;
    removeLogo: string;
  };
  rewardedAd: {
    sponsored: string;
    title: string;
    message: string;
    watch: string;
    watching: string;
    download: string;
    waitHint: string;
    progress: (seconds: number) => string;
    thanks: string;
    close: string;
    slotLabel: string;
  };
};

export type LegacyToolId =
  | "generator"
  | "wifi"
  | "vcard"
  | "menu"
  | "logo-qr"
  | "scanner";

/** Locale packs in dictionaries.ts before catalog merge. */
export type RawLocaleDictionary = {
  brand: Dictionary["brand"];
  nav: Dictionary["nav"];
  ecosystem: Dictionary["ecosystem"];
  footer: Dictionary["footer"];
  home: Omit<
    Dictionary["home"],
    "categories" | "expandCategory" | "collapseCategory" | "categoryToolsListAria"
  >;
  common: Omit<Dictionary["common"], "fieldError" | "addRow" | "removeRow">;
  tools: Pick<Dictionary["tools"], LegacyToolId>;
  generator: Dictionary["generator"];
  wifi: Dictionary["wifi"];
  vcard: Dictionary["vcard"];
  menu: Dictionary["menu"];
  logoQr: Dictionary["logoQr"];
  scanner: Omit<
    Dictionary["scanner"],
    | "tabFile"
    | "tabCamera"
    | "cameraHint"
    | "cameraStart"
    | "cameraStop"
    | "cameraDenied"
  >;
  rewardedAd: Dictionary["rewardedAd"];
};
