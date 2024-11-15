import { jura } from "../styles/fonts";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${jura.className} ${jura.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
