import styles from '../Css/DashboardHeader.module.css';
import logo from '../Images/bindlogo.png';
import { Link } from 'react-router-dom';

function DashboardHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        
        <div className={styles.menu}>
          <Link to="/perfil" className={styles.animatedLink}>Perfil</Link>
          <Link to="/meus-grupos" className={styles.animatedLink}>Meus Grupos</Link>
          <Link to="/criar-grupo" className={styles.animatedLink}>Criar Grupo</Link>
          <Link to="/sair" className={styles.animatedLink}>Sair</Link>
        </div>
      </nav>
    </header>
  );
}

export default DashboardHeader;
