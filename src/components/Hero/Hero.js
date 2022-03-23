import React, { useEffect, useState, useRef } from "react";
import styles from "./hero.module.scss";

const Hero = ({ children }) => {
  const [lightOn, setLightOn] = useState(true);
  const [powerOn, setPowerOn] = useState(true);

  const getNeonClass = () => {
    return lightOn ? "neon-on" : "neon-off";
  };

  const getFade = () => {
    return powerOn ? "neon-fade" : "";
  };

  const handleClick = () => {
    setLightOn(!powerOn);
    setPowerOn(!powerOn);
  };

  let lightOnRef = useRef(lightOn);
  let powerOnRef = useRef(powerOn);

  useEffect(() => {
    lightOnRef.current = lightOn;
  }, [lightOn]);
  useEffect(() => {
    powerOnRef.current = powerOn;
  }, [powerOn]);

  useEffect(() => {
    if (powerOn) {
      const interval = setInterval(() => {
        setTimeout(() => setLightOn(powerOnRef.current ? !lightOnRef.current : false), 0);
        setTimeout(() => setLightOn(powerOnRef.current ? !lightOnRef.current : false), 500);
        setTimeout(() => setLightOn(powerOnRef.current ? !lightOnRef.current : false), 1100);
        setTimeout(() => setLightOn(powerOnRef.current ? !lightOnRef.current : false), 1200);
        setTimeout(() => setLightOn(powerOnRef.current ? !lightOnRef.current : false), 1300);
        setTimeout(() => setLightOn(powerOnRef.current ? !lightOnRef.current : false), 1700);

        setTimeout(() => setLightOn(powerOnRef.current ? !lightOnRef.current : false), 10000);
        setTimeout(() => setLightOn(powerOnRef.current ? !lightOnRef.current : false), 11000);
      }, 20000);
      return () => clearInterval(interval);
    }
  }, [powerOn]);

  return (
    <div className={`${styles.main} ${getNeonClass()} ${getFade()}`}>
      {children}
      <div className={styles["button-container"]}>
        <button
          className={`${styles.button} ${powerOn && "neon-box-shadow"} ${
            powerOn && "neon-box-shadow-fade"
          } neon-on-white`}
          onClick={handleClick}
        >
          Turn {powerOn ? "Off" : "On"}
        </button>
      </div>
    </div>
  );
};

export default Hero;
