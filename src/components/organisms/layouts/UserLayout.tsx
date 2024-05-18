import { ReactNode } from "react";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSettings } from "../../../@core/hooks/useSettings";
import VerticalAppBarContent from "./components/vertical/AppBarContent";
import Layout from "../../../@core/layouts/Layout";
import navigation from "../../../@core/navigation/vertical";

interface Props {
  children: ReactNode;
  contentHeightFixed?: boolean;
}

const UserLayout = ({ children, contentHeightFixed }: Props) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings();
  const hidden = useMediaQuery((theme: Theme) => theme?.breakpoints.down("lg"));

  if (hidden && settings.layout === "horizontal") {
    settings.layout = "vertical";
  }

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      contentHeightFixed={contentHeightFixed}
      verticalLayoutProps={{
        navMenu: {
          navItems: navigation(),
        },
        appBar: {
          content: (props:never) => (
            <VerticalAppBarContent
              hidden={hidden}
              settings={settings}
              saveSettings={saveSettings}
              toggleNavVisibility={props?.toggleNavVisibility}
            />
          ),
        },
      }}
    >
      {children}
    </Layout>
  );
};

export default UserLayout;
