import React from 'react';
import Link from "next/link";

const Nav = () => {
    return (
        <nav className="nav bg-white d-flex justify-content-center" style={{ height: "70px", alignContent: 'center', boxShadow: "0px 0px 7px #737373" }}>
            <Link href="/">
                <a className="nav-link text-dark">Home</a>
            </Link>
            <Link href="/about">
                <a className="nav-link text-dark">About</a>
            </Link>
            <Link href="/login">
                <a className="nav-link text-dark">Login</a>
            </Link>
            <Link href="/register">
                <a className="nav-link text-dark">Register</a>
            </Link>
        </nav>
    );
}

export default Nav;
