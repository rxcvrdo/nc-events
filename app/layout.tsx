import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const poppins = Poppins({
  subsets:['latin'],
  weight: ['400', '500','600','700'],
  variable: '--font-poppins',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nc-events",
  description: "NC events is a platform for event management.",
  icons: {
    icon: 'assets/images/nc-event-logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={poppins.variable}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
