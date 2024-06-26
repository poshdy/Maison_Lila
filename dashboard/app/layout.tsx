import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/Providers/toast-provider";
import AuthProvider from "@/components/Providers/Auth-provider";
import ClientProvider from "@/components/Providers/QueryProvider";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
const mont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientProvider>
        <AuthProvider>
          <body className={`${mont.className} min-h-screen `}>
            <main>
              {children}
              <ToastProvider />
            </main>
          </body>
        </AuthProvider>
      </ClientProvider>
    </html>
  );
}
