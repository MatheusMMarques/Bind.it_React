import React, { useState, useEffect } from "react";
import styles from '../Css/MeusGrupos.module.css';

function MeusGrupos() {
  const [groups, setGroups] = useState([]);
  const [editGroup, setEditGroup] = useState(null);

  useEffect(() => {
    // Aqui você pode buscar os grupos do back-end
    const fetchedGroups = [
      { id: 1, name: "Grupo 1", game: "CS:GO", maxMembers: 5, description: "Grupo de CS:GO para campeonatos." },
      { id: 2, name: "Grupo 2", game: "Valorant", maxMembers: 5, description: "Grupo de Valorant para partidas." },
    ];
    setGroups(fetchedGroups);
  }, []);

  const handleEdit = (group) => {
    setEditGroup(group);
  };

  const handleDelete = (id) => {
    setGroups(groups.filter(group => group.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditGroup(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    setGroups(groups.map(group => (group.id === editGroup.id ? editGroup : group)));
    setEditGroup(null);
  };

  return (
    <div className={styles.myGroupsContainer}>
      <h2>Meus Grupos</h2>
      {editGroup ? (
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome do Grupo</label>
            <input type="text" id="name" name="name" value={editGroup.name} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="game">Jogo</label>
            <input type="text" id="game" name="game" value={editGroup.game} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="maxMembers">Número Máximo de Integrantes</label>
            <input type="number" id="maxMembers" name="maxMembers" value={editGroup.maxMembers} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Descrição</label>
            <textarea id="description" name="description" value={editGroup.description} onChange={handleChange} required />
          </div>
          <button type="button" className={styles.saveBtn} onClick={handleSave}>Salvar</button>
        </form>
      ) : (
        <ul className={styles.groupList}>
          {groups.map(group => (
            <li key={group.id} className={styles.groupItem}>
              <h3>{group.name}</h3>
              <p>Jogo: {group.game}</p>
              <p>Máx. Integrantes: {group.maxMembers}</p>
              <p>{group.description}</p>
              <button onClick={() => handleEdit(group)} className={styles.editBtn}>Editar</button>
              <button onClick={() => handleDelete(group.id)} className={styles.deleteBtn}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MeusGrupos;
