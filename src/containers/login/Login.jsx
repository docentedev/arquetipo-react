import React from 'react';
import { useStateManager } from '../../store/managers/manager';
import { yearManager } from '../../store/managers';
import { Link } from 'react-router-dom';

const Login = () => {
    const [year] = useStateManager(yearManager)
    return (
        <div>
            <Link to="/">
                {year}
            </Link>
        </div>
    );
};

export default Login;