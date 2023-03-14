import { type NextPage } from "next";
import Head from "next/head";
import BackgroundPattern from "../components/svg-components/background-pattern";
import { ContentWrapper } from "../components/wrappers";
import NavBar from "../components/sign-components/nav-bar";
import SignContent from "../components/sign-components/sign-content";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>Noteset - Sign In</title>
        <meta
          name="description"
          content="Personalized workout tracker - sign in"
        />
      </Head>
      <main>
        <BackgroundPattern />
        <ContentWrapper>
          <NavBar />
          <SignContent page="sign in" />
        </ContentWrapper>
      </main>
    </>
  );
};

export default Home;
