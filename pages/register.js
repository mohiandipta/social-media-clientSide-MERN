import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { Modal } from 'antd';
import Link from 'next/dist/client/link';
import Authform from '../components/forms/AuthForm';

const Register = () => {

    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secret, setSecret] = useState("");
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(fName, lName, email, password, secret)
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, {
                fName,
                lName,
                email,
                password,
                secret
            })
            setFname('')
            setLname('')
            setEmail('')
            setPassword('')
            setSecret('')
            setOk(data.ok)
            setLoading(false)
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
                        fName={fName}
                        setFname={setFname}
                        lName={lName}
                        setLname={setLname}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        secret={secret}
                        setSecret={setSecret}
                        loading={loading}
                    />
                    <div className="row mt-3">
                        <div className="col">
                            <p className="text-center font-weight-bold">Already Registered? <Link href="/login">
                                <a className="" href="/login">Login</a>
                            </Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Modal title="" visible={ok} onCancel={() => setOk(false)} footer={null}>
                        <p>You have successfully registered!</p>
                        <Link href="/login">
                            <a className="btn btn-primary btn-sm" href="/">Login</a>
                        </Link>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Register;
