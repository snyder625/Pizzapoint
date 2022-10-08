import styles from '../../styles/Admin.module.css';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';

const Index = ({orders, products}) => {

    const [pizzaList, setPizzaList] = useState(products);
    const [orderList, setOrderList] = useState(orders);
    const status = ["Preparing", "On the way", "Delivered"]

    const handleDelete = async (Id)=> {
        try {
            await axios.delete("http://localhost:3000/api/products/" + Id)
            setPizzaList(pizzaList.filter((pizza)=>pizza._id !== Id))
        } catch (error) {
            console.error(error);
        }
    };

    const handleStatus = async (id) => {
        const item = orderList.filter((order)=> order._id === id)[0]
        const currentStatus = item.status
        try {
            const res = await axios.put("http://localhost:3000/api/orders/" + id, {status: currentStatus + 1});
            setOrderList([res.data, ...orderList.filter((order)=> order._id !== id)])
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div className={styles.container}>

        <div className={styles.item}>
            <h1 className={styles.title}>Products</h1>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <th>Image</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                
                {pizzaList.map((product) =>(
                    <tbody  key={product._id}>
                        <tr>
                            <td>
                                <Image src={product.img} alt="" width={50} height={50} objectFit="cover" />
                            </td>
                            <td>{product._id.slice(0,10)}...</td>
                            <td>{product.title}</td>
                            <td>${product.prices[0]}</td>
                            <td>
                                <button className={styles.button}>Edit</button>
                                <button className={styles.button} onClick={()=>handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}

            </table>
        </div>

        <div className={styles.item}>
            <h1 className={styles.title}>Orders</h1>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                {orderList.map((order)=>(
                    <tbody key={order._id}>
                        <tr>
                            <td>{order._id.slice(0, 10)}..</td>
                            <td>{order.customer}</td>
                            <td>${order.total}</td>
                            <td>{order.method === 0 ? (<span>Cash</span>) : (<span>Paid</span>)}</td>
                            <td>{status[order.status]}</td>
                            <td>
                                <button className={styles.button} onClick={()=>handleStatus(order._id)}>Next Stage</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    </div>
  )
};


export const getServerSideProps = async (ctx)=> {
    const myCookie = ctx.req?.cookies || "";

    if(myCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: "/admin/login",
                permanent: false
            }
        }
    }
    const productRes = await axios.get("http://localhost:3000/api/products")
    const OrderRes = await axios.get("http://localhost:3000/api/orders")

    return {
        props: {
            products: productRes.data,
            orders: OrderRes.data
        }
    }
}

export default Index