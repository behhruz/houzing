import React from "react";
import useUniqueId from "../../hooks/useId";
import Navbar from "../../utilities/navbar";

export const HomePage = () => {
  return (
    <div>
      {Navbar.map(({ title, id }) => {
        return (
          <div key={id}>
            <h1>{title}</h1>
            <h1>{id}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default HomePage;
