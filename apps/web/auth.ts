import NextAuth, { type NextAuthResult } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const result = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, request) {
        try {
          const email = credentials.email;
          const password = credentials.password;

          // assume fetching user from db
          const user = {
            id: "sjfkdjsl",
            email,
            password,
          };
          if (!user) return null;
          return user as any;
        } catch (error) {
          if (error instanceof Error) {
            console.log(error.message);
          }
        }
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        // put user in db
        console.log("user", user);
        console.log("account", account);
      }
      return true;
    },

    async jwt({ token, user }) {
      console.log("token", token);
      console.log("user", user);
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      console.log("session", session);
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 10 * 24 * 60 * 60 * 1000,
  },
  secret: process.env.AUTH_SECRET,
});

export const handlers: NextAuthResult["handlers"] = result.handlers;
export const signIn: NextAuthResult["signIn"] = result.signIn;
export const signOut: NextAuthResult["signOut"] = result.signOut;
export const auth: NextAuthResult["auth"] = result.auth;
