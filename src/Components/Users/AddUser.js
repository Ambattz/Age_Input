import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        const username = nameInputRef.current.value;
        const age = ageInputRef.current.value;
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name and age'
            });
            return;
        }
        if (+age < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter age above 1'
            });
            return;
        }
        props.onAddUser(username, age);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <React.Fragment>
            {(error) && <ErrorModel clicked={errorHandler} title={error.title} message={error.message} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        ref={nameInputRef}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        id='age'
                        type='Number'
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    )
}

export default AddUser;
