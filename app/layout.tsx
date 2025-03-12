import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./providers";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stack Worth",
  description: "Calculate Your Development Worth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <body className={`${montserrat.variable} antialiased`}>
        <ReduxProvider>
          <Navbar />

          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
