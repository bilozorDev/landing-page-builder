"use client";
import localFont from "next/font/local";
import "./globals.css";
import { GeneralTabSettingsProvider } from "../components/contexts/GeneralTabSettings";
import { HeaderTabSettingsProvider } from "@/components/contexts/HeaderTabSettings";
import { BannerTabSettingsProvider } from "@/components/contexts/BannerTabSettings";
import { BodyTabSettingsProvider } from "@/components/contexts/BodyTabSettings";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GeneralTabSettingsProvider>
          <HeaderTabSettingsProvider>
            <BannerTabSettingsProvider>
              <BodyTabSettingsProvider>{children}</BodyTabSettingsProvider>
            </BannerTabSettingsProvider>
          </HeaderTabSettingsProvider>
        </GeneralTabSettingsProvider>
      </body>
    </html>
  );
}
