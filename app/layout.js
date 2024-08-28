import { Inter } from 'next/font/google';
import { Navigation } from '../components/navigation/Navigation';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gig Master',
  description: 'For all your live gig needs!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
