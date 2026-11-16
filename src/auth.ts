import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const allowed = new Set((process.env.SALES_ALLOWED_EMAILS ?? "").split(",").map(v => v.trim().toLowerCase()).filter(Boolean));

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  session: { strategy: "jwt", maxAge: 60 * 60 * 8 },
  pages: { signIn: "/sales/login" },
  callbacks: {
    async signIn({ user }) {
      // Fail closed when the allowlist is absent. GitHub email must be verified by provider.
      return !!user.email && allowed.has(user.email.toLowerCase());
    },
    authorized({ auth }) {
      return !!auth?.user?.email && allowed.has(auth.user.email.toLowerCase());
    },
  },
});
