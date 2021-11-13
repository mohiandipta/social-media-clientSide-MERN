import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context';

const Home = () => {

    const [state, setState] = useContext(UserContext)

    return (
        <div className="">
            <div>
                {JSON.stringify(state)}
                <h1 className="display-1 text-center py-5">Home Page</h1>
            </div>
            <img src="/images/bg.png" alt="image" />
        </div>
    );
}

export default Home;
