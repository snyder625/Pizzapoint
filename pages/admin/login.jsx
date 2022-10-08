import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/Login.module.css'

const Login = () => {

    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const router = useRouter();

    const handleClick = async () => {
      try {
        await axios.post("http://localhost:3000/api/login", {
          username, password,
        });
        router.push("/admin")
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1>Admin Dashboard</h1>
            <input placeholder="Username" className={styles.input} name="username" onChange={(e)=>setUserName(e.target.value)} />
            <input placeholder="Password" className={styles.input} name="password" type="password" onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleClick} className={styles.button}>Sign In</button>
            {error && (<span className={styles.error}>Wrong Credentials!</span>)}
        </div>
    </div>
  )
}

export default Login