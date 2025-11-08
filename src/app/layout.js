import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Providers } from "./GlobalRedux/provider";
import ThemeProvider from "./GlobalRedux/features/theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Discover Kashmir",
  description:
    "A blog app made with Next.js to showcase Kashmir's beautiful places to the whole world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Inline script to apply saved theme before hydration */}
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          const savedTheme = localStorage.getItem('theme');
          if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } catch (e) {}
      })();
    `,
  }}
/>

      </head>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
