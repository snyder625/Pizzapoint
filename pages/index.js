import Head from 'next/head'
import axios from 'axios'
import PizzaList from '../components/PizzaList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzajoint | Best Pizza place in Karachi</title>
        <meta name="description" content="Best Pizza in Karachi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Slider />
      <PizzaList pizzaList={pizzaList} />
    </div>
  )
}

export const getServerSideProps = async ()=> {
  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      pizzaList: res.data
    }
  }
}