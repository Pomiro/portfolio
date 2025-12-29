import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brittany Chiang V4 Clone",
  description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}