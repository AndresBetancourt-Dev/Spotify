import NextAuth from "next-auth";
import { Session as S } from "next-auth/core/types";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  export interface User {
    email: string;
    id: string;
    name: string;
  }

  export interface Account {
    expires_in: number | unknown;
  }

  export interface JWT extends JWTCore {
    /** OpenID ID Token */
    idToken?: string;
    accessTokenExpires?: number;
  }
  export interface Session extends S {
    user: User;
    accessToken: string | unknown;
    expires: Date;
  }
}
