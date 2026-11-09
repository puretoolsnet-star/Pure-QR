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
