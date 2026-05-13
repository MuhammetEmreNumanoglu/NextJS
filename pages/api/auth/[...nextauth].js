import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import dbConnect from "../../../util/dbConnect";
import User from "../../../models/User";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // email almak için önemli:
      authorization: {
        params: {
          scope: "read:user user:email",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      try {
        await dbConnect();

        console.log("SIGNIN USER:", user);

        const githubId = user?.id;
        const email = user?.email;

        if (!githubId) {
          console.log("GitHub ID missing");
          return false;
        }

        await User.findOneAndUpdate(
          { githubId: githubId },
          {
            name: user.name,
            email: email || null,
            image: user.image,
            githubId: githubId,
          },
          {
            upsert: true,
            new: true,
          }
        );

        return true;
      } catch (err) {
        console.log("SIGNIN DB ERROR:", err);
        return false;
      }
    },

    async session({ session, token }) {
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});