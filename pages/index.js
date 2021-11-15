import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context';

const Home = () => {

    const [state, setState] = useContext(UserContext)

    return (
        <div className="home-bg">
            <div className="home-json-data">
                {JSON.stringify(state)}
            </div>
        </div>
    );
}

export default Home;
