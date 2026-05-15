import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import dbConnect from "../../../util/dbConnect";
import User from "../../../models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
dbConnect();
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email: email });
        if (!user) {
          throw new Error("You have not registered yet");
        }
        if (user) {
          return signInUser({ user, password });
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: "read:user user:email",
        },
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  database: process.env.MONGODB_URI,
  secret: process.env.NEXTAUTH_SECRET,
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
          },
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
});

const signInUser = async ({ user, password }) => {
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Incorrect password!");
  }
  return user;
};
