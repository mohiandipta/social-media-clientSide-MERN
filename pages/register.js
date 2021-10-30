import React from 'react';
import { useState } from 'react';

const [fName, setFname] = useState("");
const [lNname, setLame] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setname] = useState("");

const Register = () => {
    return (
        <form className="container">
            <div class="mb-3">
                <label for="exampleInputFirstName" class="form-label">First Name</label>
                <input
                    onChange={e => console.log}
                    type="name" class="form-control" id="exampleInputFirstName" aria-describedby="nameHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Last Name</label>
                <input type="name" class="form-control" id="exampleInputLastName" aria-describedby="lastNameHelp" />
                <div id="name" class="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default Register;
