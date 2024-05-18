import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import LayoutAppBar from "../@core/layouts/components/vertical/appBar";
import { useState } from "react";
import { useSettings } from "../@core/hooks/useSettings";
import AppBarContent from "../components/organisms/layouts/components/vertical/AppBarContent";
import { SideBar } from "../components/organisms/layouts/Sidebar/Sidebar";
import OutsideClickHandler from "react-outside-click-handler";

export const Root = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const { settings, saveSettings } = useSettings();
  const [toggled, setToggled] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [openSide, setOpenSide] = useState(false);

  const toggleNavVisibility = () => setNavVisible(!navVisible);
  const handleClickOutside = () => {
    setOpenSide(false);
  };

  // const handleCollapsedSideBar = () => {
  //   setSidebarCollapsed(!isSidebarCollapsed);
  // };
  return (
    <div className="flex ">
      <div className={toggled ? "w-[%]" : collapsed ? "w-[6%]" : "w-[250px]"}>
        <OutsideClickHandler onOutsideClick={handleClickOutside}>
          <div className="fixed">
            <SideBar
              // setCollapsed={setCollapsed}
              collapsed={collapsed}
              setToggled={setToggled}
              toggled={toggled}
            />
          </div>
        </OutsideClickHandler>
      </div>
      <div className={` main_container flex-grow-[1] w-[80%] `}>
        <Box
          sx={{
            flexGrow: 1,
            minWidth: 0,
            // display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
          }}
        >
          <LayoutAppBar
            toggleNavVisibility={toggleNavVisibility}
            settings={settings}
            appBarContent={
              <AppBarContent
                settings={settings}
                isSidebarCollapsed={isSidebarCollapsed}
                toggled={toggled}
                setSidebarCollapsed={setSidebarCollapsed}
                saveSettings={saveSettings}
                setToggled={setToggled}
                {...props}
              />
            }
          />
          <main className="flex p-6  flex-col justify-between !pb-1 layout-page-content  md:max-h-[91vh] md:max-w-full overflow-y-scroll flex-grow w-full mx-auto transition-padding">
            <Outlet />
          </main>
        </Box>
      </div>
    </div>
  );
};
