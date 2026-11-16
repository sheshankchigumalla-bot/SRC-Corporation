import "server-only";
import { Pool } from "pg";

const globalPool = globalThis as typeof globalThis & { salesPool?: Pool };
function pool() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not configured");
  return globalPool.salesPool ??= new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 5,
    ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: true } : undefined,
  });
}
export type Sale = {
  id: number; customer_name: string; product: string; quantity_kg: string;
  unit_price_inr: string; total_inr: string; status: string; created_at: Date;
};
export async function listSales(): Promise<Sale[]> {
  const result = await pool().query<Sale>(
    "SELECT id, customer_name, product, quantity_kg, unit_price_inr, total_inr, status, created_at FROM sales ORDER BY created_at DESC LIMIT 100"
  );
  return result.rows;
}
export async function addSale(data: { customer: string; product: string; quantity: number; price: number }) {
  await pool().query(
    "INSERT INTO sales (customer_name, product, quantity_kg, unit_price_inr) VALUES ($1,$2,$3,$4)",
    [data.customer, data.product, data.quantity, data.price]
  );
}
