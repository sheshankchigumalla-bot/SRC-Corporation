import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Staff sign in", robots: { index: false, follow: false } };
export default async function Login() {
  const session = await auth();
  const allowed = (process.env.SALES_ALLOWED_EMAILS ?? "").split(",").map(s => s.trim().toLowerCase());
  if (session?.user?.email && allowed.includes(session.user.email.toLowerCase())) redirect("/sales");
  return <main className="mx-auto max-w-md p-10 space-y-5">
    <h1 className="text-3xl font-bold">SRC Staff Login</h1>
    <p>Only approved staff GitHub accounts can access sales records.</p>
    <form action={async () => { "use server"; await signIn("github", { redirectTo: "/sales" }); }}>
      <button className="rounded bg-red-700 px-5 py-3 text-white">Sign in with GitHub</button>
    </form>
  </main>;
}
