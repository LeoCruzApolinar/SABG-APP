import React from "react";
import Styles from "./index.module.css";
import Table from "../../components/Table/Table";
import { UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";

const GestionUsuario = () => {
  return (
    <div className={Styles.gestionUsuarioContenedor}>
      <div
        className={Styles.gestionUsuarioContenedorBotonAgregar}>
        <Button
          icon={<UserAddOutlined />}
          size={"large"}
          className={Styles.botonAgregarUsuario}
        >
          Agregar un nuevo usuario
        </Button>
      </div>

      <Table />
    </div>
  );
};

export default GestionUsuario;
