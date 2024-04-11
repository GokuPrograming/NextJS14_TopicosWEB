import { Inter } from "next/font/google";
import "./globals.css";
import Nvar from "./ui/nvar/Navbar";
import Footer from "./ui/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nvar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
