import "@/styles/globals.css"
import type { AppProps } from "next/app"
import "bootstrap-icons/font/bootstrap-icons.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Head>
        <link rel="stylesheet" href="/styles.globals.css"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link href="https://fonts.googleapis.com/css?family=Mohave:wght@400;600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Major+Birch:wght@400;600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Vina+Sans:wght@400;600&display=swap" rel="stylesheet"></link>
      </Head> */}
      <Navbar />
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}