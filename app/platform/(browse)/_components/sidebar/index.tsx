import { getRecommended } from "@/lib/recommended-service";
import Recommended, { RecommendedSkeleton } from "./recommended";
import Toggle, { ToggleSkeleton } from "./toggle";
import Wrapper from "./wrapper";

const Sidebar = async () => {
  const recommended = await getRecommended();

  return (
    <Wrapper>
      <Toggle />
      <div className="pt-4 space-y-4 lg:pt-0">
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r z-50 border-[#2d2e35]">
      <ToggleSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};
