import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN THE CITY</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque dapibus libero ut pellentesque. Duis sed nunc vitae libero porttitor bibendum. In ultricies lacus eget pulvinar auctor. Nulla facilisi.</p>
    
        <div className={styles.wrapper}>
            {pizzaList.map((pizza)=> (
              <PizzaCard key={pizza._id} pizza={pizza} />
            ))}
        </div>
    </div>
  )
}

export default PizzaList