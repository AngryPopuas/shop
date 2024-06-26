import Header from "@/components/business/header/Header";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../assets/styles/globals.css";

const inter = Roboto({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Shopping",
  description: "The greatest shopping center!",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-[1080px] space-y-[45px] px-[50px]">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
