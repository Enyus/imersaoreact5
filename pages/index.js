import Head from 'next/head'
import Header from '../components/Header/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>AluraTube</title>
        <meta name="description" content="Criando durante a Imersão React 5 da Alura" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main >
        Listas da TimeLine
      </main>

      <footer>
        Favoritos
      </footer>
    </>
  )
}
