import React from 'react';
import classes from './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

const sideDrawer = props => {
    const attachedClasess = [classes.SideDrawer, props.open? classes.Open : classes.Close];
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasess.join(' ')} >
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav onClick={props.closed}>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Auxiliary>
    );
}

export default sideDrawer;