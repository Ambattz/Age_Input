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
        { name: uName, age: uAge, id: Math.random().toString()}
      ];
    });
  }

  return (
    <div >
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
