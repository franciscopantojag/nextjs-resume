import Head from "next/head";
import NavBar from "../sections/navBar";
import Banner from "../sections/banner";
import AboutMe from "../sections/aboutMe";
import Education from "../sections/education";
import Experience from "../sections/experience";
import Skills from "../sections/skills";
import Modal from "../components/modal";
import { Contexto } from "../appContext";
import { useContext } from "react";

export default function Home({ secret }) {
  const { navResOpen, setNavResOpen } = useContext(Contexto);
  const closeNavRes = () => {
    if (navResOpen) {
      setNavResOpen(() => false);
    }
  };
  return (
    <>
      <Head>
        <meta name="og:title" content="Francisco Pantoja" />
        <title>Francisco Pantoja</title>
        <meta
          name="description"
          content="Hey, this is my personal website. You can take a look at my resume, download my CV and see how you can contact me"
        />
      </Head>
      <Modal secret={secret} />
      <NavBar />
      <main onClick={closeNavRes}>
        <Banner />
        <AboutMe />
        <section className="container">
          <div className="containerCont rowFlexRes breakExpEduc">
            <Experience />
            <Education />
          </div>
        </section>
        <div id="skills" className="target"></div>

        <Skills />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const secret = process.env.SECRET;
  return {
    props: {
      secret,
    },
  };
}
