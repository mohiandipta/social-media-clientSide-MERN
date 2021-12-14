import { useState, useContext } from 'react';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { Modal } from 'antd';
import Link from 'next/dist/client/link';
import Authform from '../components/forms/AuthForm';
import { UserContext } from '../context';
import { useRouter } from 'next/dist/client/router';

const Register = () => {

    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secret, setSecret] = useState("");
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);

    const [state] = useContext(UserContext);

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(fName, lName, email, password, secret)
            const { data } = await axios.post(`/register`, {
                fName,
                lName,
                email,
                password,
                secret
            })

            if (data.error) {
                toast.error(data.error)
            } else {
                setFname('')
                setLname('')
                setEmail('')
                setPassword('')
                setSecret('')
                setOk(data.ok)
                setLoading(false)
            }

        }
        catch (error) {
            toast.error(error.response.data)
            setLoading(false)
        }
    }

    // redirect to the home and preventing logged-in user to access register path
    if (state && state.token) router.push("/")

    return (
        <div className="full">
            <div className="bg-default-image">

            </div>

            <div className="row py-5">
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
                            <p className="text-center font-weight-bold">Already have registered? <Link href="/register">
                                <a className="" href="/register">Login</a>
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
