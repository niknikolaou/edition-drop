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
        apiKey: "<1675375289395>",
        apiId: "<69eb705a-b52b-4b18-abbc-dd2d23752a24>",
      }
    },
  }}
  desiredChainId={activeChainId}>
      <Head>
        <title>2D WOLF NFT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="2D Wolf give you premium access to play on Wolf Mini Games"
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
