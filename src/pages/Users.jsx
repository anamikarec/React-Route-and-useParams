import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const location = useLocation();

  const getpage = () => {
    const query = new URLSearchParams(location.search);
    const page = query.get("page") || 1;
    return page;
  };
  const fetchUsers = () => {
    const page = getpage();
    axios
      .get("https://reqres.in/api/users", {
        params: {
          page
        }
      })
      .then((res) => {
        console.log(res);
        setUsers(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return loading ? (
    <div>...loading</div>
  ) : (
    <div>
      {users.map((user) => {
        return (
          <div>
            <Link
              to={`/users/${user.id}`}
            >{`${user.first_name} ${user.last_name}`}</Link>
          </div>
        );
      })}
    </div>
  );
};

export { Users };
