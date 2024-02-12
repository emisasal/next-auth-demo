import type { NextAuthOptions } from "next-auth"
// import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
  providers: [
    //   GitHubProvider({
    //     profile(profile: GithubProfile) {
    //         //console.log(profile)
    //         return {
    //             ...profile,
    //             role: profile.role ?? "user",
    //             id: profile.id.toString(),
    //             image: profile.avatar_url,
    //         }
    //     },
    //     clientId: process.env.GITHUB_ID as string,
    //     clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "User name",
        },
        password: {
          label: "Password:",
          type: "password",
        },
      },
      async authorize(credentials) {
        // Here goes the fetch of user data to verify with credentials
        // I'm using a hardcoded user as example
        const user = {
          id: "22",
          name: "Peter",
          password: "1234",
          role: "admin", // "user" | "manager" | "admin"
        }

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user
        }
        return null
      },
    }),
  ],
  callbacks: {
    // For access by role in the app
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    // If client side access role needed
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role
      return session
    },
  },
  // Pages load by default but can be customized by adding as below
  // pages: {
  //   signIn: "/auth/signin",
  //   signOut: "/auth/signout",
  //   error: "/auth/error", // Error code passed in query string as ?error=
  //   verifyRequest: "/auth/verify-request", // (used for check email message)
  //   newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
}
