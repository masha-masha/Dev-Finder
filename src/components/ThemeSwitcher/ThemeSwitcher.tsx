import { useEffect, useState } from "react";
import iconMoon from "../../assets/icon-moon.svg";
import iconSun from "../../assets/icon-sun.svg";

import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
 const [isDark, setIsDark] = useState(false);
 const themeText = isDark ? "Dark" : "Light";
 const ThemeIcon = isDark ? (
  <img src={iconSun} alt="icon sun" className={styles.icon} />
 ) : (
  <img src={iconMoon} alt="icon moon" className={styles.icon} />
 );

 useEffect(() => {
  document.body.setAttribute("data-theme", isDark ? "dark" : "light");
 });

 return (
  <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
   <span>{themeText}</span>
   {ThemeIcon}
  </div>
 );
};
