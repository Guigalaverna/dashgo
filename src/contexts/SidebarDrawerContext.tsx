import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useEffect } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface ContextData extends UseDisclosureReturn {}

export const Context = createContext({} as ContextData);

export function SidebarDrawerProvider({ children }: ProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return <Context.Provider value={disclosure}>{children}</Context.Provider>;
}
