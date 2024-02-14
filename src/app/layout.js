import { Lato } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

import "./globals.css";

const lato = Lato({ subsets: ["latin"],
                    weight: "300"
});

export const metadata = {
  title: "Dir Assem Marketing",
  description: "Dir Assem Marketing Social Media Community Management Agency Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="container">
        <NavBar/>
          {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
