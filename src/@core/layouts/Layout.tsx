// ** React Import
import { useEffect, useRef } from "react";
import VerticalLayout from "./VerticalLayout";
import { LayoutProps } from "./types";

const Layout = ({
  hidden,
  children,
  settings,
  saveSettings,
  ...props
}: LayoutProps) => {
  // ** Props

  // ** Ref
  const isCollapsed = useRef(settings.navCollapsed);

  useEffect(() => {
    if (hidden) {
      if (settings.navCollapsed) {
        saveSettings({ ...settings, navCollapsed: false, layout: "vertical" });
        isCollapsed.current = true;
      }
    } else {
      if (isCollapsed.current) {
        saveSettings({
          ...settings,
          navCollapsed: true,
          layout: settings.lastLayout,
        });
        isCollapsed.current = false;
      } else {
        if (settings.lastLayout !== settings.layout) {
          saveSettings({ ...settings, layout: settings.lastLayout });
        }
      }
    }
  }, [hidden]);

  return (
    <VerticalLayout
      {...props}
      hidden={hidden}
      saveSettings={saveSettings}
      settings={settings}
    >
      {children}
    </VerticalLayout>
  );
};

export default Layout;
