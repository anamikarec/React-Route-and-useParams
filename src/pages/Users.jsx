import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      {[1, 2, 3].map((item) => {
        return (
          <div>
            <Link to={`users/${item}`}>User : {item}</Link>
          </div>
        );
      })}
    </div>
  );
};

export { Users };
