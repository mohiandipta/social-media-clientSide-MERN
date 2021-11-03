import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const notify = () => toast("Yeahoo! Successfully Registered!");

    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secret, setSecret] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(fName, lName, email, password, secret)
        axios.post("http://localhost:8000/api/register", {
            fName,
            lName,
            email,
            password,
            secret
        })
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) })
    }

    return (
        <form onSubmit={handleSubmit} className="container">
            <div>
                <ToastContainer />
            </div>
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
            <button type="submit" class="btn btn-primary" onClick={notify}>Submit</button>
        </form>
    );
}

export default Register;
