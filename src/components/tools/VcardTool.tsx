"use client";

import { useMemo, useState } from "react";

import { QrCodePreview } from "@/components/tools/QrCodePreview";
import { useI18n } from "@/i18n/context";
import { buildVCardPayload } from "@/lib/qr/formats";

export function VcardTool() {
  const { t } = useI18n();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const payload = useMemo(() => {
    const hasContent =
      firstName.trim() ||
      lastName.trim() ||
      company.trim() ||
      jobTitle.trim() ||
      phone.trim() ||
      email.trim() ||
      website.trim();

    if (!hasContent) return "";

    return buildVCardPayload({
      firstName,
      lastName,
      company,
      jobTitle,
      phone,
      email,
      website,
    });
  }, [firstName, lastName, company, jobTitle, phone, email, website]);

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <label className="block min-w-0 space-y-1.5">
          <span className="text-sm text-gray-300">{t.vcard.firstName}</span>
          <input
            className="input-field"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className="block min-w-0 space-y-1.5">
          <span className="text-sm text-gray-300">{t.vcard.lastName}</span>
          <input
            className="input-field"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label className="block min-w-0 space-y-1.5 md:col-span-2">
          <span className="text-sm text-gray-300">{t.vcard.company}</span>
          <input
            className="input-field"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
        <label className="block min-w-0 space-y-1.5 md:col-span-2">
          <span className="text-sm text-gray-300">{t.vcard.jobTitle}</span>
          <input
            className="input-field"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.vcard.phone}</span>
          <input
            className="input-field"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.vcard.email}</span>
          <input
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </label>
        <label className="block min-w-0 space-y-1.5 md:col-span-2">
          <span className="text-sm text-gray-300">{t.vcard.website}</span>
          <input
            className="input-field"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            type="url"
            placeholder="https://"
          />
        </label>
      </div>

      <QrCodePreview
        toolId="vcard"
        value={payload}
        size={320}
        fgColor="#042f2e"
        bgColor="#ffffff"
        includeMargin
        marginSize={2}
        fileBase="pureqr-vcard"
      />
    </div>
  );
}
