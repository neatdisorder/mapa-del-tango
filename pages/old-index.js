import Head from "next/head";
import React from "react";
import { attributes, react as HomeContent } from "../content/home.md";
import { Heading } from "@chakra-ui/react";
import Script from "next/script";

export default class Home extends React.Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Head>
          <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
        </Head>
        <article>
          <Heading>{title}</Heading>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    );
  }
}
