import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { NavBar } from "../components/sign-components/nav-bar";
import { ContentPage } from "../components/signed-in-components/content-page";
import { EmptyPage } from "../components/signed-in-components/empty-page";
import {
  EditBarIcon,
  LogsIcon,
  SignOutIcon,
  UserIcon,
} from "../components/svg";
import { useWorkouts } from "../hooks/useWorkouts";
import type { WorkoutProps } from "../types/types";

const SignedIn: NextPage = () => {
  const { workouts, reset, initial } = useWorkouts();
  const [showEditBar, setShowEditBar] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>

      <main className="flex min-h-screen flex-col items-center">
        <NavBar />
        {!workouts ? (
          <EmptyPage />
        ) : (
          <ContentPage
            workouts={workouts}
            showEditBar={showEditBar}
            closeEditBar={() => setShowEditBar(false)}
          />
        )}
        <BottomNavBar
          workouts={workouts}
          showEditBar={() => setShowEditBar(true)}
        />

        <Helpers reset={reset} initial={initial} />
      </main>
    </>
  );
};

const BottomNavBar = ({
  workouts,
  showEditBar,
}: {
  workouts: WorkoutProps[] | undefined;
  showEditBar: () => void;
}) => {
  return (
    <div className="flex w-full justify-center gap-12 bg-green-dark600 dark:bg-green-dark800 md:mx-auto md:w-1/2 md:rounded-t-xl md:pb-0 lg:w-2/5 2xl:w-1/3">
      <Link
        className="flex flex-col items-center p-2 text-slate-light50 dark:text-green-light400"
        href="/"
      >
        {UserIcon}
        <p className="text-[9px] uppercase leading-4 tracking-wider text-white">
          profile
        </p>
      </Link>
      <button
        disabled={!workouts}
        onClick={showEditBar}
        className="flex flex-col items-center p-2 text-slate-light50 disabled:opacity-30 dark:text-slate-light400"
      >
        {EditBarIcon}
        <p className="text-[9px] uppercase leading-4 tracking-wider text-white">
          edit
        </p>
      </button>
      <button className="flex flex-col items-center p-2 text-slate-light50 dark:text-slate-light400">
        {LogsIcon}
        <p className="text-[9px] uppercase leading-4 tracking-wider text-white">
          logs
        </p>
      </button>
      <Link
        className="flex flex-col items-center p-2 text-slate-light50 dark:text-green-light400"
        href="/"
      >
        {SignOutIcon}
        <p className="text-[9px] uppercase leading-4 tracking-wider text-white">
          sign out
        </p>
      </Link>
    </div>
  );
};

const Helpers = ({
  reset,
  initial,
}: {
  reset: () => void;
  initial: () => void;
}) => {
  return (
    <div className="absolute left-4 top-16 flex gap-2 md:top-20">
      <button
        onClick={reset}
        className="rounded-full bg-slate-light400 p-2 text-xs text-slate-light50"
      >
        R
      </button>
      <button
        onClick={initial}
        className="rounded-full bg-slate-light400 p-2 text-xs text-slate-light50"
      >
        S
      </button>
    </div>
  );
};

export default SignedIn;
