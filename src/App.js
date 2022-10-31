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
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userslist} />
    </div>
  );
}

export default App;
