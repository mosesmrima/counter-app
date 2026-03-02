import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Counter App",
  description: "A simple counter application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
