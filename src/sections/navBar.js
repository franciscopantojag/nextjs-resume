import styles from "../styles/navBar.module.css";
import scrollIt from "../components/helpers";
import Hamburger from "../components/hamburger";
import { Contexto } from "../appContext";
import { useContext, useEffect } from "react";

export default function NavBar() {
  const { navResOpen, setNavResOpen } = useContext(Contexto);
  const handleResLink = (link) => {
    scrollIt(document.querySelector(link.target));
    if (navResOpen) {
      setNavResOpen(() => false);
    }
  };

  const navLinks = [
    {
      label: "about me",
      target: "#about",
    },
    {
      label: "experience",
      target: "#experience",
    },
    {
      label: "education",
      target: "#education",
    },
    {
      label: "skills",
      target: "#skills",
    },
  ];

  return (
    <>
      <nav className={styles.navBarRes}>
        <Hamburger />
        <ul
          id="navBarResUl"
          className={`${styles.navBarResUl}${
            navResOpen ? ` ${styles.navBarResUlOpen}` : ""
          }`}
        >
          {navLinks.map((link, b) => (
            <li key={b}>
              <a onClick={() => handleResLink(link)}>
                {link.label ?? link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className={`container ${styles.navBar}`}>
        <div className={`containerCont ${styles.navBarCont}`}>
          <ul>
            {navLinks.map((link, b) => (
              <li key={b}>
                <a
                  onClick={() => scrollIt(document.querySelector(link.target))}
                >
                  {link.label ?? link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
