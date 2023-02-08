import { NavLink } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
    return(
        <div>
            <ul>
                <li>
                     <NavLink className={({isActive}) => isActive ? 'active': '' } to = '/' end>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active1': ''} to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active2': ''} to='/users'>Users</NavLink>
                </li>
            </ul>
        </div>
    )
}