import { Box, Center, Text, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function MainComponent() {
  return (
    <>
      <Center>
        <Flex w={"40vh"} h={"100vh"} bg={"#eee"} flexDirection={"column"}>
          <Text
            margin={"0 auto"}
            lineHeight={"10vh"}
            fontSize={"2xl"}
            fontWeight={"100"}
          >
            무신사 랭킹
          </Text>
          <SimpleGrid columns={1} spacing={10}>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
          </SimpleGrid>
        </Flex>
      </Center>
    </>
  );
}

export default MainComponent;
