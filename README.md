This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Known Development Dependencies Vulnerabilities

**Last Updated:** January 23, 2026

This project currently has 3 known vulnerabilities in development dependencies:

### 1. glob (High Severity) - Command Injection

- **Affected Package:** `glob` via `eslint-config-next`
- **CVE:** GHSA-5j98-mcp5-4vw2
- **Impact:** Development/linting only - does not affect production deployment
- **Why Not Fixed:** Requires upgrading to `eslint-config-next@16.x` which has breaking changes requiring ESLint 9.x (currently on 8.x)

### Why These Are Acceptable:

1. **Development-Only Risk:** These vulnerabilities only exist in packages used during local development and linting. They are not included in the production build deployed to Vercel.

2. **Limited Attack Surface:** The `glob` command injection vulnerability requires an attacker to have access to your local development machine and execute commands directly - not exploitable by website visitors.

3. **Original Security Issue Resolved:** The critical Next.js authorization bypass vulnerability (CVE-2024-46982) that prompted this investigation has been fixed by using Next.js 14.2.33+.

### Future Action Items:

- Consider updating when Next.js and ESLint major versions align
- Monitor for security patches that don't require breaking changes
- Re-evaluate when actively developing new features

### Production Security Status: ✅ Secure

The deployed application has no known vulnerabilities that affect end users.
