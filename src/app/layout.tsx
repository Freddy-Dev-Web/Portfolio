import type { Metadata } from "next";
// import { Geist, Geist_Mono } from 'next/font/google';
import { Roboto } from 'next/font/google';
import "./globals.css";
// import Menu from './sidebar'
import Navigation from './Navigation'


const robotoSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"], 
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   display: 'swap',
//   weight: ['400', '500', '600', '700'], 
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   display: 'swap',
//   weight: ['400', '500', '600', '700'],  
// });

export const metadata: Metadata = {
  title: "CentroDev",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable}  antialiased`}
      >
        <div>
          <div>
            <Navigation />
          </div>
          <div>
        {children}
          </div>
        </div>
      </body>
    </html>
  );
}
