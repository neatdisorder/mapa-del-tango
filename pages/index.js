import { React, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Map from "../src/components/MapLayer/Map";
import Menu from "../src/components/UserInterface/Menu";

// IMPORTS PARA IMPORTAR CONTENIDO
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PropTypes from "prop-types";
//

const Index = ({ output }) => {
  const [puntos, setPuntos] = useState(output);

  const filtrarPuntos = (category) => {
    if (category === "todos") {
      setPuntos(output);
    } else {
      const puntosFiltrados = output.filter(
        (punto) => punto.data.category === category
      );
      setPuntos([...puntosFiltrados]);
    }
  };

  return (
    <>
      <Head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      </Head>
      <Menu filtrarPuntos={filtrarPuntos} />
      <Map todosLosPuntos={puntos} />
    </>
  );
};

export default Index;

Index.propTypes = {
  output: PropTypes.array.isRequired,
};

export async function getStaticProps() {
  const directorioPuntos = path.join(process.cwd(), "content/puntos");
  const archivosPuntos = fs.readdirSync(directorioPuntos);
  const rutasCompletas = archivosPuntos.map((archivo) =>
    path.join(directorioPuntos, archivo)
  );
  const todosLosPuntos = rutasCompletas.map((ruta) => matter.read(ruta));

  const output = JSON.parse(JSON.stringify(todosLosPuntos));

  return {
    props: {
      output,
    },
  };
}
