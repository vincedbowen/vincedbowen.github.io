import { Poppins } from "next/font/google";
import "./globals.css";
import AppShell from "../components/AppShell";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Vincent Bowen",
  description: "Vincent Bowen's Personal website",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/vdbHome.png" />
      </head>
      <body className={poppins.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
