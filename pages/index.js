import Head from 'next/head'
import Header from '../components/Header/Header'
import Playlists from '../components/Playlists'
import Favoritos from '../components/Favoritos'

export default function Home() {

  return (
    <>
      <Head>
        <title>AluraTube</title>
        <meta name="description" content="Criando durante a Imersão React 5 da Alura" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <Playlists />

      <Favoritos />
    </>
  )
}
