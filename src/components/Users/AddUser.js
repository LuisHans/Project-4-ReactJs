import React, {useState} from "react";

import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().lenght === 0 || enteredAge.trim().length === 0 ) {
        return;
    }
    if (+enteredAge < 1) {
        return;
    }

    console.log(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangehandler = (event) => {
    setEnteredUsername(event.target.value);

  };
  const ageChangehandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangehandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangehandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
