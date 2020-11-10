import React from 'react';

import classes from './Button.css';

const button = props => (
    <button 
        onClick={props.clicked} 
        className={[classes.Button, classes[props.btnType]].join(' ')}
        disabled={props.disable}>{props.children}</button>
);

export default button;