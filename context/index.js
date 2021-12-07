import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";


const UserContext = createContext();
const UserProvider = ({ children }) => {
    const route = useRouter();
    const [state, setState] = useState({
        user: {},
        token: ""
    });

    useEffect(() => {
        setState(JSON.parse(window.localStorage.getItem('auth')))
    }, []);

    // axios config
    const token = state && state.token ? state.token : "";
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Add a response interceptor
    axios.interceptors.response.use(
        function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            let res = error.response
            if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
                setState(null)
                window.localStorage.removeItem("auth")
                route.push("/login") // redirect to the login page
            }
        });

    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }