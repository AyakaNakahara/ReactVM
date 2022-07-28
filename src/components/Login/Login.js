import './Body.scss';
import './UsersBody.scss';
import { useEffect, useState } from 'react';
import { API } from '../../configs/constant';
import Pagination from '../pagination/Pagination';
import home_img from './img/home.png';

function UsersBody() {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const token = '40|85bFBMES3UnGZYg2cbCDESPKVJ1oZTWZPtRojGdF'

    useEffect(() => {
        async function fetchData() {
            const url = `${API.USER.GET}?page=${page}`;
            //console.log(url);
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Accept": "application/json", "Content-Type": "application/json"
                }
            });
            const users = await res.json();
            //console.log(users)
            setUsers(users.data);
            //console.log(users.data);
        }
        fetchData();

    },[page]);

    function onPageChange(page) {
        console.log(page);
        setPage(page);
    }

    return(
        <div >
            <div>
                <p><a href='#' id='home-nav'><img src={home_img}/>Home</a> / <a href="#" id='users-nav'>Users</a></p>
            </div>
            <div>
                <table border='1.5'>
                    <tbody>
                        <tr>
                            <th><input type='checkbox'></input></th>
                            <th align='left'>Title</th>
                            <th align='left'>user Name</th>
                            <th align='left'>Email</th>
                            <th align='left'>Status</th>
                            <th align='left'>Title</th>
                        </tr>
                        {users.map((item, index) => 
                                <tr key={index}>
                                    <td align='center'><input type='checkbox'></input></td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.email_verified_at}</td>
                                    <td><p align='center'><a href='#'>Publish</a><a href='#'>Edit</a><a href='#'>Delete</a></p></td>
                                </tr>
                        )}
                    </tbody>
                </table>
                <Pagination page={page} onChange={onPageChange} />
            </div>
        </div>
    );
}
export default UsersBody;