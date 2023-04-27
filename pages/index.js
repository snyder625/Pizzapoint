import Head from 'next/head'
import axios from 'axios'
import PizzaList from '../components/PizzaList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Add from '../components/Add'
import AddButton from '../components/AddButton'

export default function Home({pizzaList, isAdmin}) {
  
  const [close, setClose] = useState()
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzajoint | Best Pizza place in Karachi</title>
        <meta name="description" content="Best Pizza in Karachi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      {isAdmin && (<AddButton setClose={setClose} />)}
      <PizzaList pizzaList={pizzaList} />
      {(isAdmin && !close) && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies;
  let isAdmin = false;
  const res = await axios.get(`process.env.NEXT_PUBLIC_API_URL/api/products`);

  if(myCookie.token === process.env.TOKEN) {
    isAdmin = true;
  }
  return {
    props: {
      pizzaList: res.data,
      isAdmin
    }
  }
}