import React from 'react';

import { formatDate } from '../../utils/moment.facades';

import './DateDisplay.css';

/**
 * @author Claudio Rojas <claudio.dcv@gmail.com>
 * @since v0.1.0
 * @version v1.0.0
 * @param props
 */
const Card: React.FC = (props) => {
    const date = new Date();
    return (
        <div className="date-display">
        {formatDate(date)}
        </div>
    );
};
  
export default Card;