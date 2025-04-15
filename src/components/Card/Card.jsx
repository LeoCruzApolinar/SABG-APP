// src/components/Card.jsx
import React, { useState, useEffect } from "react";
import Styles from "./index.module.css";

const Card = ({ title, value }) => {
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 segundos
    const increment = end / (duration / 100); // Aproximadamente cada 30ms
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayedValue(end);
        clearInterval(timer);
      } else {
        setDisplayedValue(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer); // Limpiar el timer al desmontar
  }, [value]);

  return (
    <div className={Styles.card}>
      <h2 className={Styles.title}>{title}</h2>
      <div className={Styles.value}>{displayedValue}</div>
    </div>
  );
};

export default Card;
