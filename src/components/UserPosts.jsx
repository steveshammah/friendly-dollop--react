import React from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "./Spinner";

const UserPosts = ({ users, loading }) => {
  let { userId } = useParams();
  const user = users.find((author) => author.id === parseInt(userId));

  return (
    <>
      {loading && users ? (
        <Spinner />
      ) : (
        <div>
          <Link to='/'>Go Back</Link>
          <h2>Username: {user.name}</h2>
          <h2>Total Posts: {user.posts_count}</h2>
          {/* <>
            {user.posts.map((post) => (
              <div key={Math.random() * 1000}>
                <hr />
                <p>{post.title}</p>
                <hr />
              </div>
            ))}
          </> */}
        </div>
      )}
    </>
  );
};

export default UserPosts;
