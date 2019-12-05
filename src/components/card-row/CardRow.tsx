import React from 'react';

import './CardRow.css';

/**
 * @author Claudio Rojas <claudio.dcv@gmail.com>
 * @since v0.1.0
 * @version v1.0.0
 * @param props
 */
const CardRow : React.FC<React.Props<any>> = (props) => (
  <div className="card-row">{props.children}</div>
);
export default CardRow;