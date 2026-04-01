import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enosh Raju | Java Full Stack Developer",
  description:
    "Interactive Next.js portfolio for Enosh Raju Kaligithi, focused on Java, Spring Boot, React, REST APIs, and enterprise application delivery.",
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
