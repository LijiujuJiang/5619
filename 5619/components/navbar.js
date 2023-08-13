import * as React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/navbar.css'
import { Button } from '@mui/material';
function Navbar() {
    return (
        <div className='navbox'>
            <h3 className='myHealth'>MyHealth</h3>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Shop</li>
                <li>User center</li>
                <div className='login'>
                    <Link to='/login'> <p className='Log'>Log in</p></Link>
                    <Link to='/register'><button className='Reg'>Sign up</button></Link>

                </div>
            </ul>
        </div>
    )
}
export default Navbar