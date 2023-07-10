"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Next-Auth</p>
      </Link>

      <Link href={session ? "/dashboard" : " /login"}>
        <button type="button" onClick={() => {}} className="black_btn">
          {session ? (
            <>{session?.user?.email}</>
          ) : (
            <>
              <h1>Sign in</h1>
            </>
          )}
        </button>
      </Link>
      {/* {
                session && <>
                    {
                        session?.user?.email
                    }
                </>
            } */}
    </nav>
  );
};

export default Nav;
