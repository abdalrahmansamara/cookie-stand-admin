import Head from 'next/head'
import Header from './header'
import Main from './main'
import Footer from './footer'


export default function Home() {
  return (
    <div className = 'flex-col flex bg-gray-100'>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
