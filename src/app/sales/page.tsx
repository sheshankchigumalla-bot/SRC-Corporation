import type { Metadata } from "next";
import { auth, signOut } from "@/auth";
import { listSales } from "@/lib/sales-db";
import { createSale } from "./actions";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Sales Dashboard", robots: { index: false, follow: false } };

export default async function SalesPage() {
  const session = await auth();
  const allowed = (process.env.SALES_ALLOWED_EMAILS ?? "").split(",").map(s => s.trim().toLowerCase());
  if (!session?.user?.email || !allowed.includes(session.user.email.toLowerCase())) redirect("/sales/login");
  const sales = await listSales();
  const total = sales.reduce((sum, row) => sum + Number(row.total_inr), 0);
  return <main className="mx-auto max-w-6xl p-8 space-y-8">
    <header className="flex justify-between items-center">
      <div><h1 className="text-3xl font-bold">SRC Sales</h1><p>Signed in as {session.user.email}</p></div>
      <form action={async () => { "use server"; await signOut({ redirectTo: "/sales/login" }); }}>
        <button className="rounded bg-red-700 px-4 py-2 text-white">Sign out</button>
      </form>
    </header>
    <section><h2 className="text-xl font-semibold">Recent sales</h2>
      <p>{sales.length} records · ₹{total.toLocaleString("en-IN", { maximumFractionDigits: 2 })} (last 100 records)</p></section>
    <form action={createSale} className="grid gap-3 rounded border p-5 md:grid-cols-5">
      <input className="border p-2" name="customer" placeholder="Customer" maxLength={150} required />
      <input className="border p-2" name="product" placeholder="Product" maxLength={150} required />
      <input className="border p-2" name="quantity" type="number" step="0.01" min="0.01" placeholder="Quantity (kg)" required />
      <input className="border p-2" name="price" type="number" step="0.01" min="0" placeholder="₹ per kg" required />
      <button className="rounded bg-red-700 p-2 text-white">Record sale</button>
    </form>
    <div className="overflow-x-auto"><table className="w-full text-left">
      <thead><tr>{["Date","Customer","Product","Kg","₹/kg","Total ₹","Status"].map(h => <th className="border-b p-2" key={h}>{h}</th>)}</tr></thead>
      <tbody>{sales.map(s => <tr key={s.id}>
        <td className="border-b p-2">{new Date(s.created_at).toLocaleDateString("en-IN")}</td>
        <td className="border-b p-2">{s.customer_name}</td><td className="border-b p-2">{s.product}</td>
        <td className="border-b p-2">{Number(s.quantity_kg).toLocaleString("en-IN")}</td>
        <td className="border-b p-2">{Number(s.unit_price_inr).toLocaleString("en-IN")}</td>
        <td className="border-b p-2">{Number(s.total_inr).toLocaleString("en-IN")}</td>
        <td className="border-b p-2">{s.status}</td>
      </tr>)}</tbody>
    </table></div>
  </main>;
}
