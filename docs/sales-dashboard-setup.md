# Sales dashboard setup (not yet deployed)

This branch adds a private sales ledger to the public Next.js site. It is **not** connected to Tally and does not import existing transactions.

## Requirements
- Node.js and a private PostgreSQL database.
- GitHub OAuth App: callback URL `https://www.srcagroglobal.com/api/auth/callback/github` (use localhost callback for local development).
- GitHub account with a **verified primary email** included in the staff allowlist.

## Environment variables (server-side, never commit values)
```env
AUTH_SECRET=generate-a-strong-random-secret
AUTH_GITHUB_ID=github-oauth-client-id
AUTH_GITHUB_SECRET=github-oauth-client-secret
SALES_ALLOWED_EMAILS=verified-staff@example.com
DATABASE_URL=postgresql://user:password@host:5432/database
DATABASE_SSL=true
```

Use your hosting provider's secret manager. Do not use this example address as an actual account.

## Installation
1. Run `npm install` to install the new `next-auth`, `pg`, and `@types/pg` dependencies and update `package-lock.json`. Commit the regenerated lockfile.
2. Execute `db/schema.sql` against the database using a privileged migration account.
3. Configure OAuth and environment variables. The dashboard fails closed when no staff emails are configured.
4. Run `npm run build`, `npm run lint`, and manually test allowed/denied accounts.
5. Test a sale, refresh, confirm persistence, and check unauthorized access to server actions.
6. Merge only after review and deployment validation.

## Security and scope
- GitHub OAuth + NextAuth JWT sessions, with a server-side email allowlist.
- Staff-only access enforced in both dashboard page and write action.
- Parameterized SQL and database constraints; no secrets in browser code.
- Public website remains available.
- This is an initial sales ledger (record/list). Customer management, payment reconciliation, audit logs, backups, permissions by role, and Tally sync are **not** implemented.
- Restrict database network access, use a least-privileged database user, configure backups and monitoring before entering real business data.
- Staff email addresses may be personal data; handle access accordingly.
