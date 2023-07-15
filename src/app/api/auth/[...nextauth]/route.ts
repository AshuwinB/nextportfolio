import User from "@/models/userModel";
import connect from "@/utils/dbConfig";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials: any) {
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            //check password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credential");
            }
          } else {
            throw new Error("User Not Found");
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/authenticate/login",
  },
});

export { handler as GET, handler as POST };
