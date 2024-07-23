import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unis Go2",
  description: "Application for Unis GO2 Robot Dog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
