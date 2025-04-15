import React from "react";
import Styles from "./index.module.css";
import SubMenu from "./SubMenu";
import { MenuConfig } from "../../config/menu.config";
import Logo from "../../assets/LogoGCS.svg";


const Menu = () => {
    
  const { mainOption, subOptions } = MenuConfig();

  return (
    <div className={Styles.menuContenedor}>
      <div className={Styles.menuContenedorLogo}>
      <img src={Logo} alt="Logo GCS" className={Styles.menuLogo} />
      </div>
      <SubMenu Opcion={mainOption} SubOpciones={subOptions} />
    </div>
  );
};

export default Menu;
