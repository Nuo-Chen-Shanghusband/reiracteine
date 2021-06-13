import react from 'react'
import styles from '../../styles/Login.module.css'

class Morks extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: ''
        }
    }

    handleChange() {
        let ur = document.getElementById('ur')
        let p = document.getElementById('p')
        console.log(ur + p)
    }

    render() {
        return (
            <div className={styles.app}>
                <article className={styles.login}>
                    <h2>ReiRact</h2>
                    <form method='get'>
                        <section className={styles.real}>
                            <input type='text' required='required' onChange={this.handleChange} id='ur' />
                            <label>Username / Reiract Accont</label>
                        </section>
                        <section className={styles.real}>
                            <input type='text' required='required' onChange={this.handleChange} id='p' />
                            <label>Password</label>
                        </section>
                        <section className={styles.resu}>
                            <button type='sumbit' onClick={this.handleSumbit}>Login</button>
                        </section>
                    </form>
                    <span>No accont?Create <a href='#'>now</a>.</span>
                </article>
            </div>
        )
    }
}

export default function Login() {
    return(
        <div>
            <Morks />
        </div>
    )
}