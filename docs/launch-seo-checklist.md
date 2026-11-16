# SRC Corporation launch SEO checklist

Adapted from the SALES repository's launch-seo README and SKILL.md.
This is a manual checklist, not an executable integration of Claude's skill.

## Already implemented in source
- Server-rendered Next.js public homepage.
- Canonical metadata and business structured data.
- Dynamic sitemap and robots.txt.
- Open Graph and Twitter metadata, with generated OG image.
- Private sales pages marked noindex; robots.txt disallows crawling /sales and /api.

## Verify in production (requires website owner)
1. Verify the domain property in Google Search Console using DNS TXT; configure GOOGLE_SITE_VERIFICATION only for HTML-tag verification.
2. Submit https://www.srcagroglobal.com/sitemap.xml in Search Console.
3. Set up GA4 and configure NEXT_PUBLIC_GA_MEASUREMENT_ID; confirm events in GA4 realtime.
4. Import Search Console into Bing Webmaster Tools.
5. Check HTTPS and www redirects on the actual hosting provider.
6. Validate rich results and social sharing previews.
7. Confirm contact form delivery with a test enquiry; add rate limiting and bot protection.
8. One week after launch, inspect index coverage, 404s, search queries, and mobile usability.

Never paste passwords, access tokens or secret keys into code or GitHub issues.
