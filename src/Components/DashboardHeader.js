import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Css/DashboardHeader.module.css';
import logo from '../Images/bindlogo.png';
import Alert from './Alert';

function DashboardHeader() {
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        setShowAlert(true);
    };

    const handleConfirmLogout = () => {
        // Aqui você pode adicionar lógica para fazer logout
        navigate('/home'); // Redireciona para a página home após logout
        setShowAlert(false);
    };

    const handleCancelLogout = () => {
        setShowAlert(false);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </div>
                
                <div className={styles.menu}>
                    <Link to="/dashboard/perfil" className={styles.animatedLink}>Perfil</Link>
                    <Link to="/dashboard/meus-grupos" className={styles.animatedLink}>Meus Grupos</Link>
                    <Link to="/dashboard/criar-grupo" className={styles.animatedLink}>Criar Grupo</Link>
                    <a className={styles.animatedLink} onClick={handleLogoutClick}>Sair</a>
                </div>
            </nav>

            {showAlert && (
                <Alert
                    onConfirm={handleConfirmLogout}
                    onCancel={handleCancelLogout}
                />
            )}
        </header>
    );
}

export default DashboardHeader;
