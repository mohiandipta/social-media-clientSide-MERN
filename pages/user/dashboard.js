import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context';

const Dashboard = () => {

    const [state, setstate] = useContext(UserContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-1 text-center">Dashboard</h1>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
