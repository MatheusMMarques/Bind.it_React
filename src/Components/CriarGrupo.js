import React, { useState } from "react";
import styles from '../Css/CriarGrupo.module.css';

function CriarGrupo() {
  const [group, setGroup] = useState({
    name: '',
    game: '',
    maxMembers: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroup(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(group); // Certifique-se de que os dados do grupo estão sendo logados corretamente
  };

  return (
    <div className={styles.createGroupContainer}>
      <h2>Criar Novo Grupo</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome do Grupo</label>
          <input type="text" id="name" name="name" value={group.name} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="game">Jogo</label>
          <input type="text" id="game" name="game" value={group.game} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="maxMembers">Número Máximo de Integrantes</label>
          <input type="number" id="maxMembers" name="maxMembers" value={group.maxMembers} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Descrição</label>
          <textarea id="description" name="description" value={group.description} onChange={handleChange} required />
        </div>
        <button type="submit" className={styles.submitBtn}>Criar Grupo</button>
      </form>
    </div>
  );
}

export default CriarGrupo;
