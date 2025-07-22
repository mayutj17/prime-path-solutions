import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Prime Path Solutions",
  description: "This this Prime Path Solutions home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
      >
        <Suspense
          fallback={
            <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          }
        >
          <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="sticky top-0 backdrop-blur-sm z-50 px-9">
              <Header />
            </header>

            {/* Main Content */}
            <main className="flex-grow">{children}</main>

            {/* Footer */}
            <footer className="mt-auto">
              <Footer />
            </footer>
          </div>
        </Suspense>
      </body>
    </html>
  );
}
