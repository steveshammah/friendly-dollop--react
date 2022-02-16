import React from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Home = ({ users, loading }) => {
  return (
    <>
      {loading && users ? (
        <Spinner />
      ) : (
        <div className='user-container'>
          {users.map((user) => {
            return (
              <Link to={`users/posts/${user.id}`} key={user.id}>
                <div className='user-data'>
                  <h1> {user.name}</h1>
                  <h2>Username: {user.username}</h2>
                  <h3>Email: {user.email}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
