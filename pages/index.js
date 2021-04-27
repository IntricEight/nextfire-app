import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/Loader'

export default function Home() {
  return (
    <div>
      <Loader show />
      
      {/* <h1>Pages index.js</h1>

      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: {username: 'collinjb21'},
      }}>
        <a>Profiles</a>
      </Link> */}


    </div>
  )
}
