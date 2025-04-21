import { useNavigate } from "react-router-dom";
import LogoAzul from "../assets/LogoAzul.png";
import LogoMiPunto from "../assets/LogoMiPunto.png";
import LogoAndroid from "../assets/LogoAndroid.png";
import HomeIcon from "../assets/HomeIcon.svg"; // Corrige el nombre a HomeIcon

export const MenuConfig = () => {
  const navigate = useNavigate();

  const subOptions = [
    {
      text: "Subagentes Azul",
      icon: LogoAzul,
      metodo: () => navigate("/sabazul"),
      child: [
        {
          text: "Gestión de usuarios",
          metodo: () => navigate("/GestionUsuario/Azul")
        },
        {
          text: "Logs",
          metodo: () => navigate("/LogsReportAzul"),
        },
      ],
    },
    {
      text: "Subagentes Android",
      icon: LogoAndroid,
      metodo: () => navigate("/sabandroid"),
      child: [],
    },
  ];

  const mainOption = [
    {
      text: "Inicio",
      icon: HomeIcon,
      metodo: () => navigate("/"),
    },
    {
      text: "MiPunto",
      icon: LogoMiPunto,
      metodo: null, // ya que tiene subOpciones, no se necesita metodo principal
      child: subOptions,
    },
  ];

  return { mainOption };
};
