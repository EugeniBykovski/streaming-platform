import React, { Suspense } from "react";
import Header from "./_components/navbar";
import Sidebar, { SidebarSkeleton } from "./_components/sidebar";
import Container from "./_components/container";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
