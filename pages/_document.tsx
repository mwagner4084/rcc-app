import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/styles.globals.css" />
      </Head>
      <body>
        <div className='backgroundImage'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}