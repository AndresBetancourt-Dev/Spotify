import NextAuth from "next-auth";

declare module "next-auth/react" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    email: string;
    id: string;
    name: string;
  }

  type Session = {
    user: User;
    accessToken: string;
    expires: Date;
  };
}
