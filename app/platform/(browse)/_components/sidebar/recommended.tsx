"use client";

import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";
import { FC } from "react";
import UserItem, { UserItemSkeleton } from "./user-item";

interface RecommmendedProps {
  data: User[];
}

const Recommended: FC<RecommmendedProps> = ({ data }) => {
  const { collapsed } = useSidebar((state) => state);
  const showLabel = !collapsed && data.length > 0;

  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-xm text-muted-foreground">Recommended</p>
        </div>
      )}
      <ul className="px-2 space-y-2">
        {data.map(({ id, username, imageUrl }) => (
          <UserItem
            key={id}
            username={username}
            imageUrl={imageUrl}
            isLive={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default Recommended;

export const RecommendedSkeleton = () => {
  return (
    <ul className="px-2">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
