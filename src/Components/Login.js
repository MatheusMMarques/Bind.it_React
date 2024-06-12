import React from "react";
import styles from '../Css/Login.module.css';
import logo from '../Images/bindlogo.png';

function Login(){
    return(
        <div className={styles.body}>
            <div className={styles.loginContainer}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </div>
                <form className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Seu Email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" placeholder="Sua Senha" required />
                    </div>
                    <button type="submit" className={styles.loginBtn}>Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default Login;