import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Royal Enfield — Test Ride Conversion Strategy",
  description:
    "A product strategy case study on improving test ride booking conversion for Royal Enfield's website.",
  openGraph: {
    title: "Royal Enfield — Test Ride Conversion Strategy",
    description: "Product Case Study by a Senior PM",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-re-black text-re-cream antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
