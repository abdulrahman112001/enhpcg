import { BiDetail, BiHome, BiUser } from "react-icons/bi";
import { FaRegBuilding } from "react-icons/fa";

import { IconType } from "react-icons/lib";

export type MenuItem_TP = {
  id: string;
  icon: IconType;
  label: string;
  link?: string;
  heading?: string; 
  items?: {
    id: string;
    icon: IconType;
    label: string;
    link?: string;
    items?: MenuItem_TP[];
  }[];
};

export const SideBarItems: MenuItem_TP[] = [
  {
    id: crypto.randomUUID(),
    label: `${"Home"}`,
    icon: BiHome,
    link: "/dashboard",
  },
  {
    id: crypto.randomUUID(),
    label: `${"Users"}`,
    icon: FaRegBuilding,
    link: "/dashboard/users",
  },
  {
    id: crypto.randomUUID(),
    label: `${"Cluster"}`,
    icon: FaRegBuilding,
    items:[
      {
        id: crypto.randomUUID(),
        label: `${"Srta City Cluster"}`,
        icon: FaRegBuilding,
        link: "/dashboard/users",
      },
      {
        id: crypto.randomUUID(),
        label: `${"Nano Cluster"}`,
        icon: FaRegBuilding,
        link: "/dashboard/users",
      },
    ]
  },

];
