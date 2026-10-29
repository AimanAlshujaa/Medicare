import type { Metadata } from "next";
import { Tajawal, Cairo } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "عيادات لوميير ديرما جدة | نخبة استشاريي الجلدية والتجميل والليزر — حي الروضة",
  description:
    "إشراقتكِ الطبيعية بأنامل نخبة استشاريي الجلدية والتجميل بجدة. أحدث تقنيات الفيلر والبوتوكس، إبر النضارة، الليزر البارد كانديلا، مورفيوس 8، وهيدرافيشل MD المعتمدة من FDA و SFDA.",
  keywords: [
    "عيادة تجميل جدة",
    "استشاري جلدية جدة",
    "ليزر بارد جدة",
    "مورفيوس 8 جدة",
    "فيلر وبوتوكس جدة",
    "هيدرافيشل جدة حي الروضة",
    "عيادات لوميير ديرما",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${cairo.variable}`}
    >
      <body className="min-h-screen bg-ivory text-slate-midnight font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
