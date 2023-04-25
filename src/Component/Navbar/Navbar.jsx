import React from 'react';
import './Navbar.css';
import ATG from '../../assets/Union1.png';
import { Dropdown } from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi'

function Navbar({ setModalToggle, setToggle }) {
    return (
        <nav>
            <img src={ATG} alt='LOGO' />
            <div className="inner-addon input-group left-addon w-25 position-relative">
                <input type={'text'} className="form-control rounded-pill input" style={{ background: '#D9D9DB' }}
                    placeholder="Search for you favorite groups in ATG" />
                <BiSearchAlt2 onClick={() => setToggle(prev => !prev)} cursor={'pointer'}
                    className='position-absolute top-50 ms-4 translate-middle' />
            </div>
            <Dropdown>
                Create account
                <Dropdown.Toggle variant="none" style={{ color: 'blue' }} id="dropdown-basic">
                    Its Free!
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => { setModalToggle(true); setToggle(true) }} >Sign In</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setModalToggle(true); setToggle(false) }}>Create Account</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    );
}


export default Navbar;