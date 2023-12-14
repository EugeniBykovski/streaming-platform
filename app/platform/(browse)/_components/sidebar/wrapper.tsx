"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { FC } from "react";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { useIsClient } from "usehooks-ts";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  if (!isClient)
    return (
      <aside className="fixed left-0 flex flex-col lg:w-60 w-[70px] h-full bg-background border-r border-[#2d2e35] z-50">
        <ToggleSkeleton />
        <RecommendedSkeleton />
      </aside>
    );

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2d2e35] z-50",
        collapsed && "w-[72px]"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
