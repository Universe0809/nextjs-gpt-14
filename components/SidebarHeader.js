import ThemeToogle from "./ThemeToogle";
import { SiOpenaigym } from "react-icons/si";

const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <SiOpenaigym className="w-10 h-10 text-primary" />
      <h2 className="text-xl font-extrabold text-primary">GPTGenius</h2>
      <ThemeToogle />
    </div>
  );
};

export default SidebarHeader;