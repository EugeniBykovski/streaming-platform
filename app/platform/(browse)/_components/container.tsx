"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import React, { FC, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
  const matches = useMediaQuery("(max-width: 1024px)");

  useEffect(
    () => (matches ? onCollapse() : onExpand()),
    [matches, onCollapse, onExpand]
  );

  return (
    <div
      className={cn(
        "flex-1 bg-gradient-to-r from-neutral-900 to-neutral-800",
        collapsed ? "ml-[75px]" : "ml-[75px] lg:ml-60"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
