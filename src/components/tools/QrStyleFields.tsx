"use client";

import { useI18n } from "@/i18n/context";

type QrStyleFieldsProps = {
  dark: string;
  light: string;
  size: number;
  onDarkChange: (value: string) => void;
  onLightChange: (value: string) => void;
  onSizeChange: (value: number) => void;
};

export function QrStyleFields({
  dark,
  light,
  size,
  onDarkChange,
  onLightChange,
  onSizeChange,
}: QrStyleFieldsProps) {
  const { t } = useI18n();

  return (
  <>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.generator.fgColor}</span>
          <input
            type="color"
            className="h-10 w-full cursor-pointer rounded-md border border-white/10 bg-transparent"
            value={dark}
            onChange={(e) => onDarkChange(e.target.value)}
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm text-gray-300">{t.generator.bgColor}</span>
          <input
            type="color"
            className="h-10 w-full cursor-pointer rounded-md border border-white/10 bg-transparent"
            value={light}
            onChange={(e) => onLightChange(e.target.value)}
          />
        </label>
      </div>

      <label className="block space-y-1.5">
        <span className="text-sm text-gray-300">
          {t.generator.size}: {size}
        </span>
        <input
          type="range"
          min={180}
          max={480}
          step={20}
          value={size}
          onChange={(e) => onSizeChange(Number(e.target.value))}
          className="w-full accent-cyan-400"
        />
      </label>
  </>
  );
}
