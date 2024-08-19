import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({ subsets: ["latin"] });

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
      <body className={arimo.className}>{children}</body>
    </html>
  );
}
