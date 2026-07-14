import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const coreSans = localFont({
  src: "./fonts/CoreSansGRounded-Medium.woff2",
  variable: "--font-core-sans",
  weight: "500",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seja um Franqueado — Lembre-Lembre",
  description:
    "Faça parte da maior rede de franquias de foto instantânea do Brasil. Mais de 63 franquias ativas, R$6,9M faturados. Investimento inicial a partir de R$ 51.950.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${coreSans.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
