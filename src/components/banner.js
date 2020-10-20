import styles from "../styles/banner.module.css";
import Linkedin from "../svg/linkedin.js";
import Github from "../svg/github.js";
export default function Banner() {
  const name = "Francisco Pantoja";
  const email = "franciscopantojag98@gmail.com";
  return (
    <section className={`container ${styles.banner}`}>
      <div className={`containerCont ${styles.bannerCont}`}>
        <section className={styles.bannerContLeft}>
          <h2>
            Hi there{" "}
            <span role="img" aria-label="hello">
              👋
            </span>
            , I'm
          </h2>
          <h1>{name}</h1>
          <h2>
            Web Developer |
            <span className={styles.brH2}>
              <br />
            </span>{" "}
            Bachelor of Engineering
          </h2>
          <h3 className={`${styles.skills}`}>HTML / CSS / JS / React</h3>
          <h3 className={`${styles.email}`}>{email}</h3>
          <div className={`${styles.buttons}`}>
            <div className={`${styles.firstRow}`}>
              <button className={`${styles.but}`}>DOWNLOAD RESUME</button>
              <button className={`${styles.svgBut}`}>
                <Linkedin />
              </button>
              <button className={`${styles.svgBut}`}>
                <Github />
              </button>
            </div>

            <button className={`${styles.but}`}>CONTACT ME</button>
          </div>
        </section>
        <figure className={styles.bannerContRight}>
          <img src="/images/profilePicture.jpg" />
        </figure>
      </div>
    </section>
  );
}
