import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-NLMHCHWD";

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
    "Faça parte da maior rede de franquias de foto instantânea do Brasil. Mais de 68 franquias ativas, R$6,9M faturados. Investimento total a partir de R$ 56.900.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${coreSans.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
    </html>
  );
}
