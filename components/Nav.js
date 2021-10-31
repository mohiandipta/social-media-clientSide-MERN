import React from 'react';
import Link from "next/link";

const Nav = () => {
    return (
        <nav className="nav bg-dark d-flex justify-content-center" style={{ height: "70px", alignContent: 'center', boxShadow: "0px 0px 10px black" }}>
            <Link href="/home">
                <a className="nav-link text-light">Home</a>
            </Link>
            <Link href="/about">
                <a className="nav-link text-light">About</a>
            </Link>
            <Link href="/login">
                <a className="nav-link text-light">Login</a>
            </Link>
            <Link href="/register">
                <a className="nav-link text-light">Register</a>
            </Link>
        </nav>
    );
}

export default Nav;
