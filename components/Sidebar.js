import MemberProfile from "./MemberProfile";
import NavLinks from "./NavLinks";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <div className="px-4 w-80 py-12 bg-base-300 min-h-full grid grid-rows-[auto,1fr,auto]">
      <SidebarHeader />
      <NavLinks />
      <MemberProfile />
    </div>
  );
};

export default Sidebar;
