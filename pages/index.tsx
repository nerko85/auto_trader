import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState} from 'react'
import Link from 'next/link'

export default function Home() {
const [owners, setOwners]= useState([]);
  useEffect(()=>{
   loadData();
  }, []);

  const loadData = async ()=>{
    const data = await fetch('http://localhost:4001/vehicles')
    const ownersList = await data.json();
    setOwners(ownersList);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {
          owners.map((owner, index)=>(
            <Link key={index} href={`${owner.vehicle}/${owner.ownerName}`}>
              <a>Navigate to {owner.ownerName}'s {owner.vehicle}</a>
            </Link>
          ))
        }
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
