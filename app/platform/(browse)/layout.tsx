import React from "react";
import Header from "./_components/navbar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex h-full pt-20">{children}</div>
    </>
  );
};

export default BrowseLayout;
