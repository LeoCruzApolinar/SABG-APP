import React from "react";
import Styles from "./index.module.css";
import SubMenu from "./SubMenu";
import { MenuConfig } from "../../config/menu.config";
import Logo from "../../assets/LogoGCS.svg";

const Menu = () => {
  const { mainOption } = MenuConfig();



  return (
    <div className={Styles.menuContenedor}>
      <div className={Styles.menuContenedorLogo}>
        <img src={Logo} alt="Logo GCS" className={Styles.menuLogo} />
      </div>
      {mainOption.map((op, index) => (
        <SubMenu key={index} Opcion={op} SubOpciones={op.child} />
      ))}
    </div>
  );
};

export default Menu;
