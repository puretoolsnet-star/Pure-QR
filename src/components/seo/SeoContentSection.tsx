import { JsonLd } from "@/components/seo/JsonLd";
import type { Locale, ToolId } from "@/i18n/locales";
import type { SeoPageId } from "@/i18n/seo/copy";
import {
  FAQ_SECTION_LABEL,
  getSeoPageContent,
} from "@/i18n/seo/page-content";
import { localizedPath } from "@/lib/i18n/routing";
import { faqPageJsonLd } from "@/lib/seo/structured-data";
import { canonicalAbsoluteUrl } from "@/lib/seo/site";

type SeoContentSectionProps = {
  page: SeoPageId;
  locale: Locale;
};

function pagePath(page: SeoPageId): string {
  if (page === "home") return "/";
  return `/tools/${page as ToolId}`;
}

export function SeoContentSection({ page, locale }: SeoContentSectionProps) {
  const content = getSeoPageContent(page, locale);
  const pageUrl = canonicalAbsoluteUrl(localizedPath(locale, pagePath(page)));

  return (
    <section
      className="mt-10 space-y-8 border-t border-white/10 pt-10"
      aria-labelledby="seo-content-heading"
    >
      <JsonLd data={faqPageJsonLd(content.faq, pageUrl)} />

      <div className="space-y-3">
        <h2
          id="seo-content-heading"
          className="text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl"
        >
          {content.heading}
        </h2>
        <p className="max-w-3xl text-pretty text-sm leading-relaxed text-gray-300 sm:text-base">
          {content.intro}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.sections.map((block) => (
          <article
            key={block.title}
            className="glass-card rounded-2xl border border-white/10 p-5"
          >
            <h3 className="text-base font-semibold text-cyan-100">{block.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {block.body}
            </p>
          </article>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">
          {FAQ_SECTION_LABEL[locale]}
        </h3>
        <div className="space-y-2">
          {content.faq.map((item) => (
            <details
              key={item.question}
              className="group glass-card rounded-xl border border-white/10 px-4 py-3 open:border-cyan-500/25 open:bg-cyan-500/5"
            >
              <summary className="cursor-pointer list-none text-sm font-medium text-gray-100 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  {item.question}
                  <span
                    className="shrink-0 text-cyan-300/80 transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}