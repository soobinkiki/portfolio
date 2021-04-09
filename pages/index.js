import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Justin Park Porfolio</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1> Welcome to my portfolio!!</h1>

    </div>
  )
}
