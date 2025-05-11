import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import { postFetcher } from '../../../../lib/swr/fetcher';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        mobile: { label: 'Mobile', type: 'text' },
        otp: { label: 'OTP', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          let user;
          if (credentials.otp) {
            console.log('Verify OTP ....', credentials);

            user = await postFetcher('/v1/auth/verify-otp', {
              mobile: credentials.mobile,
              otp: credentials.otp,
            });
            user = user.data;
          } else if (credentials.password) {
            user = await axios.post('/v1/auth/login', {
              mobile: credentials.mobile,
              password: credentials.password,
            });
            user = user.data;
          }

          if (user?.accessToken) {
            return {
              accessToken: user.accessToken,
              refreshToken: user.refreshToken,
              id: user.user.id,
              email: user.user.email,
              mobile: user.user.mobile,
              firstName: user.user.firstName,
              lastName: user.user.lastName,
              role: user.user.role,
              status: user.user.status,
            };
          }

          return null;
        } catch (error) {
          console.error('Authentication error:', error);
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/auth/error',
    newUser: '/dashboard',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.id = user.id;
        token.email = user.email;
        token.mobile = user.mobile;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.role = user.role;
        token.status = user.status;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.user = {
        id: token.id,
        email: token.email,
        mobile: token.mobile,
        firstName: token.firstName,
        lastName: token.lastName,
        role: token.role,
        status: token.status,
      };
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
