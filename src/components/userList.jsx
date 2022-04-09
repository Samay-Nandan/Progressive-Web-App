import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { get } from "axios";
import { putValue, getAllValue, clearDB } from "../indexDB";
import { Table, Loader } from '../styles';
import { useNavigate } from 'react-router-dom';

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const DATABASE = "USERS";
const TABLE = "STORE";

const UserListComponent = () => {

    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState([]);

    const fetchUserListOnline = async () => {
        const { data } = await get(API_ENDPOINT)
        await clearDB(DATABASE, TABLE)
        await putValue(DATABASE, TABLE, data)
        setList(data)
        setLoading(false)
        toast.success("UserList Fetched online")
    }

    const fetchUserListOffline = async () => {
        const [ list ] = await getAllValue(DATABASE, TABLE)
        setList(list)
        setLoading(false)
        toast.success("UserList Fetched offline")
    }

    useEffect(()=> {
        if(navigator.onLine) return fetchUserListOnline();
        fetchUserListOffline();
    },[])

    if(loading) return <Loader />

    return (
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key={index} onClick={() => navigate("/" + item?.id)}>
                        <td>{item?.id}</td>
                        <td>{item?.name}</td>
                        <td>{item?.email}</td>
                        <td>{item?.address?.street}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default UserListComponent