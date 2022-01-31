import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, id: Math.random().toString() }
      ];
    });
  }

  const deleteHandler = (props) => {
    const filteredUsers = usersList.filter((user) => user.id !== props.id);
    setUsersList([...filteredUsers]);
  }

  return (
    <React.Fragment >
      <AddUser onAddUser={onAddUserHandler} />
      {(usersList.length === 0) ? null : <UsersList users={usersList} clicked={deleteHandler} />}
    </React.Fragment>
  );
}

export default App;
