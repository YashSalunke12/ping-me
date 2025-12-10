"use client";

import { Button } from "@workspace/ui/components/button";
import { MessagesSquareIcon, ArrowUpRight } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const session = useSession();
  const handleLogOut = async () => {
    await signOut({
      redirectTo: "/signin",
    });
  };

  return (
    <div className="fixed top-2 bg-transparent w-full z-50">
      <div
        className={`max-w-[70%] bg-transparent border mx-auto flex items-center justify-between rounded-xl relative backdrop-blur-sm px-4 md:px-6 py-2 md:py-4 container`}
      >
        <Link href={"/"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <MessagesSquareIcon />
            <h1 className="font-bold">PING-ME</h1>
          </div>
        </Link>

        <div>
          {session.data ? (
            <div className="flex items-center gap-2">
              {session.data?.user?.image && (
                <Image
                  className="w-8 h-8 rounded-full"
                  src={session.data.user.image}
                  alt="user-image"
                  width={32}
                  height={32}
                />
              )}
              <div onClick={handleLogOut} className="cursor-pointer">
                <Button className="cursor-pointer" variant="outline">
                  Logout
                </Button>
              </div>
            </div>
          ) : (
            <Link href={"/signin"}>
              <Button className="cursor-pointer" variant="outline">
                Get Started <ArrowUpRight />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
