import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Guilherme Galaverna</Text>
        <Text color="gray.300" fontSize="small">
          guigalaverna@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Guilherme Galaverna"
        src="https://github.com/Guigalaverna.png"
      />
    </Flex>
  );
}
