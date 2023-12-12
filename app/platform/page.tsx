import { UserButton } from "@clerk/nextjs";
import React from "react";

const PlatformPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2>Dashboard</h2>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default PlatformPage;
