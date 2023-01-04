import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>A Movie DB</title>
        <meta name="description" content="A movie db to find info on your favorite or most hated movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*header elements*/}
      <Header/>
      {/*main elements*/}
      <Navbar/>
      
      <Results/>

      {/*footer elements*/}
    </>
  )
}
