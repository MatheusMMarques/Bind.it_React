// Cadastro.js

import React from "react";
import styles from "../Css/Cadastro.module.css";
import logo from "../Images/bindlogo.png";

function Cadastro() {
    return (
        <div className={styles.body}>
            <div className={styles.cadastroContainer}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </div>
                <form className={styles.cadastroForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Seu Nome de Usuário"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Seu Email"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Sua Senha"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword">Confirme sua Senha:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirme Sua Senha"
                            required
                        />
                    </div>
                    <button type="submit" className={styles.cadastroBtn}>
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
