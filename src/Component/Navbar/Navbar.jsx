import React from 'react';
import './Navbar.css';
import ATG from '../../assets/Union1.png';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi'

function Navbar() {
    return (
        <nav>
            <img src={ATG} alt='LOGO' />
            <input type='text' placeholder={` Search for your favorite groups in ATG`} />
            <span style={{ display: 'flex', placeItems: 'center', fontWeight: '700' }}>Create account.&nbsp;<a href="#">It's Free!</a><BsFillCaretDownFill style={{ width: '12px' }} /></span>
        </nav>
    );
}


export default Navbar;