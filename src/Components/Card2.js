import React from "react";
import './Card2.css';
import { Link } from 'react-router-dom';



const UserProfileCard1 = ({ name, webpage,country }) => {
    return (
      <div className="profile-card">
        
        <div className="profile-info">
          <h4>{name}</h4>
          <Link className='cardlink' underline="hover"  href= '{webpage}'>
          {webpage}
            </Link>
          <p>{country}</p>
          
        </div>
      </div>
    );
    };
    
    export default UserProfileCard1;