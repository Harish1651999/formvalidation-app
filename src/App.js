import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UsersList";

function App() {
  const [userslist, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userslist} />
    </>
  );
}

export default App;
