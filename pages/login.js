import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import Link from 'next/dist/client/link';
import Authform from '../components/forms/AuthForm';
import { UserContext } from '../context';


const Register = () => {
    const [state, setstate] = useContext(UserContext);

    const router = useRouter()

    useEffect(() => {

    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(fName, lName, email, password, secret)
            const { data } = await axios.post(`/login`, {
                email,
                password,
            })

            if (data.error) {
                toast.error(data.error)
                setLoading(false)
            } else {
                // update context
                setstate({
                    user: data.user,
                    token: data.token
                })
                // save in local storage
                window.localStorage.setItem('auth', JSON.stringify(data))
                router.push("/")
                // console.log(data)
            }
        }
        catch (error) {
            toast.error(error.response.data)
            setLoading(false)
        }
    }

    // redirect to the home and preventing logged-in user to access login path
    if (state && state.token) router.push("/")

    return (
        <div className="full">
            <div className="bg-login-default-image">

            </div>

            <div className="row py-4">
                <div className="col-md-6 offset-md-3">
                    <Authform
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        loading={loading}
                        page="login"
                    />
                    <div className="row mt-4">
                        <div className="col">
                            <p className="text-center font-weight-bold">Don't have an account? <Link href="/register">
                                <a className="" href="/register">Register</a>
                            </Link></p>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col">
                            <p className="text-center font-weight-bold">
                                Forgot Password?{" "} <Link href="/forgot-password">
                                    <a className="text-danger" href="/register">Forgot password</a>
                                </Link></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Register;
