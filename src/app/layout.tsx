import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Roboto_Mono, Playfair_Display, Oswald, Lato } from 'next/font/google';
import "./globals.css";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const lato = Lato({ weight: ['400', '700'], variable: '--font-lato', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Random CSS Button Generator",
  description: "Generate unique, professional-looking buttons with creative typography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${robotoMono.variable} ${playfairDisplay.variable} ${oswald.variable} ${lato.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
