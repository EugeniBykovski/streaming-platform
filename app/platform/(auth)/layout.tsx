import React from "react";
import { Logo } from "./_components/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex justify-center items-center flex-col space-y-8">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
