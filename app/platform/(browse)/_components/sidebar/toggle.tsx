"use client";

import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSidebar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import React from "react";

const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);
  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed && (
        <div className="p-3 pl-2 mb-2 hidden lg:flex w-full items-center justify-center">
          <Hint label={label} side="right" asChild>
            <Button
              onClick={onExpand}
              className="h-auto ml-auto"
              variant="ghost"
            >
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full">
          <p className="text-primary font-semibold">For you</p>
          <Hint label={label} side="right" asChild>
            <Button
              onClick={onCollapse}
              className="h-auto p-2 ml-auto"
              variant="ghost"
            >
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};

export default Toggle;

export const ToggleSkeleton = () => {
  return (
    <div className="w-full p-3 pl-6 mb-2 hidden lg:flex items-center justify-between">
      <Skeleton className="h-6 w-[100px]" />
      <Skeleton className="h-6 w-6" />
    </div>
  );
};
