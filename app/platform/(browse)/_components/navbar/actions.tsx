import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { Clapperboard, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const Actions = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      <Link className="text-muted-foreground hover:text-primary" href={"/"}>
        <Home className="h-4 w-4 lg:mr-2" />
      </Link>
      {!user && (
        <SignInButton>
          <Button size="sm" variant="primary">
            Login
          </Button>
        </SignInButton>
      )}
      {!!user && (
        <>
          <Button
            size="sm"
            variant="ghost"
            asChild
            className="text-muted-foreground hover:text-primary"
          >
            <Link href={`/platform/user/${user.username}`}>
              <Clapperboard className="h-4 w-4 lg:mr-2" />
              <span className="hidden lg:block">Dashboard</span>
            </Link>
          </Button>
          <UserButton />
        </>
      )}
    </div>
  );
};

export default Actions;
