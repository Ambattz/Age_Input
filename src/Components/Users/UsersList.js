import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li
                        key={user.id}
                        onClick={() => {
                            console.log(user.name,user.age);
                            props.clicked(user);
                        }}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList;
