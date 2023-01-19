import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Noteset - Sign In</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main>
        <SignIn />
      </main>
    </>
  );
};

const SignIn = () => {
  return (
    <div className="mt-20 flex flex-col text-left">
      <div className="m-auto rounded-3xl bg-green-600 px-20">
        <h3 className="mb-4 mt-16 text-2xl text-yellow-50">
          Sign in and start your workout.
        </h3>
        <div className="pr-7">
          <form action="#" className="flex flex-col">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@gmail.com"
              required
              className="mb-2 rounded-2xl p-3"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="mb-2 rounded-2xl p-3"
            />
            <button className="mb-10 mt-5 rounded-3xl bg-yellow-900 p-3 text-yellow-50">
              Sign In
            </button>
          </form>
        </div>
        <p className="mb-20 mt-2 text-yellow-50">
          New to Noteset? Sign up <Link href="/sign-up">here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Home;
