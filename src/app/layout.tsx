import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SchemaGraph } from "@/components/SchemaGraph";
import { Tracker } from "@/components/Tracker";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { PageTransition } from "@/components/motion/PageTransition";
import { baseGraphNodes } from "@/lib/schema";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Agência de SEO Local | Google Maps e IA | Z'ells",
  description: SITE_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#11130f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <MotionProvider>
          <ScrollProgress />
          <a
            href="#conteudo"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-lime focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
          >
            Pular para o conteúdo
          </a>
          <Header />
          <main id="conteudo" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <WhatsAppButton />
          <Tracker />
          <SchemaGraph nodes={baseGraphNodes()} />
        </MotionProvider>
      </body>
    </html>
  );
}
