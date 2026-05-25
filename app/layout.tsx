import type { Metadata } from "next";
import "@/app/_styles/globals.css";
import {
  montserrat,
  notoSans,
  nunito,
  josefineSans,
  kolkerBrush,
} from "@/lib/fonts";
import { HomePageProvider } from "@/contexts/homePageContext";
import Navbar from "@/app/_components/Navigation/Navbar";
// import Footer from "@/app/_components/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "The Wild Oasis | Welcome to Paradise",
  description:
    "Here you'll find comfort and steeze in synergy with affordability!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${montserrat.variable}
        ${notoSans.variable}
        ${nunito.variable}
        ${josefineSans.variable}
        ${kolkerBrush.variable}
      `}
    >
      <body className="min-h-screen overflow-x-hidden">
        <HomePageProvider>
          <Navbar />

          {children}

          {/* <Footer /> */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: "#fff",
                color: "#333",
              },
              success: {
                style: {
                  background: "#10b981",
                  color: "#fff",
                },
              },
              error: {
                style: {
                  background: "#ef4444",
                  color: "#fff",
                },
              },
            }}
          />
        </HomePageProvider>
      </body>
    </html>
  );
}
