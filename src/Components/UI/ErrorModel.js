import React from 'react';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModel.module.css';

const ErrorModel = (props) => {
    return (
        <React.Fragment>
            <div className={classes.backdrop} onClick={props.clicked} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.clicked}>Okay</Button>
                </footer>
            </Card>
        </React.Fragment>
    );
}

export default ErrorModel;
