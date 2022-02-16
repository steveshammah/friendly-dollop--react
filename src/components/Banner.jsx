import React from "react";

const Banner = () => {
  return (
    <div className='banner'>
      <h1>Welcome to the project</h1>
      <p>
        Data present is from{" "}
        <a href='https://jsonplaceholder.typicode.com/' target={"_blank"}>
          jsonplaceholder
        </a>{" "}
        for demo purposes.
      </p>
    </div>
  );
};

export default Banner;
