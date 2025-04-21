// src/components/Layout/MainLayout.js
import React from "react";
import Style from "./index.module.css";
import Menu from "../../components/Menu/Menu.jsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className={Style.layoutContainer}>
      <aside className={Style.sidebar}>
        <Menu />
      </aside>

      <main className={Style.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
