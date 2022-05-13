import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "email-password-credential",
      credentials: {
        password: { type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const password = credentials.password;
        if (password === "our@Voice!") {
          return credentials;
        }
        throw new Error("연결에 실패했습니다.");
      },
    }),
  ],
});
