import React from 'react';
import Avatar from './Avatar';
import Intro from './Intro';
import SkillList from './SkillList';
import './Card.css';

function Card({ name, avatarUrl, intro, skills, available }) {
  return (
    <div className={`Card ${available ? 'available' : 'unavailable'}`}>
      <Avatar avatarUrl={avatarUrl} />
      <Intro name={name} intro={intro} />
      <SkillList skills={skills} />
    </div>
  );
}

export default Card;
