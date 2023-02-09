import type { AppProps } from "next/app";
import { K2D } from "@next/font/google"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";

const k2d = K2D({subsets:['latin'], weight:'500'});


// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={k2d.className}>
    <ThirdwebProvider
  sdkOptions={{
    gasless: {
      biconomy: {
        apiKey: "IvnQF2o-8.d3b7b30f-3873-4583-9a62-e4c5d7f1868a",
        apiId: "a5bc2481-7601-4350-a12f-42ab8a907cb7",
      }
    },
  }}
  desiredChainId={activeChainId}>
      <Head>
        <title>2D WOLF NFT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="2D Wolf giVe you premium access to play on Wolf Mini Games"
        />
        <meta
          name="keywords"
          content="WEB3, minigames, play2earn"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider></main>
  );
}

export default MyApp;
