import React from 'react';
import { Link } from 'react-router-dom';

const FooterColumn = ({ title, informations }) => {
  return (
    <div className="info-column">
      <h4>{title}</h4>
      <ul>
        {informations.map((info, index) => (
          <li key={index}>
            <Link to={info.link}>{info.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
