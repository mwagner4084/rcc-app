import { Html, Head, Main, NextScript } from "next/document"
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/styles.globals.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link href="http://fonts.googleapis.com/css?family=Mohave:wght@400;600&display=swap" rel="stylesheet"></link>
        <link href="http://fonts.googleapis.com/css?family=Major+Birch:wght@400;600&display=swap" rel="stylesheet"></link>
        <link href="http://fonts.googleapis.com/css?family=Smooch+Sans:wght@400;600&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <div className="backgroundImage"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}