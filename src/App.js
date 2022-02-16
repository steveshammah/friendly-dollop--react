import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserPosts from "./components/UserPosts";
import { usersContext } from "./contexts/usersContext";
import { useContext } from "react";
import Banner from "./components/Banner";

function App() {
  const { stateUsers, loading } = useContext(usersContext);

  return (
    <div className='App'>
      <Router>
        <header>
          <Link to='/'>Home</Link>
        </header>
        <Banner />

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
    </div>
  );
}

export default App;
