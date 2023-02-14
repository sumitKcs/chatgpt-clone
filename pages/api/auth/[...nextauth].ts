import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "Enter your google id",
      clientSecret: process.env.GOOGLE_SECRET || "enter your google secret key" ,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)