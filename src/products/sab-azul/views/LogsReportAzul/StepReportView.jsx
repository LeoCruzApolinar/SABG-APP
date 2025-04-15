import React from "react";
import HeaderLog from "./HeaderLog";
import styles from "./index.module.css";
import CodeViewer from "./CodeViewer";
import { Flex } from "antd";

const StepReportView = ({ step }) => {

  return (
    <div>
      <div style={{ padding: "2%", display: "flex", gap: "2%", color: "black" }}>
        <div className={styles.headerContainer}>
          <div className={styles.item}>
            <strong>Metodo: </strong> {step.Method}
          </div>
          <div className={styles.item}>
            <strong>Llamado de: </strong> {step.CalledFrom}
          </div>
          <div className={styles.item}>
            <strong>Descripción: </strong> {step.Description}
          </div>
          <div className={styles.item}>
            <strong>Error: </strong> {step.Error ? "Sí" : "No"}
          </div>
          <div className={styles.item}>
            <strong>Inicio: </strong> {step.TimeStart}
          </div>
          <div className={styles.item}>
            <strong>Fin: </strong> {step.TimeEnd}
          </div>
          <div className={styles.item}>
            <strong>Duración: </strong> {step.Duration} segundos
          </div>
        </div>
      </div>

      <div className={styles.stepReportView}>
        <div style={{ flex: 1 }}>
          <CodeViewer title={"Entrada"} code={step.Entry}/>
        </div>
        <div style={{ flex: 1 }}>
          <CodeViewer title={"Salida"} code={step.Result} />
        </div>
      </div>
    </div>
  );
};

export default StepReportView;
