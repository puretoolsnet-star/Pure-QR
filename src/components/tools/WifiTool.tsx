"use client";

import { useMemo, useState } from "react";

import { QrCodePreview } from "@/components/tools/QrCodePreview";
import { useI18n } from "@/i18n/context";
import { buildWifiPayload, type WifiEncryption } from "@/lib/qr/formats";

export function WifiTool() {
  const { t } = useI18n();
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [encryption, setEncryption] = useState<WifiEncryption>("WPA");
  const [hidden, setHidden] = useState(false);

  const payload = useMemo(() => {
    if (!ssid.trim()) return "";
    return buildWifiPayload({
      ssid,
      password: encryption === "nopass" ? "" : password,
      encryption,
      hidden,
    });
  }, [ssid, password, encryption, hidden]);

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.wifi.ssid}</span>
          <input
            className="input-field"
            value={ssid}
            onChange={(e) => setSsid(e.target.value)}
            autoComplete="off"
          />
        </label>

        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.wifi.encryption}</span>
          <select
            className="input-field"
            value={encryption}
            onChange={(e) => setEncryption(e.target.value as WifiEncryption)}
          >
            <option value="WPA">{t.wifi.wpa}</option>
            <option value="WEP">{t.wifi.wep}</option>
            <option value="nopass">{t.wifi.nopass}</option>
          </select>
        </label>

        {encryption !== "nopass" ? (
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">{t.wifi.password}</span>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </label>
        ) : null}

        <label className="flex items-center gap-2 text-sm text-gray-300">
          <input
            type="checkbox"
            checked={hidden}
            onChange={(e) => setHidden(e.target.checked)}
            className="h-4 w-4 rounded border-white/20 accent-cyan-400"
          />
          {t.wifi.hidden}
        </label>
      </div>

      <QrCodePreview
        toolId="wifi"
        value={payload}
        size={320}
        fgColor="#042f2e"
        bgColor="#ffffff"
        includeMargin
        marginSize={2}
        fileBase="pureqr-wifi"
      />
    </div>
  );
}
