import React from 'react';
import './Avatar.css';

function Avatar({ avatarUrl }) {
  return <img className="Avatar" src={avatarUrl} alt="Avatar" />;
}

export default Avatar;
