import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

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

export const metadata: Metadata = {
  title: "MySpace",
  description: "MySpace is your personal corner on the web for everything you love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground m-auto w-9/12  overflow-y-auto no-scrollbar`} 
      >
        <header className="max-h-[20vh]">
          <Navbar />
        </header>
        <div className="p-4 flex justify-center items-center bg-slate-200 min-h-[85vh] overflow-scroll no-scrollbar">
          {children}
        </div>
      </body>
    </html>
  );
}
