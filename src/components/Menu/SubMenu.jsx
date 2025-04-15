import React, { useState, useEffect } from 'react';
import Styles from './index.module.css';

const SubMenu = ({ Opcion: { icon, text }, SubOpciones }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const sidebar = document.querySelector('aside'); // puedes ajustar si el selector es otro
    if (!sidebar) return;

    const observer = new ResizeObserver(() => {
      setIsOpen(false); 
    });

    observer.observe(sidebar);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={Styles.subMenuContainer}>
      <div className={Styles.subMenuHeader} onClick={toggleDropdown}>
        <img src={icon} alt="Icono principal" className={Styles.subMenuIcon} />
        <span>{text}</span>
        <span className={Styles.subMenuArrow}>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div>
          {SubOpciones.map(({ icon, text, metodo }, i) => (
            <div key={i} className={Styles.subMenuItem} onClick={metodo}>
              <img src={icon} alt="Icono" className={Styles.subMenuIcon} />
              <span>{text}</span>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default SubMenu;
