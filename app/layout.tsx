import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subramanya | Frontend Developer",
  description: "Frontend Developer with 3+ years of experience in React.js, Next.js, React Native, TypeScript and Redux. Building scalable, performant web & mobile applications.",
  authors: [{ name: "Subramanya" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg antialiased">{children}</body>
    </html>
  );
}
