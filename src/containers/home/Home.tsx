import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { useStateManager } from '../../store/managers/manager';
import './Home.css';

import { yearManager } from '../../store/managers';

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
  
  const [year, setYear] = useStateManager(yearManager);

  useEffect(() => {
    // https://juliangaramendy.dev/use-promise-subscription/
    let isSubscribed = true
    findAllUsersData().then((data) => {
      if (isSubscribed) {
        setUsers(data);
      }
    });
    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <div className="home">
      <Link to="/login">login</Link>
      {year}
      <button onClick={() => setYear(12)}>Cambiar año</button>
      <DateDisplay />
      <CardRow>{users.map(renderUser)}</CardRow>
    </div>
  );
};
  
export default Home;