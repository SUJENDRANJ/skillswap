import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { SkillProvider } from "@/context/skill-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillSwap - Microlearning Marketplace",
  description:
    "Teach one skill, learn another. A marketplace for micro-learning experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <SkillProvider>
            {/* <Navbar /> */}
            {children}
            <Toaster />
          </SkillProvider>
        </Providers>
      </body>
    </html>
  );
}
