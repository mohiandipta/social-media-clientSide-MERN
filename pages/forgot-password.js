import { useState, useContext } from 'react';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { Modal } from 'antd';
import Link from 'next/dist/client/link';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';
import { UserContext } from '../context';
import { useRouter } from 'next/dist/client/router';

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [secret, setSecret] = useState("");
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);

    const [state] = useContext(UserContext);

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(fName, lName, email, password, secret)
            const { data } = await axios.post(`/forgot-password`, {
                email,
                newPassword,
                secret
            })
            console.log('data =>', data)
            // setEmail('')
            // setPassword('')
            // setSecret('')
            // setOk(data.ok)
            // setLoading(false)
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
                    <ForgotPasswordForm
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        newPassword={newPassword}
                        setNewPassword={setNewPassword}
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
                        <p>Password has been changed! Login with new password.</p>
                        <Link href="/login">
                            <a className="btn btn-primary btn-sm" href="/">Login</a>
                        </Link>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
