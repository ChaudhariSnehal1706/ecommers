import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: 'My E-Commerce',
  description: 'A complete e-commerce application with Redux, NextAuth, and dark mode',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
