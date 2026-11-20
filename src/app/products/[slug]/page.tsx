import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";

const SITE_URL = "https://www.srcagroglobal.com";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `/products/${slug}` },
    openGraph: { title: product.title, description: product.description, url: `${SITE_URL}/products/${slug}`, images: [product.image] },
    twitter: { card: "summary_large_image" },
  };
}
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const schema = {
    "@context": "https://schema.org", "@type": "Product", name: product.name,
    description: product.description, image: `${SITE_URL}${product.image}`,
    url: `${SITE_URL}/products/${slug}`,
    brand: { "@type": "Brand", name: "SRC Corporation" },
    manufacturer: { "@type": "Organization", name: "SRC Corporation" }
  };
  return <main className="min-h-screen bg-white text-slate-900">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <div className="mx-auto max-w-6xl px-6 py-10">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm"><Link href="/" className="underline">Home</Link> / <Link href="/products" className="underline">Products</Link> / {product.name}</nav>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-rose-50"><Image src={product.image} alt={product.name + " bulk supply product"} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority /></div>
        <div><h1 className="mb-5 text-4xl font-bold text-red-800">{product.title}</h1>
          <p className="mb-6 text-lg leading-8">{product.description}</p>
          <h2 className="mb-3 text-xl font-semibold">Bulk procurement details</h2>
          <ul className="mb-6 list-disc space-y-2 pl-5">{product.details.map(item => <li key={item}>{item}</li>)}</ul>
          <h2 className="mb-3 text-xl font-semibold">Common applications</h2>
          <ul className="mb-8 list-disc space-y-2 pl-5">{product.uses.map(item => <li key={item}>{item}</li>)}</ul>
          <Link href="/#contact" className="inline-block rounded-full bg-red-700 px-7 py-3 font-semibold text-white">Request a bulk quotation</Link>
        </div>
      </div>
      {product.slug === "dry-red-chilli" && (
        <section className="mt-12 max-w-3xl" aria-labelledby="chilli-buying-questions">
          <h2 id="chilli-buying-questions" className="mb-5 text-2xl font-semibold">
            Buying dry red chillies in bulk
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold">Where does SRC Corporation supply dry red chillies from?</h3>
              <p className="mt-1 leading-7">
                SRC Corporation is based in Hyderabad, Telangana, and sources Indian dry red chillies
                from wholesale markets, including the Malakpet market in Hyderabad.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Which dry red chilli varieties can I ask for?</h3>
              <p className="mt-1 leading-7">
                Ask about Teja (S17), Sannam (334), 341 or Byadgi. Share your target heat level,
                colour and intended use so the team can confirm current availability and suitable lots.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What should I include in a bulk quotation request?</h3>
              <p className="mt-1 leading-7">
                Include your required quantity, delivery destination, preferred variety and packaging.
                If you have moisture, colour or pungency specifications, include those too. Ask the team
                to confirm the lot specifications, minimum order quantity and dispatch options.
              </p>
            </div>
          </div>
        </section>
      )}
      <section className="mt-16"><h2 className="mb-4 text-2xl font-semibold">Other bulk products</h2>
        <div className="flex flex-wrap gap-4">{products.filter(p => p.slug !== slug).map(p => <Link className="rounded border px-4 py-2 underline" href={`/products/${p.slug}`} key={p.slug}>{p.name}</Link>)}</div>
      </section>
    </div>
  </main>;
}
