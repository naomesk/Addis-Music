
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Library from './Library'
import Navigation from './Navigation'
import Create from './Create'
import Settings from './Settings'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Addis Music</title>
        <meta name="description" content="React Music App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <Navigation/>
       <Library/>
       <Create/>
       <Settings/>
      </main>

      <footer className={styles.footer}>
        <p>With &lt;3 from Naomi</p>
      </footer>
    </div>
  )
}
