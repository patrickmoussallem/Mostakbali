import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <Link to={props.to}>
      <button className={props.class} onClick={handleClick}>
        {props.name}
      </button>
    </Link>
  );
}
