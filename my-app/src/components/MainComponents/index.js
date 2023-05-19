import { useState, useEffect } from "react";
import { Box, Center, SimpleGrid, Flex, Text } from "@chakra-ui/react";

import { useQuery } from "@tanstack/react-query";
import { getData } from "../../API/getData";
function MainComponent() {
  const { data, isLoading, error } = useQuery(["wear"], () => getData(), {
    initialData: { data: [] },
  });
  console.log(data);

  return (
    <>
      <Center>
        <Flex w={"40vh"} h={"100vh"} flexDir={"column"}>
          <Text
            margin={"0 auto"}
            lineHeight={"10vh"}
            fontSize={"3xl"}
            fontWeight="100"
          >
            무신사 랭킹
          </Text>
          <SimpleGrid bg={"#eee"} columns={1} spacingY={5} padding={5}>
            {data.data.map((item, index) => {
              return (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-around"}
                  height="110px"
                  boxShadow={"md"}
                  bg={"#fff"}
                  borderRadius={"lg"}
                  fontWeight="400"
                >
                  <Text paddingLeft={4}>{item[3]}</Text>
                  <Flex
                    h={"80px"}
                    alignItems={"end"}
                    flexDir={"row"}
                    justifyContent={"space-between"}
                    lineHeight={"60px"}
                    fontWeight="400"
                  >
                    <Text paddingLeft={4}>{item[4]}</Text>
                    <Text w={"70px"} textAlign={"center"}>
                      {item[7]}
                    </Text>
                  </Flex>
                </Box>
              );
            })}
          </SimpleGrid>
        </Flex>
      </Center>
    </>
  );
}

export default MainComponent;
