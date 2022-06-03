import React from 'react';
import { socialsList } from '../../data/socials';
import './socials.css';

const Socials = () => {
  return (
    <div className="socials">
      {socialsList.map((item) => (
        <a
          target="_blank"
          rel="noreferrer"
          key={item.name}
          href={item.link}
          className="socials-item"
          style={{ backgroundImage: `url(/img/socials/${item.file})` }}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Socials;
