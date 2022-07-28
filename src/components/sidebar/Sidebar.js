import React from 'react';
import './Sidebar.scss';
import Reacticon from '../../assets/images/icons/ReactLogo.png';
import routes from './../../routes';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
            <img src={Reacticon} />
            <a>Dashboard</a>
            <hr />
            <p>Main</p>
            <div>
                <Link to='/users'>Users</Link>
            </div>
            <div>
                <Link to='/posts'>Posts</Link>
            </div>
            <div>
                <Link to='/categories'>Categories</Link>
            </div>
            <hr />
            <div>
                <p>Settings</p>
            </div>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Roles</a>
            </div>
            <div>
                <a>Maps</a>
            </div>
            <hr />
        </div>
    );
}

export default Sidebar;