import React from 'react';
import Link from "next/link";
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context';
import { useRouter } from 'next/dist/client/router';

const Nav = () => {
    const router = useRouter()

    const [current, setCurrent] = useState("")
    const [state, setState] = useContext(UserContext);

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname)
    }, [process.browser && window.location.pathname]);
    console.log("current =>", current)

    const logout = () => {
        // remove local storage data
        window.localStorage.removeItem("auth")
        // making object empty
        setState(null)
        // routing to the login page
        router.push("/login")
    }

    return (
        <nav className="nav d-flex bg-white d-flex justify-content-center sticky-top" style={{ height: "70px", alignContent: 'center', boxShadow: "0px 0px 7px #737373" }}>
            <Link href="/">
                <a className={`nav-link text-dark ${current === "/" && "active"}`}>Home</a>
            </Link>

            <Link href="/about">
                <a className={`nav-link text-dark ${current === "/about" && "active"}`}>About</a>
            </Link>

            {/* conditional nav links */}
            {state !== null ? (
                <>
                    <Link href="/user/dashboard">
                        <a className={`nav-link text-dark ${current === "/user/dashboard" && "active"}`}>[UserName]</a>
                    </Link>

                    <a onClick={logout} className="nav-link text-dark" > Logout</a >
                </>
            ) : (
                <>
                    <Link href="/login">
                        <a className={`nav-link text-dark ${current === "/login" && "active"}`}>Login</a>
                    </Link>
                    <Link href="/register">
                        <a className={`nav-link text-dark ${current === "/register" && "active"}`}>Register</a>
                    </Link>
                </>
            )
            }
        </nav >
    );
}

export default Nav;