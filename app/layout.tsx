import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={
      {
      layout: {
        helpPageUrl: "https://clerk.dev/support",
        logoImageUrl: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJnWlNNUkxkNHJlNE5ETU1wQTZSUWpTUEVJVyJ9",
        logoPlacement: "inside",
        privacyPageUrl: "https://clerk.dev/privacy",
        showOptionalFields: true,
        socialButtonsPlacement: "top",
        socialButtonsVariant: "iconButton",
        termsPageUrl: "https://clerk.dev/terms",
          },
          variables: {
            
            colorDanger:"red",
            colorSuccess:"green",
            
            // colorText: "white"
          },
          elements: {
            formButtonPrimary:"bg-primary border-3 border-gray-100 hover:bg-gray-100 hover:text-primary text-sm normal-case",

          }
      }
    }
    >
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          {children}
          <Footer/>
        </CartProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
