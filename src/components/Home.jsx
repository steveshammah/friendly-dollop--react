import React from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Stats from "./Stats";

const Home = ({ users, loading }) => {
  return (
    <>
      {loading && users ? (
        <Spinner />
      ) : (
        <div className='user-container'>
          {users.map((user) => {
            return (
              <Link to={`users/posts/${user.id}`} key={user.id} key={user.id}>
                <div className='user-data'>
                  <h1> {user.name}</h1>
                  <h2>Username: {user.username}</h2>
                  <h3>Email: {user.email}</h3>

                  <div className='meta-data'>
                    <span>
                      Phone: <i>{user.phone}</i>
                    </span>

                    <span>Address: {user.address.street}</span>
                    <span>Suite: {user.address.suite}</span>
                  </div>
                </div>
              </Link>
            );
          })}

          <Stats stateUsers={users} />
        </div>
      )}
    </>
  );
};

export default Home;
