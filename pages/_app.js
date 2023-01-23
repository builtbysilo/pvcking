import React from "react";
import Head from "next/head";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
// import { AppWrapper } from '../context/state.js';
import {AnimatePresence} from "framer-motion";
// import Layout from "../components/Layout";

export default function App({Component, pageProps}) {
  const theme = extendTheme({
    // fonts: {
    //   heading: `'Bai Jamjuree', sans-serif`,
    //   body: `'Bai Jamjuree', sans-serif`,
    // },
  });
  return (
    <AnimatePresence>
      <ChakraProvider resetCSS theme={theme}>
          <Head>
            <link rel="shortcut icon" href="/crown.svg" />
          </Head>
          <Component {...pageProps} />
      </ChakraProvider>
    </AnimatePresence>
  );
}
