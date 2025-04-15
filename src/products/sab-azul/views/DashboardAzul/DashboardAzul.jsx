// src/pages/DashboardAzul.jsx
import React from "react";
import Styles from "./index.module.css";
import Card from "../../../../components/Card/Card.jsx";
import StackedBar from "../../../../components/StackedBar/StackedBar.jsx";
import LogoAzul from "../../../../assets/LogoAzul.png";
const DashboardAzul = () => {
  
  const data = {
    totalUsuarios: 30,
    totalTerminales: 30,
    totalAgencias: 30,
    agenciasUltimas24h: {
      nuevas: 15,
      repetidas: 30,
    },
  };

  return (
    <div className={Styles.dashboard}>
      <div className={Styles.header}>
        <h1 className={Styles.title}>Subagentes bancarios AZUL</h1>
        <img src={LogoAzul} alt="Logo GCS" className={Styles.logo} />
      </div>

      <div className={Styles.grid}>
        <Card title="Usuarios totales" value={data.totalUsuarios} />
        <Card title="Terminales totales" value={data.totalTerminales} />
        <Card title="Terminales totales" value={data.totalTerminales} />
        <Card title="Agencia totales" value={data.totalAgencias} />
        <StackedBar data={data.agenciasUltimas24h} titulo={"Agencias activas las ultimas 24H"} />
      </div>
    </div>
  );
};

export default DashboardAzul;
