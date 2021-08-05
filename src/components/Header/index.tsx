import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useDrawer } from "../../hooks/useDrawer";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const { onOpen } = useDrawer()

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      { !isWideVersion && (
        <IconButton
          aria-label='Abrir menu'
          icon={<Icon as={RiMenuLine}/>}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        />
      )}
      <Logo />
      <Search showInput={isWideVersion} />
      <Flex
        align='center'
        ml='auto'
      >
        <NotificationNav />

       <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
