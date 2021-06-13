import react from 'react'
import styles from '../../styles/Login.module.css'

export default function login() {
    return (
        <div className={styles.app}>
            <article className={styles.login}>
                <h2>ReiRact</h2>
                <form method='get'> 
                    <section className={styles.real}>
                        <input type='text' required='required'></input>
                        <label>Username / Reiract Accont</label>
                    </section>
                    <section className={styles.real}>
                        <input type='text' required='required'></input>
                        <label>Password</label>
                    </section>
                    <section className={styles.resu}>
                        <input type='sumbit' value='Login'></input>
                    </section>
                </form>
                <span>No accont?Create <a href='#'>now</a>.</span>
            </article>
        </div>
    )
}