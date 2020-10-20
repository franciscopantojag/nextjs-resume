import Head from "next/head";
import NavBar from "../components/navBar";
import Banner from "../components/banner";

export default function Home() {
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

      <NavBar />
      <main>
        <Banner />
      </main>
    </>
  );
}
