import React,{useState,useEffect} from 'react';
import { Checkbox } from '@mui/material';
import {API} from "../../configs/constant.js";
import Page from '../page/Page';

function Users() {
    const token="43|LYJ5T9F2PjujcAT7fTCNjwq7ozcerrGlN0GIxYlq";
    const [data, setData]=useState([]);
    const [count, setCount] = useState(1);
    const [lastPage, setLastPage] = useState();
    const [currentPage, setcurrentPage] = useState(1);
    useEffect(() => {
        async function fetchUsersData(){
            const url = `${API.USER.GET}?page=${count}`;
            console.log(url);
            const result = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Accept": "application/json",
                    "Content-type": "application/json"
                }
            });
            const users = await result.json();
            console.log(users);
            setData(users.data);
            setLastPage(users.last_page);
            setcurrentPage(users.current_page);
        }
        fetchUsersData();
    }, [count]);

    function changePage(p){
        setCount(p);
    }

    return (
        <>
        <table className='table table-striped table-bordered'>
            <tr>
                <th><Checkbox /></th>
                <th>title</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            {data.map((d) =>(
            <tr key={d.id}>
                <td><Checkbox /></td>
                <td>***</td>
                <td >{d.name}</td>
                <td>{d.email}</td>
                <td>Active</td>
                <td className='d-flex justify-content-around'>
                  <button type="button" >Publish</button>
                  <button type="button" >Edit</button>
                  <button type="button" >Delete</button>
                </td>
            </tr>
            ))}
        </table>
        <p onClick={()=>setCount(5)}>ボタン</p>
        <Page
        lastPage={lastPage}
        currentPage={currentPage}
        changePage={changePage} />
        </>
    );
}

export default Users;