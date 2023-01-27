import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

const SignUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Noteset - Sign Up</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main>
        <SignUp />
      </main>
    </>
  );
};

const SignUp = () => {
  return (
    <div>
      <h1>Welcome to NoteSet</h1>
      <p>Create a new account.</p>
      <Link href="/">Go Back</Link>
    </div>
  );
};

export default SignUpPage;