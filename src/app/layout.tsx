import type { Metadata } from "next";
import { Lexend, Major_Mono_Display, Rock_Salt } from "next/font/google";
import "./globals.css";
import Footer from "@components/footer";
import { toast, Toaster } from "sonner";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const majorMonoDisplay = Major_Mono_Display({
  variable: "--font-major-mono-display",
  subsets: ["latin"],
  weight: ["400"],
});

const rockSalt = Rock_Salt({
  variable: "--font-rock-salt",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Scribeverse",
  description: "Your Stories Deserve a Universe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${lexend.variable} ${majorMonoDisplay.variable} antialiased h-full notebook-image-bg`}
      >
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
