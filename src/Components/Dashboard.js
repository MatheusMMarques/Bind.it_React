import React from 'react';
import DashboardHeader from './DashboardHeader'; // Importe o cabeçalho do Dashboard
import styles from '../Css/Dashboard.module.css';

function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <DashboardHeader />
            <div className={styles.content}>
                {/* Conteúdo principal do dashboard */}
            </div>
        </div>
    );
}

export default Dashboard;
