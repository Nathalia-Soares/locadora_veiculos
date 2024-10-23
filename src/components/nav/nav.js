import React from 'react';
import { useNavigate } from 'react-router-dom';
import photo from './../../assets/perfil.png';
import './nav.css';

function NavComponent() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/perfil');
  };

  return (
    <div className="header-container">
      <div className="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="profile-picture" onClick={handleProfileClick}>
        <img src={photo} alt="Profile" />
      </div>
    </div>
  );
}

export default NavComponent;