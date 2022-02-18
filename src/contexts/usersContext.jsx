import { createContext, useState, useEffect } from "react";

export const usersContext = createContext();

// export interface DictType {
//     [x:string] : string
// }

const UsersState = (props) => {
  const [stateUsers, setStateusers] = useState([] /*as DictType */);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    // setLoading(false);

    // One Second Delay After Promise Resolves
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await response.json();
    setStateusers(data);
  };

  return (
    <usersContext.Provider value={{ stateUsers, loading }}>
      {props.children}
    </usersContext.Provider>
  );
};

export default UsersState;
