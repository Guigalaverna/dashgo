import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface ContextData extends UseDisclosureReturn {}

export const Context = createContext({} as ContextData);

export function SidebarDrawerProvider({ children }: ProviderProps) {
  const disclosure = useDisclosure();

  return <Context.Provider value={disclosure}>{children}</Context.Provider>;
}
