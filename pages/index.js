import React from "react";
import Head from "next/head";
import Script from "next/script";
import Map from "../src/components/MapLayer/Map";
import Menu from "../src/components/UserInterface/Menu";

//
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PropTypes from "prop-types";
//

const Index = ({ output }) => {
  return (
    <>
      <Head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      </Head>
      <Menu />
      <Map todosLosPuntos={output} />
    </>
  );
};

export default Index;

Index.propTypes = {
  output: PropTypes.string.isRequired,
};

export async function getServerSideProps() {
  const directorioPuntos = path.join(process.cwd(), "content/puntos");
  const archivosPuntos = fs.readdirSync(directorioPuntos);
  const rutasCompletas = archivosPuntos.map((archivo) =>
    path.join(directorioPuntos, archivo)
  );
  const todosLosPuntos = rutasCompletas.map((ruta) => matter.read(ruta));

  const output = JSON.stringify(todosLosPuntos);

  return {
    props: {
      output
    },
  };
}
