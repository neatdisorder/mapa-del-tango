import React from "react";
import Head from "next/head";
import Script from "next/script";
import Map from "../src/components/MapLayer/Map";
import Menu from "../src/components/UserInterface/Menu";

const Index = () => {
  return (
    <>
      <Head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      </Head>
      <Menu />
      <Map />
    </>
  );
};

export default Index;
