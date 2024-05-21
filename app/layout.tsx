import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Say, Hello",
  description: "Create you own story",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jost.className} pt-[55px] bg-[#ededfb] dark:bg-zinc-900`}>
        <Toaster position="top-right" />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="custom-min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
