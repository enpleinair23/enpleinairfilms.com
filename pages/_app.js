import CavaniState from "@/src/Context";
import CavaniHead from "@/src/layout/CavaniHead";
import "@/styles/globals.css";
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <CavaniState>
      <Head>
  <link rel="icon" href="/favicon.png" />
</Head>
      <CavaniHead />
      <Component {...pageProps} />
    </CavaniState>
  );
}
