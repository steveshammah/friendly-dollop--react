import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserPosts from "./components/UserPosts";
import { usersContext } from "./contexts/usersContext";
import { useContext } from "react";
import { Heading, Text } from "@chakra-ui/react";

function App() {
  const { stateUsers, loading } = useContext(usersContext);

  return (
    <Router>
      <Heading bg={"black"} color={"white"} text w={"100%"}>
        <Link to='/'>
          <Text
            fontSize={"3rem"}
            textAlign={"center"}
            textTransform='uppercase'>
            Home
          </Text>
        </Link>
      </Heading>
      <Text w={"100%"} fontWeight='700' p={2} textAlign={"center"}>
        Data present is from the{" "}
        <a
          style={{ color: "red" }}
          href='https://jsonplaceholder.typicode.com/'
          target={"_blank"}
          rel='noreferrer'>
          jsonplaceholder api
        </a>
        .{" "}
      </Text>

      <Routes>
        <Route
          path='/'
          exact
          element={<Home users={stateUsers} loading={loading} />}
        />
        <Route
          path='/users/posts/:userId'
          element={<UserPosts users={stateUsers} loading={loading} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
