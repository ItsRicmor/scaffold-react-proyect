import React from 'react';
import styles from './styles.module.scss';

export default ({ item: { id, title, completed } }) => (
  <div className={styles.wrapper}>
    <h3 className={styles.header}>{title}</h3>
    <p className={styles.text}>{completed ? 'Completada' : 'Incompleta'}</p>
  </div>
);
