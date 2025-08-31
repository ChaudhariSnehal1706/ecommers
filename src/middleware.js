import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    // Simple authentication check - if logged in, allow access
    return;
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Just check if token exists
    },
  }
);

export const config = {
  matcher: ['/admin/:path*']
};
