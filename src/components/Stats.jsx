import React, { useState } from "react";
import { Link } from "react-router-dom";

const Stats = ({ stateUsers }) => {
  const [address, setAddress] = useState([]);
  const handleClick = (filter) => {
    const filtered = stateUsers.filter((user) =>
      user.address.suite.includes(filter)
    );
    setAddress(filtered);
  };

  console.log("Address: ", address);

  return (
    <div className='stats-wrapper'>
      <h1>Address Stats</h1>
      <div className='nav'>
        <span onClick={() => handleClick("Apt")}>Appt</span>
        <span onClick={() => handleClick("Suite")}>Suite</span>
      </div>
      <div className='stats'>
        {address.map((user) => {
          return (
            <div className='user-stats'>
              <Link
                to={`users/posts/${user.id}`}
                key={user.id}
                id='profile-link'>
                Username:
                {user.username}
              </Link>{" "}
              <span>
                Address:
                {user.address.suite}
              </span>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
