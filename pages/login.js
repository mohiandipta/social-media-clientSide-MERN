import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { Modal } from 'antd';
import Link from 'next/dist/client/link';
import Authform from '../components/forms/AuthForm';
// import { useRouter } from 'next/router'

// const router = useRouter();

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(fName, lName, email, password, secret)
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, {
                email,
                password,
            })
            //
            // push router
            router.push(`/`)
        }
        catch (error) {
            toast.error(error.response.data)
            setLoading(false)
        }
    }

    return (
        <div className="full">
            <div className="bg-default-image">
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
                    <div className="row mt-3">
                        <div className="col">
                            <p className="text-center font-weight-bold">Dont have an account? <Link href="/register">
                                <a className="" href="/register">Register</a>
                            </Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Modal title="" onCancel={() => setOk(false)} footer={null}>
                        <p>You have successfully Login!</p>
                        <Link href="/login">
                            <a className="btn btn-primary btn-sm" href="/">Login</a>
                        </Link>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Login;
