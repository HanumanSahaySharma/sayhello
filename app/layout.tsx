import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

import "./globals.css";
import ReduxProvider from "./redux/redux-provider";

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
      <body className={`${jost.className} bg-[#ededfb] text-zinc-800 dark:text-zinc-300 dark:bg-zinc-900`}>
        <div className="pt-[55px]">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Toaster position="top-right" />
            <ReduxProvider>
              <Header />
              <main className="custom-min-h-screen">{children}</main>
              <Footer />
            </ReduxProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
