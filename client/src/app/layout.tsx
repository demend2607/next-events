import type { Metadata } from "next";

import "./globals.css";

import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer/Footer";
import Container from "@/widgets/container/Container";

export const metadata: Metadata = {
  title: "Next Events - Find events aroud you",
  description: "Browse more than 10,000 events worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 text-white overflow-y-scroll`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
