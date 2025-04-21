import React, { useState, useEffect } from 'react';
import Styles from './index.module.css';

const SubMenu = ({ Opcion: { icon, text, metodo: metodoOp }, SubOpciones }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openItems, setOpenItems] = useState({}); // Para manejar múltiples niveles

  const toggleDropdown = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const sidebar = document.querySelector('aside');
    if (!sidebar) return;

    const observer = new ResizeObserver(() => setIsOpen(false));
    observer.observe(sidebar);

    return () => observer.disconnect();
  }, []);

  const toggleChild = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderSubOptions = (options, level = 1) => {
    return options.map(({ icon, text, metodo, child = [] }, index) => {
      const hasChild = child.length > 0;
      const isItemOpen = openItems[`${level}-${index}`];

      return (
        <div key={`${level}-${index}`} className={Styles[`subMenuLevel${level}`]}>
          <div
            className={Styles.subMenuItem}
            onClick={(e) => {
              e.stopPropagation();
              hasChild ? toggleChild(`${level}-${index}`) : metodo();
            }}
          >
            {icon && (
              <img src={icon} alt="Icono" className={Styles.subMenuIcon} />
            )}
            <span>{text}</span>
            {hasChild && (
              <span className={Styles.subMenuArrow}>
                {isItemOpen ? '▲' : '▼'}
              </span>
            )}
          </div>

          {isItemOpen && hasChild && (
            <div className={Styles.childContainer}>
              {renderSubOptions(child, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className={Styles.subMenuContainer}>
      {SubOpciones?.length ? (
        <div className={Styles.subMenuHeader} onClick={toggleDropdown}>
          <img src={icon} alt="Icono principal" className={Styles.subMenuIcon} />
          <span>{text}</span>
          <span className={Styles.subMenuArrow}>{isOpen ? '▲' : '▼'}</span>
        </div>
      ) : (
        <div className={Styles.subMenuHeader} onClick={metodoOp}>
          <img src={icon} alt="Icono principal" className={Styles.subMenuIcon} />
          <span>{text}</span>
        </div>
      )}

      {isOpen && SubOpciones && renderSubOptions(SubOpciones)}
    </div>
  );
};

export default SubMenu;
