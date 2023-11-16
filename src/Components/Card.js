import React from "react";
import './Card.css';




const UserProfileCard = ({ name, description, photoUrl, twitterUrl, facebookUrl, instagramUrl }) => {
    return (
      <div className="profile-card">
        <div className="profile-image">
          <img src={photoUrl} alt="Profile photo" />
        </div>
        <div className="profile-info">
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="social-media-links">
            <a href={twitterUrl}>
                <i class="fa-brands fa-x-twitter "></i>
            </a>
            <a href={facebookUrl}>
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href={instagramUrl}>
                <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    );
    };
    
    export default UserProfileCard;