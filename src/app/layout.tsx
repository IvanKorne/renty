import type { Metadata } from "next";
import { Toaster } from "sonner";
import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import "./globals.css";
import Nav from "./_components/Nav";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renty",
  description: "Car rental app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedIn>
            <Nav />
            {children}
            <Toaster />
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
