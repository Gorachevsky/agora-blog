This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Guide

You can follow the official guide [here.](https://vercel.com/guides/nextjs-prisma-postgres)

## Post clone steps

Create the `.env` file and paste into it the next line:

```.env
# Supabase
DATABASE_URL="postgresql://postgres:NextJS-Prisma@db.akawoevzbxjmwyngfimo.supabase.co:5432/postgres"

# Development
# GitHub OAuth
GITHUB_ID=cc8a317c9f8544e9676c
GITHUB_SECRET=001f58ce4f3227a857ae1b2c8d2ef59431c1c652
NEXTAUTH_URL=http://localhost:3000/api/auth

# Production
# GitHub OAuth
GITHUB_ID=8fbf71eba29ca1078e99
GITHUB_SECRET=394383c25f52a1a8c3eab2ff4aa82bf9955801a5
NEXTAUTH_URL=https://anton-gorachevsky-blogr-nextjs-prisma.vercel.app/api/auth
```
