import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { SyncOutlined } from "@ant-design/icons"
import { UserContext } from "../../context";

const UserRouter = ({ children }) => {
    const [ok, setOk] = useState(false);
    const route = useRouter();
    const [state] = useContext(UserContext)

    useEffect(() => {
        if (state && state.token) getCurrentUser()
    }, [state && state.token]);

    const getCurrentUser = async () => {
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/current-user`, {
                headers: {
                    "Authorizatrion": `Bearer${state.token}`
                }
            })
            if (data.ok) {
                setOk(true)
            }
        } catch (error) {
            route.push('/login')
        }
    }

    return !ok ? (<SyncOutlined spin className="d-flex justify-content-center display-1 text-primary p-5" />) : (
        <>{children}</>
    )
}

export default UserRouter