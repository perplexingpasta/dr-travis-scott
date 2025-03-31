import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Varun Agarwal MD",
  description: "The official website of Dr. Varun Agarwal MD. Based in Delhi.",
  // other: {
  //   "twitter:card": "Asclepius 2024",
  //   "og:url": "https://asclepius2024.in",
  //   "og:type": "website",
  // },
  icons: {
    icon: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
