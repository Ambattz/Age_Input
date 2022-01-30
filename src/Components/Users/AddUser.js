import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name and age'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter age above 1'
            });
            return;
        }
        console.log("Added User : ", enteredUsername, " | Age : ", enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {(error) && <ErrorModel clicked={errorHandler} title={error.title} message={error.message} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='Number' value={enteredAge} onChange={ageChangeHandler} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;
