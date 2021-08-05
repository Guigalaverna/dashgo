import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="tight" w="64">
      dashgo
      <Text as="span" fontSize="3xl" ml="1" color="purple.500">
        .
      </Text>
    </Text>
  );
}
