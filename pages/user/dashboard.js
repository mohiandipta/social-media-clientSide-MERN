import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context';
import UserRouter from '../../components/routes/userRoutes';

const Dashboard = () => {

    const [state, setstate] = useContext(UserContext);

    return (
        <UserRouter>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-1 text-center">Dashboard</h1>
                    </div>
                </div>
            </div>
        </UserRouter>
    );
}

export default Dashboard;
