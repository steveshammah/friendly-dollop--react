import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "./Spinner";
import editIcon from "../edit-icon.svg";
import saveIcon from "../save-icon.svg";

const UserPosts = ({ users }) => {
  let { userId } = useParams();
  const [usersPosts, setUsersPosts] = useState({});
  const [editName, setEditName] = useState(false);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({});
  //   const { stateUsers, loading } = useContext(usersContext);

  //   const user = users.find((author) => author.userId === parseInt(userId));

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

    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
        <div className='post-section'>
          <Link to='/' className='btn'>
            Go Back
          </Link>
          <div className='post-details'>
            <div className={`name ${editName && "active"}`}>
              <h2>{user.name}</h2>{" "}
              <img src={editIcon} onClick={() => setEditName(!editName)} />
            </div>
            <div className={`edit-name ${!editName ? " " : "active"}`}>
              <input
                type={"text"}
                onChange={handleChange}
                placeholder={user.name}
              />
              <img src={saveIcon} onClick={() => setEditName(!editName)} />
            </div>
            <h4>@{user.username}</h4>
            <div className='post'>
              <h3>Title: {usersPosts.title}</h3>
              <p> {usersPosts.body}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPosts;
