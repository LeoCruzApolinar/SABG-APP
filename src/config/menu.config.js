import { useNavigate } from "react-router-dom";
import LogoAzul from "../assets/LogoAzul.png";
import LogoMiPunto from "../assets/LogoMiPunto.png"
import LogoAndroid from "../assets/LogoAndroid.png";

export const MenuConfig = () => {
  const navigate = useNavigate();

  // Configuración del menú
  const mainOption = {
    text: "MiPunto",
    icon: LogoMiPunto,
  };

  const subOptions = [
    {
      text: "Subagentes Azul",
      icon: LogoAzul,
      metodo: () => navigate("/sabazul"),
    },
    {
      text: "Subagentes Android",
      icon: LogoAndroid,
      metodo: () => navigate("/sabandroid"),
    },
  ];

  return { mainOption, subOptions };
};