import styles from '../Css/Cabecalho.module.css'
import logo from '../Images/bindlogo.png'

function Cabecalho(){
    return(
        <header className={styles.header}>
        <nav className={styles.nav}>
          <div className="menu-left">
            <a href="#section1">Sobre nós</a>
            <a href="#section2">Visão</a>
          </div>

          <div className="logo-container">
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>

          <div className="menu-right">
            <a href="#section3">Entrar</a>
            <button className={styles.cadastro}>Cadastre-se</button>
          </div>

        </nav>
      </header>
    )
}

export default Cabecalho;