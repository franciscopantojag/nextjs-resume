import styles from "../styles/hamburger.module.css";
import { Contexto } from "../appContext";
import { useContext } from "react";

export default function Hamburger() {
  const { navResOpen, setNavResOpen } = useContext(Contexto);
  const toggleNavRes = () => {
    setNavResOpen((prev) => !prev);
  };
  return (
    <section onClick={toggleNavRes} className={styles.hamburgerContainer}>
      <ul className={styles.hamburger}>
        <li className={navResOpen ? styles.hamLineCross1 : ""}></li>
        <li className={navResOpen ? styles.hamLineCross2 : ""}></li>
        <li className={navResOpen ? styles.hamLineCross3 : ""}></li>
      </ul>
    </section>
  );
}
