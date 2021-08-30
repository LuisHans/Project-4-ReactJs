import React from "react";

import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventdefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <labe htmLFor="username">Username</labe>
        <input id="username" type="text"></input>
        <labe htmLFor="age">Age (Years)</labe>
        <input id="age" type="number"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
