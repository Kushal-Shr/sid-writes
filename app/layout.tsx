import type { Metadata } from "next";
import { DM_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/themeProvider";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Siddhartha Baniya",
  description: "This is a personal blog website of Siddhartha Baniya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto_mono.variable} antialiased text-foreground bg-background`}
      >
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Header />  
        {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
