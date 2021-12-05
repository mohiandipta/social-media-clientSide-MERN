import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { SyncOutlined } from "@ant-design/icons"
import { Default } from "react-toastify/dist/utils";

const UserRouter = ({ children }) => {
    const [ok, setOk] = useState(false);
    const route = UserRouter();

    useEffect(() => {
        getCorrentUser()
    }, []);

    const getCorrentUser = async () => {
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/current-user`)
            if (data.ok) {
                setOk(true)
            }
        } catch (error) {
            route.push('/login')
        }
    }

    return !ok ? (<SyncOutlined spin className="d-flex justify-content-center display-1 text-primary p-5" />) : ({ children })
}

export default UserRouter