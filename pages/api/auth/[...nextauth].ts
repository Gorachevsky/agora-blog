import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const user = await prisma.user.findUnique({
          where: {
            email: String(credentials?.email),
          },
        });
        let checkPassword = false;
        if (!user) {
          throw new Error("No user Found with Email Please Sign Up...!");
        } else {
          checkPassword = credentials?.password === user.password;
          if (checkPassword) {
            return user;
          } else {
            throw new Error("Username or Password doesn't match");
          }
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    error: "/authError",
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async session({ session }: { session: any }) {
      session.user = await prisma.user.findUnique({
        where: {
          email: String(session?.user?.email),
        },
      });
      console.log(session);
      return session;
    },
  },
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export default authHandler;
