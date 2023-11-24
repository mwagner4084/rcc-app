import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
      <body>
        <div className="backgroundImage"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}