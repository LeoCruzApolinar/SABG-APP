// src/components/Layout/MainLayout.js
import React from "react";
import { Link } from "react-router-dom";
import Style from "./index.module.css";
import Menu from "../../components/Menu/Menu.jsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className={Style.layoutContainer}>
      
      <aside className={Style.sidebar}>
        <Menu />
      </aside>

      <header></header>

      <main className={Style.mainContent}>
        {/* Aquí se renderizarán las rutas hijas */}
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default MainLayout;
