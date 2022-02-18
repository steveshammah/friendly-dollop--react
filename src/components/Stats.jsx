import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Box, Container, Flex, Text } from "@chakra-ui/react";

const Stats = ({ stateUsers }) => {
  const [address, setAddress] = useState([]);
  const [active, setActive] = useState("");
  const handleClick = (filter) => {
    setActive(filter);
    const filtered = stateUsers.filter((user) =>
      user.address.suite.includes(filter)
    );
    setAddress(filtered);
  };

  return (
    <Box mt={"10"} w={"100%"} minH={"40vh"}>
      <Text
        mb={6}
        textTransform={"uppercase"}
        fontWeight='700'
        fontSize={"1.6rem"}>
        Address Statistics
      </Text>
      <Container fontWeight='600' fontSize={"1.2rem"}>
        <Badge
          onClick={() => handleClick("Apt")}
          borderRadius={"lg"}
          p={2}
          w={"120px"}
          h={"40px"}
          textAlign='center'
          textDecor='none'
          bg={`${active === "Apt" ? "black" : "gray.100"}`}
          color={`${active === "Apt" ? "white" : "black"}`}>
          Apartment
        </Badge>
        <Badge
          onClick={() => handleClick("Suite")}
          borderRadius={"lg"}
          p={2}
          h={"40px"}
          w={"120px"}
          textAlign='center'
          bg={`${active === "Suite" ? "black" : "gray.100"}`}
          color={`${active === "Suite" ? "white" : "black"}`}
          textDecor='none'>
          Suite
        </Badge>
      </Container>
      <Flex h={"auto"} p={2} flexWrap={"wrap"} m={"auto"} w={"100%"}>
        {address.map((user) => {
          return (
            <Container
              alignItems='flex-start'
              bg={"blackAlpha.500"}
              m={5}
              borderRadius={"lg"}
              p={1}
              maxW={"220px"}
              h={100}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"space-evenly"}
              key={user.id}>
              <Text fontWeight={700}>
                <Link to={`users/posts/${user.id}`} key={user.id}>
                  {user.name}
                </Link>{" "}
              </Text>
              <Text fontWeight={400}>
                <Link to={`users/posts/${user.id}`} key={user.id}>
                  @{user.username}
                </Link>{" "}
              </Text>
              <Text>
                Address:
                {user.address.suite}
              </Text>{" "}
            </Container>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Stats;
