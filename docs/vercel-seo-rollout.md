# Vercel SEO deployment and verification

## What this branch changes
- Adds six publicly accessible, server-rendered product detail pages and a products directory.
- Adds unique page titles, descriptions, canonical URLs, Open Graph metadata and Product JSON-LD without invented prices or review ratings.
- Adds the product pages to sitemap.xml and links to them from the homepage.
- Preserves the existing robots.txt, organization structured data and OG image.

## Deploy safely on Vercel
1. Open Vercel > Projects > the project serving `www.srcagroglobal.com`.
2. Check Settings > Git: confirm it points to `sheshankchigumalla-bot/SRC-Corporation` and Production Branch is `main`.
3. Review this pull request's Preview Deployment. Confirm /products and all six /products/* routes return HTTP 200 and show their content with JavaScript disabled.
4. Run the repository CI build/lint and review errors. Merge only after checks pass.
5. Verify both www and non-www HTTPS domains redirect to one canonical host under Settings > Domains.
6. Do not share Vercel API tokens or account passwords in chat. Use Vercel's official team invitations if a human collaborator needs access.

## Search Console and Bing (owner steps)
1. Visit https://search.google.com/search-console and select the `srcagroglobal.com` domain property (or create one).
2. For a new domain property, add the provided TXT record at your **DNS provider**, which might differ from Vercel. Do not paste the verification token into public chat.
3. Use URL Inspection to check the homepage and `/products/dry-red-chilli`; request indexing if appropriate.
4. Submit `https://www.srcagroglobal.com/sitemap.xml` under Sitemaps after deployment.
5. Import the verified property into https://www.bing.com/webmasters and submit the sitemap there.
6. Review Search Console > Pages and Performance after crawling. Search results and AI citations are not guaranteed.

## AI search discovery
- Keep relevant public pages indexable and accessible to crawlers.
- Verify crawler accessibility with real HTTP requests to /robots.txt and product URLs.
- Maintain consistent factual company information, original product photos, buyer FAQs, lot-specific specifications, and independent citations/listings.
- Do not confuse AI crawler access with guaranteed ChatGPT, Gemini or Perplexity mentions.

## Information still needed
- Actual product grades, moisture/heat/colour testing methodology, packing formats, MOQ, export markets and verified credentials, to replace general copy with useful buyer-specific content.
- Access to aggregate Search Console reports for measured indexing, queries, CTR and clicks. Screenshots or exported reports are sufficient; do not share account secrets.
