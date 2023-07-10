"use client";

import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Hello</h1>
      {!session && <>You'r Logged Out !!</>}

      {session && (
        <Image
          src={session?.user?.image}
          alt="dp"
          width={50}
          height={50}
          className="rounded-full object-contain shadow-lg"
        />
      )}

      <p>{session?.user?.email}</p>

      {session && (
        <p>
          Last login:{" "}
          {session.user.lastLogin
            ? new Date(session.user.lastLogin).toLocaleString()
            : "N/A"}
        </p>
      )}
      <br />
      {session ? (
        <>
          <Link href="/login">
            <button
              onClick={() => signOut()}
              className="flex w-auto justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Sign Out
            </button>
          </Link>
        </>
      ) : (
        <>
          <Link href="/login">
            <button className="flex w-auto justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
              Please Sign In
            </button>
          </Link>
        </>
      )}
    </>
  );
};

export default Dashboard;
