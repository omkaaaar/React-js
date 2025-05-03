import { useState } from "react";

const DataFetcher = () => {
  // const [data, setData] = useState([]);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);
  async function fetchAllUsers() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();
      if (result?.users) {
        setUserList(result?.users);
        setLoading(false);
      } else {
        setUserList([]);
        setLoading(false);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  // const fetchData = () => {
  //   fetchAllUsers();
  // };

  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);
  console.log(userList);
  if (loading) return <h1>Fetching Data!!! Please wait</h1>;

  return (
    <div>
      {/* {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )} */}

      <h1>USER LIST</h1>
      <button onClick={fetchAllUsers}>Get Data</button>
      <ul>
        {userList && userList.length > 0 ? (
          userList.map((userItem) => (
            <li key={userItem?.id}>
              <p>
                {userItem?.firstName} {userItem.lastName}
              </p>
            </li>
          ))
        ) : (
          <h1>No user Found</h1>
        )}
      </ul>
    </div>
  );
};

export default DataFetcher;
