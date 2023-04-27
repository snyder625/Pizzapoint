import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN THE CITY</h1>
        <p className={styles.desc}>Enjoy authentic pizza made with fresh ingredients and baked to perfection. Vegetarian and gluten-free options available. Cozy atmosphere for dining with family and friends. Come taste our mouth-watering pizzas!</p>
    
        <div className={styles.wrapper}>
            {pizzaList.map((pizza)=> (
              <PizzaCard key={pizza._id} pizza={pizza} />
            ))}
        </div>
    </div>
  )
}

export default PizzaList