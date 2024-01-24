import type { Metadata } from "next";
import { Abhaya_Libre } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Nav-bar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
import ClientProvider from "@/Providers/QueryProvider";
import MobileBottomNav from "@/components/navigation/mob-bottom-menu";
import { ModalProvider } from "@/Providers/model-provider";
import { getData } from "@/fetchers";
import Anouncement from "@/components/Anouncement";
import { Anoun } from "@/types";
import { Server } from "@/axiosServer";

const font = Abhaya_Libre({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const metadata: Metadata = {
  title: "MAISON LILA",
  description: "Maison lila is Home made healthy bakery",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const anoun = await getData("anoun/published");
  return (
    <html lang="en">
      <ClientProvider>
        <body
          className={`${font.className} min-h-screen relative flex flex-col  text-[#3C2E3D] overflow-x-hidden  bg-[#fffefd]`}
        >
          <main className="flex-1">
            {anoun && <Anouncement anoun={anoun} />}

            <Navbar />
            {children}
            <Toaster />
            <Footer />
            <ModalProvider />
          </main>
          <MobileBottomNav />
        </body>
      </ClientProvider>
    </html>
  );
}
