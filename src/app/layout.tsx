import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ParticipantsProvider } from "@/context/ParticipantsContext";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odel Masters",
  description: "Golfturnering på Arendal og Omegn Golfklubb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${playfair.variable} antialiased flex flex-col min-h-screen`}>
        <ParticipantsProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ParticipantsProvider>
      </body>
    </html>
  );
}
