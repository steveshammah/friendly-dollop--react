import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "./Spinner";
import editIcon from "../edit-icon.svg";
import saveIcon from "../save-icon.svg";
import { Box, Button, Image, Text, Input, Container } from "@chakra-ui/react";

const UserPosts = ({ users }) => {
  let { userId } = useParams();
  const [usersPosts, setUsersPosts] = useState({});
  const [editName, setEditName] = useState(false);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({});

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  useEffect(() => {
    return () => {};
  }, [user]);
  const fetchData = async () => {
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/posts/${userId}`
    );
    const data = await response.json();
    const findUser = users.find((author) => author.id === parseInt(userId));
    setUser(findUser);
    setUsersPosts(data);

    // One Second Delay After Promise Resolves
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const newName = e.target.value;
    user.name = newName;
  };

  return (
    <>
      {loading && users ? (
        <Spinner />
      ) : (
        <Box p={3}>
          <Link to='/'>
            <Button bg='black' size='lg' colorScheme={"whiteAlpha.900"}>
              Go Back
            </Button>{" "}
          </Link>
          <Box w={"100%"}>
            <Text
              fontWeight={600}
              fontSize={"1.4rem"}
              textTransform={"uppercase"}
              mt={"4"}
              className={`name ${editName && "active"}`}>
              {user.name}
              <Image src={editIcon} onClick={() => setEditName(!editName)} />
            </Text>
            <Container className={`edit-name ${!editName ? " " : "active"}`}>
              <Input
                type={"text"}
                size='sm'
                width={"200px"}
                onChange={handleChange}
                placeholder={user.name}
              />
              <img src={saveIcon} onClick={() => setEditName(!editName)} />
            </Container>
            <Text fontWeight={300}>@{user.username}</Text>
            <Container
              borderWidth={1}
              borderRadius={"xl"}
              p={1}
              minH={300}
              minW={"80%"}>
              <Text
                mt={2}
                mb={5}
                fontWeight={700}
                fontSize={"1.2rem"}
                textTransform={"capitalize"}
                textAlign='center'>
                {" "}
                {usersPosts.title}
              </Text>
              <Text p={2}> {usersPosts.body}</Text>
            </Container>
          </Box>
        </Box>
      )}
    </>
  );
};

export default UserPosts;
