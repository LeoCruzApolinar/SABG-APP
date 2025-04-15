import React, { useEffect, useState } from "react";
import Styles from "./index.module.css";

const StackedBar = ({ data, titulo }) => {
  const total = data.nuevas + data.repetidas;
  const [percentageLeft, setPercentageLeft] = useState(0);
  const [percentageRight, setPercentageRight] = useState(100);

  const [nuevasCount, setNuevasCount] = useState(0);


  useEffect(() => {
    const leftPercentage = (data.nuevas / total) * 100;
    const rightPercentage = 100 - leftPercentage;

    // Dispara la animación de ancho (controlado por CSS transition)
    setPercentageLeft(leftPercentage);
    setPercentageRight(rightPercentage);

    // Animación de números (sincronizada con CSS: 1000ms)
    const duration = 1000;
    const start = performance.now();

    const animateNumbers = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      setNuevasCount(Math.floor(data.nuevas * progress));


      if (progress < 1) {
        requestAnimationFrame(animateNumbers);
      }
    };

    requestAnimationFrame(animateNumbers);
  }, [data, total]);

  return (
    <div className={Styles.stackedBar}>
      <h2 className={Styles.title}>{titulo}</h2>
      <div className={Styles.container}>
        <div
          className={Styles.colLeft}
          style={{ width: `${percentageLeft}%` }}
        >
          <div className={Styles.value}>{nuevasCount}</div>
        </div>
        <div
          className={Styles.colRight}
          style={{ width: `${percentageRight}%` }}
        >
          <div className={Styles.value}>{data.repetidas}</div>
        </div>
      </div>
    </div>
  );
};

export default StackedBar;
