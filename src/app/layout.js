import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
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
          <NextTopLoader
            color="#5B27F7"
            initialPosition={0.05}
            crawlSpeed={200}
            height={4}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #d8ae76,0 0 5px #d8ae76"
            zIndex={999}
            showAtBottom={false}
          />
          <SharedHeader />
          {children}
          <SharedFooter />
          <GoToTop />
        </div>
      </body>
    </html>
  );
}
