import { useContext } from "react";
import { Context } from "../contexts/SidebarDrawerContext";

export function useDrawer() {
  return useContext(Context)
}