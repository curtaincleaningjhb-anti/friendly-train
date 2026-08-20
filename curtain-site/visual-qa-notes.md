# Visual QA Notes

Reviewed on 18 August 2026 against the local Next.js production server at desktop viewport.

## Homepage

The hero, textile image, dark overlay, gold calls to action, service cards, expanded navigation, new Johannesburg parent card and footer remain legible. The expanded desktop navigation fits the captured viewport, and the updated service-commitment and enquiry labels are visible through the accessibility extraction.

## Pricing advice page

The new editorial hero, breadcrumb, call-to-action buttons, quick-answer layout and alternating light textile sections render with strong contrast. A content-format issue was identified: one agent-authored comparison table was embedded as Markdown inside a paragraph, so pipe characters appeared in the rendered page. The integration must convert or remove Markdown table syntax before final delivery. Long-form typography and spacing otherwise render clearly.

## Rebuilt pricing page

The Markdown table separator and raw pipe formatting are no longer present. Pricing factors now render as normal readable copy within the editorial section system. Hero contrast, breadcrumbs, quick-answer columns, headings, links and calls to action remain legible.

## Case-study hub

The evidence-led hero, quick answer, three unpublished template sections, evidence requirements, FAQs and related links render correctly. The page does not present fabricated client outcomes. A minor text-format issue remains in template bullets: source placeholders contain escaped square brackets (`\\[` and `\\]`) that render visibly. The integration cleaner must unescape these characters before final build.

## Public ngrok preview

The requested public domain is reachable. As expected on ngrok's free tier, a one-time browser safety interstitial appears for a new visitor; selecting **Visit Site** loads the actual upgraded website. The public page exposes the expanded service, sector, area, guide and case-study navigation and the updated claim-governed homepage copy. The automated public crawl separately confirmed all 50 canonical routes, four migration redirects, security headers and five key upgraded pages.
