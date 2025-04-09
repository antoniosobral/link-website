import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lynk Human Capital",
  description: "Landing page da Lynk Human Capital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
