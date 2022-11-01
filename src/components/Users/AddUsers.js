import React, { useState } from "react";
import classes from "./AddUsers.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [enteredusername, setEnteredUsername] = useState("");
  const [enteredage, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredusername.trim().length === 0 || enteredage.trim().length === 0) {
      return;
    }
    if (+enteredage < 0) {
      return;
    }
    props.onAddUser(enteredusername, enteredage);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal title="An Error occured!" message="Something went wrong" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={enteredusername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredage}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
