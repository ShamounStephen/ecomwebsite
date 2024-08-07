import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";



import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShoppingCartModal";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlipCommerce",
  description: "Created by Shamoun Stephen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
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
          colorDanger: "red",
          colorSuccess: "green",
          // colorText: "white"
        },
        elements: {
          formButtonPrimary: "bg-primary border-3 border-gray-100 hover:bg-gray-100 hover:text-primary text-sm normal-case",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className} overflow-x-hidden`}>
          <Providers>
            <Navbar />
            <ShoppingCartModal />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
