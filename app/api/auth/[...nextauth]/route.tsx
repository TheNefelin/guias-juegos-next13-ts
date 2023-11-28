import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth"
import Controller from "@/services/controller";

declare module 'next-auth' {
  interface Session {
    accessToken?: string
  }
}

export const authOptions: AuthOptions = ({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({session, token}) {
      // console.log('token', token);
      // console.log('session', session);

      const body = { 
        usuario: token.email, 
        token: token.jti,
      }

      const obj = new Controller()
      const data = await obj.post_user(body)
      // console.log(data)

      return { ...session, accessToken: token.jti}
    },
  },
})

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
