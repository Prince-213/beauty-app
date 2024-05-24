import type { Metadata } from "next";

import { Poppins as PopSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";

const popSans = PopSans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--pop-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen font-poppins bg-background  antialiased")}
      >
        <div className=" w-full ">
          <Header />
        </div>

        {children}

        <div className=" w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
