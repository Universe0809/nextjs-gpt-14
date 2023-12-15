import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "../components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatGpt-Next.js-14",
  description: "ChatGpt developed by Next.js 14",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="winter">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
