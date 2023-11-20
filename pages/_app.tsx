import "@/styles/globals.css"
import type { AppProps } from "next/app"
import "bootstrap-icons/font/bootstrap-icons.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}