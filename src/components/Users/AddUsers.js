import React from "react";
import classes from "./AddUsers.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUsers = () => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" />
        <Button type="button">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
