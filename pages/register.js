import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { Modal } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/dist/client/link';

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
        <div>
            <form onSubmit={handleSubmit} className="container">
                <div class="mb-3">
                    <label for="exampleInputFirstName" class="form-label">First Name</label>
                    <input
                        value={fName}
                        onChange={e => setFname(e.target.value)}
                        type="name" class="form-control" id="exampleInputFirstName" aria-describedby="nameHelp" />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                    <input
                        value={lName}
                        onChange={e => setLname(e.target.value)}
                        type="name" class="form-control" id="exampleInputLastName" aria-describedby="lastNameHelp" />
                    <div id="name" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-group">
                    <small>
                        <label className="text-muted">Pick a question</label>
                    </small>
                    <select className="form-control">
                        <option>What is your pet name?</option>
                        <option>What is your best friend name?</option>
                        <option>What city you were born?</option>
                    </select>
                </div>
                <div className="mb-3 form-group">
                    <input
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                        type="text" className="form-control" placeholder="Write your answer here" />
                </div>
                <button disabled={!fName || !lName || !email || !password || !secret} type="submit" class="btn btn-primary col-12">{loading ? <SyncOutlined spin className="py-1" /> : 'Submit'}</button>
            </form>
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
