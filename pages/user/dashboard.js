import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context';
import UserRoute from '../../components/routes/userRoute';
import Createpostform from '../../components/forms/createPostForm';
const Dashboard = () => {

    const [state, setstate] = useContext(UserContext);

    return (
        <UserRoute>
            <div className="container">
                <div className='row py-5'>
                    <div className='col text-center'>
                        <h1>News Feed</h1>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-8">
                        <Createpostform />
                    </div>
                    <div className="col-md-4">
                        Sidebar
                    </div>
                </div>
            </div>
        </UserRoute>
    );
}

export default Dashboard;
