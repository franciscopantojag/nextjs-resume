import styles from "../styles/navBar.module.css";

export default function NavBar() {
  const navLinks = ["about me", "experience", "education", "skills"];
  return (
    <nav className={styles.navBar}>
      <section className={styles.navBarRes}>
        <div></div>
        <ul>
          {navLinks.map((link, b) => (
            <li key={b}>
              <a>{link}</a>
            </li>
          ))}
        </ul>
      </section>
      <div>
        <ul>
          {navLinks.map((link, b) => (
            <li key={b}>
              <a>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
