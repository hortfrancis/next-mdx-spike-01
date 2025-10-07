import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "next-mdx-spike-01",
  description: "Created by Alex HF",
};

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
        <div className='p-10 font-sans'>
          <header>
            <h1 className='text-2xl font-bold pb-2 border-b'>
              next-mdx-spike-01
            </h1>
          </header>
          <main className=' pt-6'>
            {children}
          </main>
          <footer>
          </footer>
        </div >
      </body>

    </html>
  );
}
