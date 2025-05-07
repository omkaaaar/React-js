import React, { useEffect, useState } from "react";

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  //   console.log(userList);
  async function fetchAllUsers() {
    try {
      setLoading(true);
      const result = await fetch("https://dummyjson.com/users");
      const data = await result.json();
      //   console.log(data);

      if (data.users) {
        setUserList(data.users);
        setLoading(false);
      } else {
        setUserList([]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }
  console.log(userList);

  const fetchUsers = () => {
    fetchAllUsers();
  };
  useEffect(() => {
    alert("hellooo");
  }, []);

  if (loading) return <h1>Ruk ja bhai load hone de</h1>;
  return (
    <div>
      <h1>All Users List</h1>
      <ul>
        {userList && userList.length > 0 ? (
          userList.map((userItem) => (
            <li key={userItem.id}>
              <p>
                {userItem.firstName} {userItem.lastName}
              </p>
            </li>
          ))
        ) : (
          <h1>No users available</h1>
        )}
      </ul>
      <button onClick={fetchUsers}>Fetch all Users</button>
    </div>
  );
};

export default Users;
