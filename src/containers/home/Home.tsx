import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import './Home.css';

import { findAllUsersData } from './Home.utils';
import User from '../../types/user';
import Card from '../../components/card/Card';
import CardRow from '../../components/card-row/CardRow';
import DateDisplay from '../../components/date-display/DateDisplay';


const renderUser = (user : User) => (<Card key={user.id} user={user} />);

/**
 * @author Claudio Rojas <claudio.dcv@gmail.com>
 * @since v0.1.0
 * @version v1.0.0
 * @param props
 */
const Home: React.FC = () => {

  const [users, setUsers] : [Array<User>, Dispatch<SetStateAction<any>>] = useState([]);

  useEffect(() => {
    findAllUsersData().then(setUsers);
  }, []);

  return (
    <div className="home">
      <DateDisplay />
      <CardRow>{users.map(renderUser)}</CardRow>
    </div>
  );
};
  
export default Home;