import React from "react";
import Head from "next/head";
import Script from "next/script";
import Map from "../components/Map/Map";

const Index = () => {
  return (
    <>
      <Head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      </Head>
      <div>
        <Map />
      </div>
    </>
  );
};

export default Index;
