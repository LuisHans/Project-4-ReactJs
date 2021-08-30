import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventdefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <labe htmLFor="username">Username</labe>
      <input id="username" type="text"></input>
      <labe htmLFor="age">Age (Years)</labe>
      <input id="age" type="number"></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
