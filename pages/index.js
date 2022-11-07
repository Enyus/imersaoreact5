import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AluraTube</title>
        <meta name="description" content="Criando durante a Imersão React 5 da Alura" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header>
        Menu <br/>
        Banner <br/>
        User <br/>
      </header>

      <main >
        Listas da TimeLine
      </main>

      <footer>
        Favoritos
      </footer>
    </>
  )
}
