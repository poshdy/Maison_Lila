import type { Metadata } from "next";
import { Abhaya_Libre } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Nav-bar";
import { Toaster } from "react-hot-toast";
import ClientProvider from "@/Providers/QueryProvider";
import MobileBottomNav from "@/components/navigation/mobile/mob-bottom-menu";
import { ModalProvider } from "@/Providers/model-provider";
import { getData } from "@/fetchers";
import Anouncement from "@/components/Anouncement";

const font = Abhaya_Libre({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const metadata: Metadata = {
  title: "MAISON LILA",
  description: "Maison lila is Home made healthy bakery",
  icons: {
    icon: "/logo.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const anoun = await getData("anoun?published=true");
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="png" />
      </head>
      <ClientProvider>
        <body
          className={`${font.className} min-h-screen relative flex flex-col text-lila overflow-x-hidden bg-[#fffcf8]`}
        >
          <main className="flex-1 pb-10">
            {anoun && <Anouncement anoun={anoun[0]} />}
            <Navbar />
            {children}
            <Toaster />
            <ModalProvider />
          </main>
          <MobileBottomNav />
        </body>
      </ClientProvider>
    </html>
  );
}
