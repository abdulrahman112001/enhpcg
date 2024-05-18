import { useTheme } from "@mui/material/styles";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import IconifyIcon from "../../../../@core/components/icon";
import { SideBarItems } from "../../../../data/sidebar";
import { useIsRTL } from "../../../../@core/hooks";
type SideBar_TP = {
  collapsed?:boolean
  setToggled?:Dispatch<SetStateAction<boolean>>
  toggled?:boolean
}
export const SideBar = ({
  // setCollapsed,
  collapsed,
  setToggled,
  toggled,
}: SideBar_TP) => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const isRTL = useIsRTL();
  const [opened, setOpened] = useState({});
  const theme = useTheme();

  const path = location.pathname;

  const goTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string ) => {
    e.preventDefault();
    if (e.button === 0) {
      if (e.ctrlKey) {
        window.open(link, "_blank");
      } else {
        navigate(link);
      }
    } else if (e.button === 1) {
      window.open(link, "_blank");
    }
  };

  const findPathParentMenu = (path: string) => {
    const opened:any = {};
    SideBarItems.forEach((item) => {
      if (item.link) {
        if (item.link === path) {
          opened[item.id] = true;
        }
      }
      if (item.items) {
        item.items.forEach((innerItem) => {
          if (innerItem.link) {
            if (innerItem.link === path) {
              opened[item.id] = true;
            }
          } else if (innerItem.items) {
            innerItem.items.forEach((innerInnerItem) => {
              if (innerInnerItem.link) {
                if (innerInnerItem.link === path) {
                  opened[item.id] = true;
                  opened[innerItem.id] = true;
                }
              }
            });
          }
        });
      }
    });
    return opened;
  };

  useEffect(() => {
    setOpened(findPathParentMenu(path));
  }, [path]);

  const isOpen = (id: string) => {
    if (collapsed) return false;
    return opened[id];
  };

  const generateItem = (Item: { id: string; icon: string; label: string; link: string; items: string; heading?: string; }) => {
    if (Item?.heading) {
      return (
        <div className="text-white sidebar-heading">
          {!collapsed && t(Item.heading)}
        </div>
      );
    }
    return Item.items ? (
      <SubMenu
        defaultOpen={isOpen(Item.id)}
        key={Item.id}
        label={t(Item.label)}
        icon={<Item.icon size={15} />}
      >
        {Item.items.map((innerItem: never) => generateItem(innerItem))}
      </SubMenu>
    ) : (
      <>
        {Item.heading && (
          <div className="sidebar-heading">{!collapsed && t(Item.heading)}</div>
        )}

        {/* <Tooltip label={t(Item?.label)} > */}
        <MenuItem
          rootStyles={{
            [`.ps-active`]: {
              backgroundColor:
                location.pathname === Item.link &&
                `${theme?.palette?.primary?.main} !important`,
              borderRadius: "8px",
              // transition: "all 250ms linear",
              // height: "100vh",
            
            },
          }}
          className={
            location.pathname === Item.link
              ? `font-bold text-white rounded-[8px] px-2 mt-1`
              : "font-bold rounded-[8px] text-mainBlack px-2 mt-1"
          }
          key={Item.id}
          onClick={(e) => {
            goTo(e, Item.link);
            if (toggled) {
              // setToggled(!toggled);p
            }
          }}
          icon={<Item.icon size={20} className="text-[#4c4e64de] iconSIdeBar" />}
          active={location?.pathname === Item.link}
          // active={location?.pathname === Item.link || location?.pathname.startsWith(`${Item.link}/`)}
        >
          <div className=" font-[400] text-[#4c4e64de] text-justify">{t(Item.label)}</div>
        </MenuItem>
      </>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        minHeight: "400px",
        direction:isRTL ? "rtl" : "ltr",
        position: "relative",
        // backgroundColor: toggled
        //   ? "rgb(249 249 249)"
        //   : "rgba(249, 249, 249, 0.7)",
      }}
      className="dark:!bg-[#2c3639]"
    >
      <Sidebar
        rtl={isRTL ? "true" :false}
        toggled={toggled}
        customBreakPoint="1330px"
        backgroundColor={
         "#f7f7f9"
        }
        transitionDuration={500}
        collapsed={collapsed}
        onBackdropClick={() => setToggled(false)}
        // rootStyles={{ paddingTop: !toggled && "20px" }}
      >
        <div
          className={`${
            !collapsed
              ? "sm:w-[250px] flex flex-row  justify-center mt-5"
              : "md:w-[70px] flex justify-center   mt-5 "
          } `}
        >
          {!collapsed && (
            <div className="m-auto">
              <img
                src={"/public/image/logo.png"}
                className="object-contain w-24 h-12 lg:ms-3 image-logo-site"
                alt="logo"
              />
            </div>
          )}
          {!toggled ? (
            <div
              className={
                collapsed && "rtl:translate-x-[-8px] ltr:translate-x-[10px]"
              }
            >
              {/* <ArrowSideBar_IC
                className={`cursor-pointer transition-ease collapsed-button-sidebar ltr:scale-x-[1]  rtl:scale-x-[-1]  ${
                  collapsed && "ltr:!scale-x-[-1] rtl:scale-x-[1] "
                } `}
                onClick={() => setCollapsed(!collapsed)}
              /> */}
            </div>
          ) : (
            <div onClick={() => setToggled(!toggled)} className="ml-5">
              <IconifyIcon
                icon={"iconoir:cancel"}
                className="dark:text-white"
              />
            </div>
          )}
        </div>
        <Menu>
          {SideBarItems.map((Item) =>
            Item.items ? (
              <SubMenu
                defaultOpen={isOpen(Item.id)}
                className={
                  location.pathname === Item.link
                    ? "  "
                    : " "
                }
                key={Item.id}
                label={t(Item.label)}
                icon={<Item.icon size={20} />}
              >
                {Item.items.map((innerItem) => generateItem(innerItem))}
              </SubMenu>
            ) : (
              generateItem(Item)
            )
          )}
        </Menu>
      </Sidebar>
    </div>
  );
};
