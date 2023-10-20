import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom'

export function Button(props){
    return(
        <Link to={props.to}>
            <button className={props.class}>{props.name}</button>
        </Link>

    );
}

