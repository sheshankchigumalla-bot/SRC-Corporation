import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
export const metadata: Metadata = { title: "Bulk Agricultural Products", description: "Explore SRC Corporation's bulk red chillies, chilli powder, red onions, dehydrated onion, turmeric and dehydrated garlic.", alternates: { canonical: "/products" } };
export default function ProductsPage() {
  return <main className="mx-auto max-w-6xl px-6 py-12">
    <nav className="mb-6 text-sm"><Link href="/" className="underline">Home</Link> / Products</nav>
    <h1 className="mb-4 text-4xl font-bold text-red-800">Bulk Agricultural Products</h1>
    <p className="mb-10 max-w-3xl text-lg">SRC Corporation handles bulk supply enquiries for Indian spices, chillies and agricultural products. Contact us for current availability and lot-specific specifications.</p>
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{products.map(p => <article className="overflow-hidden rounded-2xl border" key={p.slug}>
      <div className="relative aspect-[4/3]"><Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" /></div>
      <div className="p-5"><h2 className="mb-3 text-xl font-semibold">{p.name}</h2><p className="mb-4">{p.description}</p><Link href={`/products/${p.slug}`} className="font-semibold text-red-800 underline">View product details</Link></div>
    </article>)}</div>
  </main>;
}
