import React from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Stats from "./Stats";
import { Container, VStack, Box, Text, Image } from "@chakra-ui/react";

const Home = ({ users, loading }) => {
  return (
    <>
      {loading && users ? (
        <Spinner />
      ) : (
        <Box
          display={"flex"}
          flexWrap='wrap'
          justifyContent={"space-around"}
          maxW='100%'
          overflow={"hidden"}
          h='auto'
          padding={1}>
          {users.map((user) => {
            return (
              <Link to={`users/posts/${user.id}`} key={user.id}>
                <Container
                  p={"0"}
                  m='5'
                  w='250px'
                  h='300px'
                  borderWidth={"2px"}
                  borderColor='black'
                  borderRadius={"lg"}
                  display='flex'
                  flexDirection={"column"}
                  justifyContent='space-between'>
                  <VStack display='flex' borderBottom={"2px"}>
                    <Box
                      boxSize={"sm"}
                      h='100%'
                      display={"flex"}
                      alignItems='center'
                      justifyContent={"center"}>
                      <Image
                        src='https://www.vippng.com/png/detail/416-4161690_empty-profile-picture-blank-avatar-image-circle.png'
                        alt={user.name}
                        boxSize='120px'
                      />
                    </Box>{" "}
                    <VStack>
                      <Text
                        textTransform={"uppercase"}
                        fontSize='1rem'
                        fontWeight={"bold"}>
                        {user.name}
                      </Text>{" "}
                      <Text fontWeight={"bold"}>{user.email}</Text>{" "}
                      <Text fontSize={"sm"} fontWeight={"bold"}>
                        @{user.username}
                      </Text>{" "}
                    </VStack>
                  </VStack>

                  <VStack
                    p='1'
                    flex={1}
                    bg='blackAlpha.800'
                    w='100%'
                    color='whiteAlpha.900'
                    fontSize={"small"}>
                    <span>
                      Phone: <i>{user.phone}</i>
                    </span>

                    <span>Address: {user.address.street}</span>
                    <span>Residence: {user.address.suite}</span>
                  </VStack>
                </Container>
              </Link>
            );
          })}
        </Box>
      )}
      <Stats stateUsers={users} />
    </>
  );
};

export default Home;
