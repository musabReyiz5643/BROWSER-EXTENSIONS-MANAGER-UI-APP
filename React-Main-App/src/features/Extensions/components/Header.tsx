import { IconMoon, IconSun, Logo } from "@/assets/icons";
import { useState } from "react";
import Button from "./ui/Button";
import { handleMode } from "@/utils/handle-mode";
import useDataStore from "../store/useDataStore";
import { useShallow } from "zustand/shallow";

const Header = () => {
  const { setActive, active } = useDataStore(
    useShallow((state) => ({
      setActive: state.setActive,
      active: state.active,
    })),
  );

  const title = "Extensions List";
  const [isLight, setIsLight] = useState(false);

  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full h-auto p-3 flex items-center  justify-between shadow-xl box-shadow bg-surface rounded-xl border border-border ">
        <div className="w-auto h-auto">
          <Logo className="text-neutral-900 dark:text-neutral-0" />
        </div>
        <div
          className="flex items-center justify-center p-1 rounded-2xl  focus-within:ring-2 ring-red-500"
          tabIndex={0}
        >
          <div
            className="w-12 h-12 flex items-center justify-center bg-toggle-mode rounded-xl cursor-pointer hover:bg-toggle-off transition-colors "
            onClick={() => {
              setIsLight((prev) => !prev);
              handleMode();
            }}
          >
            {isLight ? <IconSun className="text-white" /> : <IconMoon />}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center md:justify-between gap-4 flex-col md:flex-row">
        <h1 className="text-text-primary text-center text-3xl font-bold my-10">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-5">
          <Button
            type="button"
            className={`
              ${
                active === "all" ? "bg-red-500" : "bg-white dark:bg-surface-alt"
              }
				hover:opacity-50 transition-opacity
					`}
            onClick={() => setActive("all")}
          >
            All
          </Button>
          <Button
            type="button"
            onClick={() => setActive("active")}
            className={`
              ${
                active === "active"
                  ? "bg-red-500"
                  : "bg-white dark:bg-surface-alt"
              }
				hover:opacity-50 transition-opacity
					`}
          >
            Active
          </Button>
          <Button
            type="button"
            onClick={() => setActive("inactive")}
            className={`
              ${
                active === "inactive"
                  ? "bg-red-500"
                  : "bg-white dark:bg-surface-alt"
              }
				hover:opacity-50 transition-opacity
					`}
          >
            InActive
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
