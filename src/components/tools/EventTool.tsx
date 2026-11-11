"use client";

import { useMemo, useState } from "react";

import { FieldError } from "@/components/tools/FieldError";
import { QrCodePreview } from "@/components/tools/QrCodePreview";
import { QrStyleFields } from "@/components/tools/QrStyleFields";
import { useI18n } from "@/i18n/context";
import { buildEventPayload } from "@/lib/qr/formats";

function defaultStart() {
  const d = new Date();
  d.setMinutes(0, 0, 0);
  d.setHours(d.getHours() + 2);
  return d.toISOString().slice(0, 16);
}

export function EventTool() {
  const { t } = useI18n();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [start, setStart] = useState(defaultStart);
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const [dark, setDark] = useState("#042f2e");
  const [light, setLight] = useState("#ffffff");
  const [size, setSize] = useState(280);

  const payload = useMemo(
    () =>
      buildEventPayload({
        title,
        location,
        start,
        end,
        description,
      }),
    [title, location, start, end, description],
  );

  const error =
    (title.trim() || start) && !payload ? t.event.invalid : null;

  return (
    <div className="grid w-full min-w-0 gap-8 lg:grid-cols-2">
      <div className="min-w-0 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.event.title}</span>
          <input
            className="input-field"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.event.location}</span>
          <input
            className="input-field"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">{t.event.start}</span>
            <input
              className="input-field"
              type="datetime-local"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm text-gray-300">{t.event.end}</span>
            <input
              className="input-field"
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </label>
        </div>
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.event.description}</span>
          <textarea
            className="input-field min-h-[88px] resize-y"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <FieldError message={error} />
        <QrStyleFields
          dark={dark}
          light={light}
          size={size}
          onDarkChange={setDark}
          onLightChange={setLight}
          onSizeChange={setSize}
        />
      </div>
      <QrCodePreview
        toolId="event"
        value={payload}
        size={size}
        fgColor={dark}
        bgColor={light}
        includeMargin
        marginSize={2}
        fileBase="pureqr-event"
      />
    </div>
  );
}
