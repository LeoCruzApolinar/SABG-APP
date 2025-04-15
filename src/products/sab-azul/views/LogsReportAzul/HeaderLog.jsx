import React from 'react';
import styles from './index.module.css';

const HeaderLog = ({ usuario, terminal, ip, endpoint, fechaInicio, fechaFin, duracion, estado, resposecode }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.item}><strong>Usuario:</strong> {usuario}</div>
      <div className={styles.item}><strong>Terminal SN:</strong> {terminal}</div>
      <div className={styles.item}><strong>IP de la peticion:</strong> {ip}</div>
      <div className={styles.item}><strong>Endpoint:</strong> {endpoint}</div>
      <div className={styles.item}><strong>Fecha de inicio:</strong> {fechaInicio}</div>
      <div className={styles.item}><strong>Fecha de fin:</strong> {fechaFin}</div>
      <div className={styles.item}><strong>Duración:</strong> {duracion}</div>
      <div
        className={`${styles.estado} ${estado ? styles.estadoTrue : styles.estadoFalse}`}
      >
        {estado ? resposecode: resposecode}
      </div>
    </div>
  );
};

export default HeaderLog;
