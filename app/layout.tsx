import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css"
import Navbar from "@components/Navbar/Navbar";

export const metadata = {
  title: 'Customer Suport',
  description: 'Generated by Next.js',
  favocon: "/logo-white.png",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 ">
        <Navbar />
        <div className="">
          {children}
        </div>
        <ToastContainer newestOnTop position="bottom-right" />
      </body>

    </html>
  )
}