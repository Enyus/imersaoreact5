import Head from "next/head";
import Header from "../components/Header";
import Playlists from "../components/Playlists";
import Favoritos from "../components/Favoritos";
import { useState } from "react";
import Menu from "../components/Menu";

export default function Home() {
  const [valorDoFiltro, setValorDoFiltro] = useState("");

  return (
    <>
      <Head>
        <title>AluraTube</title>
        <meta
          name="description"
          content="Criando durante a Imersão React 5 da Alura"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />

      <Header />

      <Playlists searchValue={valorDoFiltro} />

      <Favoritos />
    </>
  );
}
