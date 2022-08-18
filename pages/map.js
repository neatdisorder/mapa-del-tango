import Head from "next/head";
import { Component } from "react";
import { ChakraProvider, Heading } from '@chakra-ui/react';
import Script from "next/script";
export default class Home extends Component {
  render() {
    return (
      <ChakraProvider>
        <Head>
          <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
        </Head>
        <article>
            <Heading>
                Test
            </Heading>
        </article>
      </ChakraProvider>
    );
  }
}
