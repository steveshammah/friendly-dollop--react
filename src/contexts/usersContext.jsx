import { createContext, useState, useEffect } from "react";
// import users from "../placeholder.json";

export const usersContext = createContext();

// export interface DictType {
//     [x:string] : string
// }

const UsersState = (props) => {
  const [stateUsers, setStateusers] = useState([] /*as DictType */);
  const [loading, setLoading] = useState(true);
  //   const usersData = users["users"];

  useEffect(() => {
    setTimeout(() => {
      fetchData();
      setLoading(false);

      console.log("State: ", stateUsers);
      console.log("Loading: ", loading);
    }, 3000);

    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      const data = await response.json();
      setStateusers(data);

      console.log("Data: ", data);
    };
    return () => {};
  }, []);

  return (
    <usersContext.Provider value={{ stateUsers, loading }}>
      {props.children}
    </usersContext.Provider>
  );
};

export default UsersState;
