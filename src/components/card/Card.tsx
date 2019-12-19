import React from 'react';

import './Card.css';

import User from '../../types/user';
import texts from '../../config/texts';

/**
 * Card
 * este comp...
 * 
 * @author Claudio Rojas <claudio.dcv@gmail.com>
 * @since v0.1.0
 * @version v1.0.0
 * @param props
 */
const Card: React.FC<{user : User}> = (props) => {
  return (
    <div className="card">
      <strong>#{props.user.id}<br />{texts.name}: {props.user.name}</strong>
      <p>{props.user.email} | {props.user.phone}</p>
    </div>
  );
};
  
export default Card;