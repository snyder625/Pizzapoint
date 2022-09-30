import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>FIORA DI VOCA</h1>
      <span className={styles.price}>$19.99</span>
      <p> lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

export default PizzaCard