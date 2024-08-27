import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Navigation } from "./_components/Navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gig Master",
  description: "For all your live gig needs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}</body>
    </html>
  );
}
