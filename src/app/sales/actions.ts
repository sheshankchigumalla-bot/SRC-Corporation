"use server";
import { auth } from "@/auth";
import { addSale } from "@/lib/sales-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createSale(form: FormData) {
  const session = await auth();
  const allowed = (process.env.SALES_ALLOWED_EMAILS ?? "").split(",").map(s => s.trim().toLowerCase());
  if (!session?.user?.email || !allowed.includes(session.user.email.toLowerCase())) throw new Error("Unauthorized");
  const customer = String(form.get("customer") ?? "").trim();
  const product = String(form.get("product") ?? "").trim();
  const quantity = Number(form.get("quantity"));
  const price = Number(form.get("price"));
  if (!customer || customer.length > 150 || !product || product.length > 150 ||
      !Number.isFinite(quantity) || quantity <= 0 || quantity > 10000000 ||
      !Number.isFinite(price) || price < 0 || price > 100000000) {
    throw new Error("Invalid sales data");
  }
  await addSale({ customer, product, quantity, price });
  revalidatePath("/sales");
  redirect("/sales");
}
