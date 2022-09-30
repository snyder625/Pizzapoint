import styles from '../styles/Footer.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>

      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" alt="" layout='fill'/>
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>OH YES, WE DID IT. PIZZAPOINT BEST BAKED PIZZAS IN THE WHOLE CITY</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            365 Broadway Road #304
            <br /> Karachi, 75010
            <br /> (090) 078-6010
          </p>
          <p className={styles.text}>
            365 Broadway Road #304
            <br /> Karachi, 75010
            <br /> (090) 078-6010
          </p>
          <p className={styles.text}>
            365 Broadway Road #304
            <br /> Karachi, 75010
            <br /> (090) 078-6010
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 10 AM - 12 PM
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12 PM - 2 AM
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer