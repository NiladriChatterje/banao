import React from 'react';
import './Navbar.css';
import ATG from '../../assets/Union1.png';
import { InputGroup, Form, Dropdown } from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi'

function Navbar({ setToggle, setModalToggle }) {
    return (
        <nav>
            <img src={ATG} alt='LOGO' />
            <div className="inner-addon input-group left-addon position-relative">
                <BiSearchAlt2 cursor={'pointer'}
                    className='icon' />
                <input type={'text'} className="form-control rounded-pill input" style={{ background: '#D9D9DB' }}
                    placeholder="Search for you favorite groups in ATG" />
            </div>
            <Dropdown>
                Create account
                <Dropdown.Toggle variant="none" style={{ color: 'blue' }} id="dropdown-basic">
                    Its Free!
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => { setModalToggle(true); setToggle(false) }} >Sign In</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setModalToggle(true); setToggle(false) }} >Create Account</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    );
}


export default Navbar;