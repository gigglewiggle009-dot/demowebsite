import { Inter } from "next/font/google";
import "./globals.css";
import {
  GoToTop,
  SharedFooter,
  SharedHeader,
} from "@/components/SharedComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PromoDaddy Digital",
  description:
    "We Make, Creative Things Everyday ,We are digital agency that helps immersive and engaging user experiences that",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <SharedHeader />
          {children}
          <SharedFooter />
          <GoToTop />
        </div>
      </body>
    </html>
  );
}
