import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Navbus — Nav-ur-bus and they're safe with us",
    description: "Real-time school bus tracking for families, drivers, and bus companies.",
    icons: {
          icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
          <html lang="en">
                <head>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                </head>head>
                <body>{children}</body>body>
          </html>html>
        );
}</html>
