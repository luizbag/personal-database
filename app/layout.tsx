import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Database",
  description: "A personal database for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="px-4 md:container md:mx-auto">{children}</div>
      </body>
    </html>
  );
}
